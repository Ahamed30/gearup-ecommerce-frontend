"use client";

import Link from "next/link";
import {
  linkClassName,
  saleExcerptClassName,
  saleTitleClassName,
} from "./style";
import { CartItems } from "../CartItems";
import { OrderSummary } from "../OrderSummary";

export const Cart = () => {
  return (
    <div className="mb-[32px]">
      <div className="mb-[24px]">
        <p className={saleTitleClassName}>Saving to celebrate</p>
        <p className={saleExcerptClassName}>
          Enjoy up to 60% off thousands of styles during the End of Year sale -
          while suppiles last. No code needed.
        </p>
        <p className={linkClassName}>
          <Link href="/" className="underline">
            Join us
          </Link>{" "}
          or{" "}
          <Link href="/" className="underline">
            Sign-in
          </Link>
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-3/5">
          <CartItems />
        </div>
        <OrderSummary />
      </div>
    </div>
  );
};
