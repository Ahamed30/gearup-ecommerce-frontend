import classNames from "classnames";
import { useState } from "react";
import { Typography } from "@/components/Typography";
import { useCart } from "@/context/CartContext";
import { CartType } from "@/types";
import {
  cardTextClassName,
  cardTitleClassName,
  priceClassName,
  titleClassName,
} from "../style";

type DeliveryTypeCardProps = {
  deliveryType: {
    type: string;
    description: string;
    price: number;
  };
  handleDeliveryType: (type: string, price: number) => void;
  selectedDeliveryType: string;
};

export const DeliveryTypeCard = ({
  deliveryType,
  handleDeliveryType,
  selectedDeliveryType,
}: DeliveryTypeCardProps) => {
  const { type, description, price } = deliveryType;

  return (
    <div
      className={classNames(
        "w-full flex p-4 items-start justify-between gap-[8px] rounded-[16px] border border-black cursor-pointer",
        selectedDeliveryType === type ? "bg-[#FAFAFA]" : ""
      )}
      onClick={() => handleDeliveryType(type, price)}
    >
      <div className="flex-grow">
        <Typography className={cardTitleClassName} variant="headline">
          {type}
        </Typography>
        <Typography className={cardTextClassName}>{description}</Typography>
      </div>
      <div>
        <Typography className={priceClassName} color="#4A69E2">
          ${price}
        </Typography>
      </div>
    </div>
  );
};

type DeliveryOptionsProps = {
  isDeliveryTypeSelected: boolean;
};

export const DeliveryOptions = ({
  isDeliveryTypeSelected,
}: DeliveryOptionsProps) => {
  const { cart, updateCart } = useCart();
  const [selectedDeliveryType, setSelectedDeliveryType] = useState<string>("");
  const defaultDeliveryTypes = [
    {
      type: "Standard Delivery",
      description: "Order will get delivered in a week",
      price: 6.0,
    },
    {
      type: "One-Day Delivery",
      description: "Order will be delivered tomorrow before 9pm",
      price: 12.0,
    },
  ];

  const handleDeliveryType = (type: string, price: number) => {
    const updatedCartWithDeliveryType: CartType = {
      ...cart,
      deliveryType: { type, price },
    };
    // if (updatedCartWithDeliveryType?.cartSubTotal) {
    //   updatedCartWithDeliveryType.cartSubTotal =
    //     updatedCartWithDeliveryType?.cartSubTotal -
    //     (cart?.deliveryType?.price ?? 0) +
    //     price;
    // }
    setSelectedDeliveryType(type);
    updateCart(updatedCartWithDeliveryType);
  };

  return (
    <div className="mb-[32px]">
      <Typography
        className={classNames(titleClassName, "mb-[16px] md:mb-[32px]")}
        variant="headline"
      >
        Delivery Options
      </Typography>
      <div className="flex flex-col items-start gap-[24px]">
        {defaultDeliveryTypes.map((deliveryType, index) => {
          return (
            <DeliveryTypeCard
              deliveryType={deliveryType}
              handleDeliveryType={handleDeliveryType}
              key={index}
              selectedDeliveryType={selectedDeliveryType}
            />
          );
        })}
      </div>
      {!isDeliveryTypeSelected && (
        <Typography
          className="text-base my-[16px]"
          color="#EF4444"
          variant="headline"
        >
          Please select a delivery type*
        </Typography>
      )}
    </div>
  );
};
