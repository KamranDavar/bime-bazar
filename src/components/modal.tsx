"use client";
import { MouseEvent, useState } from "react";
import Close from "../../public/close.svg";
import { UseFormResetField, UseFormRegister } from "react-hook-form";
import { AddressType, InputsType } from "@/app/types";

type ModalProps = {
  resetField: UseFormResetField<InputsType>;
  register: UseFormRegister<InputsType>;
  addresses: AddressType[];
};

function Modal({ resetField, register, addresses }: ModalProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(true);
  };
  const closeModal = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    resetField("addressId");
    setIsOpen(false);
  };

  const handleBlurClick = (e: MouseEvent<HTMLDivElement>) => {
    const targetElement = e.target as HTMLElement;
    if (isOpen && targetElement.classList.contains("bg-blur")) {
      setIsOpen(false);
      resetField("addressId");
    }
  };
  const onSelectButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={openModal}
        className="text-black text-center text-base font-semibold leading-6 whitespace-nowrap bg-amber-300 self-center w-full items-center mt-8 px-5 py-4"
      >
        انتخاب از آدرس‌های من
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 flex items-end sm:items-center justify-center bg-blur"
          onClick={handleBlurClick}
        >
          <section className="bg-white flex flex-col items-stretch min-w-full sm:min-w-fit  h-fit">
            <header className="items-center flex w-full flex-col mt-6 pb-2  rounded-t-lg px-5 border-b border-gray-200">
              <div className="flex justify-between gap-5 w-full">
                <button onClick={closeModal}>
                  <img src={Close.src} />
                </button>
                <h1 className="text-black text-right text-base font-medium leading-6 whitespace-nowrap mr-0">
                  انتخاب آدرس
                </h1>
              </div>
            </header>
            <div className="self-stretch flex w-full justify-between gap-4 -mr-5 px-5">
              <div className="flex grow basis-[0%] flex-col my-5">
                {addresses.map((item) => (
                  <div key={item.id}>
                    <p className="text-neutral-500 text-right text-xs leading-5 self-stretch mt-2.5">
                      {item.details}
                    </p>
                    <div className="flex w-48 max-w-full gap-3 mt-6 pr-1">
                      <h2 className="text-black text-right text-sm font-medium leading-5">
                       {item.name}
                      </h2>
                      <input
                        type="radio"
                        value={item.id}
                        {...register("addressId", {
                          required: "Please select a address",
                        })}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <footer className="flex w-full flex-col items-stretch p-5 border-t border-gray-300 ">
              <button
                onClick={onSelectButtonClick}
                className="text-white text-center bg-black items-center px-5 py-2.5"
              >
                انتخاب
              </button>
            </footer>
          </section>
        </div>
      )}
    </>
  );
}

export default Modal;
