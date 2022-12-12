import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

import RECOMMENDATIONS from "../data/recommendations";

import AppButton from "../components/AppButton";
import ServiceDescriptionItem from "../components/ServiceDescriptionItem";
import WorkCard from "../components/WorkCard";
import WorkStepCard from "../components/WorkStepCard";
import RecommendationCard from "../components/RecommendationCard";
import { Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { PROJECTS_DATA } from "../data/projects";
import ContactSection from "../components/ContactSection";
import ContactDialog from "../components/ContactDialog";

export default function Home() {
  const [answerAIndex, setAnswerAIndex] = useState(null);
  const [answerBIndex, setAnswerBIndex] = useState(null);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);

  const onCloseContactDialog = () => setContactDialogOpen(false);
  const onOpenContactDialog = () => setContactDialogOpen(true);

  return (
    <>
      <Head>
        <title>ינון רחמים | פיתוח אתרים ואפליקציות</title>
        <meta
          name="description"
          content="אנו מציעים ללקוחותינו מגוון פתרונות טכנולוגיים שישדרגו להם את העסק. מערכות ניהול, אתרי תדמית, אפליקציות, עיצוב ואיפיון, כתיבת תוכן ועוד. המחירים הוגנים, והתוצאה?... בואו לראות בעצמכם..."
        />
      </Head>
      {/* 1 - INTRO */}
      <section
        id="home"
        className="max-w-5xl mx-auto relative flex flex-col md:flex-row justify-center md:justify-between items-center mt-0 gap-7 md:gap-3"
      >
        <Image
          src="/images/light.svg"
          width={320}
          height={320}
          alt="light"
          className="max-md:hidden object-contain"
        />
        <Image
          src="/images/light.svg"
          width={180}
          height={180}
          alt="light"
          className="md:hidden object-contain"
        />
        <div className="text-center md:text-right text-white flex flex-col items-center md:items-start md:mt-20">
          <h1 className="tracking-tight text-4xl md:text-5xl lg:text-7xl font-semibold md:font-bold leading-none md:leading-tight mb-4 md:mb-4 text-center md:text-start">
            יוצר{" "}
            <span className="relative">
              <div className="absolute -z-10 bg-appRed-500 -inset-x-0.5 bottom-1.5 md:bottom-2 lg:bottom-3.5 h-2 md:h-3 lg:h-[1.1rem] rounded-full"></div>
              <span>מוצרים דיגיטלים</span>
            </span>{" "}
            <div>במחירים נגישים</div>
          </h1>
          <div className="md:tracking-wide text-xl md:text-2xl mb-4 md:mb-10 font-light">
            <div className="md:inline">אם אתם יכולים לחלום את זה,</div> אני יכול
            ליצור את זה
          </div>
          <AppButton
            onClick={() =>
              document
                .querySelector("#about-me")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            ספר לי עוד
          </AppButton>
        </div>
      </section>
      {/* 2 - ABOUT ME */}
      <section
        id="about-me"
        className="max-w-5xl mx-auto relative flex flex-col md:flex-row items-center md:items-start md:justify-between mt-24 md:mt-60 gap-y-9 md:gap-14 lg:gap-[5.8rem]"
      >
        <article className="text-center md:text-right mt-10 md:mt-0 px-6 md:px-0">
          <h2 className="text-2xl md:text-4xl relative font-bold mb-6">
            נעים{" "}
            <span className="relative">
              <div className="absolute -z-10 bg-appRed-500 -inset-x-0.5 bottom-1 md:bottom-2 h-2 md:h-2.5 rounded-full"></div>
              <span>להכיר</span>
            </span>
          </h2>
          <p className="track">
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
          <div className="flex flex-col px-7 py-6 gap-6 rounded-3xl shadow-xl shadow-appIndigo-300/10 mt-8">
            <div className="flex flex-col lg:flex-row gap-y-1.5 items-center justify-between">
              <span className="font-bold">איזה מין חולמים אתם?</span>
              <div className="relative flex rounded-full text-center w-56">
                <div className="absolute border-2 border-appIndigo-300 -inset-px rounded-full" />
                <div
                  className={`${
                    answerAIndex === null ? "opacity-0" : "opacity-100"
                  } absolute bg-appIndigo-300 w-1/2 inset-y-0 -z-10 transition-all ${
                    answerAIndex !== null
                      ? answerAIndex === 0
                        ? "right-0 rounded-r-full"
                        : "right-1/2 rounded-l-full"
                      : ""
                  }`}
                />
                <button
                  className={`z-0 px-3 py-2 w-1/2 cursor-pointer transition-all hover:bg-appIndigo-300/10 rounded-r-full  ${
                    answerAIndex === 0 ? "text-white" : "text-appIndigo-300"
                  }`}
                  onClick={() => setAnswerAIndex(0)}
                >
                  צנועים
                </button>
                <button
                  className={`z-0 px-3 py-2 w-1/2 cursor-pointer transition-all hover:bg-appIndigo-300/10 rounded-l-full ${
                    answerAIndex === 1 ? "text-white" : "text-appIndigo-300"
                  }`}
                  onClick={() => setAnswerAIndex(1)}
                >
                  שאפתנים
                </button>
              </div>
            </div>
            <hr />
            <div className="flex flex-col lg:flex-row gap-y-1.5 items-center justify-between">
              <span className="font-bold">רוצים להגשים את החלום?</span>
              <div className="relative flex rounded-full text-center w-56">
                <div className="absolute border-2 border-appIndigo-300 -inset-px rounded-full" />
                <div
                  className={`${
                    answerBIndex === null ? "opacity-0" : "opacity-100"
                  } absolute bg-appIndigo-300 w-1/2 inset-y-0 -z-10 transition-all ${
                    answerBIndex !== null
                      ? answerBIndex === 0
                        ? "right-0 rounded-r-full"
                        : "right-1/2 rounded-l-full"
                      : ""
                  }`}
                />
                <button
                  className={`z-0 px-3 py-2 w-1/2 cursor-pointer transition-all hover:bg-appIndigo-300/10 rounded-r-full ${
                    answerBIndex === 0 ? "text-white" : "text-appIndigo-300"
                  }`}
                  onClick={() => setAnswerBIndex(0)}
                >
                  כן בטח
                </button>
                <button
                  className={`z-0 px-3 py-2 w-1/2 cursor-pointer transition-all hover:bg-appIndigo-300/10 rounded-l-full ${
                    answerBIndex === 1 ? "text-white" : "text-appIndigo-300"
                  }`}
                  onClick={() => setAnswerBIndex(1)}
                >
                  שחרר אותי
                </button>
              </div>
            </div>
            <hr />
            <div className="flex flex-col lg:flex-row gap-y-1.5 items-center justify-between">
              <span className="font-bold text-center md:text-right">
                {"מגניב :) אשמח שתספרו לי עליו ואולי אגשים לכם את החלום."}
              </span>
              <AppButton
                onClick={onOpenContactDialog}
                className="shrink-0 py-2 text-base px-16"
              >
                צרו איתי קשר
              </AppButton>
              <ContactDialog
                open={contactDialogOpen}
                onClose={onCloseContactDialog}
              />
            </div>
          </div>
        </article>
        {/* my image */}
        <div className="flex w-full justify-center md:justify-end">
          <div className="flex justify-center w-[74vw] sm:w-80 lg:w-[26rem] relative rounded-b-full overflow-hidden">
            <Image
              src="/images/me-cropped.png"
              width={400}
              height={400}
              alt="ינון-רחמים"
              className="object-contain mr-[2%]"
            />
            <div className="bg-gradient-to-br from-appIndigo-200 to-appPurple-300 rounded-full absolute h-[74vw] sm:h-80 lg:h-[26rem] w-[74vw] sm:w-80 lg:w-[26rem] bottom-px -z-10 left-1/2 -translate-x-1/2" />
          </div>
        </div>
      </section>
      {/* 3 - SERVICES */}
      <div className="mt-16 sm:mt-32 pt-12 sm:pt-20 pb-28 bg-gradient-to-l from-appRed-50 to-appPurple-50 big-radius rounded-b-none rounded-tr-none">
        <section
          id="services"
          className="max-w-5xl mx-auto relative flex flex-col items-center px-3 sm:px-10 pt-5 sm:pt-10 text-center"
        >
          <h2 className="text-2xl md:text-4xl relative font-bold mb-6">
            מוצרים דיגטליים{" "}
            <span className="relative">
              <div className="absolute bg-appRed-500 -inset-x-0.5 bottom-1 md:bottom-2 h-2 md:h-2.5 rounded-full"></div>
              <span className="z-10 relative">מ-א’ ועד ת’</span>
            </span>
          </h2>
          <p className="font-light leading-normal max-w-sm px-[3.3rem] sm:px-0 sm:max-w-lg">
            המומחיות שלי זה פיתוח ותכנות. אפשר לבנות מערכות מעולות באמצעות
            היכולות האלה בלבד. אך יצירה של מוצרים דיגיטליים יוצאי דופן דורשת
            מיומנויות נוספות כמו עיצוב, מיתוג, קופירייטינג ועוד. לכן אני עובד
            בשיתוף פעולה עם אנשי מקצוע נוספים וביחד אנחנו מביאים את לקוחותינו
            לגבהים חדשים.
          </p>
        </section>
        <section className="max-w-5xl mx-auto flex flex-col items-center md:flex-row justify-around mt-0 gap-y-8">
          <ServiceDescriptionItem
            imageFilename="fingerprint.svg"
            imageAlt="מערכות-ניהול"
            title="מערכות ניהול"
            description="מערכת ניהול טובה תחסוך לארגון שלכם הרבה מאוד שעות עבודה ותסייע לכם להתמקד במה שחשוב באמת."
          />
          <ServiceDescriptionItem
            imageFilename="roulette-wheel.svg"
            imageAlt="אפליקציות"
            title="אפליקציות"
            description="יש לכם רעיון מגניב שעתיד לשנות לאנשים את החיים לטובה? דברו אליי. אשמח לפתח את זה!"
          />
          <ServiceDescriptionItem
            imageFilename="hands-up.svg"
            imageAlt="אתרי-אינטרנט"
            title="אתרי אינטרנט"
            description="אני יכול לפתח גם אתרים פשוטים וגם מורכבים. מוזמנים לדבר איתי על פרויקטים בכל סדר גודל."
          />
        </section>
      </div>
      <div className="pt-12 sm:pt-16 pb-28 bg-gradient-to-b md:bg-gradient-to-r from-appIndigo-500 to-appPurple-600 big-radius rounded-t-none rounded-bl-none max-sm:rounded-none">
        <section className="text-center max-w-5xl mx-auto">
          <h2 className="text-white text-2xl md:text-4xl relative font-bold">
            תהליך{" "}
            <span className="relative">
              <div className="absolute bg-appRed-500 -inset-x-0.5 bottom-1 md:bottom-2 h-2 md:h-2.5 rounded-full"></div>
              <span className="z-10 relative">העבודה</span>
            </span>
          </h2>
          <div className="px-5 sm:px-0 mt-16 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center w-fit justify-items-center">
            <WorkStepCard
              number={1}
              title="אפיון"
              description="יושבים ביחד ומדברים על דרישות הפרוייקט, מהם הצרכים, מה האפשרויות השונות, וכו׳. הכל מסוכם במסמך שמהווה את השלד של המוצר"
              imageFilename="certificate.svg"
            />
            <WorkStepCard
              number={2}
              title="קופירייטינג"
              description="אחד החלקים המשמעותיים במוצר תדמיתי הינו התוכן שבו. אנו מציעים שירותים של כתיבה שיווקית, שתקפיץ לכם את הרמה וגם את הכניסות!"
              imageFilename="paper.svg"
            />
            <WorkStepCard
              number={3}
              title="עיצוב"
              description="בשלב זה כבר מתחילים לראות את החלום רוקם עור וגידים ומתגשם... מעצב ילווה אתכם לכל אורך התהליך עד לעיצוב שאתם הכי אוהבים"
              imageFilename="puzzle.svg"
            />
            <WorkStepCard
              number={4}
              title="פיתוח"
              description="הגיע הזמן ללכלך את הידיים ולפתח את המוצר שלכם בהתאמה מדוייקת להחלטות שהתקבלו בשלבים הקודמים. לוקח קצת זמן, אבל שווה לחכות!"
              imageFilename="time1.svg"
            />
            <WorkStepCard
              number={5}
              title="בקרת איכות"
              description="רגע לפני שמשחררים את המוצר ומספרים לכולם, עושים בדיקות אחרונות כדי לוודא שאין תקלות לא צפויות"
              imageFilename="star1.svg"
            />
            <WorkStepCard
              number={6}
              title="עלייה לאוויר"
              description="היום הגדול הגיע, לאחר שעברנו ביחד את הדרך למוצר המושלם עבורכם, באה העת להנות מהפירות. לחיים!"
              imageFilename="cheer.svg"
              imageScale={0.8}
            />
          </div>
        </section>
      </div>
      {/* 4 - Works */}
      <section className="relative mt-24" id="projects">
        <h2 className="text-4xl font-bold mb-10 text-center sm:text-right">
          תיק עבודות
        </h2>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-8 md:gap-y-14 lg:gap-y-20">
          {PROJECTS_DATA.map(({ slug, logoFilename, logoScale }) => (
            <WorkCard
              key={slug}
              logoFilename={logoFilename}
              workUrl={slug}
              imageScale={logoScale}
            />
          ))}
        </div>
      </section>

      {/* 5 - RECOMMENDATIONS */}
      <section
        id="recommendations"
        className="relative border-2 border-appRed-500 bg-white py-10 mx-auto text-center mt-28"
      >
        <h2 className="text-4xl font-bold mb-12 mx-10 sm:text-right">
          לקוחות מספרים
        </h2>
        <div className="-z-10 absolute top-[58%] left-1/2 -translate-x-1/2 rotate-12">
          <div className="bg-appRed-500/50 w-[100vw] h-20" />
          <div className="bg-appRed-500/10 w-[200vw] h-20" />
        </div>
        <Swiper
          pagination={{
            clickable: true,
            bulletActiveClass: "!bg-appRed-500 !opacity-100 !h-3.5 !w-2.5",
            bulletClass:
              "transition-all w-2 h-2 rounded-full bg-gray-300 rotate-90",
            horizontalClass: "flex justify-center items-center gap-2 w-20",
          }}
          modules={[Pagination]}
          autoplay
        >
          {RECOMMENDATIONS.map(({ description, profile }) => (
            <SwiperSlide className="!h-auto" key={profile.role}>
              <RecommendationCard
                description={description}
                profileImageFilename={profile.imageFilename}
                profileName={profile.name}
                profileRole={profile.role}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {/* 6 - CONTACT */}
      <ContactSection />
    </>
  );
}
