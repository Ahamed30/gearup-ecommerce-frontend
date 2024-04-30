"use client";

import { sendPasswordResetEmail } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useApp } from "@/context/AppContext";
import { auth } from "@/firebase/firebaseConfig";
import { Button } from "../Button";
import { Modal } from "../Modal";
import { RewardsBanner } from "../RewardsBanner";
import { TextInput } from "../TextInput";
import { Typography } from "../Typography";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const { setIsLoading } = useApp();

  const handleSubmit = (e: FormEvent) => {
    setIsLoading(true);
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setIsEmailSent(true);
      })
      .catch((err) => {
        console.error("Errrrr", err);
      });
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 mb-8">
      <div className="w-full lg:w-1/2 px-4 lg:px-10">
        <Typography
          className="text-2xl md:text-3xl font-bold mb-4"
          variant="headline"
        >
          Forgot Password
        </Typography>
        <Typography>
          New user?{" "}
          <Link className="underline font-bold" href="/auth/signup">
            Signup
          </Link>
        </Typography>
        <div className="flex flex-col gap-6 py-6">
          <form
            className="flex flex-col gap-6"
            onSubmit={(e) => handleSubmit(e)}
          >
            <TextInput
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              type="email"
            />
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
                Send Forgot Password Email
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
      {isEmailSent && (
        <Modal
          setShowModal={setIsEmailSent}
          subText="Please check you mail box. The password change email has been sent successfully!"
          title="Email Sent Confirmation"
        />
      )}
      <RewardsBanner />
    </div>
  );
};
