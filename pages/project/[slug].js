import useProject from "../../hooks/useProject";
import AppButton from "../../components/AppButton";
import Image from "next/image";
import TechCard from "../../components/TechCard";
import Head from "next/head";
import WorkLinks from "../../components/WorkLinks";

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
              src="/images/works/memdalet-1.png"
              fill
              alt={`${data.slug}-screenshot`}
              className="object-contain"
            />
          </div>
          <div className="text-gray-500 text-base sm:text-lg">
            {data.inShort}
          </div>
          <AppButton className="mt-6 sm:mt-14">ספר לי עוד</AppButton>
        </div>
        <div className="max-sm:hidden w-[29rem] h-[29rem] relative my-24">
          <Image
            src="/images/works/memdalet-1.png"
            fill
            alt={`${data.slug}-screenshot-1`}
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
      <section className="flex max-lg:flex-col justify-between items-start mt-32">
        <div className="w-full flex justify-center">
          <div className="w-96 h-96 lg:w-[29rem] lg:h-[29rem] relative">
            <Image
              src="/images/works/memdalet-1.png"
              fill
              alt={`${data.slug}-screenshot-2`}
              className="object-contain"
            />
          </div>
        </div>
        <article className="flex flex-col w-full max-w-lg m-auto">
          <h2 className="text-4xl relative font-bold mb-7">
            <div className="absolute -z-10 bg-appRed-500 h-4 bottom-0 right-0 w-28" />
            על הפרוייקט
          </h2>
          <h3 className="text-lg font-semibold mb-1">הצורך של הלקוח</h3>
          <p>{data.customerNeed}</p>
          <h3 className="text-lg font-semibold mb-1">
            תהליך הפיתוח וטכנולוגיות
          </h3>
          <p>{data.developmentProcess}</p>
          <h3 className="text-lg font-semibold mb-1">השפעת המוצר</h3>
          <p>{data.impact}</p>
          <WorkLinks {...data.links} className="self-end mt-8" />
        </article>
      </section>
    </div>
  );
};

export default Project;
