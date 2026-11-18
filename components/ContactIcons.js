import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";

// Both icons share one style; tone="dark" is for the navy contact panel.
const TONES = {
  light: "bg-ink text-white hover:bg-coral-ink",
  dark: "bg-white/10 text-white ring-1 ring-white/15 hover:bg-coral-ink hover:ring-coral-ink",
};

const ContactIcons = ({ reverse = false, tone = "light" }) => {
  const icon = `flex items-center justify-center w-10 h-10 rounded-full transition-colors ${TONES[tone]}`;

  return (
    <section
      className={`flex items-center gap-4 text-xl ${
        reverse ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <a
        href="https://www.linkedin.com/in/yinon-rahamim/"
        target="_blank"
        rel="noreferrer"
        className={icon}
        aria-label="LinkedIn"
      >
        <AiFillLinkedin size="1.05em" />
      </a>
      <a href="mailto:ynonra@gmail.com" className={icon} aria-label="אימייל">
        <AiOutlineMail size="1.05em" />
      </a>
    </section>
  );
};

export default ContactIcons;
