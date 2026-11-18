import Link from "next/link";

const BlogTeaser = ({ posts }) => {
  if (!posts?.length) return null;

  return (
    <section className="mt-28 lg:mt-36">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8 sm:mb-10">
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl">מהבלוג</h2>
        <Link
          href="/blog"
          className="font-semibold text-coral-ink underline-offset-4 hover:underline"
        >
          לכל המאמרים
        </Link>
      </div>
      <ul className="grid md:grid-cols-3 gap-5">
        {posts.map(({ slug, title, description, readingMinutes }) => (
          <li key={slug}>
            <Link
              href={`/blog/${slug}`}
              className="group flex flex-col h-full rounded-3xl bg-white border border-line p-7 transition-colors hover:border-coral"
            >
              <span className="text-sm text-ink-soft">{readingMinutes} דקות קריאה</span>
              <h3 className="mt-2 font-display font-bold text-xl leading-snug transition-colors group-hover:text-coral-ink">
                {title}
              </h3>
              <p className="mt-3 text-ink-soft leading-relaxed line-clamp-3">{description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BlogTeaser;
