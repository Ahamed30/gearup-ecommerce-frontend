import Link from "next/link";
import { LinkType } from "@/types";
import { rubik } from "@/styles";

interface DesktopNavigationProps {
  navLinks?: Array<LinkType>;
}

export const DesktopNavigation = ({ navLinks }: DesktopNavigationProps) => {
  const fontRubik = rubik?.className;

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

  return (
    <div
      className={`${fontRubik} hidden lg:flex font-semibold text-base absolute left-0 top-3`}
    >
      {navLinkContent}
    </div>
  );
};
