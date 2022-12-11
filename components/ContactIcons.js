import { AiFillMail, AiFillPhone, AiFillWechat } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
const ContactIcons = ({
  inverted = false,
  reverse = false,
  className = "",
}) => {
  return (
    <section
      className={`flex items-center gap-2 text-xl ${
        reverse ? "flex-row-reverse" : "flex-row"
      } ${className}`}
    >
      <a
        href="tel:0586741194"
        className={`hover:outline hover:outline-2 outline-offset-1 flex items-center justify-center w-9 h-9 border ${
          inverted ? "border-black text-black" : "border-white text-white"
        } rounded-full`}
        aria-label="phone"
      >
        <AiFillPhone />
      </a>
      <a
        href="mailto:ynonra@gmail.com"
        target="_blank"
        rel="noreferrer"
        className={`hover:outline hover:outline-2 outline-offset-1 flex items-center justify-center w-9 h-9 border ${
          inverted ? "border-black text-black" : "border-white text-white"
        } rounded-full`}
        aria-label="email"
      >
        <AiFillMail />
      </a>
      <a
        href="https://wa.me/972586741194"
        target="_blank"
        rel="noreferrer"
        className="hover:outline hover:outline-2 outline-offset-1 outline-appRed-500 flex items-center justify-center w-9 h-9 bg-appRed-500 text-white rounded-full"
        aria-label="whatsapp"
      >
        <IoLogoWhatsapp size={"1.1em"} />
      </a>
    </section>
  );
};

export default ContactIcons;
