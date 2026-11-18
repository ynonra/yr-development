import Image from "next/image";
import Link from "next/link";
import PostDate from "../blog/PostDate";

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
        {posts.map(({ slug, title, description, date, dates, readingMinutes, cover, coverAlt }) => (
          <li key={slug}>
            <Link
              href={`/blog/${slug}`}
              className="group flex flex-col h-full rounded-3xl bg-white border border-line overflow-hidden transition-colors hover:border-coral"
            >
              {cover && (
                <Image
                  src={cover}
                  alt={coverAlt}
                  width={1600}
                  height={840}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="w-full h-auto border-b border-line"
                />
              )}
              <span className="flex flex-col p-6 sm:p-7">
                <span className="text-sm text-ink-soft">
                  <PostDate iso={date} dates={dates} />
                  <span className="mx-2 text-line" aria-hidden="true">|</span>
                  {readingMinutes} דק׳ קריאה
                </span>
                <h3 className="mt-2 font-display font-bold text-xl leading-snug transition-colors group-hover:text-coral-ink">
                  {title}
                </h3>
                <span className="mt-3 text-ink-soft leading-relaxed line-clamp-3">{description}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BlogTeaser;
