import * as React from "react";
import Modal from "./modal";

function PersonalInfoForm() {
  return (
    <form className="bg-white">
      <header className="text-black text-right text-lg font-semibold leading-7 whitespace-nowrap shadow-md bg-white w-full px-5 py-5">
        تکمیل اطلاعات
      </header>
      <section className="flex w-full flex-col mt-9 mb-5 px-5">
        <p className="text-black text-right text-base leading-7 max-w-[346px]">
          لطفا اطلاعات شخصی مالک خودرو را وارد کنید
        </p>
        <input
          type="text"
          id="nationalId"
          className="text-neutral-500 text-right text-sm font-medium leading-5 whitespace-nowrap border bg-white self-stretch mt-6 px-5 py-5 border-solid border-zinc-400"
          placeholder="کد ملی"
        />
        <input
          type="text"
          id="phoneNumber"
          className="text-neutral-500 text-right text-sm font-medium leading-5 whitespace-nowrap border bg-white self-stretch mt-6 px-5 py-5 border-solid border-zinc-400"
          placeholder="شماره تلفن همراه"
        />
        <p className="text-black text-right text-base font-semibold leading-7 whitespace-nowrap mt-8">
          آدرس جهت درج روی بیمه نامه
        </p>
        <p className="text-black text-right text-sm leading-7 mt-2.5">
          لطفا آدرسی را که می‌خواهید روی بیمه‌نامه درج شود، وارد کنید.
        </p>
        <Modal/>
        <div>
          <button
            type="submit"
            className="bg-[black] text-[white] rounded text-center cursor-pointer mt-7 py-2 px-5 w-auto"
          >
            تایید و ادامه
          </button>
        </div>
      </section>
    </form>
  );
}

export default PersonalInfoForm;
