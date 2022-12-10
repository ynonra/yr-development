import { Fragment, useState, useEffect } from "react";
import ContactIcons from "../ContactIcons";
import Logo from "../Logo";
import { headerData } from "./data";
import NavLinks from "./NavLinks";
import { IoMdMenu } from "react-icons/io";
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
      {/* gradient - background */}
      <div className="absolute top-0 inset-x-0 h-[650px] md:h-[730px] bg-gradient-to-b md:bg-gradient-to-l from-appPurple-500 to-appPurple-700 rounded-br-[5.8rem] md:rounded-br-[18rem] -z-10" />
      {/* *********** */}
      {/* FOR DESKTOP */}
      {/* *********** */}

      <header
        className={`z-20 inset-0 bottom-auto px-4 sm:px-10 py-5 text-white ${headerData.desktopHeightClass}`}
      >
        <div
          className={`flex flex-row mx-auto h-full justify-between items-center gap-y-8`}
        >
          <div className="flex items-center gap-2">
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 border border-white text-white rounded-full"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              <IoMdMenu className="w-6 h-6" />
            </button>
            <ContactIcons className="md:w-36" />
          </div>
          <nav className="hidden md:flex flex-row items-center gap-10">
            <NavLinks closeDrawer={closeDrawer} />
          </nav>
          <div className="flex justify-end md:w-36">
            <Logo stroke="white" />
          </div>
        </div>
      </header>

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
              className="fixed inset-0 bg-white/90"
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
