import React from "react";
import Image from "next/image";
import Link from "next/link";
import { rubik } from "@/styles";

export const MobileNavigation = () => {
  const fontRubik = rubik?.className;

  return (
    <div
      className={`${fontRubik} w-full font-semibold text-base block lg:hidden pt-4`}
    >
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <Image width={20} height={20} src={"search.svg"} alt="Search Icon" />
        </span>
        <input
          type="text"
          placeholder="Search"
          className="pl-10 pr-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500"
        />
      </div>
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
