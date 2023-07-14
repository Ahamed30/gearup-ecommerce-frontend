import { openSans, rubik } from "@/styles";

const fontRubik = rubik?.className;
const fontOpenSans = openSans?.className;

export const gridContentLinkClassName = `${fontOpenSans} text-stone-200 text-[16px] hover:text-[#99979b] lg:text-[20px] font-semibold`;

export const leftColumnTitleClassName = `${fontRubik} text-[24px] lg:text-[32px] font-semibold text-[#FFA52F] leading-normal mb-[8px]`;

export const leftColumnDescriptionClassName = `${fontOpenSans} text-[16px] lg:text-[20px] text-[#E7E7E3] leading-normal mb-[40px] lg:mb-0`;

export const rightColumnTitleClassName = `${fontRubik} text-[#FFA52F] text-[20px] lg:text-[24px] font-semibold mb-[8px]`;

export const rightColumnContainer =
  "flex-col justify-start items-start gap-2 inline-flex";
