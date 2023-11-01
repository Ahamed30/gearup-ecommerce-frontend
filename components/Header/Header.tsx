"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useUser } from "@/context/UserContext";
import { graduate } from "@/styles";
import { HeaderType } from "@/types";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";
import { UnStyledButton } from "../Button";
import { DesktopSearchBox } from "../SearchBox";

interface HeaderProps {
  data: HeaderType;
}

export const Header = ({ data }: HeaderProps) => {
  const [isMobileNavBarOpen, setIsMobileNavBarOpen] = useState(false);
  const [isDesktopSearchBoxOpen, setIsDesktopSearchBoxOpen] = useState(false);
  const { cart } = useCart();
  const router = useRouter();
  const { isLoggedIn } = useUser();
  const { navLinks } = data;

  const onClickMobileMenuBar: () => void = () => {
    setIsMobileNavBarOpen(!isMobileNavBarOpen);
  };

  const onClickMobileSearchBox = () => {
    setIsDesktopSearchBoxOpen(!isDesktopSearchBoxOpen);
  };

  return (
    <header className="flex flex-wrap border rounded-xl bg-[#FAFAFA] p-4 lg:p-6 mb-6 lg:mb-8">
      <div className="w-full flex justify-center content-center relative">
        <DesktopNavigation navLinks={navLinks} />
        <div
          className="block lg:hidden absolute left-0 top-4"
          onClick={onClickMobileMenuBar}
        >
          <Image alt="Nav Menu" height={20} src={"/nav-menu.svg"} width={20} />
        </div>
        <div className="flex justify-center items-center text-black">
          <span
            className={`${graduate?.className} font-bold text-[32px] cursor-pointer`}
            onClick={() => router.push("/")}
          >
            GearUp
          </span>
        </div>
        <div className="flex absolute right-0 top-3">
          <UnStyledButton
            className="hidden lg:block mr-[40px]"
            onClick={onClickMobileSearchBox}
          >
            <Image
              alt="navSearchIcon"
              height={20}
              src={"/search.svg"}
              width={20}
            />
          </UnStyledButton>
          <UnStyledButton
            className="mr-[16px] lg:mr-[40px]"
            onClick={() =>
              isLoggedIn ? router.push("/") : router.push("/auth/login")
            }
          >
            <Image alt="User Icon" height={20} src={"/user.svg"} width={20} />
          </UnStyledButton>
          {/* TODO: Need to change this to cart icon */}
          <UnStyledButton
            className="flex flex-col justify-center items-center px-[6px] lg:py-[4px] lg:px-[8px] border rounded-3xl bg-[#FFA52F]"
            id="cart"
            onClick={() => router.push("/cart")}
          >
            {cart?.itemCount ?? 0}
          </UnStyledButton>
        </div>
      </div>
      {isMobileNavBarOpen && <MobileNavigation navLinks={navLinks} />}
      <DesktopSearchBox isDesktopSearchBoxOpen={isDesktopSearchBoxOpen} />
      <UnStyledButton onClick={() => signOut()}>SignOut</UnStyledButton>
    </header>
  );
};
