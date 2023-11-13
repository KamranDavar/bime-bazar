"use client";
import { MouseEvent, useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';


function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = (e: any) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleBlurClick = (e: any) => {
    if (isOpen && e.target.classList.contains("bg-blur")) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="text-black text-center text-base font-semibold leading-6 whitespace-nowrap bg-amber-300 self-center w-full items-center mt-8 px-5 py-4"
      >
        انتخاب از آدرس‌های من
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-blur"
          onClick={handleBlurClick}
        >
          <section className="bg-white flex flex-col items-stretch min-w-sm-full  min-w-md-[386px] px-5">
            <header className="items-center flex w-full flex-col mt-6 pb-2 px-5">
              <div className="justify-between items-stretch flex gap-5">
                <AiOutlineClose onClick={toggleModal}/>
                <h1 className="text-black text-right text-base font-medium leading-6 whitespace-nowrap mr-0">
                  Address Selection
                </h1>
              </div>
              <hr className="bg-neutral-200 self-stretch min-h-[1px] w-full -mr-5 mt-3" />
            </header>
            <div className="self-stretch flex w-full justify-between gap-4 -mr-5">
              <div className="flex grow basis-[0%] flex-col mt-5">
                <div className="flex w-48 max-w-full gap-3 pr-1">
                  <h2 className="text-black text-right text-sm font-medium leading-5">
                    قرش نانیرفآ‌شقن تکرش
                  </h2>
                  <input type="checkbox" />
                </div>
                <p className="text-neutral-500 text-right text-xs leading-5 self-stretch mt-2.5">
                  فارس، شیراز، خیابان جمهوری، بالاتر از فلان، پلاک ۶، واحد ۲۳۴{" "}
                </p>
                <div className="flex w-48 max-w-full gap-3 mt-6 pr-1">
                  <h2 className="text-black text-right text-sm font-medium leading-5">
                    قرش نانیرفآ‌شقن تکرش
                  </h2>
                  <input type="checkbox" />
                </div>
                <p className="text-neutral-500 text-right text-xs leading-5 self-stretch mt-2.5">
                  فارس، شیراز، خیابان جمهوری، بالاتر از فلان، پلاک ۶، واحد ۲۳۴{" "}
                </p>
                <div className="flex w-48 max-w-full gap-3 mt-6 pr-1">
                  <h2 className="text-black text-right text-sm font-medium leading-5">
                    قرش نانیرفآ‌شقن تکرش
                  </h2>
                  <input type="checkbox" />
                </div>
                <p className="text-neutral-500 text-right text-xs leading-5 self-stretch mt-2.5">
                  فارس، شیراز، خیابان جمهوری، بالاتر از فلان، پلاک ۶، واحد ۲۳۴{" "}
                </p>
              </div>
            </div>
            <footer className="shadow-sm bg-white flex w-full flex-col items-stretch mt-16 p-5 max-md:mt-10">
              <button className="text-white text-center text-base font-medium leading-7 whitespace-nowrap bg-black items-center px-5 py-3.5">
                Select
              </button>
            </footer>
          </section>
        </div>
      )}
    </>
  );
}

export default Modal;
