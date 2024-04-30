import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useUser } from "@/context/UserContext";
import { AccountNavigationMenu } from "../AccountNavigationMenu";
import { UnStyledButton } from "../Button";
import { Typography } from "../Typography";

export const AccountLink = () => {
  const { isLoggedIn } = useUser();
  const [openDropDown, setOpenDropDown] = useState(false);
  const router = useRouter();

  return (
    <>
      {!isLoggedIn ? (
        <UnStyledButton
          className="mr-[16px] lg:mr-[40px]"
          onClick={() => (isLoggedIn ? null : router.push("/auth/login"))}
        >
          <Image alt="User Icon" height={20} src={"/user.svg"} width={20} />
        </UnStyledButton>
      ) : (
        <div>
          <UnStyledButton
            className="hidden lg:block relative mr-2 px-4 py-2 underline text-black hover:text-[#8F8C91]"
            onClick={() => setOpenDropDown(!openDropDown)}
          >
            <Typography className="flex">
              My Account
              <Image
                alt="chevronDownIcon"
                height={20}
                src={"/chevron-down.svg"}
                width={20}
              />
            </Typography>
            {openDropDown ? <AccountNavigationMenu /> : null}
          </UnStyledButton>
        </div>
      )}
    </>
  );
};
