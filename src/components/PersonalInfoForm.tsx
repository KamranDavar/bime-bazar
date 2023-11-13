import * as React from "react";

function PersonalInfoForm() {
  return (
    <form className="bg-white">
      <header className="text-black text-right text-lg font-semibold leading-7 whitespace-nowrap shadow-md bg-white w-full px-5 py-5">
        تکمیل اطلاعات
      </header>
      <section className="flex w-full flex-col mt-9 mb-5 px-5">
        <div className="text-black text-right text-base leading-7 max-w-[346px]">
          <p>لطفا اطلاعات شخصی مالک خودرو را وارد کنید</p>
        </div>
        <div className=" self-stretch shrink-0 h-px mt-4" />
        <input
          type="text"
          id="nationalId"
          className="text-neutral-500 text-right text-sm font-medium leading-5 whitespace-nowrap border bg-white self-stretch mt-6 px-5 py-5 border-solid border-zinc-400 max-md:pr-0"
          placeholder="کد ملی"
        />
        <input
          type="text"
          id="phoneNumber"
          className="text-neutral-500 text-right text-sm font-medium leading-5 whitespace-nowrap border bg-white self-stretch mt-6 px-5 py-5 border-solid border-zinc-400 max-md:pr-0"
          placeholder="شماره تلفن همراه"
        />
        <div className="text-black text-right text-base font-semibold leading-7 whitespace-nowrap mt-8">
          <p>آدرس جهت درج روی بیمه نامه</p>
        </div>
        <section className="text-black text-right text-sm leading-7 mt-2.5">
          <p>لطفا آدرسی را که می‌خواهید روی بیمه‌نامه درج شود، وارد کنید.</p>
        </section>
        <div className="text-black text-center text-base font-semibold leading-6 whitespace-nowrap bg-amber-300 self-center w-full max-w-xs items-center mt-8 px-5 py-4">
          <p>انتخاب از آدرس‌های من</p>
        </div>
        <div>
          <button className="bg-[black] text-[white] rounded text-center cursor-pointer mt-7 py-2 px-5 w-auto">
            تایید و ادامه
          </button>
        </div>
      </section>
    </form>
  );
}

export default PersonalInfoForm;
