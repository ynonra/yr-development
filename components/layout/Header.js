import { Fragment, useState, useEffect } from "react";
import ContactIcons from "../ContactIcons";
import Logo from "../Logo";
import { headerData } from "./data";
import NavLinks from "./NavLinks";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Dialog, Transition } from "@headlessui/react";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // useEffect(() => {
  //   console.log("useEffect", drawerOpen);
  //   if (drawerOpen) {
  //     document.documentElement.style.overflow = "hidden";
  //   } else {
  //     document.documentElement.style.overflow = "";
  //   }
  // }, [drawerOpen]);

  const toggleDrawer = () => {
    console.log("toggleDrawer, from", drawerOpen);
    setDrawerOpen((open) => !open);
  };
  const closeDrawer = () => {
    console.log("closeDrawer");
    setDrawerOpen(false);
  };
  const openDrawer = () => {
    setDrawerOpen(true);
  };

  return (
    <>
      {/* *********** */}
      {/* FOR DESKTOP */}
      {/* *********** */}

      <header
        className={`hidden sm:block z-20  inset-0 bottom-auto px-10 py-5 bg-white ${
          headerData.desktopHeightClass
        }`}
      >
        <div
          className={`flex flex-row mx-auto h-full justify-between items-center gap-y-8 ${headerData.maxWidthClass}`}
        >
          <nav className="flex flex-row items-center gap-10">
            <div className="block">
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

      {/* Toggle button */}
      <button
        className={`sm:hidden fixed top-0 right-0 m-3 z-20 w-14 h-14 flex items-center justify-center rounded-full text-gray-600 text-2xl`}
        onClick={toggleDrawer}
      >
        {/* blur background */}
        <div
          className={`absolute w-full h-full rounded-full ${
            drawerOpen ? "" : "bg-appRed-100/60"
          }`}
          style={
            !drawerOpen
              ? {
                  backdropFilter: "blur(4px)",
                  WebkitBackdropFilter: "blur(4px)",
                }
              : {}
          }
        />
        <BiMenu className="z-10" />
      </button>

      <Transition appear show={drawerOpen} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={closeDrawer}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in delay-200 duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-white/70"
              style={{
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
              }}
            />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-500"
                enterFrom="opacity-0 scale-105"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="transform overflow-hidden transition-all">
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
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Header;
