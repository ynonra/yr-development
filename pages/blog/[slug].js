import Image from "next/image";
import Link from "next/link";
import Seo from "../../components/Seo";
import ContactSection from "../../components/ContactSection";
import PostDate from "../../components/blog/PostDate";
import { getAllPosts, getPost, getPostSlugs, formatDates } from "../../lib/blog";
import { faqJsonLd } from "../../lib/schema";
import { SITE_URL, AUTHOR } from "../../data/seo";

export async function getStaticPaths() {
  return { paths: getPostSlugs().map((slug) => ({ params: { slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const post = getPost(params.slug);
  const more = getAllPosts()
    .filter((p) => p.slug !== params.slug)
    .slice(0, 3)
    .map(({ slug, title, readingMinutes }) => ({ slug, title, readingMinutes }));
  return {
    props: {
      post: {
        ...post,
        dates: formatDates(post.date),
        updatedDates: post.updated ? formatDates(post.updated) : null,
      },
      more,
    },
  };
}

export default function Post({ post, more }) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url,
      mainEntityOfPage: url,
      inLanguage: "he-IL",
      datePublished: post.date,
      dateModified: post.updated || post.date,
      author: { "@type": "Person", ...AUTHOR },
      publisher: { "@type": "Person", ...AUTHOR },
      image: `${SITE_URL}${post.ogImage || "/images/yinon.webp"}`,
      keywords: post.tags.join(", "),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "בית", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "בלוג", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
    faqJsonLd(post.faq),
  ].filter(Boolean);

  return (
    <>
      <Seo
        title={`${post.title} | ינון רחמים`}
        description={post.description}
        path={`/blog/${post.slug}`}
        type="article"
        image={post.ogImage || undefined}
        jsonLd={jsonLd}
      >
        <meta property="article:published_time" content={post.date} />
        {post.updated && <meta property="article:modified_time" content={post.updated} />}
      </Seo>

      <article className="pt-8 sm:pt-14 max-w-3xl mx-auto">
        <nav aria-label="פירורי לחם" className="text-sm text-ink-soft">
          <Link href="/blog" className="transition-colors hover:text-coral-ink">
            בלוג
          </Link>
        </nav>
        <h1 className="mt-3 font-display font-extrabold text-4xl sm:text-5xl leading-[1.12]">
          {post.title}
        </h1>
        <p className="mt-5 text-lg sm:text-xl text-ink-soft leading-relaxed">{post.description}</p>

        <div className="mt-7 pb-8 border-b border-line flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink-soft">
          <span className="flex items-center gap-2.5 text-ink font-semibold">
            <span className="relative w-9 h-9 rounded-full overflow-hidden bg-peri">
              <Image src="/images/yinon.webp" alt="" fill sizes="36px" className="object-cover object-top" />
            </span>
            ינון רחמים
          </span>
          <PostDate iso={post.date} dates={post.dates} />
          {post.updatedDates && (
            <span>
              עודכן: <PostDate iso={post.updated} dates={post.updatedDates} />
            </span>
          )}
          <span>{post.readingMinutes} דקות קריאה</span>
        </div>

        {post.cover && (
          <Image
            src={post.cover}
            alt={post.coverAlt}
            width={1600}
            height={840}
            priority
            sizes="(min-width: 768px) 768px, 100vw"
            className="mt-10 w-full h-auto rounded-3xl border border-line"
          />
        )}

        <div className="article mt-10" dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>

      {more.length > 0 && (
        <aside className="max-w-3xl mx-auto mt-20">
          <h2 className="font-display font-bold text-2xl">עוד מהבלוג</h2>
          <ul className="mt-5 border-t border-line">
            {more.map((p) => (
              <li key={p.slug} className="border-b border-line">
                <Link
                  href={`/blog/${p.slug}`}
                  className="flex items-baseline justify-between gap-6 py-5 transition-colors hover:text-coral-ink"
                >
                  <span className="font-semibold text-lg">{p.title}</span>
                  <span className="shrink-0 text-sm text-ink-soft">{p.readingMinutes} דק׳</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      )}

      <ContactSection title="רוצים לדבר על זה?" />
    </>
  );
}
