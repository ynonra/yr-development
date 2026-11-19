// Service pages live as Markdown files in content/services/<slug>.md, served at /services/<slug>.
// Front matter:
//   title         the h1 ("בניית אתרים לעסקים")
//   seoTitle      the <title>
//   description   meta description
//   lead          the answer-first paragraph under the h1 (what, for whom, how long)
//   serviceType   schema.org serviceType, in plain Hebrew
//   updated       YYYY-MM-DD
//   projects      project slugs from data/projects.js, shown as examples
//   posts         blog post slugs, shown as further reading
//   testimonial   a name from data/recommendations.js (optional)
// The body is Markdown. A "## כמה עולה..." heading gets a button under the lead. A
// "## שאלות נפוצות" section is moved below the examples and becomes FAQPage structured data.
// Read at build time only.
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { renderMarkdown, extractFaq } from "./markdown";
import { isoDate } from "./blog";

const SERVICES_DIR = path.join(process.cwd(), "content", "services");
const FAQ_SPLIT = /^## שאלות נפוצות\s*$/m;

export const getServiceSlugs = () =>
  fs
    .readdirSync(SERVICES_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));

export const getService = (slug) => {
  const raw = fs.readFileSync(path.join(SERVICES_DIR, `${slug}.md`), "utf8");
  const { data, content } = matter(raw);
  const [body, faqBody] = content.split(FAQ_SPLIT);
  const faqMd = faqBody ? `## שאלות נפוצות\n${faqBody}` : "";
  const html = renderMarkdown(body);
  return {
    slug,
    title: data.title,
    seoTitle: data.seoTitle || data.title,
    description: data.description,
    lead: data.lead,
    serviceType: data.serviceType || data.title,
    updated: data.updated ? isoDate(data.updated) : null,
    projects: data.projects || [],
    posts: data.posts || [],
    testimonial: data.testimonial || null,
    html,
    // the "כמה עולה..." section, for the "כמה זה עולה?" button under the lead
    priceAnchor: html.match(/<h2 id="([^"]*כמה-עולה[^"]*)"/)?.[1] || null,
    faqHtml: faqMd ? renderMarkdown(faqMd) : "",
    faq: faqMd ? extractFaq(faqMd) : [],
  };
};
