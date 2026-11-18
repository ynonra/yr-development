// A short handwritten aside with a drawn arrow. Used sparingly (3 on the homepage).
const ARROWS = {
  // curls down and to the left, toward something below the note
  "down-left": (
    <path d="M70 6 C 58 30, 40 40, 14 44 M14 44 L 26 34 M14 44 L 27 52" />
  ),
  // curls down and to the right
  "down-right": (
    <path d="M10 6 C 22 30, 40 40, 66 44 M66 44 L 54 34 M66 44 L 53 52" />
  ),
  // rises from lower left and ends pointing straight up, tip at (52, 4)
  "up-right": <path d="M18 54 C 20 30, 52 36, 52 4 M52 4 L 45 13 M52 4 L 59 13" />,
};

const HandNote = ({ children, arrow, className = "", arrowClassName = "" }) => {
  const svg = arrow && (
    <svg
      viewBox="0 0 80 56"
      className={`block w-16 h-12 ${arrowClassName}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ARROWS[arrow]}
    </svg>
  );
  // "up" arrows sit above the note, pointing at something above it
  const above = arrow?.startsWith("up");

  return (
    <div className={`font-hand font-normal leading-snug ${className}`}>
      {above && svg}
      <span className="block -rotate-3">{children}</span>
      {!above && svg}
    </div>
  );
};

export default HandNote;
