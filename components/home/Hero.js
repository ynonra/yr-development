import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PiShoppingBagOpenFill, PiMagnifyingGlassBold } from "react-icons/pi";
import { RiRobot2Fill } from "react-icons/ri";
import ContactDialog from "../ContactDialog";
import HashLinkAnchor from "../HashLinkAnchor";
import HandNote from "./HandNote";
import { PROJECTS_DATA } from "../../data/projects";

const chip =
  "absolute bg-white rounded-2xl border border-line shadow-[0_12px_32px_-12px_rgba(27,32,64,0.28)] text-ink animate-chip-in";

const PhotoStage = () => (
  <div className="relative w-full max-w-[340px] sm:max-w-[430px] lg:max-w-[380px] xl:max-w-[430px] mx-auto aspect-[1/1.2]">
    {/* periwinkle disc, the photo's head rises above it */}
    <div className="absolute inset-x-0 bottom-0 aspect-square rounded-full bg-peri" />
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ borderRadius: "0 0 50% 50% / 0 0 41.67% 41.67%" }}
    >
      <Image
        src="/images/yinon.webp"
        alt="ינון רחמים"
        width={900}
        height={897}
        priority
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[112%] max-w-none"
      />
    </div>

    {/* Things I build, floating around me. They stay clear of the face (roughly 25%-79% of the
        width and 7%-73% of the height): the order pops in above the head like a phone
        notification, the other two sit on the shoulders. */}
    <div
      className={`${chip} top-[75%] right-0 sm:top-[-5%] sm:-right-6 lg:top-[-7%] lg:-right-10 xl:top-[-5%] xl:-right-6 flex items-center gap-2.5 px-3 py-2.5`}
      style={{ animationDelay: "250ms" }}
    >
      <span className="grid place-items-center w-8 h-8 rounded-full bg-coral text-white text-base">
        <PiShoppingBagOpenFill />
      </span>
      <span className="leading-tight">
        <span className="block text-sm font-semibold">הזמנה חדשה התקבלה</span>
        <span className="block text-xs text-ink-soft">₪480, לפני דקה</span>
      </span>
    </div>

    <div
      className={`${chip} top-[97%] left-0 sm:top-[75%] sm:-left-16 lg:-left-4 xl:-left-16 w-52 sm:w-60 lg:w-52 xl:w-60 p-3`}
      style={{ animationDelay: "500ms" }}
    >
      <span className="flex items-center gap-1.5 text-xs font-semibold text-ink-soft mb-1.5">
        <RiRobot2Fill className="text-peri text-sm" />
        סוכן AI
      </span>
      <span className="block text-sm leading-snug bg-mist rounded-xl rounded-tr-sm px-3 py-2">
        מצאתי 3 מתנות לבר מצווה עד ₪300. לשלוח לך?
      </span>
    </div>

    <div
      className={`${chip} hidden sm:block bottom-[2%] -right-16 lg:-right-8 xl:-right-16 w-56 lg:w-52 xl:w-56 p-3`}
      style={{ animationDelay: "750ms" }}
    >
      <span className="flex items-center gap-2 text-xs text-ink-soft border border-line rounded-full px-3 py-1.5">
        <PiMagnifyingGlassBold />
        חנות יודאיקה בצפון
      </span>
      <span className="flex items-baseline justify-between gap-2 mt-2 px-1">
        <span className="text-sm font-semibold text-[#1a0dab]">העסק שלכם</span>
        <span className="text-[11px] text-ink-soft">תוצאה ראשונה</span>
      </span>
    </div>

    <HandNote
      arrow="down-right"
      className="absolute top-[-3%] sm:top-[2%] left-0 sm:-left-10 lg:-left-4 xl:-left-10 text-base sm:text-lg lg:text-base xl:text-lg text-ink-soft"
      arrowClassName="mr-[76px] sm:mr-9 lg:mr-[54px] xl:mr-9 text-coral"
    >
      זה אני. החליפה רק לתמונה ;)
    </HandNote>
  </div>
);

const Hero = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const logos = PROJECTS_DATA.filter((p) => p.logoFilename);

  return (
    <section className="pt-6 sm:pt-14">
      <HashLinkAnchor id="home" />
      <div className="grid lg:grid-cols-[1.15fr_1fr] items-center gap-x-10 gap-y-14">
        <div className="text-center lg:text-right">
          {/* Two lines that each stay on one line at every width: the size is fitted to the
              first (~7.9em). The second is the shout: bigger, brick red, tilted, with comic
              shout lines at its end, and it pops in once on load. */}
          <h1 className="font-display font-extrabold text-[length:calc((100vw-2rem)/8.4)] leading-[1.15] sm:text-[4.2rem] lg:text-[3.9rem] xl:text-[4.5rem]">
            <span className="block">כל העולם כולו AI</span>{" "}
            <span className="relative inline-block mt-[0.2em] mb-[0.04em] lg:mt-[0.02em] lg:mb-[0.24em] text-[1.18em] text-coral-ink -rotate-3 origin-center lg:origin-right animate-shout-in">
              ומה איתכם?!
              <svg
                aria-hidden="true"
                viewBox="0 0 40 44"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                className="absolute -left-[0.62em] -top-[0.05em] w-[0.5em] h-[0.55em] overflow-visible text-coral"
              >
                <path d="M34 14 L14 2" />
                <path d="M33 23 L6 23" />
                <path d="M34 32 L14 44" />
              </svg>
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-ink-soft max-w-xl mx-auto lg:mx-0">
            אני ינון, מפתח מצפת. בונה אתרים, חנויות אונליין, אפליקציות וסוכני
            AI, ומשתמש <span className="whitespace-nowrap">ב-AI</span> כדי לעבוד
            מהר, בלי לוותר על איכות.
          </p>
          <div className="mt-9 flex flex-wrap justify-center lg:justify-start gap-3">
            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="rounded-full bg-ink text-white font-semibold px-7 py-3.5 transition-colors hover:bg-coral-ink cursor-pointer"
            >
              בואו נדבר
            </button>
            <Link
              href="/#projects"
              className="rounded-full border-2 border-ink/15 font-semibold px-7 py-3 transition-colors hover:border-ink"
            >
              לעבודות שלי
            </Link>
          </div>
          <ContactDialog open={contactOpen} onClose={() => setContactOpen(false)} />
        </div>
        <PhotoStage />
      </div>

      <div className="mt-32 sm:mt-24">
        <p className="text-sm text-ink-soft text-center lg:text-right mb-6">
          חלק מהעסקים והמיזמים שבניתי עבורם
        </p>
        <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 place-items-center gap-x-6 gap-y-8">
          {logos.map(({ slug, logoFilename, title }) => (
            <li key={slug}>
              <Link
                href={`/project/${slug}`}
                className="relative block w-24 h-10 sm:w-28 sm:h-12 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100"
              >
                <Image
                  src={`/images/works-logos/${logoFilename}`}
                  alt={title}
                  fill
                  sizes="112px"
                  className="object-contain"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
