import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ContactIcons from "./ContactIcons";
import ContactSection from "./ContactSection";

const ContactDialog = ({ open, onClose }) => {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-30" onClose={onClose}>
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
                <ContactSection title="מה המספר שלך ?" dialogMode />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ContactDialog;
