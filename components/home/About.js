import { useState } from "react";
import HashLinkAnchor from "../HashLinkAnchor";
import ContactDialog from "../ContactDialog";
import HandNote from "./HandNote";

const Toggle = ({ label, options, value, onChange, id }) => (
  <fieldset>
    <legend className="font-semibold mb-3">{label}</legend>
    <div className="inline-flex rounded-full border-2 border-coral p-1 bg-white">
      {options.map((opt, i) => (
        <button
          key={opt}
          type="button"
          id={`${id}-${i}`}
          aria-pressed={value === i}
          onClick={() => onChange(i)}
          className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors cursor-pointer ${
            value === i ? "bg-coral text-white" : "text-coral-ink hover:bg-coral/10"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  </fieldset>
);

const About = () => {
  const [dreamer, setDreamer] = useState(null);
  const [ready, setReady] = useState(null);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section className="mt-28 lg:mt-36">
      <HashLinkAnchor id="about-me" />
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-x-16 gap-y-10 items-center">
      <div>
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl mb-7">
          נעים להכיר
        </h2>
        <div className="space-y-4 text-lg leading-relaxed max-w-prose">
          <p>
            אהלן, אני ינון. מתגורר בצפת ומתפרנס מאחד המקצועות הכי שווים בשוק -
            פיתוח אתרים ואפליקציות. אני נהנה להתעורר לעבודה הזו בכל בוקר מחדש.
            יש משהו מאוד מרגש ביצירה עבור לקוחות. אפשר לומר שאני מגשים להם
            חלומות.
          </p>
          <p>
            ובעניין ה-AI, אני בתוך זה עד הצוואר. אני מפתח בעזרת הכלים הכי
            מתקדמים שיש, ובונה ללקוחות סוכני AI ובוטים שעובדים בשבילם מסביב
            לשעון. מה שפעם לקח חודשים, לוקח היום שבועות. ואת הזמן שנחסך אני
            משקיע בבדיקות ובדיוקים, כי מהר זה טוב רק כשזה גם עובד :)
          </p>
          <p>
            בטח גם לכם יש חלום להקים אתר אינטרנט יוצא דופן או אפליקציה שתשנה
            חיים של אנשים. ואולי יש לכם חלום יותר צנוע, למשל ליצור אתר מרשים
            לעסק או לעמותה, או לחילופין להקים חנות אונליין שבאמת מוכרת.
          </p>
        </div>
      </div>

      <div className="relative">
        <HandNote
          arrow="down-left"
          className="mb-2 lg:mb-0 lg:absolute lg:-top-16 lg:left-6 text-2xl text-ink-soft"
          arrowClassName="mr-auto text-coral"
        >
          אין תשובה לא נכונה. חוץ מ״שחרר אותי״
        </HandNote>
        <div className="rounded-[2rem] bg-mist p-8 sm:p-10 space-y-8">
          <Toggle
            id="dreamer"
            label="איזה מין חולמים אתם?"
            options={["צנועים", "שאפתנים"]}
            value={dreamer}
            onChange={setDreamer}
          />
          <Toggle
            id="ready"
            label="רוצים להגשים את החלום?"
            options={["כן בטח", "שחרר אותי"]}
            value={ready}
            onChange={setReady}
          />
          <div>
            <p className="mb-5">מגניב :) אשמח שתספרו לי עליו ואולי אגשים לכם את החלום.</p>
            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="rounded-full bg-ink text-white font-semibold px-7 py-3.5 transition-colors hover:bg-coral-ink cursor-pointer"
            >
              צור איתי קשר
            </button>
            <ContactDialog open={contactOpen} onClose={() => setContactOpen(false)} />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;
