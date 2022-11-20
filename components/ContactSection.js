import Image from "next/image";
import AppButton from "./AppButton";
import HashLinkAnchor from "./HashLinkAnchor";

const ContactSection = ({ title = "בואו נדבר" }) => {
  return (
    <section className="flex max-sm:flex-col justify-around items-center py-10 mx-auto text-center mt-20 max-w-4xl">
      <HashLinkAnchor id="contact" />
      <h2 className="sm:hidden text-4xl font-bold mb-2 relative">
        <div className="absolute -z-10 bg-appRed-500 h-4 bottom-0 right-0 w-24"></div>
        {title}
      </h2>
      <div className="flex flex-col w-full items-center text-center max-sm:order-3">
        <h2 className="max-sm:hidden text-4xl font-bold mb-2">{title}</h2>
        <span className="text-lg text-gray-400 italic font-light max-sm:w-40">
          שלחו לי מספר טלפון. אחזור אליכם בהקדם
        </span>
        <div className="mt-8 sm:mt-14 flex relative w-11/12 sm:w-80 h-14 p-2 border-2 border-appRed-500/40 rounded-lg">
          <input
            className="text-lg placeholder:font-thin text-center absolute inset-0 left-24 px-3 outline-none rounded-lg"
            maxLength={12}
            type="tel"
            placeholder="05X-XXX-XXXX"
          />
          <AppButton className="inset-px right-auto absolute" withoutTransition>
            דבר אליי ;)
          </AppButton>
        </div>
      </div>
      <div className="relative w-96 h-72 sm:w-[29rem] sm:h-[29rem]">
        <Image
          src="/images/finish-line.svg"
          fill
          alt="contact-me"
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default ContactSection;
