const STEPS = [
  {
    title: "אפיון",
    text: "יושבים ביחד ומדברים על דרישות הפרויקט, מהם הצרכים, מה האפשרויות השונות, וכו׳. הכל מסוכם במסמך שמהווה את השלד של המוצר.",
  },
  {
    title: "קופירייטינג",
    text: "אחד החלקים המשמעותיים במוצר תדמיתי הוא התוכן שבו. כתיבה שיווקית טובה תקפיץ לכם את הרמה וגם את הכניסות, מגוגל ומהצ׳אטים של ה-AI!",
  },
  {
    title: "עיצוב",
    text: "בשלב זה כבר מתחילים לראות את החלום רוקם עור וגידים... מעצב ילווה אתכם לכל אורך התהליך עד לעיצוב שאתם הכי אוהבים.",
  },
  {
    title: "פיתוח",
    text: "הגיע הזמן ללכלך את הידיים. בזכות פיתוח מבוסס AI זה קורה מהר, ותקבלו גרסה ראשונה לבדיקה כבר אחרי כמה ימים, לא חודשים.",
  },
  {
    title: "בקרת איכות",
    text: "מהר זה לא על חשבון איכות. בדיקות אוטומטיות, בדיקות ידניות ובדיקות על כל מכשיר אפשרי, כדי שלא יהיו הפתעות ביום ההשקה.",
  },
  {
    title: "עלייה לאוויר",
    text: "היום הגדול הגיע, לאחר שעברנו ביחד את הדרך למוצר המושלם עבורכם, באה העת ליהנות מהפירות. לחיים!",
  },
];

const Process = () => (
  <section className="mt-28 lg:mt-36">
    <div className="grid lg:grid-cols-2 gap-x-16 gap-y-5 items-end mb-12">
      <h2 className="font-display font-extrabold text-4xl sm:text-5xl">תהליך העבודה</h2>
      <p className="text-lg text-ink-soft max-w-xl">
        AI לא מחליף את התהליך, הוא מאיץ אותו. ככה מגיעים לאוויר מהר, בלי לדלג
        על אף שלב.
      </p>
    </div>
    <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
      {STEPS.map(({ title, text }, i) => (
        <li key={title} className="border-t-2 border-ink pt-5">
          <span className="font-display font-extrabold text-coral text-4xl tabular-nums">
            {i + 1}
          </span>
          <h3 className="mt-2 font-display font-bold text-xl">{title}</h3>
          <p className="mt-2 text-ink-soft leading-relaxed">{text}</p>
        </li>
      ))}
    </ol>
  </section>
);

export default Process;
