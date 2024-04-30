import Link from "next/link";
import { signOut } from "next-auth/react";
import { useUser } from "@/context/UserContext";
import { rubik } from "@/styles";
import { LinkType } from "@/types";
import { UnStyledButton } from "../Button";
import { MobileSearchBox } from "../SearchBox";

interface MobileNavigationProps {
  navLinks?: LinkType[];
}

export const MobileNavigation = ({ navLinks }: MobileNavigationProps) => {
  const fontRubik = rubik?.className;
  const { isLoggedIn } = useUser();

  const containerClassName = `${fontRubik} w-full font-semibold text-base pt-4 lg:hidden block`;

  const navLinkContent = navLinks?.map((navLink, index) => {
    const { link, name } = navLink;
    // {To check data issue for the above id}
    return (
      <Link
        className="block mt-1 text-black hover:text-[#8F8C91] hover:bg-gray-100 px-1 py-3"
        href={`${link}`}
        key={index}
      >
        {name}
      </Link>
    );
  });

  return (
    <div className={containerClassName} role="mobileSearch">
      <MobileSearchBox />
      {navLinkContent}
      {isLoggedIn ? (
        <UnStyledButton
          className="w-full text-base underline underline-offset-4 px-1 pt-3 border-t-2 border-gray-400 text-left"
          onClick={() => signOut()}
        >
          Sign Out
        </UnStyledButton>
      ) : null}
    </div>
  );
};
