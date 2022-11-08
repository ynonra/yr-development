import { useState } from "react";
import ContactIcons from "../ContactIcons";
import Logo from "../Logo";
import { headerData } from "./data";
import NavLinks from "./NavLinks";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <header
        className={`fixed ${
          !drawerOpen ? "hidden" : ""
        } sm:block z-20  inset-0 sm:bottom-auto px-10 py-5 sm:bg-white ${
          headerData.desktopHeightClass
        }`}
      >
        <div
          className={`flex flex-col sm:flex-row mx-auto justify-center h-full sm:justify-between items-center gap-y-8 ${headerData.maxWidthClass}`}
        >
          <nav className="flex flex-col sm:flex-row items-center gap-10">
            <div className="hidden sm:block">
              <Logo />
            </div>
            <NavLinks closeDrawer={closeDrawer} />
          </nav>
          <ContactIcons />
        </div>
      </header>
      {/* ********** */}
      {/* FOR MOBILE */}
      {/* ********** */}

      {/* Blur background */}
      <div
        className={`${
          drawerOpen ? "block" : "hidden"
        } bg-white/70 fixed inset-0 z-10`}
        style={{ backdropFilter: "blur(16px)" }}
      />
      {/* Toggle button */}
      <button
        className={`sm:hidden fixed top-0 right-0 m-3 z-20 w-14 h-14 ${
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
