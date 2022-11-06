import { useState } from "react";
import ContactIcons from "../ContactIcons";
import Logo from "../Logo";
import { headerData } from "./data";
import NavLinks from "./NavLinks";
import { BiMenuAltRight } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <header
        className={`fixed ${
          !drawerOpen ? "hidden" : ""
        } sm:block z-20  inset-0 sm:bottom-auto mx-auto px-10 py-5 ${
          headerData.desktopHeightClass
        }`}
      >
        <div
          className={`flex flex-col sm:flex-row justify-center h-full sm:justify-between items-center gap-y-8 ${headerData.maxWidthClass}`}
        >
          <nav className="flex flex-col sm:flex-row items-center gap-10">
            <div className="hidden sm:block">
              <Logo />
            </div>
            <NavLinks />
          </nav>
          <ContactIcons />
        </div>
      </header>
      <div
        className={`${
          drawerOpen ? "block" : "hidden"
        } bg-black/20 fixed inset-0 z-10`}
        style={{ backdropFilter: "blur(16px)" }}
      />
      <button
        className={`sm:hidden fixed top-0 right-0 m-3 z-20 w-10 h-10 ${
          drawerOpen ? "bg-white/30" : "bg-white shadow"
        } flex items-center justify-center rounded-full text-gray-600 text-2xl`}
        onClick={toggleDrawer}
      >
        {drawerOpen ? (
          <span className="text-lg">
            <AiOutlineClose />
          </span>
        ) : (
          <BiMenu />
        )}
      </button>
    </>
  );
};

export default Header;
