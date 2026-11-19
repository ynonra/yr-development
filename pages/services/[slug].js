import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Seo from "../../components/Seo";
import ContactDialog from "../../components/ContactDialog";
import ContactSection from "../../components/ContactSection";
import { getService, getServiceSlugs } from "../../lib/services";
import { getAllPosts } from "../../lib/blog";
import { breadcrumbJsonLd, faqJsonLd, BUSINESS_ID } from "../../lib/schema";
import { PROJECTS_DATA } from "../../data/projects";
import RECOMMENDATIONS from "../../data/recommendations";
import { SITE_URL } from "../../data/seo";

export async function getStaticPaths() {
  return { paths: getServiceSlugs().map((slug) => ({ params: { slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const service = getService(params.slug);
  const allPosts = getAllPosts();
  const projects = service.projects.map((slug) => {
    const p = PROJECTS_DATA.find((x) => x.slug === slug);
    if (!p) throw new Error(`service ${params.slug}: unknown project "${slug}"`);
    return { slug, title: p.title, kind: p.kind || "", inShort: p.inShort };
  });
  const posts = service.posts.map((slug) => {
    const p = allPosts.find((x) => x.slug === slug);
    if (!p) throw new Error(`service ${params.slug}: unknown post "${slug}"`);
    return { slug, title: p.title, readingMinutes: p.readingMinutes, cover: p.cover, coverAlt: p.coverAlt };
  });
  const testimonial = service.testimonial
    ? RECOMMENDATIONS.find((r) => r.profile.name === service.testimonial) || null
    : null;
  return { props: { service, projects, posts, testimonial } };
}

const sectionTitle = "font-display font-extrabold text-3xl sm:text-4xl";

export default function ServicePage({ service, projects, posts, testimonial }) {
  const [contactOpen, setContactOpen] = useState(false);
  const path = `/services/${service.slug}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      serviceType: service.serviceType,
      description: service.description,
      url: `${SITE_URL}${path}`,
      areaServed: { "@type": "Country", name: "ישראל" },
      provider: {
        "@type": "ProfessionalService",
        "@id": BUSINESS_ID,
        name: "ינון רחמים - פיתוח אתרים, אפליקציות ו-AI",
        url: SITE_URL,
        address: { "@type": "PostalAddress", addressLocality: "כרמיאל", addressCountry: "IL" },
      },
    },
    breadcrumbJsonLd([
      { name: "בית", path: "/" },
      { name: "שירותים", path: "/#services" },
      { name: service.title, path },
    ]),
    faqJsonLd(service.faq),
  ].filter(Boolean);

  return (
    <>
      <Seo title={service.seoTitle} description={service.description} path={path} jsonLd={jsonLd} />

      <article className="pt-8 sm:pt-14 max-w-3xl mx-auto">
        <nav aria-label="פירורי לחם" className="text-sm text-ink-soft">
          <Link href="/#services" className="transition-colors hover:text-coral-ink">
            שירותים
          </Link>
        </nav>
        <h1 className="mt-3 font-display font-extrabold text-5xl sm:text-6xl leading-[1.08]">
          {service.title}
        </h1>
        <p className="mt-6 text-lg sm:text-xl leading-relaxed text-pretty">{service.lead}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setContactOpen(true)}
            className="rounded-full bg-ink text-white font-semibold px-7 py-3.5 transition-colors hover:bg-coral-ink cursor-pointer"
          >
            בואו נדבר
          </button>
          {service.priceAnchor && (
            <a
              href={`#${service.priceAnchor}`}
              className="rounded-full border-2 border-ink/15 font-semibold px-7 py-3 transition-colors hover:border-ink"
            >
              כמה זה עולה?
            </a>
          )}
        </div>
        <ContactDialog open={contactOpen} onClose={() => setContactOpen(false)} />

        <div className="article mt-14" dangerouslySetInnerHTML={{ __html: service.html }} />
      </article>

      {projects.length > 0 && (
        <section className="max-w-5xl mx-auto mt-24">
          <h2 className={sectionTitle}>אתרים שבניתי</h2>
          <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-10">
            {projects.map(({ slug, title, kind, inShort }) => (
              <li key={slug}>
                <Link href={`/project/${slug}`} className="group block">
                  <div className="relative aspect-[16/10] rounded-3xl bg-mist overflow-hidden">
                    <Image
                      src={`/images/works/${slug}/1.png`}
                      alt={`${title}, צילומי מסך`}
                      fill
                      sizes="(min-width: 640px) 480px, 100vw"
                      className="object-contain p-4 sm:p-6 transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="mt-4 text-sm text-ink-soft">{kind}</p>
                  <h3 className="mt-0.5 font-display font-bold text-2xl transition-colors group-hover:text-coral-ink">
                    {title}
                  </h3>
                  <p className="mt-1 text-ink-soft leading-relaxed">{inShort}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {testimonial && (
        <figure className="max-w-3xl mx-auto mt-24 rounded-[2rem] bg-white border border-line p-7 sm:p-10">
          <span aria-hidden="true" className="block font-display font-extrabold text-6xl leading-[0.6] text-peri h-8">
            ״
          </span>
          <blockquote className="text-lg leading-relaxed whitespace-pre-line">
            {testimonial.description}
          </blockquote>
          <figcaption className="mt-7 flex items-center gap-4">
            <span className="relative w-12 h-12 shrink-0 rounded-full overflow-hidden bg-mist">
              <Image
                src={`/images/profiles/${testimonial.profile.imageFilename}`}
                alt=""
                fill
                sizes="48px"
                className="object-cover"
              />
            </span>
            <span>
              <span className="block font-semibold">{testimonial.profile.name}</span>
              <span className="block text-sm text-ink-soft">{testimonial.profile.role}</span>
            </span>
          </figcaption>
        </figure>
      )}

      {service.faqHtml && (
        <div className="article max-w-3xl mx-auto mt-10" dangerouslySetInnerHTML={{ __html: service.faqHtml }} />
      )}

      {posts.length > 0 && (
        <aside className="max-w-3xl mx-auto mt-20">
          <h2 className="font-display font-bold text-2xl">לקריאה נוספת</h2>
          <ul className="mt-5 border-t border-line">
            {posts.map((p) => (
              <li key={p.slug} className="border-b border-line">
                <Link
                  href={`/blog/${p.slug}`}
                  className="flex items-center gap-5 py-4 transition-colors hover:text-coral-ink"
                >
                  {p.cover && (
                    <Image
                      src={p.cover}
                      alt=""
                      width={160}
                      height={84}
                      className="shrink-0 w-28 h-auto rounded-xl border border-line"
                    />
                  )}
                  <span className="font-semibold text-lg leading-snug">{p.title}</span>
                  <span className="ms-auto shrink-0 text-sm text-ink-soft">{p.readingMinutes} דק׳</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      )}

      <ContactSection title="בואו נבנה לכם אתר" />
    </>
  );
}
