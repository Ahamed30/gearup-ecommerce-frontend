import Link from "next/link";
import { rubik } from "@/styles";

export const DesktopNavigation = () => {
  const fontRubik = rubik?.className;

  return (
    <div
      className={`${fontRubik} hidden lg:flex font-semibold text-base absolute left-0 top-3`}
    >
      <Link
        href="#responsive-header"
        className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-[40px]"
      >
        New Drops🔥
      </Link>
      <a
        href="#responsive-header"
        className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-[40px]"
      >
        Apparels
      </a>
      <a
        href="#responsive-header"
        className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black"
      >
        Shoes
      </a>
    </div>
  );
};
