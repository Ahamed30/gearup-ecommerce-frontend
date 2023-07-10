import React from "react";
import { SocialIcon } from "../SocialIcon";
import { openSans, rubik } from "@/styles";
import { FooterType, LinkType } from "@/types";
import Link from "next/link";

interface FooterContentProps {
  footerData: FooterType;
}

export const FooterContent = ({ footerData }: FooterContentProps) => {
  const fontRubik = rubik?.className;
  const fontOpenSans = openSans?.className;
  const { leftColumnTitle, leftColumnDescription, linkColumns, socialIcons } =
    footerData;

  const gridContent = (links: Array<LinkType>) => {
    return links?.map((navLink) => {
      const { id, name, link } = navLink;
      return (
        <Link
          key={id}
          href={`${link}`}
          className={`${fontOpenSans} text-stone-200 text-[16px] hover:text-[#99979b] lg:text-[20px] font-semibold`}
        >
          {name}
        </Link>
      );
    });
  };

  const renderedContent = linkColumns?.map((linkColumn) => {
    const { id, title, links } = linkColumn;
    return (
      <div
        key={id}
        className="flex-col justify-start items-start gap-2 inline-flex"
      >
        <p
          className={`${fontRubik} text-[#FFA52F] text-[20px] lg:text-[24px] font-semibold mb-[8px]`}
        >
          {title}
        </p>
        {gridContent(links)}
      </div>
    );
  });
  return (
    <div className="p-[24px] pb-[40px] lg:p-[40px]">
      <div className="lg:flex lg:flex-row lg:justify-between gap-12">
        {/* Left div */}
        <div className="w-full">
          <h1
            className={`${fontRubik} text-[24px] lg:text-[32px] font-semibold text-[#FFA52F] leading-normal mb-[8px]`}
          >
            {leftColumnTitle}
          </h1>
          <p
            className={`${fontOpenSans} text-[16px] lg:text-[20px] text-[#E7E7E3] leading-normal mb-[40px] lg:mb-0`}
          >
            {leftColumnDescription}
          </p>
        </div>

        {/* Right div */}
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-15">
            {renderedContent}
            <SocialIcon socialIcons={socialIcons} />
          </div>
        </div>
      </div>
    </div>
  );
};
