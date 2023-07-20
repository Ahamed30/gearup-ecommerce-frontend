import { graduate, openSans, rubik } from "@/styles";

const fontRubik = rubik?.className;
const fontOpenSans = openSans?.className;
const fontGraduate = graduate?.className;

export const headerTextClassName = `${fontRubik} text-white leading-normal text-2xl lg:text-5xl font-semibold uppercase mb-4`;

export const subTextClassName = `${fontOpenSans} text-stone-200 text-base lgtext-xl font-semibold mb-[24px] lg:mb-[32px]`;

export const inputBoxContainer =
  "w-[250px] lg:w-[290px] px-4 py-2.5 rounded-lg border border-white justify-start items-center inline-flex mr-[8px] mb-[16px]";

export const inputBox =
  "grow shrink basis-0 opacity-75 text-stone-200 placeholder-[#E7E7E3] text-[16px] font-normal tracking-wide bg-transparent focus:outline-none";

export const submitButton =
  "px-4 py-2.5 bg-neutral-800 rounded-lg flex justify-center items-center text-white text-[16px] font-medium uppercase inline-flex tracking-wide hover:bg-blue-300 hover:text-black";

export const logoContainer = `${fontRubik} w-full flex items-center justify-start lg:justify-center py-[24px]`;

export const logoNameClass = `text-white leading-normal text-[64px] ${fontGraduate} font-bold`;
