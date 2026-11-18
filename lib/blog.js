// Blog posts live as Markdown files in content/blog/<slug>.md with YAML front matter:
//   title, description, date (YYYY-MM-DD), updated (optional), primaryQuery, tags (list),
//   coverAlt (describes the cover), order (optional: breaks ties between same-date posts, lower first)
// Covers are found by slug: public/images/blog/<slug>.webp on the page, <slug>-og.jpg for
// link previews (made with scripts/blog-covers).
// Read at build time only (getStaticProps / getStaticPaths and the sitemap script).
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Marked, Renderer } from "marked";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");
const COVERS_DIR = path.join(process.cwd(), "public", "images", "blog");
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

const coverOf = (slug, alt) =>
  fs.existsSync(path.join(COVERS_DIR, `${slug}.webp`))
    ? { cover: `/images/blog/${slug}.webp`, ogImage: `/images/blog/${slug}-og.jpg`, coverAlt: alt || "" }
    : { cover: null, ogImage: null, coverAlt: "" };

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
    ...coverOf(slug, data.coverAlt),
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

// Hebrew numerals: 13 -> "י״ג", 15 -> "ט״ו", 787 -> "תשפ״ז". Days and years only (1-999).
const ONES = ["", "א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט"];
const TENS = ["", "י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "צ"];
const HUNDREDS = ["", "ק", "ר", "ש", "ת", "תק", "תר", "תש", "תת", "תתק"];
const gematria = (n) => {
  const rest = n % 100;
  const letters =
    HUNDREDS[Math.floor(n / 100)] +
    (rest === 15 ? "טו" : rest === 16 ? "טז" : TENS[Math.floor(rest / 10)] + ONES[rest % 10]);
  return letters.length === 1 ? `${letters}׳` : `${letters.slice(0, -1)}״${letters.slice(-1)}`;
};

const HEBREW_CALENDAR = new Intl.DateTimeFormat("he-IL-u-ca-hebrew", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

// The Hebrew date leads ("י״ג באלול תשפ״ו"); the Gregorian one ("26.8.2026") is secondary.
export const formatDates = (iso) => {
  const date = new Date(`${iso}T12:00:00Z`);
  const part = (type) => HEBREW_CALENDAR.formatToParts(date).find((p) => p.type === type).value;
  return {
    hebrew: `${gematria(Number(part("day")))} ב${part("month")} ${gematria(Number(part("year")) % 1000)}`,
    gregorian: `${date.getUTCDate()}.${date.getUTCMonth() + 1}.${date.getUTCFullYear()}`,
  };
};
