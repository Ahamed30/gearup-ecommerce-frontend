import classNames from "classnames";
import Link from "next/link";
import { MobileSearchBox } from "../SearchBox";
import { LinkType } from "@/types";
import { rubik } from "@/styles";

interface MobileNavigationProps {
  isMobileNavBarOpen?: Boolean;
  navLinks?: LinkType[];
}

export const MobileNavigation = ({
  isMobileNavBarOpen,
  navLinks,
}: MobileNavigationProps) => {
  const fontRubik = rubik?.className;

  const containerClassName = classNames(
    `${fontRubik} w-full font-semibold text-base pt-4 lg:hidden`,
    isMobileNavBarOpen ? `block` : `hidden`
  );

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
    <div className={containerClassName}>
      <MobileSearchBox />
      {navLinkContent}
    </div>
  );
};
