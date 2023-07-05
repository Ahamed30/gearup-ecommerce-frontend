import React from "react";
import { MobileNavigation } from "./MobileNavigation";
import { DesktopNavigation } from "./DesktopNavigation";
import Image from "next/image";

export const Header = () => {
  return (
    <nav className="flex flex-wrap border rounded-xl bg-[#FAFAFA] p-6">
      <div className="w-full flex items-center justify-between">
        <DesktopNavigation />
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2">
            <Image width={20} height={20} src={"nav-menu.svg"} alt="Nav Menu" />
          </button>
        </div>
        <div className="flex items-center flex-shrink-0 text-black">
          <span className="font-semibold text-xl tracking-tight">GearUp</span>
        </div>
        <div className="flex items-center flex-shrink-0 gap-3">
          <button className="hidden lg:block px-3">
            <Image width={20} height={20} src={"search.svg"} alt="Nav Menu" />
          </button>
          <button className="px-3">
            <Image width={20} height={20} src={"user.svg"} alt="Nav Menu" />
          </button>
          <button className="flex flex-col justify-center items-center p-[10px] border rounded-3xl bg-[#FFA52F]">
            0
          </button>
        </div>
      </div>
      <MobileNavigation />
    </nav>
  );
};
