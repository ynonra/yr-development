import Head from "next/head";

import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Work from "../components/home/Work";
import About from "../components/home/About";
import Process from "../components/home/Process";
import Testimonials from "../components/home/Testimonials";
import ContactSection from "../components/ContactSection";
import { SITE_DESCRIPTION } from "../data/seo";

export default function Home() {
  return (
    <>
      <Head>
        <title>ינון רחמים | פיתוח אתרים, אפליקציות ו-AI</title>
        <meta name="description" content={SITE_DESCRIPTION} />
      </Head>
      <Hero />
      <Services />
      <Work />
      <About />
      <Process />
      <Testimonials />
      <ContactSection />
    </>
  );
}
