import classNames from "classnames";
import Link from "next/link";
import { MobileSearchBox } from "../SearchBox";
import { LinkType } from "@/types";
import { rubik } from "@/styles";

interface MobileNavigationProps {
  navLinks?: LinkType[];
}

export const MobileNavigation = ({ navLinks }: MobileNavigationProps) => {
  const fontRubik = rubik?.className;

  const containerClassName = `${fontRubik} w-full font-semibold text-base pt-4 lg:hidden block`;

  const navLinkContent = navLinks?.map((navLink) => {
    const { id, link, name } = navLink;

    return (
      <Link
        key={id}
        href={`${link}`}
        className="block mt-1 text-black hover:text-[#8F8C91] hover:bg-gray-100 px-1 py-3"
      >
        {name}
      </Link>
    );
  });

  return (
    <div className={containerClassName} role="mobileSearch">
      <MobileSearchBox />
      {navLinkContent}
    </div>
  );
};
