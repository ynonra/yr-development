import Seo from "../components/Seo";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Work from "../components/home/Work";
import About from "../components/home/About";
import Process from "../components/home/Process";
import Testimonials from "../components/home/Testimonials";
import BlogTeaser from "../components/home/BlogTeaser";
import ContactSection from "../components/ContactSection";
import { getAllPosts, formatDates } from "../lib/blog";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "../data/seo";
import { BUSINESS_ID, PERSON_ID } from "../lib/schema";

export async function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 3)
    .map(({ slug, title, description, date, readingMinutes, cover, coverAlt }) => ({
      slug,
      title,
      description,
      date,
      dates: formatDates(date),
      readingMinutes,
      cover,
      coverAlt,
    }));
  return { props: { posts } };
}

// Who this is and what he offers, for search engines and AI assistants.
const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": BUSINESS_ID,
  name: "ינון רחמים - פיתוח אתרים, אפליקציות ו-AI",
  url: SITE_URL,
  image: `${SITE_URL}/images/yinon.webp`,
  description: SITE_DESCRIPTION,
  address: { "@type": "PostalAddress", addressLocality: "כרמיאל", addressCountry: "IL" },
  areaServed: { "@type": "Country", name: "ישראל" },
  founder: {
    "@type": "Person",
    "@id": PERSON_ID,
    name: "ינון רחמים",
    jobTitle: "מפתח אתרים ואפליקציות",
    sameAs: ["https://www.linkedin.com/in/yinon-rahamim/"],
  },
  knowsAbout: [
    "בניית אתרים",
    "חנויות אונליין",
    "פיתוח אפליקציות",
    "מערכות ניהול",
    "סוכני AI",
    "בוטים לוואטסאפ",
    "SEO",
    "GEO",
  ],
};

export default function Home({ posts }) {
  return (
    <>
      <Seo title={SITE_NAME} description={SITE_DESCRIPTION} path="/" jsonLd={JSON_LD} />
      <Hero />
      <Services />
      <Work />
      <About />
      <Process />
      <Testimonials />
      <BlogTeaser posts={posts} />
      <ContactSection />
    </>
  );
}
