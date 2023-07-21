import { useState } from "react";
import { Typography } from "@/components/Typography";

interface OrderSummaryProps {
  isBordered?: boolean;
}

export const AmountSummary = ({ isBordered }: OrderSummaryProps) => {
  const [inputValue, setInputValue] = useState("");

  const [items, setItems] = useState([
    { name: "1 ITEM", price: "$130.00" },
    { name: "Delivery", price: "$6.99" },
    { name: "Sales Tax", price: "-" },
  ]);
  const total = "$136.99";

  const handleInputChange = (event: { target: { value: string } }) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
      // Handle Enter key press event
      const promoCodeItem = { name: "Promo Code", price: "$12" };
      setItems((prevItems) => [...prevItems, promoCodeItem]);
      // togglePromoBox();
    }
  };

  return (
    <div>
      <Typography
        variant="headline"
        className="text-xl lg:text-3xl font-semibold mb-[16px] lg:mb-[24px]"
      >
        Order Summary
      </Typography>
      {items.map((item, index) => (
        <div key={index} className="flex justify-between mb-[16px]">
          <Typography className="text-base lg:text-xl font-semibold">
            {item.name}
          </Typography>
          <Typography className="text-base lg:text-xl font-semibold">
            {item.price}
          </Typography>
        </div>
      ))}
      <div className="flex justify-between mb-[16px] lg:mb-[24px]">
        <Typography
          variant="headline"
          className="text-xl lg:text-2xl font-semibold"
        >
          Total
        </Typography>
        <Typography
          variant="headline"
          className="text-xl lg:text-2xl font-semibold"
        >
          {total}
        </Typography>
      </div>
    </div>
  );
};
