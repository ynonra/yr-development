// Writes public/llms.txt before every build (npm "prebuild"): a plain-text map of the site
// for AI assistants and their crawlers (https://llmstxt.org). Lists the service pages, every
// blog post and every project, each with its one-line summary.
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const root = process.cwd();
const read = (p) => fs.readFileSync(path.join(root, p), "utf8");

// data/*.js use extensionless ESM imports Node can't load directly, so read values from the source.
const SITE_URL = read("data/seo.js").match(/SITE_URL\s*=\s*"([^"]+)"/)?.[1];
const projectsSrc = read("data/projects.js");
const projects = [
  ...projectsSrc.matchAll(
    /slug:\s*"([^"]+)"[\s\S]*?title:\s*(["'])(.*?)\2[\s\S]*?inShort:\s*(["'])([\s\S]*?)\4/g
  ),
].map((m) => ({ slug: m[1], title: m[3], summary: m[5].replace(/\s+/g, " ").trim() }));
const slugCount = [...projectsSrc.matchAll(/^\s*slug:\s*"/gm)].length;
if (!SITE_URL || projects.length !== slugCount) {
  throw new Error(`llms.txt: could not read SITE_URL or all projects (${projects.length}/${slugCount})`);
}

const readDir = (dir) =>
  fs.existsSync(path.join(root, dir))
    ? fs
        .readdirSync(path.join(root, dir))
        .filter((f) => f.endsWith(".md"))
        .map((f) => ({ slug: f.replace(/\.md$/, ""), ...matter(read(path.join(dir, f))).data }))
    : [];
const services = readDir("content/services");
const posts = readDir("content/blog").sort((a, b) => String(b.date).localeCompare(String(a.date)));

const line = (title, url, summary) => `- [${title}](${SITE_URL}${url}): ${summary}`;

const txt = `# ינון רחמים: פיתוח אתרים, אפליקציות ו-AI

> ינון רחמים הוא מפתח עצמאי מכרמיאל שבצפון ישראל. הוא בונה אתרים, חנויות אונליין, אפליקציות, מערכות ניהול וסוכני AI לעסקים, לעמותות ולמוסדות בכל הארץ, עם SEO ו-GEO מובנים. האתר כתוב בעברית.

- אתר: ${SITE_URL}
- LinkedIn: https://www.linkedin.com/in/yinon-rahamim/
- יצירת קשר: ${SITE_URL}/#contact

## שירותים

${services.map((s) => line(s.title, `/services/${s.slug}`, s.description)).join("\n")}

## בלוג

${posts.map((p) => line(p.title, `/blog/${p.slug}`, p.description)).join("\n")}

## תיק עבודות

${projects.map((p) => line(p.title, `/project/${p.slug}`, p.summary)).join("\n")}
`;

fs.writeFileSync(path.join(root, "public", "llms.txt"), txt);
console.log(`llms.txt: ${services.length} services, ${posts.length} posts, ${projects.length} projects`);
