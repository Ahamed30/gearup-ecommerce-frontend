"use client";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { CustomCheckbox } from "@/components/CustomCheckBox";
import { TextInput } from "@/components/TextInput";
import { Typography } from "@/components/Typography";
import { useApp } from "@/context/AppContext";
import { useUser } from "@/context/UserContext";
import { auth } from "@/firebase/firebaseConfig";

export const SignupForm = () => {
  const { isLoggedIn, setIsLoggedIn } = useUser();
  const { setIsLoading } = useApp();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isEmailExists, setIsEmailExists] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    setIsLoading(true);
    e.preventDefault();
    const { name, email, password } = formData;
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
      .then((userCredential) => {
        setIsLoggedIn(true);
        return userCredential;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (
          errorCode === "auth/email-already-exists" ||
          errorCode === "auth/email-already-in-use"
        ) {
          setIsEmailExists(true);
        }
        console.error("Unable to register", errorMessage);
      });

    if (userCredential) {
      await updateProfile(userCredential.user, {
        displayName: name,
      });
    }
    setIsLoading(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
