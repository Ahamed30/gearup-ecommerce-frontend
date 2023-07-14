import { rubik } from "@/styles";

const fontRubik = rubik?.className;

export const newProductClass = `${fontRubik} absolute top-0 left-0 bg-[#4A69E2] text-white m-2 py-3 px-4 rounded-tl-[24px] rounded-br-[24px] text-[12px] text-white bg-[#4A69E2]`;

export const productNameClass = `${fontRubik} overflow-hidden line-clamp-1 uppercase text-base lg:text-xl text-[#232321] font-semibold mb-[16px] hover`;

export const buttonClass = `${fontRubik} w-full text-xs lg:text-sm uppercase px-[8px] py-[12px] flex justify-center items-center bg-[#232321] text-white rounded-[8px] hover:bg-[#4A69E2]`;
