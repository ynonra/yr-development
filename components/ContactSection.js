import { useState, useRef } from "react";

import Image from "next/image";
import AppButton from "./AppButton";
import HashLinkAnchor from "./HashLinkAnchor";

const ContactSection = ({ title = "בואו נדבר" }) => {
  const phoneRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const validate = () => {
    const phone = phoneRef.current.value.replace(/\D/g, "");
    return /^\d{7,10}$/.test(phone);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const isValid = validate();
    if (!isValid) {
      return setError("המספר אינו תקין");
    }

    setError("");
    setLoading(true);

    const formData = new FormData(event.target);

    formData.append("access_key", "2ad98ffd-6417-4ee2-a95c-d74a7b29cb68");
    formData.append("subject", "פנייה מהאתר שלי!");
    formData.append("from_name", "Someone");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());
    setLoading(false);

    if (res.success) {
      setSuccess(true);
    } else {
      setSuccess(false);
      setError("אירעה שגיאה בלתי צפויה. אנא שלחו לי הודעה בוואצאפ :)");
    }
  };

  const clearError = () => setError("");

  return (
    <section className="flex max-sm:flex-col justify-around items-center py-10 mx-auto text-center mt-20 max-w-4xl">
      <HashLinkAnchor id="contact" />
      <h2 className="sm:hidden text-4xl font-bold mb-2 relative">
        <div className="absolute -z-10 bg-appRed-500 h-4 bottom-0 right-0 w-24"></div>
        {title}
      </h2>
      <form
        onSubmit={onSubmit}
        className="flex flex-col w-full items-center text-center max-sm:order-3"
      >
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
            name="phone"
            id="phone"
            ref={phoneRef}
            onChange={clearError}
          />
          <AppButton
            disabled={loading || success}
            className="inset-px right-auto absolute"
            withoutTransition
          >
            {loading ? "היונה בדרך..." : success ? "הגיעה :)" : "דבר אליי ;)"}
          </AppButton>
        </div>
        {error ? <div className="mt-2 text-appRed-500">{error}</div> : null}
      </form>
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
