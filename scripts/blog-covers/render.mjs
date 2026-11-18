// Renders blog covers from the HTML templates in this folder (one per post slug):
//   public/images/blog/<slug>.webp    1600x840, shown on the site
//   public/images/blog/<slug>-og.jpg  1200x630, for link previews (WhatsApp, Facebook, LinkedIn)
//
// Usage, from a folder where Playwright with WebKit is installed (npx playwright install webkit):
//   node <repo>/scripts/blog-covers/render.mjs [slug ...]
// With no slugs it renders every template.
import fs from "fs";
import http from "http";
import path from "path";
import { createRequire } from "module";
import { fileURLToPath } from "url";
import sharp from "sharp";

const { webkit } = createRequire(path.join(process.cwd(), "noop.js"))("playwright");

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "../..");
const outDir = path.join(root, "public/images/blog");
const TYPES = { ".html": "text/html", ".css": "text/css", ".woff2": "font/woff2" };

const slugs = process.argv.slice(2).length
  ? process.argv.slice(2)
  : fs.readdirSync(here).filter((f) => f.endsWith(".html")).map((f) => f.slice(0, -5));

// The templates load fonts from /public/fonts, so serve the repo root.
const server = http.createServer((req, res) => {
  const file = path.join(root, decodeURIComponent(new URL(req.url, "http://x").pathname));
  if (!file.startsWith(root) || !fs.existsSync(file)) return res.writeHead(404).end();
  res.writeHead(200, { "Content-Type": TYPES[path.extname(file)] || "application/octet-stream" });
  fs.createReadStream(file).pipe(res);
});
await new Promise((r) => server.listen(0, r));
const base = `http://localhost:${server.address().port}/scripts/blog-covers`;

fs.mkdirSync(outDir, { recursive: true });
const browser = await webkit.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 2 });
for (const slug of slugs) {
  await page.goto(`${base}/${slug}.html`, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  const png = await page.screenshot({ type: "png" });
  await sharp(png).resize(1600, 840).webp({ quality: 84 }).toFile(path.join(outDir, `${slug}.webp`));
  await sharp(png).resize(1200, 630).jpeg({ quality: 86, mozjpeg: true }).toFile(path.join(outDir, `${slug}-og.jpg`));
  console.log(`cover: ${slug}`);
}
await browser.close();
server.close();
