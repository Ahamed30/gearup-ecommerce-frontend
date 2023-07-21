"use client";

import Link from "next/link";
import { CartItems } from "../CartItems";
import { Typography } from "../Typography";
import { OrderSummary } from "../OrderSummary";
import { useCart } from "@/context/CartContext";

export const Cart = () => {
  const { cart } = useCart();

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
          <div className="border rounded-[16px] bg-[#FAFAFA] p-4 lg:p-6">
            <div className="mb-[32px]">
              {!cart?.itemCount ? (
                <div className="flex justify-center items-center">
                  <Typography
                    variant="headline"
                    className="text-xl lg:text-3xl font-semibold mb-[8px]"
                  >
                    Your Bag is Empty!!!!!
                  </Typography>
                </div>
              ) : (
                <>
                  <Typography
                    variant="headline"
                    className="text-xl lg:text-3xl font-semibold mb-[8px]"
                  >
                    Your Bag
                  </Typography>
                  <Typography className="text-sm lg:text-base font-normal">
                    Items in your bag not reserved- check out now to make them
                    yours.
                  </Typography>
                </>
              )}
            </div>
            {cart?.items?.map((item) => {
              return <CartItems key={item?.id} product={item} />;
            })}
          </div>
        </div>
        <OrderSummary step="cart" />
      </div>
    </div>
  );
};
