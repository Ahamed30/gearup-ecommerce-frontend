import { useState } from "react";
import Image from "next/image";
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
            placeholder="Promo code"
            endIcon={
              <Image
                src="/message-send-icon.svg"
                height={24}
                width={24}
                alt="Add Promo Code"
                // onClick={handlePromoClick}
              />
            }
          />
        </div>
      )}
    </div>
  );
};
