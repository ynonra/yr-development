import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

import RECOMMENDATIONS from "../data/recommendations";

import AppButton from "../components/AppButton";
import ServiceDescriptionItem from "../components/ServiceDescriptionItem";
import WorkCard from "../components/WorkCard";
import WorkStepCard from "../components/WorkStepCard";
import RecommendationCard from "../components/RecommendationCard";
import HashLinkAnchor from "../components/HashLinkAnchor";
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
      {/* MARK: 1 - INTRO
       */}
      <section className="flex justify-center sm:justify-between items-center mt-0 sm:mt-24">
        <HashLinkAnchor id="home" />

        <div className="flex flex-col items-center sm:items-start sm:mt-20">
          <div className="w-64 h-96 relative sm:hidden">
            <Image
              src="/images/logo-big.svg"
              fill
              alt="big-logo"
              className="object-fit"
              priority
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
          <div className="hidden sm:block  text-gray-500 text-2xl mb-14 font-light">
            אם אתם יכולים לחלום את זה, אני יכול ליצור את זה
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
        <div className="hidden sm:block w-[25rem] h-[25rem] relative">
          <Image
            src="/images/light.svg"
            fill
            alt="light"
            className="object-contain"
          />
        </div>
      </section>
      {/* MARK: 2 - ABOUT ME
       */}
      <section className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between mt-24 sm:mt-52 max-w-5xl mx-auto anchor-link-offset">
        <HashLinkAnchor id="about-me" offset={30} />
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
            <div className="bg-appPurple-500 rounded-full absolute w-[70vw] h-[70vw] sm:h-96 sm:w-96 top-5 -z-10 left-1/2 -translate-x-[48%]" />
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
          {/* <SwitchButtons label1="צנועים" label2="שאפתנים" questionIndex={0} /> */}
          <div className="relative flex rounded-xl text-center w-56 ">
            <div className="absolute border-2 border-appRed-500 -inset-px rounded-xl" />
            <div
              className={`${
                answerAIndex === null ? "opacity-0" : "opacity-100"
              } absolute bg-appRed-500/80 w-1/2 inset-y-0 rounded-lg -z-10 transition-all ${
                answerAIndex !== null
                  ? answerAIndex === 0
                    ? "right-0"
                    : "right-1/2"
                  : ""
              }`}
            />
            <button
              className={`z-0 px-3 py-2 w-1/2 cursor-pointer transition-all ${
                answerAIndex === 0 ? "text-white" : "text-appRed-500/80"
              }`}
              onClick={() => setAnswerAIndex(0)}
            >
              צנועים
            </button>
            <button
              className={`z-0 px-3 py-2 w-1/2 cursor-pointer transition-all ${
                answerAIndex === 1 ? "text-white" : "text-appRed-500/80"
              }`}
              onClick={() => setAnswerAIndex(1)}
            >
              שאפתנים
            </button>
          </div>
          <p className="mt-8">רוצים להגשים את החלום?</p>
          {/* <SwitchButtons label1="כן בטח" label2="שחרר אותי" questionIndex={1} /> */}
          <div className="relative flex rounded-xl text-center w-56 ">
            <div className="absolute border-2 border-appRed-500 -inset-px rounded-xl" />
            <div
              className={`${
                answerBIndex === null ? "opacity-0" : "opacity-100"
              } absolute bg-appRed-500/80 w-1/2 inset-y-0 rounded-lg -z-10 transition-all ${
                answerBIndex !== null
                  ? answerBIndex === 0
                    ? "right-0"
                    : "right-1/2"
                  : ""
              }`}
            />
            <button
              className={`z-0 px-3 py-2 w-1/2 cursor-pointer transition-all ${
                answerBIndex === 0 ? "text-white" : "text-appRed-500/80"
              }`}
              onClick={() => setAnswerBIndex(0)}
            >
              כן בטח
            </button>
            <button
              className={`z-0 px-3 py-2 w-1/2 cursor-pointer transition-all ${
                answerBIndex === 1 ? "text-white" : "text-appRed-500/80"
              }`}
              onClick={() => setAnswerBIndex(1)}
            >
              שחרר אותי
            </button>
          </div>
          <p className="mt-8 mb-6">
            {"מגניב :) אשמח שתספרו לי עליו ואולי אגשים לכם את החלום."}
          </p>
          <AppButton onClick={onOpenContactDialog}>צור איתי קשר</AppButton>
          <ContactDialog
            open={contactDialogOpen}
            onClose={onCloseContactDialog}
          />
        </article>
      </section>
      <div className="max-w-5xl mx-auto">
        {/* MARK: 3 - SERVICES
         */}
        <section className="border-2 border-appRed-500 px-3 sm:px-10 py-5 sm:py-10 mx-auto text-center mt-28 max-w-4xl">
          <HashLinkAnchor id="services" />
          <h2 className="text-4xl font-bold mb-6">
            מוצרים דיגטליים מ-א’ ועד ת’
          </h2>
          <p className="text-lg sm:text-2xl font-light leading-normal">
            המומחיות שלי זה פיתוח ותכנות. אפשר לבנות מערכות מעולות באמצעות
            היכולות האלה בלבד. אך יצירה של מוצרים דיגיטליים יוצאי דופן דורשת
            מיומנויות נוספות כמו עיצוב, מיתוג, קופירייטינג ועוד. לכן אני עובד
            בשיתוף פעולה עם אנשי מקצוע נוספים וביחד אנחנו מביאים את לקוחותינו
            לגבהים חדשים.
          </p>
        </section>
        <section className="flex flex-col items-center md:flex-row justify-between mt-14 gap-y-8">
          <ServiceDescriptionItem
            number={1}
            imageFilename="fingerprint.svg"
            imageAlt="מערכות-ניהול"
            title="מערכות ניהול"
            description="מערכת ניהול טובה תחסוך לארגון שלכם הרבה מאוד שעות עבודה ותסייע לכם להתמקד במה שחשוב באמת."
          />
          <ServiceDescriptionItem
            number={2}
            imageFilename="roulette-wheel.svg"
            imageAlt="אפליקציות"
            title="אפליקציות"
            description="יש לכם רעיון מגניב שעתיד לשנות לאנשים את החיים לטובה? דברו אליי. אשמח לפתח את זה!"
          />
          <ServiceDescriptionItem
            number={3}
            imageFilename="hands-up.svg"
            imageAlt="אתרי-אינטרנט"
            title="אתרי אינטרנט"
            description="אני יכול לפתח גם אתרים פשוטים וגם מורכבים. מוזמנים לדבר איתי על פרויקטים בכל סדר גודל."
          />
        </section>
        <section className="mt-20">
          <h2 className="text-4xl font-bold mb-10 text-center sm:text-right">
            תהליך העבודה
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 md:gap-y-14 lg:gap-y-20 justify-between justify-items-center">
            <WorkStepCard
              title="אפיון"
              description="יושבים ביחד ומדברים על דרישות הפרוייקט, מהם הצרכים, מה האפשרויות השונות, וכו׳. הכל מסוכם במסמך שמהווה את השלד של המוצר"
              imageFilename="certificate.svg"
            />
            <WorkStepCard
              title="קופירייטינג"
              description="אחד החלקים המשמעותיים במוצר תדמיתי הינו התוכן שבו. אנו מציעים שירותים של כתיבה שיווקית, שתקפיץ לכם את הרמה וגם את הכניסות!"
              imageFilename="paper.svg"
            />
            <WorkStepCard
              title="עיצוב"
              description="בשלב זה כבר מתחילים לראות את החלום רוקם עור וגידים ומתגשם... מעצב ילווה אתכם לכל אורך התהליך עד לעיצוב שאתם הכי אוהבים"
              imageFilename="puzzle.svg"
            />
            <WorkStepCard
              title="פיתוח"
              description="הגיע הזמן ללכלך את הידיים ולפתח את המוצר שלכם בהתאמה מדוייקת להחלטות שהתקבלו בשלבים הקודמים. לוקח קצת זמן, אבל שווה לחכות!"
              imageFilename="time1.svg"
            />
            <WorkStepCard
              title="בקרת איכות"
              description="רגע לפני שמשחררים את המוצר ומספרים לכולם, עושים בדיקות אחרונות כדי לוודא שאין תקלות לא צפויות"
              imageFilename="star1.svg"
            />
            <WorkStepCard
              title="עלייה לאוויר"
              description="היום הגדול הגיע, לאחר שעברנו ביחד את הדרך למוצר המושלם עבורכם, באה העת להנות מהפירות. לחיים!"
              imageFilename="cheer.svg"
              imageScale={0.8}
            />
          </div>
        </section>
        {/* MARK: 4 - Works
         */}
        <section className="mt-24">
          <HashLinkAnchor id="projects" />
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

        {/* MARK: 5 - Reviews
         */}
        <section className="border-2 border-appRed-500 bg-white py-10 mx-auto text-center mt-28 max-w-4xl relative">
          <HashLinkAnchor id="recommendations" />
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
        {/* MARK: 6 - CONTACT
         */}
        <ContactSection />
      </div>
    </>
  );
}
