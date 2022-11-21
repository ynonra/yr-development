import useProject from "../../hooks/useProject";
import AppButton from "../../components/AppButton";
import Image from "next/image";
import TechCard from "../../components/TechCard";
import Head from "next/head";
import WorkLinks from "../../components/WorkLinks";
import WorkCard from "../../components/WorkCard";
import { PROJECTS_DATA } from "../../data/projects";
import ContactSection from "../../components/ContactSection";

const Project = () => {
  const data = useProject();

  if (!data)
    return (
      <div className="h-[30vh] flex flex-col items-center gap-5 text-center">
        <Head>
          <title>ינון רחמים | פיתוח אתרים ואפליקציות | הפרוייקט לא נמצא</title>
        </Head>
        <h1 className="text-2xl mt-auto">הפרוייקט לא נמצא</h1>
        <AppButton href="/#projects">לתיק עבודות</AppButton>
      </div>
    );

  const Paragraphs = ({ text }) =>
    text.split("\n").map((str) => <p key={str.slice(-10)}>{str}</p>);

  return (
    <div className="max-w-5xl mx-auto">
      <Head>
        <title>ינון רחמים | פרוייקט {data.title}</title>
        <meta
          name="description"
          content="אנו מציעים ללקוחותינו מגוון פתרונות טכנולוגיים שישדרגו להם את העסק. מערכות ניהול, אתרי תדמית, אפליקציות, עיצוב ואיפיון, כתיבת תוכן ועוד. המחירים הוגנים, והתוצאה?... בואו לראות בעצמכם..."
        />
      </Head>
      {/* 1 - Intro */}
      <section className="flex max-sm:flex-col justify-between items-center">
        <div className="flex flex-col items-center sm:items-start sm:mt-14 max-w-md">
          <h1 className="text-3xl whitespace-nowrap sm:text-6xl relative font-bold sm:font-extrabold leading-tight text-center mb-6">
            <div className="hidden sm:block absolute -z-10 bg-appRed-500 bottom-0 -right-1 h-4 left-8"></div>
            {data.title}
          </h1>
          <div className="sm:hidden w-full h-80 relative mb-6">
            <Image
              src={`/images/works/${data.slug}/1.png`}
              key={`${data.slug}-mockup-1`}
              fill
              alt={`${data.slug}-mockup`}
              className="object-contain"
            />
          </div>
          <div className="text-gray-500 text-base sm:text-lg md:pl-10">
            {data.inShort}
          </div>
          <AppButton className="mt-6 sm:mt-14">ספר לי עוד</AppButton>
        </div>
        <div className="max-sm:hidden w-[35rem] h-[29rem] relative my-24">
          <Image
            src={`/images/works/${data.slug}/1.png`}
            key={`${data.slug}-mockup-1`}
            fill
            alt={`${data.slug}-mockup-1`}
            className="object-contain"
          />
        </div>
      </section>
      {/* 2 - Technologies */}
      <section>
        <h2 className="mt-20 sm:inline-block text-2xl sm:text-4xl relative font-bold leading-tight text-center mb-6 sm:mb-14">
          <div className="max-sm:hidden absolute -z-10 bg-appRed-500 h-4 bottom-0 right-0 w-28"></div>
          טכנולוגיות
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {data.technologies.map((tech) => (
            <TechCard tech={tech} key={tech} />
          ))}
        </div>
      </section>
      {/* 2 - Description */}
      <section className="flex max-lg:flex-col justify-between items-start mt-20 sm:mt-48">
        <div className="w-full flex justify-center lg:ml-8">
          <div className="w-96 h-96 lg:w-[29rem] lg:h-[40rem] relative mb-14 sm:mb-0">
            <Image
              src={`/images/works/${data.slug}/2.png`}
              key={`${data.slug}-mockup-2`}
              fill
              alt={`${data.slug}-mockup-2`}
              className="object-contain"
            />
          </div>
        </div>
        <article className="flex flex-col w-full max-w-lg m-auto">
          <h2 className="text-4xl relative font-bold mb-7">
            <div className="absolute -z-10 bg-appRed-500 h-4 bottom-0 right-0 w-28" />
            על הפרוייקט
          </h2>
          <h3 className="text-lg font-semibold mb-1 mt-4 sm:mt-3">
            הצורך של הלקוח
          </h3>
          <Paragraphs text={data.customerNeed} />
          <h3 className="text-lg font-semibold mb-1 mt-4 sm:mt-3">
            תהליך הפיתוח וטכנולוגיות
          </h3>
          <Paragraphs text={data.developmentProcess} />
          {data.impact ? (
            <>
              <h3 className="text-lg font-semibold mb-1 mt-4 sm:mt-3">
                השפעת המוצר
              </h3>
              <Paragraphs text={data.impact} />
            </>
          ) : null}
          <WorkLinks {...data.links} className="self-end mt-8" />
        </article>
      </section>
      {/* Divider-mockup */}
      <Image
        src={`/images/works/${data.slug}/3.png`}
        key={`${data.slug}-mockup-3`}
        alt={`${data.slug}-mockup`}
        className="object-contain mx-auto mt-32 mb-12"
        width={600}
        height={600}
      />
      <div className="relative">
        <div className="-z-10 absolute bottom-[58%] left-1/2 -translate-x-1/2 -rotate-6">
          <div className="bg-appRed-500/40 w-[200vw] h-36 sm:h-44" />
          <div className="bg-appRed-500/10 w-[200vw] h-36 sm:h-44" />
        </div>
      </div>
      {/* 3 - Other projects */}
      <section className="mt-40 relative">
        <h2 className="text-4xl relative font-bold mb-7">
          {/* <div className="absolute -z-10 bg-appRed-500 h-4 bottom-0 right-0 w-28" /> */}
          פרויקטים נוספים
        </h2>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-8 md:gap-y-14 lg:gap-y-20">
          {PROJECTS_DATA.map(({ slug, logoFilename, logoScale }) =>
            slug !== data.slug ? (
              <WorkCard
                key={slug}
                logoFilename={logoFilename}
                workUrl={slug}
                imageScale={logoScale}
              />
            ) : null
          )}
        </div>
      </section>
      <div className="relative mt-24">
        <div className="-z-10 absolute top-[58%] left-1/2 -translate-x-1/2 rotate-12">
          <div className="bg-appRed-500/20 w-[200vw] h-20" />
          <div className="bg-appRed-500/10 w-[200vw] h-20" />
        </div>
      </div>
      <div className="h-24" />
      {/* 4 - Contact */}
      <ContactSection title="אהבתם?" />
    </div>
  );
};

export default Project;
