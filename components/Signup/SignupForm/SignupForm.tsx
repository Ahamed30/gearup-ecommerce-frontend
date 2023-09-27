"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect } from "react";
import { Button } from "@/components/Button";
import { CustomCheckbox } from "@/components/CustomCheckBox";
import { TextInput } from "@/components/TextInput";
import { Typography } from "@/components/Typography";
import { useUser } from "@/context/UserContext";

export const SignupForm = () => {
  const { isLoggedIn, setIsLoggedIn } = useUser();
  const router = useRouter();

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
        Sign Up
      </Typography>
      <div className="flex flex-col gap-6 py-6">
        <form className="flex flex-col gap-6" onSubmit={(e) => handleSubmit(e)}>
          <TextInput placeholder="First Name" required type="text" />
          <TextInput className="w-full" placeholder="Last Name" type="text" />
          {/* TODO: Need to think of some other logic for Gender */}
          <TextInput placeholder="Email" required type="email" />
          <TextInput
            className="w-full"
            helper="Minimum 8 characters with at least one uppercase, one lowercase, one special character and a number"
            placeholder="Password"
            required
            type="password"
          />
          <CustomCheckbox text="Agree KicksClub Terms & Conditions, Kicks Privacy Notice." />
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
              Sign up
            </Typography>
            <Image
              alt="Go forward"
              height={16}
              src="/arrow-forward.svg"
              width={16}
            />
          </Button>
        </form>
      </div>
    </div>
  );
};
