import { Typography } from "@/components/Typography";
import { CartItemType } from "@/types";
import Image from "next/image";

interface OrderDetailItemProps {
  product: CartItemType;
}

export const OrderDetailsItem = ({ product }: OrderDetailItemProps) => {
  const { productName, heroImage, color, size, quantity, salePrice, price } =
    product;
  return (
    <div className="flex gap-[16px] lg:gap-[24px]">
      <div className="relative w-1/2 md:1/4 lg:w-1/2 h-[150px] md:h-[180px]">
        <Image
          src={`${heroImage.url}`}
          fill
          className="object-cover rounded-[24px]"
          alt="ProductImage"
        />
      </div>
      <div className="w-3/4 flex-grow">
        <Typography
          variant="headline"
          className="text-base lg:text-xl font-semibold uppercase mb-[8px]"
        >
          {productName}
        </Typography>
        <Typography className="text-sm lg:text-lg font-semibold mb-[8px]">
          {color}
        </Typography>
        <div className="text-sm lg:text-lg font-semibold flex flex-row gap-3 lg:gap-6 mb-[8px] lg:mb-[16px]">
          <div className="flex items-center">
            <Typography className="text-base lg:text-xl">
              Size {size}
            </Typography>
          </div>
          <div className="flex items-center">
            <Typography className="text-base lg:text-xl">
              Quantity {quantity}
            </Typography>
          </div>
        </div>
        <div className="flex flex-row mb-[8px] gap-3">
          {salePrice && (
            <Typography
              variant="headline"
              color="#EF4444"
              className="text-base lg:text-xl font-semibold"
            >
              ${salePrice}
            </Typography>
          )}
          <Typography
            variant="headline"
            color="#4A69E2"
            className="text-base lg:text-xl font-semibold"
          >
            {salePrice ? <s>${price}</s> : `$${price}`}
          </Typography>
        </div>
      </div>
    </div>
  );
};
