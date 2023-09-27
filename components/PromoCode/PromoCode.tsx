import Image from "next/image";
import { useState } from "react";
import { TextInput } from "../TextInput";
import { Typography } from "../Typography";

export const PromoCode = () => {
  const [promoBoxOpen, setPromoBoxOpen] = useState<Boolean>(false);

  const togglePromoBox = () => {
    setPromoBoxOpen(!promoBoxOpen);
  };

  //   const handlePromoClick = () => {
  //     const promoCodeItem = { name: "Promo Applied", price: "-$12" };
  //     setItems((prevItems) => [...prevItems, promoCodeItem]);
  //     togglePromoBox();
  //   };

  // const handleKeyDown = (event: { key: string }) => {
  //   if (event.key === "Enter") {
  //     // Handle Enter key press event
  //     const promoCodeItem = { name: "Promo Code", price: "$12" };
  //     setItems((prevItems) => [...prevItems, promoCodeItem]);
  //     // togglePromoBox();
  //   }
  // };

  return (
    <div>
      <Typography
        className="cursor-pointer text-xl font-semibold underline underline-offset-4"
        onClick={togglePromoBox}
      >
        User a promo code
      </Typography>
      {promoBoxOpen && (
        <div className="lg:border lg:rounded-[16px] lg:bg-[#FAFAFA] p-6 flex justify-center items-center mt-[16px]">
          <TextInput
            className="w-3/4"
            // onChange={handleInputChange}
            // onKeyDown={handleKeyDown}
            endIcon={
              <Image
                alt="Add Promo Code"
                height={24}
                src="/message-send-icon.svg"
                width={24}
              />
            }
            placeholder="Promo code"
          />
        </div>
      )}
    </div>
  );
};
