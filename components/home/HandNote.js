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
  // swoops up and to the left
  "up-left": <path d="M70 50 C 56 26, 38 14, 14 12 M14 12 L 25 4 M14 12 L 26 20" />,
};

const HandNote = ({ children, arrow, className = "", arrowClassName = "" }) => (
  <div className={`font-hand leading-snug ${className}`}>
    <span className="block -rotate-3">{children}</span>
    {arrow && (
      <svg
        viewBox="0 0 80 56"
        className={`w-16 h-12 ${arrowClassName}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {ARROWS[arrow]}
      </svg>
    )}
  </div>
);

export default HandNote;
