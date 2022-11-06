import Link from "next/link";
import ContactIcons from "../ContactIcons";
import Logo from "../Logo";
import { footerData } from "./data";
import NavLinks from "./NavLinks";

const Footer = () => {
  return (
    <footer className="mx-auto px-10 py-5 w-full">
      <div className={`flex flex-col gap-5 ${footerData.maxWidthClass}`}>
        <section className="hidden sm:flex items-center justify-between">
          <Logo />
          <NavLinks />
        </section>
        <hr />
        <section className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-y-4">
          <ContactIcons />
          <Link href="sensei.art">UX/UI Design by sensei.art</Link>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
