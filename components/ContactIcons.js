import { AiOutlineMail, AiFillPhone, AiOutlineWhatsApp } from "react-icons/ai";

const ContactIcons = () => {
  return (
    <section className="flex items-center gap-6 text-xl">
      <a
        href="tel:0586741194"
        className="flex items-center justify-center w-10 h-10 bg-appRed-500 text-white rounded-full"
      >
        <AiFillPhone />
      </a>
      <a
        href="https://wa.me/972586741194"
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full"
      >
        <AiOutlineWhatsApp />
      </a>
      <a
        href="mailto:ynonra@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full"
      >
        <AiOutlineMail />
      </a>
    </section>
  );
};

export default ContactIcons;
