import { openSans, rubik } from "@/styles";

const fontRubik = rubik?.className;
const fontOpenSans = openSans?.className;

export const orderContainer =
  "border rounded-[16px] bg-[#FAFAFA] lg:border-none lg:rounded-none lg:bg-transparent lg:flex-grow p-6";

export const titleClassName = `${fontRubik} text-3xl font-semibold mb-[24px] color-[#232321]`;
export const itemClassName = `${fontOpenSans} flex justify-between text-xl font-semibold color-[#232321] mb-[16px]`;
export const totalClassName = `${fontRubik} flex justify-between text-2xl font-semibold color-[#232321] mb-[24px]`;

export const buttonClassName = `${fontRubik} w-full text-xs lg:text-sm uppercase px-[8px] py-[12px] flex justify-center items-center bg-[#232321] text-white rounded-[8px] hover:bg-[#4A69E2] mb-[24px]`;

export const inputBoxContainer =
  "w-[250px] lg:w-[290px] px-4 py-2.5 rounded-lg border border-[#232321] justify-start items-center inline-flex mr-[8px]";

export const inputBox =
  "grow shrink basis-0 opacity-75 text-[#232321] placeholder-[#232321] text-[16px] font-normal tracking-wide bg-transparent focus:outline-none";

export const promoTextClassName = `${fontOpenSans} cursor-pointer text-xl font-semibold underline underline-offset-4`;
