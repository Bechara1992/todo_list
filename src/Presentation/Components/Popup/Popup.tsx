import { Fragment, ReactNode } from "react";
import { Dialog, DialogPanel, Transition } from "@headlessui/react";

interface IPopupProps {
  open: boolean;
  closePopup: () => void;
  title: string;
  children: ReactNode;
}

const Popup = ({ open, closePopup, title, children }: IPopupProps) => {
  return (
    <Transition
      show={open}
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      data-testid="create-game"
    >
      <Dialog as="div" className="dialog" onClose={() => {}}>
        <div className="dialog_content">
          <button className="close_button" onClick={closePopup}>
            X
          </button>
          <h2>{title}</h2>
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              {children}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Popup;
