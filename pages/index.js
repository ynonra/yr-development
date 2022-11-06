import Head from "next/head";
import Image from "next/image";
import AppButton from "../components/AppButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>ינון רחמים | פיתוח אתרים ואפליקציות</title>
        <meta
          name="description"
          content="אנו מציעים ללקוחותינו מגוון פתרונות טכנולוגיים שישדרגו להם את העסק. מערכות ניהול, אתרי תדמית, אפליקציות, עיצוב ואיפיון, כתיבת תוכן ועוד. המחירים הוגנים, והתוצאה?... בואו לראות בעצמכם..."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex justify-center sm:justify-between items-center mt-0 sm:mt-24">
        <div className="flex flex-col items-center sm:tems-start sm:mt-20">
          <div className="w-64 h-96 relative sm:hidden">
            <Image
              src="/images/logo-big.svg"
              fill
              alt="big-logo"
              className="object-fit"
            />
          </div>
          <h1 className="text-3xl sm:text-6xl font-semibold sm:font-extrabold leading-tight mb-14 sm:mb-4 text-center sm:text-start">
            יוצר{" "}
            <span className="relative">
              <div className="hidden sm:block absolute -z-10 bg-appRed-500 bottom-[.3em] right-1 h-3.5 -left-6"></div>
              <span>מוצרים</span>
            </span>{" "}
            דיגיטלים<div>במחירים נגישים</div>
          </h1>
          <div className="hidden sm:block  text-gray-500 text-2xl mb-14">
            אם אתם יכולים לחלום את זה, אני יכול ליצור את זה
          </div>
          <AppButton>ספר לי עוד</AppButton>
        </div>
        <div className="hidden sm:block w-[25rem] h-[25rem] relative">
          <Image
            src="/images/light.svg"
            fill
            alt="light"
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}
