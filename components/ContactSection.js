import { useState, useRef } from "react";

import AppButton from "./AppButton";
import HashLinkAnchor from "./HashLinkAnchor";
import { useRouter } from "next/router";
import ContactIcons from "./ContactIcons";
import HandNote from "./home/HandNote";

const ContactSection = ({ title = "בואו נדבר", dialogMode = false }) => {
  const phoneRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const router = useRouter();

  const validate = () => {
    const phone = phoneRef.current.value.replace(/\D/g, "");
    if (phone === "6504992804")
      return alert("contact via email please - ynonra@gmail.com");
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
      router.push("/we-will-speak-soon");
    } else {
      setError("אירעה שגיאה בלתי צפויה. אנא שלחו לי הודעה בוואצאפ :)");
    }
  };

  const clearError = () => setError("");

  if (dialogMode) {
    return (
      <section className="flex flex-col items-center py-10 mx-auto text-center max-w-4xl min-w-[300px]">
        <form
          onSubmit={onSubmit}
          className="flex flex-col w-full items-center text-center"
        >
          <h2 className="font-display text-4xl font-bold mb-2">{title}</h2>
          <div className="mt-8 flex relative w-11/12 sm:w-80 h-14 p-2 border-2 border-appRed-500/40 rounded-lg">
            <input
              className="text-lg text-center absolute inset-0 left-24 px-3 outline-hidden rounded-lg"
              maxLength={12}
              type="tel"
              placeholder="05X-XXX-XXXX"
              name="phone"
              id="phone-dialog"
              aria-label="מספר טלפון"
              ref={phoneRef}
              onChange={clearError}
            />
            <AppButton
              disabled={loading}
              className="inset-px right-auto absolute"
              withoutTransition
            >
              {loading ? "היונה בדרך..." : "דבר אליי ;)"}
            </AppButton>
          </div>
          {error ? <div className="mt-2 text-coral-ink">{error}</div> : null}
          <div className="mt-8">
            <ContactIcons />
          </div>
        </form>
      </section>
    );
  }

  return (
    <section className="relative mt-28 lg:mt-36 -mx-4 sm:mx-0 overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-night text-white px-6 py-14 sm:px-14 sm:py-20">
      <HashLinkAnchor id="contact" />
      <div
        aria-hidden="true"
        className="hidden sm:block absolute -left-24 -bottom-28 w-[26rem] h-[26rem] rounded-full bg-peri"
      />
      <div className="relative max-w-xl">
        <h2 className="font-display font-extrabold text-5xl sm:text-6xl">{title}</h2>
        <p className="mt-4 text-lg text-white/70">
          שלחו לי מספר טלפון. אחזור אליכם בהקדם.
        </p>
        <form onSubmit={onSubmit} className="mt-9">
          <label htmlFor="phone" className="sr-only">
            מספר טלפון
          </label>
          <div className="flex items-center gap-2 max-w-md rounded-full bg-white p-1.5 focus-within:ring-2 focus-within:ring-coral">
            <input
              className="min-w-0 flex-1 bg-transparent px-4 text-lg text-ink placeholder:text-ink-soft/60 outline-hidden"
              maxLength={12}
              type="tel"
              placeholder="05X-XXX-XXXX"
              name="phone"
              id="phone"
              ref={phoneRef}
              onChange={clearError}
            />
            <button
              type="submit"
              disabled={loading}
              className="shrink-0 rounded-full bg-coral text-white font-semibold px-6 py-3 transition-colors hover:bg-coral-ink disabled:opacity-70 cursor-pointer"
            >
              {loading ? "היונה בדרך..." : "דבר אליי ;)"}
            </button>
          </div>
          {error ? (
            <p role="alert" className="mt-3 text-coral">
              {error}
            </p>
          ) : null}
        </form>
        <HandNote className="mt-6 text-lg text-peri">
          מבטיח לא להציק. טוב, אולי קצת.
        </HandNote>
        <div className="mt-10 flex items-center gap-4 text-white/70">
          <span>או ישירות:</span>
          <ContactIcons />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
