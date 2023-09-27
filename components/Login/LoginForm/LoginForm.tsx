"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect } from "react";
import { Button } from "@/components/Button";
import { CustomCheckbox } from "@/components/CustomCheckBox";
import { TextInput } from "@/components/TextInput";
import { Typography } from "@/components/Typography";
import { useUser } from "@/context/UserContext";

export const LoginForm = () => {
  const { isLoggedIn, setIsLoggedIn } = useUser();
  const router = useRouter();

  const AdditionalLogins = () => {
    const additionalLoginIcons = ["google", "apple", "facebook"];
    return additionalLoginIcons.map((loginIcon, index) => {
      return (
        <div
          className="border border-[#232321] rounded-xl py-4 px-10 lg:px-12 cursor-pointer"
          key={index}
        >
          <Image
            alt={`${loginIcon} Login`}
            height={32}
            src={`/${loginIcon}-login.svg`}
            width={32}
          />
        </div>
      );
    });
  };

  const handleSubmit = (e: FormEvent) => {
    // TODO: handle login operations
    // if valid
    e.preventDefault();
    setIsLoggedIn(true);
    router.push("/");
  };

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn, router]);

  return (
    <div className="w-full lg:w-1/2 px-4 lg:px-10">
      <Typography
        className="text-2xl md:text-3xl font-bold mb-4"
        variant="headline"
      >
        Login
      </Typography>
      <Typography
        className="text-base md:text-xl font-semibold underline cursor underline-offset-5 cursor-pointer"
        variant="headline"
      >
        Forgot your password
      </Typography>
      <div className="flex flex-col gap-6 py-6">
        <form className="flex flex-col gap-6" onSubmit={(e) => handleSubmit(e)}>
          <TextInput placeholder="Email" required type="email" />
          <TextInput
            className="w-full lg:w-5/6"
            placeholder="Password"
            required
            type="password"
          />
          <CustomCheckbox text="Keep me logged in - applies to all log in options below. More info" />
          <Button
            className="w-full lg:w-5/6 flex justify-between items-center cursor-pointer"
            color="primary"
            type="submit"
          >
            <Typography
              className="text-sm lg:text-base uppercase"
              color="#FFFFFF"
              variant="headline"
            >
              Email Login
            </Typography>
            <Image
              alt="Go forward"
              height={16}
              src="/arrow-forward.svg"
              width={16}
            />
          </Button>
        </form>
        {/* {TODO: Need to change the UI} */}
        <div className="flex justify-between gap-x-2">
          <AdditionalLogins />
        </div>
        <Typography>
          {`By clicking 'Log In' you agree to our website KicksClub Terms &
          Conditions, Kicks Privacy Notice and Terms & Conditions.`}
        </Typography>
      </div>
    </div>
  );
};
