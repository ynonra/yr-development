import useProject from "../../hooks/useProject";
import AppButton from "../../components/AppButton";
import Image from "next/image";
import TechCard from "../../components/TechCard";
import Head from "next/head";

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
        <title>
          ינון רחמים | פרוייקט {data.title}
        </title>
        <meta
          name="description"
          content="אנו מציעים ללקוחותינו מגוון פתרונות טכנולוגיים שישדרגו להם את העסק. מערכות ניהול, אתרי תדמית, אפליקציות, עיצוב ואיפיון, כתיבת תוכן ועוד. המחירים הוגנים, והתוצאה?... בואו לראות בעצמכם..."
        />
      </Head>
      <section className="flex max-sm:flex-col justify-between items-center">
        <div className="flex flex-col items-center sm:items-start sm:mt-14 max-w-md">
          <h1 className="text-3xl sm:text-6xl relative font-bold sm:font-extrabold leading-tight text-center mb-6">
            <div className="hidden sm:block absolute -z-10 bg-appRed-500 bottom-[.12em] right-1 h-3.5 w-[6.5rem]"></div>
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
            alt={`${data.slug}-screenshot`}
            className="object-contain"
          />
        </div>
      </section>
      <h2 className="mt-20 sm:inline-block text-2xl sm:text-4xl relative font-bold leading-tight text-center mb-6 sm:mb-14">
        <div className="max-sm:hidden absolute -z-10 bg-appRed-500 h-4 bottom-0 right-0 w-28"></div>
        טכנולוגיות
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {data.technologies.map((tech) => (
          <TechCard tech={tech} key={tech} />
        ))}
      </div>
    </div>
  );
};

export default Project;
