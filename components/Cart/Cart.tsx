"use client";

import Link from "next/link";
import { CartItem } from "../CartItem";
import { Typography } from "../Typography";
import { OrderSummary } from "../OrderSummary";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { Modal } from "../Modal";

export const Cart = () => {
  const { cart, emptyCart } = useCart();
  const [showModal, setShowModal] = useState<boolean>(false);

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
                  <div className="flex justify-between">
                    <Typography
                      variant="headline"
                      className="text-xl lg:text-3xl font-semibold mb-[8px]"
                    >
                      Your Bag
                    </Typography>
                    <Typography
                      className="underline underline-offset-3 cursor-pointer"
                      onClick={() => setShowModal(true)}
                    >
                      Empty Cart
                    </Typography>
                    {showModal && (
                      <Modal
                        title="Empty Cart"
                        subText="Are you sure you want to empty the cart?"
                        setShowModal={setShowModal}
                        handleClick={emptyCart}
                      />
                    )}
                  </div>
                  <Typography className="text-sm lg:text-base font-normal">
                    Items in your bag not reserved- check out now to make them
                    yours.
                  </Typography>
                </>
              )}
            </div>
            <div>
              {cart?.items?.map((item) => {
                return <CartItem key={item?.id} product={item} />;
              })}
            </div>
          </div>
        </div>
        <OrderSummary step="cart" />
      </div>
    </div>
  );
};
