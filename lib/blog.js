// Blog posts live as Markdown files in content/blog/<slug>.md with YAML front matter:
//   title, description, date (YYYY-MM-DD), updated (optional), primaryQuery, tags (list),
//   order (optional number: breaks ties between posts with the same date, lower first)
// Read at build time only (getStaticProps / getStaticPaths and the sitemap script).
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Marked, Renderer } from "marked";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");
const WORDS_PER_MINUTE = 200;

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

// YAML turns unquoted dates into Date objects; keep everything as YYYY-MM-DD strings.
export const isoDate = (d) => (d instanceof Date ? d.toISOString().slice(0, 10) : String(d));

const readingMinutes = (text) =>
  Math.max(1, Math.round(text.split(/\s+/).filter(Boolean).length / WORDS_PER_MINUTE));

const readPost = (slug) => {
  const raw = fs.readFileSync(path.join(POSTS_DIR, `${slug}.md`), "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title,
    description: data.description,
    date: isoDate(data.date),
    updated: data.updated ? isoDate(data.updated) : null,
    tags: data.tags || [],
    order: data.order ?? 99,
    readingMinutes: readingMinutes(content),
    content,
  };
};

export const getPostSlugs = () =>
  fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));

// In right-to-left text a range like "₪900-₪2,500" or "8%-20%" is reordered and shows
// as "₪2,500-₪900", while "6-12" stays as is. Wrap such ranges (text only, not attributes)
// in an LTR span so every range reads the same way.
const NUM = String.raw`\d(?:[\d,.]*\d)?`; // ends with a digit, so a trailing comma or period stays outside
const RANGE = new RegExp(`(₪${NUM}-₪${NUM}|${NUM}%-${NUM}%)`, "g");
function keepRangesLtr(html) {
  return html.replace(/>([^<]+)</g, (m, text) => `>${text.replace(RANGE, '<span dir="ltr">$1</span>')}<`);
}

// Newest first (then by `order`), without the body.
export const getAllPosts = () =>
  getPostSlugs()
    .map((slug) => {
      const { content, ...meta } = readPost(slug);
      return meta;
    })
    .sort((a, b) => (a.date === b.date ? a.order - b.order : a.date < b.date ? 1 : -1));

export const getPost = (slug) => {
  const { content, ...meta } = readPost(slug);
  return { ...meta, html: keepRangesLtr(marked.parse(content)) };
};

export const formatHebrewDate = (iso) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("he-IL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
