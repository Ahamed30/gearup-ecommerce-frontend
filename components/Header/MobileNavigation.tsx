import Link from "next/link";
import { MobileSearchBox } from "../SearchBox";
import classNames from "classnames";
import { rubik } from "@/styles";

interface MobileNavigationProps {
  isMobileNavBarOpen?: Boolean;
}

export const MobileNavigation = ({
  isMobileNavBarOpen,
}: MobileNavigationProps) => {
  const fontRubik = rubik?.className;

  const containerClassName = classNames(
    `${fontRubik} w-full font-semibold text-base pt-4`,
    isMobileNavBarOpen ? `block` : `hidden`
  );

  return (
    <div className={containerClassName}>
      <MobileSearchBox />
      <Link
        href="#responsive-header"
        className="block mt-1 text-black hover:text-black hover:bg-gray-100 px-1 py-3"
      >
        New Drops🔥
      </Link>
      <a
        href="#responsive-header"
        className="block mt-1 text-black hover:text-black hover:bg-gray-100 px-1 py-3"
      >
        Apparels
      </a>
      <a
        href="#responsive-header"
        className="block mt-1 text-black hover:text-black hover:bg-gray-100 px-1 py-3"
      >
        Shoes
      </a>
    </div>
  );
};
