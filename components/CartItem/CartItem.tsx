import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { Typography } from "../Typography";
import { CartItemType } from "@/types";
import { Modal } from "../Modal";

interface CartItemProps {
  product: CartItemType;
}

export const CartItem = ({ product }: CartItemProps) => {
  const router = useRouter();
  const { removeFromCart } = useCart();
  const [isFavourite, setIsFavouriteSelected] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const {
    id,
    productName,
    heroImage,
    size,
    quantity,
    price,
    salePrice,
    color,
  } = product;

  const removeItem = () => {
    removeFromCart(id, size);
  };

  return (
    <div role="cartItem">
      <div className="flex gap-[16px] md:gap-[60px] lg:gap-[24px] mb-[16px]">
        <div className="relative w-1/2 lg:w-1/4 h-[200px] lg:h-[180px]">
          <Image
            src={`${heroImage.url}`}
            fill
            className="object-cover rounded-[24px]"
            alt="ProductImage"
          />
        </div>
        <div className="w-3/4 flex-grow">
          <div className="lg:flex lg:justify-between gap-5">
            <div className="w-full">
              <Typography
                variant="headline"
                className="text-base lg:text-xl font-semibold mb-[8px] uppercase"
              >
                {productName}
              </Typography>
              {color && (
                <Typography className="text-sm lg:text-lg font-semibold mb-[8px]">
                  {color}
                </Typography>
              )}
              <div className="text-sm lg:w-full lg:text-lg font-semibold lg:flex  gap-10 mb-[8px] lg:mb-[32px]">
                <div className="flex items-center gap-2">
                  <Typography className="text-base lg:text-xl">
                    Size {size}
                  </Typography>
                </div>
                <div className="flex items-center gap-2">
                  <Typography className="text-base lg:text-xl">
                    Quantity {quantity}
                  </Typography>
                </div>
                <div className="flex items-center gap-2">
                  <Typography
                    className="text-base lg:text-xl underline underline-offset-2 cursor-pointer"
                    onClick={() => router.push(`/product/${id}`)}
                  >
                    Edit
                  </Typography>
                </div>
              </div>
            </div>
            <div className="flex flex-row lg:flex-col mb-[8px] lg:mb-[32px] gap-3">
              {salePrice && (
                <Typography
                  variant="headline"
                  color="#EF4444"
                  className="text-xl lg:text-2xl font-semibold"
                >
                  ${salePrice}
                </Typography>
              )}
              <Typography
                variant="headline"
                color="#4A69E2"
                className="text-xl lg:text-2xl font-semibold"
              >
                {salePrice ? <s>${price}</s> : `$${price}`}
              </Typography>
            </div>
          </div>

          <div className="flex gap-[24px]">
            <Image
              src={isFavourite ? "/heart-red.svg" : "/heart-black.svg"}
              height={32}
              width={32}
              alt="Add to favourite"
              className="cursor-pointer"
              onClick={() => setIsFavouriteSelected(!isFavourite)}
            />
            <Image
              src="/bin.svg"
              height={32}
              width={32}
              alt="Delete Item"
              className="cursor-pointer"
              onClick={() => setShowModal(true)}
            />
          </div>
        </div>
      </div>
      {showModal && (
        <Modal
          title="Remove Product"
          subText="Are you sure you want to remove this product?"
          setShowModal={setShowModal}
          handleClick={removeItem}
        />
      )}
    </div>
  );
};
