import Link from "next/link";
import { FooterType, LinkType } from "@/types";
import {
  gridContentLinkClassName,
  leftColumnDescriptionClassName,
  leftColumnTitleClassName,
  rightColumnContainer,
} from "./style";
import { SocialIcon } from "../SocialIcon";
import { Typography } from "../Typography";

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
        <Link className={gridContentLinkClassName} href={`${link}`} key={id}>
          {name}
        </Link>
      );
    });
  };

  const rightColumnContent = linkColumns?.map((linkColumn) => {
    const { id, title, links } = linkColumn;
    return (
      <div className={rightColumnContainer} key={id}>
        <Typography
          className="text-[20px] lg:text-[24px] font-semibold mb-[8px]"
          color="#FFA52F"
          variant="headline"
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
            className={leftColumnTitleClassName}
            color="#FFA52F"
            variant="headline"
          >
            {leftColumnTitle}
          </Typography>
          <Typography
            className={leftColumnDescriptionClassName}
            color="#E7E7E3"
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
