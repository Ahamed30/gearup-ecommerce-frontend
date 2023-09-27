"use client";

import { useRouter } from "next/navigation";
import { Button } from "../Button";
import { OrderDetails } from "../OrderDetails";
import { Typography } from "../Typography";

export const OrderConfirmation = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center py-[32px]">
      <div className="flex flex-col-reverse lg:flex-row gap-10">
        <div className="w-full lg:w-1/2">
          <OrderDetails />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Typography
            className="text-2xl lg:text-3xl text-center font-semibold mb-[32px]"
            variant="headline"
          >
            Thank you for Ordering. Will send you a confirmation email soon.
          </Typography>
          <Button onClick={() => router.push("/")}>To continue Shopping</Button>
        </div>
      </div>
    </div>
  );
};
