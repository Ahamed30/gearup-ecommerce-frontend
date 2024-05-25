import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { OrderDetailsItem } from "./OrderDetailItem";
import { Typography } from "../Typography";

export const OrderDetails = () => {
  const { cart, order } = useCart();
  const pathname = usePathname();

  const orderSummaryItems = pathname.includes("orderConfirmation")
    ? order
    : cart;

  return (
    <div className="border rounded-[16px] bg-[#FAFAFA] p-[24px] lg:p-6">
      <div className="mb-[16px] lg:mb-[32px]">
        <Typography
          className="text-xl lg:text-2xl font-semibold mb-[8px]"
          variant="headline"
        >
          Order{cart?.itemsCount ?? 1 > 1 ? `s` : ""}
        </Typography>
      </div>
      <div className="flex flex-col gap-7">
        {orderSummaryItems?.items?.map((item) => {
          return <OrderDetailsItem key={item?.id} product={item} />;
        })}
      </div>
    </div>
  );
};
