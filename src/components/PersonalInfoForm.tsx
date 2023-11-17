"use client";

import { useEffect, useState } from "react";
import Modal from "./modal";
import { useForm, SubmitHandler } from "react-hook-form";
import { AddressType, InputsType } from "@/app/types";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { isValidIranianNationalCode } from "../../lib/valifationFunctions";
import { useRouter } from "next/navigation";
import useAddresses from "@/hooks/useGetAddresses";
import usePostCompletion from "@/hooks/usePostCmpletion";

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

function PersonalInfoForm() {
  const router = useRouter();
  const { data } = useAddresses();
  const { mutate, isLoading, isSuccess } = usePostCompletion();

  const initialData = {
    nationalId: localStorage.getItem("nationalId") || "",
    phoneNumber: localStorage.getItem("phoneNumber") || "",
    addressId: localStorage.getItem("addressId") || "",
  };

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm<InputsType>({
    defaultValues: initialData,
    resolver: yupResolver(schema),
  });
  const addressId = watch("addressId");

  const onSubmit: SubmitHandler<InputsType> = async (data) => {
    mutate(data);
  };
  useEffect(() => {
    localStorage.setItem("addressId", getValues("addressId"));
    localStorage.setItem("phoneNumber", getValues("phoneNumber"));
    localStorage.setItem("nationalId", getValues("nationalId"));
    isSuccess && router.push("/success");
  }, [isSuccess]);

  return (
    <form
      className="bg-white h-[100vh] flex flex-col w-full max-w-[460px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <header className="text-black text-right text-lg font-semibold leading-7 whitespace-nowrap shadow-md bg-white w-full px-5 py-5">
        تکمیل اطلاعات
      </header>
      <section className="flex w-full flex-col mt-9 mb-5 px-5  grow justify-between">
        <div className="flex flex-col">
          <p className="text-black text-right text-base leading-7 max-w-[460px]">
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
            inputMode="numeric"
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
            inputMode="numeric"
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
            {addressId
              ? (data as AddressType[]).find((item) => item.id === addressId)
                  ?.details
              : " لطفا آدرسی را که می‌خواهید روی بیمه‌نامه درج شود، وارد کنید."}
          </p>
          <Modal setValue={setValue} addresses={data} />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[black] text-[white]  text-center cursor-pointer mt-7 py-2 px-5 w-auto disabled:cursor-not-allowed disabled:bg-stone-500"
            disabled={isLoading}
          >
            {isLoading ? "loading..." : " تایید و ادامه"}
          </button>
        </div>
      </section>
    </form>
  );
}

export default PersonalInfoForm;
