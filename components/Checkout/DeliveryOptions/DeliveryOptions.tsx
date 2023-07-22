import classNames from "classnames";
import { Typography } from "@/components/Typography";
import {
  cardTextClassName,
  cardTitleClassName,
  priceClassName,
  titleClassName,
} from "../style";
import { useCart } from "@/context/CartContext";
import { Cart } from "@/types";
import { useState } from "react";

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
        "w-full flex p-4 items-start justify-between gap-[8px] rounded-[16px] cursor-pointer",
        selectedDeliveryType === type ? "bg-[#FAFAFA]" : "border border-black"
      )}
      onClick={() => handleDeliveryType(type, price)}
    >
      <div className="flex-grow">
        <Typography variant="headline" className={cardTitleClassName}>
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

export const DeliveryOptions = () => {
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
    const updatedCartWithDeliveryType: Cart = {
      ...cart,
      deliveryType: { type, price },
    };
    setSelectedDeliveryType(type);
    updateCart(updatedCartWithDeliveryType);
  };

  return (
    <div className="mb-[32px]">
      <Typography
        variant="headline"
        className={classNames(titleClassName, "mb-[16px] md:mb-[32px]")}
      >
        Delivery Options
      </Typography>
      <div className="flex flex-col items-start gap-[24px]">
        {defaultDeliveryTypes.map((deliveryType) => {
          return (
            <DeliveryTypeCard
              deliveryType={deliveryType}
              handleDeliveryType={handleDeliveryType}
              selectedDeliveryType={selectedDeliveryType}
            />
          );
        })}
      </div>
    </div>
  );
};