// Writes public/sitemap.xml before every build (npm "prebuild").
// Pages: home, service pages, blog index, every blog post and every project page.
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const root = process.cwd();
const read = (p) => fs.readFileSync(path.join(root, p), "utf8");

// data/*.js use extensionless ESM imports Node can't load directly, so read values from the source.
const SITE_URL = read("data/seo.js").match(/SITE_URL\s*=\s*"([^"]+)"/)?.[1];
const projectSlugs = [...read("data/projects.js").matchAll(/^\s*slug:\s*"([^"]+)"/gm)].map((m) => m[1]);
if (!SITE_URL || projectSlugs.length < 5) {
  throw new Error(`sitemap: could not read SITE_URL or project slugs (found ${projectSlugs.length})`);
}

const postsDir = path.join(root, "content", "blog");
const posts = fs
  .readdirSync(postsDir)
  .filter((f) => f.endsWith(".md"))
  .map((f) => {
    const { data } = matter(fs.readFileSync(path.join(postsDir, f), "utf8"));
    const d = data.updated || data.date; // YAML may parse dates into Date objects
    return { slug: f.replace(/\.md$/, ""), lastmod: d instanceof Date ? d.toISOString().slice(0, 10) : String(d) };
  });
const newestPost = posts.map((p) => p.lastmod).sort().at(-1);

const servicesDir = path.join(root, "content", "services");
const services = fs.existsSync(servicesDir)
  ? fs
      .readdirSync(servicesDir)
      .filter((f) => f.endsWith(".md"))
      .map((f) => {
        const { data } = matter(fs.readFileSync(path.join(servicesDir, f), "utf8"));
        const d = data.updated;
        return { slug: f.replace(/\.md$/, ""), lastmod: d instanceof Date ? d.toISOString().slice(0, 10) : d ? String(d) : undefined };
      })
  : [];

const entries = [
  { loc: "/", priority: "1.0" },
  ...services.map((s) => ({ loc: `/services/${s.slug}`, lastmod: s.lastmod, priority: "0.9" })),
  { loc: "/blog", lastmod: newestPost, priority: "0.8" },
  ...posts.map((p) => ({ loc: `/blog/${p.slug}`, lastmod: p.lastmod, priority: "0.7" })),
  ...projectSlugs.map((slug) => ({ loc: `/project/${slug}`, priority: "0.6" })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    ({ loc, lastmod, priority }) =>
      `  <url><loc>${SITE_URL}${loc}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}<priority>${priority}</priority></url>`
  )
  .join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(root, "public", "sitemap.xml"), xml);
console.log(`sitemap: ${entries.length} urls`);
