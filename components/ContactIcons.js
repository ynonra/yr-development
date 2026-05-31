import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";

const ContactIcons = ({ reverse = false }) => {
  return (
    <section
      className={`flex items-center gap-6 text-xl ${
        reverse ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <a
        href="https://www.linkedin.com/in/ינון-רחמים-yinon-rahamim-328a9620a"
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center w-10 h-10 bg-appRed-500 text-white rounded-full"
        aria-label="linkedin"
      >
        <AiFillLinkedin size={"1.1em"} />
      </a>
      <a
        href="mailto:ynonra@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full"
        aria-label="email"
      >
        <AiOutlineMail />
      </a>
    </section>
  );
};

export default ContactIcons;