import React from "react";
import { SocialIcon } from "../SocialIcon";
import { FooterType, LinkType } from "@/types";
import Link from "next/link";
import {
  gridContentLinkClassName,
  leftColumnDescriptionClassName,
  leftColumnTitleClassName,
  rightColumnContainer,
  rightColumnTitleClassName,
} from "./style";

interface FooterContentProps {
  footerData: FooterType;
}

export const FooterContent = ({ footerData }: FooterContentProps) => {
  const { leftColumnTitle, leftColumnDescription, linkColumns, socialIcons } =
    footerData;

  const gridContent = (links: Array<LinkType>) => {
    return links?.map((navLink) => {
      const { id, name, link } = navLink;
      return (
        <Link key={id} href={`${link}`} className={gridContentLinkClassName}>
          {name}
        </Link>
      );
    });
  };

  const rightColumnContent = linkColumns?.map((linkColumn) => {
    const { id, title, links } = linkColumn;
    return (
      <div key={id} className={rightColumnContainer}>
        <p className={rightColumnTitleClassName}>{title}</p>
        {gridContent(links)}
      </div>
    );
  });
  return (
    <div className="p-[24px] pb-[40px] lg:p-[40px]">
      <div className="lg:flex lg:flex-row lg:justify-between gap-12">
        <div className="w-full">
          <h1 className={leftColumnTitleClassName}>{leftColumnTitle}</h1>
          <p className={leftColumnDescriptionClassName}>
            {leftColumnDescription}
          </p>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-15">
            {rightColumnContent}
            <SocialIcon socialIcons={socialIcons} />
          </div>
        </div>
      </div>
    </div>
  );
};
