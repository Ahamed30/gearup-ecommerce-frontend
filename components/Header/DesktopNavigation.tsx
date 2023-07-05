import React from "react";
import Link from "next/link";
import { rubik } from "@/styles";

export const DesktopNavigation = () => {
  const fontRubik = rubik?.className;

  return (
    <div
      className={`${fontRubik} hidden font-semibold text-base w-full lg:block flex-shrink-0 flex flex-start items-center justify-start lg:w-auto`}
    >
      <Link
        href="#responsive-header"
        className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-4"
      >
        New Drops🔥
      </Link>
      <a
        href="#responsive-header"
        className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-4"
      >
        Apparels
      </a>
    </div>
  );
};
