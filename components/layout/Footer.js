import Link from "next/link";
import ContactIcons from "../ContactIcons";
import Logo from "../Logo";
import { footerData } from "./data";
import NavLinks from "./NavLinks";

const Footer = () => {
  return (
    <footer className="px-10 py-5 w-full">
      <div
        className={`flex flex-col mx-auto gap-5 ${footerData.maxWidthClass}`}
      >
        <section className="hidden sm:flex items-center justify-between">
          <Logo />
          <NavLinks />
        </section>
        <hr />
        <section className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-y-4 my-2 sm:my-0">
          <ContactIcons reverse inverted />
          <div className="sm:hidden my-8">
            <NavLinks />
          </div>
          <Link target="_blank" href="https://sensei.art">
            UX/UI Design by sensei.art
          </Link>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
