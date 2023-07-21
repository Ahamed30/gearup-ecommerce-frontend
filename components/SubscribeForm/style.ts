import { graduate, rubik } from "@/styles";

const fontRubik = rubik?.className;
const fontGraduate = graduate?.className;

export const headerTextClassName = `leading-normal text-2xl lg:text-5xl font-semibold uppercase mb-4`;

export const logoContainer = `${fontRubik} w-full flex items-center justify-start lg:justify-center py-[24px]`;

export const logoNameClass = `text-white leading-normal text-[64px] ${fontGraduate} font-bold`;
