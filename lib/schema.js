// schema.org builders used by page components. No Node or Markdown imports here: this ships
// to the browser with the page.
import { SITE_URL } from "../data/seo";

// The business, by @id, so every page points at the same entity as the homepage.
export const BUSINESS_ID = `${SITE_URL}/#business`;
export const PERSON_ID = `${SITE_URL}/#yinon`;

export const breadcrumbJsonLd = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map(({ name, path }, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name,
    item: `${SITE_URL}${path}`,
  })),
});

// [{ question, answer }] from lib/markdown's extractFaq, or null when there are none.
export const faqJsonLd = (faq = []) =>
  faq.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      }
    : null;
