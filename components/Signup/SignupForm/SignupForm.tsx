"use client";

import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "@/components/Button";
import { CustomCheckbox } from "@/components/CustomCheckBox";
import { TextInput } from "@/components/TextInput";
import { Typography } from "@/components/Typography";
import { useUser } from "@/context/UserContext";

export const SignupForm = () => {
  const { handleSignUp } = useUser();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isEmailExists, setIsEmailExists] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, email, password } = formData;
    const isSignedUp = handleSignUp(name, email, password);
    if (!isSignedUp) setIsEmailExists(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="w-full lg:w-1/2 px-4 lg:px-10">
      <Typography className="text-2xl md:text-3xl font-bold" variant="headline">
        Sign Up
      </Typography>
      <div className="flex flex-col gap-6 py-6">
        <Typography>
          Already have an account?{" "}
          <Link className="underline font-bold" href="/auth/login">
            Login
          </Link>
        </Typography>
        <form className="flex flex-col gap-6" onSubmit={(e) => handleSubmit(e)}>
          <TextInput
            name="name"
            onChange={handleChange}
            placeholder="Name*"
            required
            type="text"
          />
          {/* TODO: Need to think of some other logic for Gender */}
          <TextInput
            name="email"
            onChange={handleChange}
            placeholder="Email*"
            required
            type="email"
          />
          {isEmailExists && (
            <Typography
              className="text-base"
              color="#EF4444"
              variant="headline"
            >
              This email already exists*
            </Typography>
          )}
          <TextInput
            className="w-full"
            helper="Minimum 8 characters with at least one uppercase, one lowercase, one special character and a number"
            name="password"
            onChange={handleChange}
            placeholder="Password*"
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
