import Link from "next/link";
import { LinkType } from "@/types";
import { navLinkContentClass } from "./style";

interface DesktopNavigationProps {
  navLinks?: LinkType[];
}

export const DesktopNavigation = ({ navLinks }: DesktopNavigationProps) => {
  const navLinkContent = navLinks?.map((navLink, index) => {
    const { id, link, name } = navLink;

    return (
      <Link
        key={`${index}::${id}`}
        href={`${link}`}
        className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-[#8F8C91] mr-[40px]"
      >
        {name}
      </Link>
    );
  });

  return <div className={navLinkContentClass}>{navLinkContent}</div>;
};
