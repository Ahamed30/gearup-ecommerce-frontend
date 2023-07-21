import { openSans, rubik } from "@/styles";

const fontRubik = rubik?.className;
const fontOpenSans = openSans?.className;

export const titleClassName = `${fontRubik} text-xl lg:text-3xl font-semibold color-[#232321] mb-[8px]`;
export const subTextClassName = `${fontOpenSans} text-sm lg:text-base font-normal color-[#232321]`;

//cartItem
export const productTitleClassName = `${fontRubik} text-base lg:text-xl font-semibold color-[#232321] mb-[8px]`;
export const cartTextClassName = `${fontOpenSans} text-sm lg:text-lg font-semibold color-[#232321] mb-[8px]`;
export const normalPriceClassName = `${fontRubik} text-xl lg:text-2xl font-semibold text-[#4A69E2] mr-[16px]`;
export const salePriceClassName = `${fontRubik} text-xl lg:text-2xl font-semibold text-red-500`;
