// Markdown to HTML for blog posts and service pages (build time only).
import { Marked, Renderer } from "marked";

// Hebrew-safe heading ids so sections can be linked (and cited) directly.
const slugifyHeading = (text) =>
  text
    .replace(/<[^>]+>/g, "")
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s+/g, "-");

const marked = new Marked({
  gfm: true,
  renderer: {
    heading({ tokens, depth }) {
      const text = this.parser.parseInline(tokens);
      if (depth === 1) return `<h2>${text}</h2>\n`; // the page title is the only h1
      return `<h${depth} id="${slugifyHeading(text)}">${text}</h${depth}>\n`;
    },
    link({ href, title, tokens }) {
      const text = this.parser.parseInline(tokens);
      const external = /^https?:\/\//.test(href);
      const attrs = external ? ' target="_blank" rel="noopener"' : "";
      const t = title ? ` title="${title}"` : "";
      return `<a href="${href}"${t}${attrs}>${text}</a>`;
    },
    table(token) {
      // tables scroll sideways on phones instead of breaking the layout
      const html = Renderer.prototype.table.call(this, token);
      return `<div class="table-wrap">${html}</div>\n`;
    },
  },
});

// In right-to-left text a range like "₪900-₪2,500" or "8%-20%" is reordered and shows
// as "₪2,500-₪900", while "6-12" stays as is. Wrap such ranges (text only, not attributes)
// in an LTR span so every range reads the same way.
const NUM = String.raw`\d(?:[\d,.]*\d)?`; // ends with a digit, so a trailing comma or period stays outside
const RANGE = new RegExp(`(₪${NUM}-₪${NUM}|${NUM}%-${NUM}%)`, "g");
const keepRangesLtr = (html) =>
  html.replace(/>([^<]+)</g, (m, text) => `>${text.replace(RANGE, '<span dir="ltr">$1</span>')}<`);

export const renderMarkdown = (md) => keepRangesLtr(marked.parse(md));

const FAQ_HEADING = "שאלות נפוצות";
const plainText = (html) =>
  html
    .replace(/<[^>]+>/g, "")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();

// The "## שאלות נפוצות" section as [{ question, answer }], for FAQPage structured data.
// Each "### question" is answered by everything up to the next heading.
export const extractFaq = (md) => {
  const items = [];
  let inFaq = false;
  let current = null;
  for (const token of marked.lexer(md)) {
    if (token.type === "heading" && token.depth <= 2) {
      inFaq = token.depth === 2 && token.text.trim() === FAQ_HEADING;
      current = null;
    } else if (inFaq && token.type === "heading" && token.depth === 3) {
      current = { question: token.text.trim(), tokens: [] };
      items.push(current);
    } else if (token.type === "hr") {
      inFaq = false; // a rule ends the FAQ (the closing line after it isn't an answer)
      current = null;
    } else if (current) {
      current.tokens.push(token);
    }
  }
  return items
    .map(({ question, tokens }) => ({ question, answer: plainText(marked.parser(tokens)) }))
    .filter((q) => q.answer);
};
