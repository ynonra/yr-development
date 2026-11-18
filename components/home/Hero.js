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

// A hand-drawn smiley that draws itself after the headline pops in: the face, then the eyes,
// then the smile. With reduced motion it's simply there, fully drawn.
const draw = "animate-draw [stroke-dasharray:1_2]";
const SmileDoodle = ({ className = "" }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path
      pathLength="1"
      className={draw}
      style={{ animationDelay: "750ms", animationDuration: "750ms" }}
      d="M52 9 C 78 8, 94 28, 92 53 C 90 79, 69 94, 45 91 C 21 88, 6 70, 9 46 C 12 23, 30 9, 58 11"
    />
    <circle cx="36" cy="40" r="5" fill="currentColor" stroke="none" className="animate-pop-in origin-center [transform-box:fill-box]" style={{ animationDelay: "1500ms" }} />
    <circle cx="64" cy="40" r="5" fill="currentColor" stroke="none" className="animate-pop-in origin-center [transform-box:fill-box]" style={{ animationDelay: "1620ms" }} />
    <path
      pathLength="1"
      className={draw}
      style={{ animationDelay: "1800ms", animationDuration: "500ms" }}
      d="M28 59 C 36 77, 63 79, 73 57"
    />
  </svg>
);

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
          {/* A calm first line, then the shout in two lines: bigger, brick red, tilted, popping in
              once on load, with a smiley that draws itself next to "מחייכים". Sizes are fitted
              so the first line (~8.5em, the widest) never wraps. */}
          <h1 className="font-display font-extrabold text-[length:calc((100vw-2rem)/8.8)] leading-[1.15] sm:text-[4.2rem] lg:text-[3.6rem] xl:text-[4.25rem]">
            <span className="block">המטרה שלי פשוטה</span>{" "}
            <span className="inline-block mt-[0.2em] mb-[0.04em] lg:mt-[0.02em] lg:mb-[0.24em] text-[1.18em] leading-[1.05] text-coral-ink -rotate-3 origin-center lg:origin-right animate-shout-in">
              <span className="block">לראות אתכם</span>{" "}
              <span className="block">
                מחייכים
                <SmileDoodle className="inline-block align-[-0.08em] ms-[0.18em] w-[0.78em] h-[0.78em] text-coral" />
              </span>
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-ink-soft text-pretty max-w-xl mx-auto lg:mx-0">
            אם אתם לא בכיוון הנכון, אגיד לכם ישר. ואם כן, אשים{" "}
            <span className="whitespace-nowrap">את כל הלב</span> עד שהפרויקט באוויר. אני ינון, מפתח מכרמיאל, ובונה אתרים, חנויות אונליין,
            אפליקציות וסוכני AI.
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
