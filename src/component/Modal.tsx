import { useState } from "react";
interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  title: string;
}

const Modal = ({ children, isOpen, setIsOpen, title }: Props) => {
  return (
    <div>
      <h1>{title}</h1>

      {isOpen && (
        <div
          className=" fixed z-10 flex justify-center  min-h-screen items-center 
          inset-0 overflow-y-auto bg-black"
        >
          <div className=" bg-white w-[60%] relative h-56 text-black p-5">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-0 right-0 p-2 bg-red-400"
            >
              close
            </button>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};
export default Modal;
