"use client";

import Link from "next/link";
import { CartItems } from "../CartItems";
import { Typography } from "../Typography";
import { OrderSummary } from "../OrderSummary";

export const Cart = () => {
  return (
    <div className="mb-[32px]">
      <div className="mb-[24px]">
        <Typography
          variant="headline"
          className="text-3xl font-semibold mb-[8px]"
        >
          Saving to celebrate
        </Typography>
        <Typography className="text-sm font-semibold mb-[8px]">
          Enjoy up to 60% off thousands of styles during the End of Year sale -
          while suppiles last. No code needed.
        </Typography>
        <Typography className="text-base font-semibold mb-[8px]">
          <Link href="/" className="underline">
            Join us
          </Link>{" "}
          or{" "}
          <Link href="/" className="underline">
            Sign-in
          </Link>
        </Typography>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-3/5">
          <CartItems />
        </div>
        <OrderSummary step="cart" />
      </div>
    </div>
  );
};
