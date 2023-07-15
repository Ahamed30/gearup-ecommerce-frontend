import Link from "next/link";
import { LinkType } from "@/types";
import { rubik } from "@/styles";
import { navLinkContentClass } from "./style";

interface DesktopNavigationProps {
  navLinks?: Array<LinkType>;
}

export const DesktopNavigation = ({ navLinks }: DesktopNavigationProps) => {
  const navLinkContent = navLinks?.map((navLink) => {
    const { id, link, name } = navLink;

    return (
      <Link
        key={id}
        href={`${link}`}
        className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-[#8F8C91] mr-[40px]"
      >
        {name}
      </Link>
    );
  });

  return <div className={navLinkContentClass}>{navLinkContent}</div>;
};
