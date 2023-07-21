import Link from "next/link";
import { SocialIcon } from "../SocialIcon";
import { FooterType, LinkType } from "@/types";
import { Typography } from "../Typography";
import {
  gridContentLinkClassName,
  leftColumnDescriptionClassName,
  leftColumnTitleClassName,
  rightColumnContainer,
} from "./style";

interface FooterContentProps {
  footerData: FooterType;
}

export const FooterContent = ({ footerData }: FooterContentProps) => {
  const { leftColumnTitle, leftColumnDescription, linkColumns, socialIcons } =
    footerData;

  const gridContent = (links: LinkType[]) => {
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
        <Typography
          variant="headline"
          className="text-[20px] lg:text-[24px] font-semibold mb-[8px]"
          color="#FFA52F"
        >
          {title}
        </Typography>
        {gridContent(links)}
      </div>
    );
  });
  return (
    <div className="p-[24px] pb-[40px] lg:p-[40px]">
      <div className="lg:flex lg:flex-row lg:justify-between gap-12">
        <div className="w-full">
          <Typography
            as="h1"
            variant="headline"
            color="#FFA52F"
            className={leftColumnTitleClassName}
          >
            {leftColumnTitle}
          </Typography>
          <Typography
            color="#E7E7E3"
            className={leftColumnDescriptionClassName}
          >
            {leftColumnDescription}
          </Typography>
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
