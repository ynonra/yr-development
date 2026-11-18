import Link from "next/link";
import Seo from "../../components/Seo";
import ContactSection from "../../components/ContactSection";
import { getAllPosts, formatHebrewDate } from "../../lib/blog";
import { SITE_URL, AUTHOR } from "../../data/seo";

export async function getStaticProps() {
  const posts = getAllPosts().map((p) => ({ ...p, dateLabel: formatHebrewDate(p.date) }));
  return { props: { posts } };
}

const DESCRIPTION =
  "מדריכים ותשובות ישירות על בניית אתרים, חנויות אונליין, אפליקציות, סוכני AI ו-SEO/GEO. מחירים אמיתיים, טעויות נפוצות ומה שלמדתי בדרך.";

export default function Blog({ posts }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "הבלוג של ינון רחמים",
    description: DESCRIPTION,
    url: `${SITE_URL}/blog`,
    inLanguage: "he-IL",
    author: { "@type": "Person", ...AUTHOR },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${SITE_URL}/blog/${p.slug}`,
      datePublished: p.date,
    })),
  };

  return (
    <>
      <Seo title="בלוג | ינון רחמים" description={DESCRIPTION} path="/blog" jsonLd={jsonLd} />
      <section className="pt-8 sm:pt-16 max-w-4xl">
        <h1 className="font-display font-extrabold text-5xl sm:text-6xl">בלוג</h1>
        <p className="mt-5 text-lg sm:text-xl text-ink-soft max-w-2xl">
          מדריכים, מחירים ותשובות ישירות לשאלות שלקוחות שואלים אותי כל שבוע. בלי
          באזוורדס, ועם הרבה דוגמאות מהשטח.
        </p>
      </section>

      <ul className="mt-12 sm:mt-16 border-t border-line max-w-4xl">
        {posts.map(({ slug, title, description, dateLabel, readingMinutes }) => (
          <li key={slug} className="border-b border-line">
            <Link href={`/blog/${slug}`} className="group block py-8 sm:py-10">
              <p className="text-sm text-ink-soft">
                <time>{dateLabel}</time>
                <span className="mx-3 text-line" aria-hidden="true">|</span>
                {readingMinutes} דקות קריאה
              </p>
              <h2 className="mt-2 font-display font-bold text-2xl sm:text-3xl leading-tight transition-colors group-hover:text-coral-ink">
                {title}
              </h2>
              <p className="mt-3 text-ink-soft leading-relaxed max-w-2xl">{description}</p>
            </Link>
          </li>
        ))}
      </ul>

      <ContactSection title="יש לכם שאלה?" />
    </>
  );
}
