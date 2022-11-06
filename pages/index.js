import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import AppButton from "../components/AppButton";

export default function Home() {
  const [answerAIndex, setAnswerAIndex] = useState(0);
  const [answerBIndex, setAnswerBIndex] = useState(0);

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
      {/* 1 - INTRO */}
      <section className="flex justify-center sm:justify-between items-center mt-0 sm:mt-24">
        <div className="flex flex-col items-center sm:items-start sm:mt-20">
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
      {/* 1 - INTRO */}
      <section className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between mt-24 sm:mt-52 max-w-5xl mx-auto">
        {/* my image */}
        <h2 className="sm:hidden text-4xl relative font-bold text-center mb-6">
          <div className="absolute -z-10 bg-appRed-500 h-4 bottom-0 right-0 w-28"></div>
          נעים להכיר
        </h2>
        <div className="flex w-full sm:w-1/2">
          <div className="w-full h-96 px-8 sm:w-[26rem] sm:h-[36rem] relative">
            <Image
              src="/images/me.png"
              fill
              alt="ינון-רחמים"
              className="object-contain"
            />
            <div className="bg-appPurple-500 rounded-full absolute w-[70vw] h-[70vw] sm:h-96 sm:w-96 top-5 -z-10 left-1/2 -translate-x-1/2" />
          </div>
        </div>
        <article className="sm:w-1/2 mt-10 sm:mt-0 px-6 sm:px-0">
          <h2 className="hidden sm:block text-4xl relative font-bold mb-6">
            <div className="absolute -z-10 bg-appRed-500 h-4 bottom-0 right-0 w-28"></div>
            נעים להכיר
          </h2>
          <p>
            אהלן, אני ינון. בן 28, מתגורר בצפת ומתפרנס מאחד המקצועות הכי שווים
            בשוק - פיתוח אתרים ואפליקציות. אני נהנה להתעורר לעבודה הזו בכל בוקר
            מחדש. יש משהו מאוד מרגש ביצירה עבור לקוחות. אפשר לומר שאני מגשים להם
            חלומות.
          </p>
          <p>
            בטח גם לכם יש חלום להקים אתר אינטרנט יוצא דופן או אפליקציה שתשנה
            חיים של אנשים. ואולי יש לכם חלום יותר צנוע, למשל ליצור אתר מרשים
            לעסק או לעמותה, או לחילופין לעצב קורות חיים אינטראקטיביים.
          </p>
          <p className="mt-8">איזה מין חולמים אתם?</p>
          <div className="relative border-2 border-appRed-500 flex rounded-xl text-center w-56 ">
            <div
              className={`absolute bg-appRed-500 w-1/2 inset-y-0 rounded-lg -z-10 transition-all ${
                answerAIndex === 0 ? "right-0" : "right-1/2"
              }`}
            />
            <button
              className={`px-3 py-2 w-1/2 cursor-pointer transition-all ${
                answerAIndex === 0 ? "text-white" : "text-appRed-500"
              }`}
              onClick={() => setAnswerAIndex(0)}
            >
              צנועים
            </button>
            <button
              className={`px-3 py-2 w-1/2 cursor-pointer transition-all ${
                answerAIndex === 1 ? "text-white" : "text-appRed-500"
              }`}
              onClick={() => setAnswerAIndex(1)}
            >
              שאפתנים
            </button>
          </div>
          <p className="mt-8">רוצים להגשים את החלום?</p>
          <div className="relative border-2 border-appRed-500 flex rounded-xl text-center w-56 ">
            <div
              className={`absolute bg-appRed-500 w-1/2 inset-y-0 rounded-lg -z-10 transition-all ${
                answerBIndex === 0 ? "right-0" : "right-1/2"
              }`}
            />
            <button
              className={`px-3 py-2 w-1/2 cursor-pointer transition-all ${
                answerBIndex === 0 ? "text-white" : "text-appRed-500"
              }`}
              onClick={() => setAnswerBIndex(0)}
            >
              כן בטח
            </button>
            <button
              className={`px-3 py-2 w-1/2 cursor-pointer transition-all ${
                answerBIndex === 1 ? "text-white" : "text-appRed-500"
              }`}
              onClick={() => setAnswerBIndex(1)}
            >
              שחרר אותי
            </button>
          </div>
          <p className="mt-8 mb-6">
            {"מגניב :) אשמח שתספרו לי עליו ואולי אגשים לכם את החלום."}
          </p>
          <AppButton>ספר לי עוד</AppButton>
        </article>
      </section>
    </>
  );
}
