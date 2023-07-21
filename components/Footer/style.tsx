import { openSans } from "@/styles";

const fontOpenSans = openSans?.className;

export const gridContentLinkClassName = `${fontOpenSans} text-stone-200 text-[16px] hover:text-[#99979b] lg:text-[20px] font-semibold`;

export const leftColumnTitleClassName = `text-[24px] lg:text-[32px] font-semibold leading-normal mb-[8px]`;

export const leftColumnDescriptionClassName = `text-[16px] lg:text-[20px] leading-normal mb-[40px] lg:mb-0`;

export const rightColumnContainer =
  "flex flex-col justify-start items-start gap-2 inline-flex";
