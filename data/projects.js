import { techTypes } from "./technologies";

export const PROJECTS_DATA = [
  {
    slug: "classweekly",
    logoFilename: "classweekly.png",
    logoScale: 1,
    title: "ClassWeekly",
    inShort: "אתר מכירות של דפי עבודה לתלמידי גן ויסודי במגוון נושאים",
    customerNeed:
      "הלקוח שמגיע מתחום ההוראה, חיפש דרך להקל על מורים להכין דפי עבודה לתמידים בכיתות השונות. מטבע הדברים הכנת דפי העבודה היא משימה מאתגרת ויומיומית, ועדיין לא נמצא בשוק פיתרון טוב שעונה על הצורך הבסיסי הזה של מורים ברחבי העולם.\nבנוסף, הלקוח דרש פיתוח מערכת ניהול לצורך העלאת תכנים, צפייה במידע וסטטיסטיקות, ועוד.",
    developmentProcess:
      "הלקוח פנה אלי לאחר שחווה אכזבה ממפתח קודם, לאחר שנמצאו כשלים משמעותיים באופן הפיתוח שלו. העיצוב והאיפיון היו מוכנים, וכל שנותר הוא לפתח שוב מאפס בצורה מקצועית וזריזה.\nבצד הלקוח, הפיתוח נעשה ב-NextJs, עם שילוב של tailwind לצורך עיצוב מדוייק ואיכותי.\nבצד השרת השתמשתי בטכנולוגיות מגוונות על מנת להבטיח ביצועים גבוהים ואבטחה מקסימלית.",
    technologies: [techTypes.nextjs, techTypes.tailwindcss],
    impact:
      "המוצר נתן למורים ברחבי העולם כלי עבודה נוח ומקצועי. כמו כן, המוצר קיבל תגובות חיוביות רבות מהמשתמשים, ונכון לכתיבת שורות אלה, המיזם נמצא עמוק בתוך תהליך השיווק. בהצלחה !",
    links: { websiteUrl: "https://classweekly.com" },
  },
  {
    slug: "vogo",
    logoFilename: "vogo-big.svg",
    logoScale: 0.9,
    title: "ווגו",
    inShort:
      "מערכת המקשרת בין עובדי היטק מתחילים לבין עמותות הצריכות מוצר טכנולוגי. המתלמדים לומדים לעבוד בצוות עם שאר התפקידים השונים, יחד עם ליווי מקצועי של אנשי מקצוע, ובסופו של דבר מוציאים מוצר בעל ערך משמעותי וחיובי.",
    customerNeed:
      "הלקוחות הינם יזמים צעירים הבאים מתחום ההיטק, שרצו לסייע למתלמדים רבים בעולם הפיתוח למצוע עבודה ולהיכנס לשוק. כיום המתחילים בפיתוח סובלים מקושי רב בכניסה לשוק, על אחת כמה וכמה עם המצב הנוכחי בשוק.\nעל כן התבקשתי לפתח עבור המיזם מערכת שתנהל את המשתמשים ואת עבודות הפיתוח הדרושות מהעמותות, תאפשר למתלמדים להגיש בקשה להצטרפות לפרוייקט, ותנהל את העמותות השונות.",
    developmentProcess:
      "תהליך הפיתוח כלל איפיון פיתוח ובדיקות, ועיצוב האתר התקבל ממעצבת מטעם הלקוח.\nבצד הלקוח, הפיתוח נעשה ב-React, עם סיפריית material.\nבצד שרת השתמשתי בnodejs. כמו כן השתמשתי בשירותים של firebase לצורך הזדהות, sendgrid לצורך שליחת מיילים, cloudinary לצורך העלאת וקבלת תמונות, ובבסיס נתונים mongo.",
    technologies: [
      techTypes.nodejs,
      techTypes.firebase,
      techTypes.mongodb,
      techTypes.cloudinary,
      techTypes.react,
      techTypes["material-ui"],
    ],
    impact:
      "כתוצאה מהמוצר, הרישום של אנשי מקצוע ועמותות הפך לנוח, אלגנטי ומסודר, מה שתרם לפרסום הפלטפורמה ולחשיפתה משני סוגי המשתמשים. כמו כן ממשק הניהול הנוח יצר סביבת ניהול מאורגנת ונקייה, שמאפשרת למנהלים להתעסק במה שחשוב באמת ולהזניק את העסק קדימה.",
    links: { websiteUrl: "https://vogo-impact.com" },
  },
  {
    slug: "simana",
    logoFilename: "סימנא.svg",
    title: "סימנא",
    inShort:
      "יישומון אינטרנטי המציע דרך קלילה ומהנה ללימוד טעמי מקרא וקריאה בתורה. מתאים גם למתחילים וגם לותיקים. ניתן לפתוח בפרשת השבוע, לשנות עיצוב, לשמור סימניות, לשמוע וללמוד טעמים בשלושת הנוסחים העיקריים, ועוד",
    customerNeed:
      "היישומון הזה פותח ביוזמה שלי. בתור קורא בתורה לעיתים, נוכחתי לדעת שאין דרך מספיק קלה ונוחה (ומהנה!) ללימוד טעמי המקרא וללימוד קריאת התורה, יחסית לאפשרויות הרבות שהטכנולוגיה בזמננו מציעה. בנוסף, היישומונים הקודמים הציגו את הדף שלא בצורתו השכיחה, מה שהקשה על הלימוד.\nעל כן נרתמתי לפתח אפליקציה שתהיה נוחה לשימוש, אינטואיטיבית, בעלת עיצוב יותר 'צעיר', ובצורת הדף המקורית של ספר תורה, שמתאימה למתלמדים מתחילים הכוללת מדריך בתחילת היישומון ולימוד טעמים בנוסחים הנפוצים בציבור.",
    developmentProcess:
      'תהליך הפיתוח כלל איפיון פיתוח ובדיקות, ועיצוב האתר נעשה ע"י אריאל לוק.\nבצד הלקוח, הפיתוח נעשה ב-React, עם סיפריית material. בנוסף השתמשתי בטכנולוגיית PWA, מה שאומר שהפיתוח נגיש גם בחניות האפליקציות וגם כאתר אינטרנט, דבר שהנגיש את היישומון לשלל סוגי משתמשים, הן בטלפונים חכמים והן במחשב.\nבצד שרת השתמשתי בnodejs.',
    technologies: [
      techTypes.nodejs,
      techTypes.react,
      techTypes["material-ui"],
      techTypes.pwa,
    ],
    impact:
      "הוצאת המוצר לאור יצרה ממש הד ציבורי, מה שמעיד על הצורך הגדול שהוא בא לפתור\nהמון תגובות חיוביות, הורדות, ואפילו כמה תותחים שתרמו לצורך המשך פיתוח",
    links: {
      websiteUrl: "https://tikunkorim.co.il",
      googlePlayUrl:
        "https://play.google.com/store/apps/details?id=il.co.tikunkorim.www.twa",
      appStoreUrl:
        "https://apps.apple.com/us/app/סימנא-תיקון-קוראים/id6443906764?platform=iphone",
    },
  },
  {
    slug: "memdalet",
    logoFilename: "מם-דלת.gif",
    title: "מ.ד. הדפסות",
    inShort:
      "חנות אינטרנטית להדפסה על פרטי לבוש. המשתמש בוחר את פרטי המוצר, מעלה קובץ גלופה, וממלא פרטים. באזור ניהול מנהלי אתר יכולים לנהל את כל ההזמנות, לצפות בסטטיסטיקות, לשלוח לחברת משלוחים בקשה למשלוח, ועוד",
    customerNeed:
      "לפני פיתוח האתר, כל ניהול ההזמנות והלקוחות של העסק (שהיה אז בתחילת דרכו) התבצע בצורה ידנית ולא מסודרת באמצעות קבצי אקסל, התכתבויות בWhatsapp-, ובעל פה. אתם יכולים לנחש שהתנהלות כזו הובילה לאיבוד מידע, איבוד זמן, מתח נפשי גבוה, טעויות בהזמנות, מוניטין שלא ממריא, וכו׳…\nעל כן הלקוח ביקש לפתח עבורו מערכת ניהול ייחודית לעסק שלו, שתכלול ביצוע הזמנות דרך האתר (ולא עוד דרך הWhatsapp!), ניהול ומעקב אחרי הזמנות, ניהול מוצרים ומלאי, התממשקות לחברת משלוחים בלחיצת כפתור, שמירת נתונים לצורך סטטיסטיקות, מעקב אחרי מאזן הכנסות, וניהול משתמשים וכרטיסי מועדון, יצירת קשר מקוונת (והיד עוד נטויה…).",
    developmentProcess:
      "תהליך הפיתוח כלל איפיון פיתוח ובדיקות, ועיצוב האתר התקבל ממעצבת מטעם הלקוח.\nבצד הלקוח, הפיתוח נעשה ללא כל framework, אלא ממש vanila javascript, html, css. (שזה היה ממש קשה אבל מחשל :) )\nבצד שרת השתמשתי בnodejs. כמו כן השתמשתי בשירותי ה-api של חברת המשלוחים צ׳יטה.",
    technologies: [
      techTypes.nodejs,
      techTypes.javascript,
      techTypes.html,
      techTypes.css,
    ],
    impact:
      "פיתוח המערכת יצר ללקוח סביבת עבודה נוחה, מהירה ומודרנית, ללא צורך להתעסק בתפל (כי בשביל זה יש מחשבים, לא?). כמו כן שביעות הרצון של הלקוחות מהמערכת הביאה לפרסום מפה לאוזן, לעליה משמעותית במכירות. בנוסף, הצגת נתוני הסטטיסטיקות באתר אפשרה ללקוח לנתח את השוק בצורה מיטבית ולחזות התנהגות לקוחות עתידית.",
    links: { websiteUrl: "https://memdalet.co.il" },
  },
  {
    slug: "kaf-hachaim",
    logoFilename: "כף החיים.png",
    logoScale: 0.6,
    title: "כף החיים",
    inShort:
      "אפליקציה שמגישה את הספר 'כף החיים' בתצוגה נוחה ומזמינה, ניווט קל בין חלקי הספר, אפשרות חיפוש, סימניות, היסטוריה, ועוד",
    customerNeed:
      "היישומון כף החיים פותח ביוזמתי, לאחר ששמתי לב שלמרות ביקושו הרב - טרם נמצא בחנויות האפליקציות. בתור תלמיד ישיבה, ספר זה הוא חובה במסגרת לימודי הלכה, בהירותו והיקפו מושכים רבים ללמוד בו. ומכיוון שעל פי רוב הרבה יותר קל לקחת את הפלאפון מאשר להסתכל לכיוון הספר (רגע של כנות...) יישומון כזה היה ממש צורך לאנשים רבים.",
    developmentProcess:
      "תהליך הפיתוח כלל איפיון פיתוח ובדיקות. היה מאתגר מצד אחד להציג את כל התוכן של הספר (כ-10 כרכים!) ומצד שני לאפשר חוויה קלילה ולא עמוסה. זה בא לידי ביטוי לדוגמא בתיבת חיפוש שהוספנו, בתוכן עניינים מסוגנן, ובזכירה של הדפים האחרונים שביקרו בהם. ייעוץ עיצוב ניתן מאריאל לוק.\nהפיתוח נעשה ב-React Native, עם סיפריית Paper. כל המידע של האפליקציה (סימניות, היסטוריה, העדפות סגנון) נשמר מקומית במכשיר.",
    technologies: [techTypes["react-native"], techTypes["react-native-paper"]],
    impact:
      "היישומון התקבל בציבור בשמחה ואהדה רבה, המון תגובות חיוביות ומעודדות, שבעיקר הדגישו נוחות, יופי, וחוויית משתמש ראויים לשבח.",
    links: {
      googlePlayUrl: "https://play.google.com/store/apps/details?id=com.kaf",
    },
  },
  {
    slug: "birkat-eliyahu",
    title: 'בד"ץ ברכת אליהו',
    logoFilename: "ברכת אליהו.svg",
    logoScale: 0.9,
    inShort:
      'אתר תדמיתי וניהולי לצורך פרסום הבד"ץ מחד, ומאידך מספק מערכת ניהול נוחה וייחודית',
    customerNeed:
      'בד"ץ ברכת אליהו ביקש להקים פלטפורמה תדמיתית שתשרת את הארגון לצורך פרסום. לאחר שיח והכרת הצרכים, הצעתי לפתח גם מערכת המיועדת לניהול לקוחות, עסקים, הפקת תעודות כשרות, תשלומים, ופניות ציבור',
    developmentProcess:
      'תהליך הפיתוח כלל איפיון פיתוח ובדיקות. עוצב ע"י אריאל לוק.\nהפיתוח נעשה ב-Nextjs, עם סיפריית Material-UI. הזדהות באמצעות Google cloud.',
    technologies: [
      techTypes.nextjs,
      techTypes["material-ui"],
      techTypes["google-cloud"],
    ],
    impact:
      "האתר תורם לפרסום הארגון, במיוחד לאחר שטיפס בתוצאות החיפוש בגוגל.\nכמו כן משמש ככלי עזר ניהולי",
    links: {},
  },
  {
    slug: "squadd",
    title: "Squadd",
    logoFilename: "squadd-big.png",
    inShort:
      "ישומון רשת חברתית שבא להפחית את ההתמכרות לרשת ולעודד את המשתמשים ליצור קשרים אמיתיים",
    customerNeed:
      "בימינו גוברת המודעות להשלכות הרעות של החיים הוירטואלים - מתח נפשי, לחץ חברתי, חוסר ביטחון עצמי, עידוד תכנים קיצוניים, חוסר תקשורת בין-אישית, בזבוז זמן, ועוד ועוד...\nעל כן ביקשו היזמים לפתח אפיקציית רשת חברתית שתהווה תחליף לפלטפורמות הקיימות, תמעיט את התלותיות הרעה שיש למשתמשים ברשת, ותעודד קשרים בין אישיים אמיתיים.",
    developmentProcess:
      "תפקידי במיזם הינו בצד הלקוח. ישנם גם מפתח צד שרת ומעצב.\nהיישומון פותח בטכנולוגיית React Native עם סיפריית UI-Lib",
    technologies: [techTypes["react-native"], techTypes.RNUILib],
    impact: "",
    links: {},
  },
];
