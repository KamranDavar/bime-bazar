"use client";

import * as React from "react";
import Modal from "./modal";
import { useForm, SubmitHandler } from "react-hook-form";
import { AddressType, InputsType } from "@/app/types";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { isValidIranianNationalCode } from "../../lib/valifationFunctions";

const schema = yup.object({
  nationalId: yup
    .string()
    .required("!این قسمت نمیواند خالی باشد")
    .test("is-valid", "!کد ملی صحیح نیست", isValidIranianNationalCode),
  phoneNumber: yup
    .string()
    .required("!این قسمت نمیواند خالی باشد")
    .matches(new RegExp("^0?9\\d{9}$"), " !شماره همراه صحیح نیست"),
  addressId: yup.string().required(),
});

type PropsType = {
  addresses: AddressType[];
};

function PersonalInfoForm({ addresses }: PropsType) {
  const [loading, setLoading] = React.useState(false);
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors, isValid },
  } = useForm<InputsType>({
    defaultValues: {},
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<InputsType> = (data) => {
    setLoading(true);
    fetch("https://front-end-task.bmbzr.ir/order/completion/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => console.log("response", response.json()))
      .catch((response) => {
        console.log(response);
        // throw new Error("Failed to fetch data");
      })
      .finally(() => setLoading(false));
  };

  console.log("errors", errors);
  return (
    <form className="bg-white" onSubmit={handleSubmit(onSubmit)}>
      <header className="text-black text-right text-lg font-semibold leading-7 whitespace-nowrap shadow-md bg-white w-full px-5 py-5">
        تکمیل اطلاعات
      </header>
      <section className="flex w-full flex-col mt-9 mb-5 px-5">
        <p className="text-black text-right text-base leading-7 max-w-[346px]">
          لطفا اطلاعات شخصی مالک خودرو را وارد کنید
        </p>
        <input
          {...register("nationalId")}
          type="text"
          id="nationalId"
          className={`text-neutral-500 text-right text-sm font-medium leading-5 whitespace-nowrap border bg-white self-stretch mt-6 px-5 py-5 border-solid border-zinc-400 ${
            errors.nationalId && "border-rose-600"
          }`}
          placeholder="کد ملی"
        />
        {errors.nationalId && (
          <p className="text-red-600 text-right text-xs font-medium leading-5 whitespace-nowrap">
            {errors.nationalId.message}
          </p>
        )}
        <input
          {...register("phoneNumber")}
          type="text"
          id="phoneNumber"
          className={`text-neutral-500 text-right text-sm font-medium leading-5 whitespace-nowrap border bg-white self-stretch mt-6 px-5 py-5 border-solid border-zinc-400 ${
            errors.nationalId && "border-rose-600"
          }`}
          placeholder="شماره تلفن همراه"
        />
        {errors.phoneNumber && (
          <p className="text-red-600 text-right text-xs font-medium leading-5 whitespace-nowrap">
            {errors.phoneNumber.message}
          </p>
        )}
        <p className="text-black text-right text-base font-semibold leading-7 whitespace-nowrap mt-8">
          آدرس جهت درج روی بیمه نامه
        </p>
        <p className="text-black text-right text-sm leading-7 mt-2.5">
          لطفا آدرسی را که می‌خواهید روی بیمه‌نامه درج شود، وارد کنید.
        </p>
        <Modal
          resetField={resetField}
          register={register}
          addresses={addresses}
        />
        <div>
          <button
            type="submit"
            className="bg-[black] text-[white] rounded text-center cursor-pointer mt-7 py-2 px-5 w-auto"
            // disabled={!isValid}
          >
            {loading ? "loading..." : " تایید و ادامه"}
          </button>
        </div>
      </section>
    </form>
  );
}

export default PersonalInfoForm;
