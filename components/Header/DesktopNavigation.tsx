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
        className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-[#8F8C91] mr-[40px]"
        href={`${link}`}
        key={`${index}::${id}`}
      >
        {name}
      </Link>
    );
  });

  return <div className={navLinkContentClass}>{navLinkContent}</div>;
};
