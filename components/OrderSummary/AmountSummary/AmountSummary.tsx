import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { Typography } from "@/components/Typography";

type itemsType = {
  name: string;
  price: number | string;
};

export const AmountSummary = () => {
  // const [inputValue, setInputValue] = useState("");
  const { cart } = useCart();
  const [total, setTotal] = useState<number>(cart?.cartSubTotal ?? 0); // need to calculate total

  const [items, setItems] = useState<itemsType[]>([
    { name: "SubTotal", price: cart?.cartSubTotal ?? 0 },
    { name: "Estimated Tax", price: "-" },
  ]);

  useEffect(() => {
    setTotal((cart?.cartSubTotal ?? 0) + (cart?.deliveryType?.price ?? 0));
    setItems([
      { name: "SubTotal", price: cart?.cartSubTotal ?? 0 },
      { name: "Estimated Tax", price: "-" },
    ]);
    if (cart?.deliveryType?.price) {
      setItems((prevItems) => [
        ...prevItems,
        { name: "Delivery Fee", price: cart?.deliveryType?.price ?? 0 },
      ]);
    }
  }, [cart?.cartSubTotal, cart?.deliveryType]);

  return (
    <div>
      <Typography
        variant="headline"
        className="text-xl lg:text-2xl font-semibold mb-[16px] lg:mb-[24px]"
      >
        Order Summary
      </Typography>
      {items.map((item, index) => (
        <div key={index} className="flex justify-between mb-[16px]">
          <Typography className="text-base lg:text-lg font-semibold">
            {item.name}
          </Typography>
          <Typography className="text-base lg:text-lg font-semibold">
            {item.price}
          </Typography>
        </div>
      ))}
      <div className="flex justify-between mb-[16px] lg:mb-[24px]">
        <Typography
          variant="headline"
          className="text-lg lg:text-xl font-semibold"
        >
          Total
        </Typography>
        <Typography
          variant="headline"
          className="text-lg lg:text-xl font-semibold"
        >
          {total}
        </Typography>
      </div>
    </div>
  );
};
