import { openSans, rubik } from "@/styles";

const fontRubik = rubik?.className;
const fontOpenSans = openSans?.className;

export const newReleaseClassName = `${fontRubik} w-40 text-xs lg:text-sm font-semibold uppercase px-5 py-3 tracking-wide flex justify-center items-center bg-[#4A69E2] text-white rounded-[12px] mb-[16px]`;
export const productNameClassName = `${fontRubik} text-2xl lg:text-3xl font-semibold lg:uppercase text-[#232321] mb-[16px]`;
export const normalPriceClassName = `${fontRubik} text-2xl font-semibold text-[#4A69E2] mr-[16px]`;
export const salePriceClassName = `${fontRubik} text-2xl font-semibold text-red-500`;

export const titleClassName = `${fontRubik} flex justify-between text-base font-semibold uppercase text-[#232321] mb-[8px]`;

export const favouriteButtonClassName = `bg-[#232321] py-[8px] px-[16px] rounded-[8px]`;
export const addToCartButtonClassName = `${fontRubik} w-full bg-[#232321] text-white py-[8px] px-[16px] font-medium rounded-[8px] text-base uppercase active:bg-[#4A69E2]`;

export const buyNowClassName = `${fontRubik} w-full py-[8px] px-[16px] bg-[#4A69E2] hover:bg-[#232321] text-white font-medium rounded-[8px] text-base uppercase mb-[16px]`;

export const aboutClassName = `${fontOpenSans} text-[16px] font-normal text-[#232321] mb-[32px]`;
