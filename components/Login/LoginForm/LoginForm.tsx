"use client";

import Image from "next/image";
import { Button } from "@/components/Button";
import { CustomCheckbox } from "@/components/CustomCheckBox";
import { TextInput } from "@/components/TextInput";
import { Typography } from "@/components/Typography";
import { useUser } from "@/context/UserContext";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const { isLoggedIn, setIsLoggedIn } = useUser();
  const router = useRouter();

  const AdditionalLogins = () => {
    const additionalLoginIcons = ["google", "apple", "facebook"];
    return additionalLoginIcons.map((loginIcon, index) => {
      return (
        <div
          key={index}
          className="border border-[#232321] rounded-xl py-4 px-10 lg:px-12 cursor-pointer"
        >
          <Image
            src={`/${loginIcon}-login.svg`}
            height={32}
            width={32}
            alt={`${loginIcon} Login`}
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
  }, [isLoggedIn]);

  return (
    <div className="w-full lg:w-1/2 px-4 lg:px-10">
      <Typography
        variant="headline"
        className="text-2xl md:text-3xl font-bold mb-4"
      >
        Login
      </Typography>
      <Typography
        variant="headline"
        className="text-base md:text-xl font-semibold underline cursor underline-offset-5 cursor-pointer"
      >
        Forgot your password
      </Typography>
      <div className="flex flex-col gap-6 py-6">
        <form className="flex flex-col gap-6" onSubmit={(e) => handleSubmit(e)}>
          <TextInput placeholder="Email" type="email" required />
          <TextInput
            className="w-full lg:w-5/6"
            placeholder="Password"
            type="password"
            required
          />
          <CustomCheckbox text="Keep me logged in - applies to all log in options below. More info" />
          <Button
            color="primary"
            type="submit"
            className="w-full lg:w-5/6 flex justify-between items-center cursor-pointer"
          >
            <Typography
              color="#FFFFFF"
              variant="headline"
              className="text-sm lg:text-base uppercase"
            >
              Email Login
            </Typography>
            <Image
              src="/arrow-forward.svg"
              height={16}
              width={16}
              alt="Go forward"
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
