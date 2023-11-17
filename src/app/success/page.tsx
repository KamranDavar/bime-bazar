"use client";
import { useRouter } from "next/navigation";

export default async function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center  md:justify-center ">
      <div className="flex flex-col w-full md:max-w-[460px]  bg-white h-[100vh] md:h-auto">
        <header className="text-black text-right text-lg font-semibold leading-7 whitespace-nowrap shadow-md w-full px-5 py-5">
          تکمیل اطلاعات
        </header>
        <section className="flex grow flex-col mt-9 mb-5 px-5 justify-between">
          <p className="text-green-500 text-right text-xl font-semibold leading-9">
            اطلاعات شما با موفقیت ثبت شد.
          </p>
          <div className="flex justify-end">
            <button
              onClick={() => router.back()}
              className="bg-[black] text-[white]  text-center cursor-pointer mt-7 py-2 px-5 w-auto disabled:cursor-not-allowed disabled:bg-stone-500"
            >
              بازگشت
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
