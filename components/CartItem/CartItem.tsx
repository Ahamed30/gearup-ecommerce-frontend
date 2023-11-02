import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { CartItemType } from "@/types";
import { Modal } from "../Modal";
import { Typography } from "../Typography";

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
            alt="ProductImage"
            className="object-cover rounded-[24px]"
            fill
            src={`${heroImage.url}`}
          />
        </div>
        <div className="w-3/4 flex-grow">
          <div className="lg:flex lg:justify-between gap-5">
            <div className="w-full">
              <Typography
                className="text-base lg:text-xl font-semibold mb-[8px] uppercase"
                variant="headline"
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
                  className="text-xl lg:text-2xl font-semibold"
                  color="#EF4444"
                  variant="headline"
                >
                  ${salePrice}
                </Typography>
              )}
              <Typography
                className="text-xl lg:text-2xl font-semibold"
                color="#4A69E2"
                variant="headline"
              >
                {salePrice ? <s>${price}</s> : `$${price}`}
              </Typography>
            </div>
          </div>

          <div className="flex gap-[24px]">
            <Image
              alt="Add to favourite"
              className="cursor-pointer"
              height={32}
              onClick={() => setIsFavouriteSelected(!isFavourite)}
              src={isFavourite ? "/heart-red.svg" : "/heart-black.svg"}
              width={32}
            />
            <Image
              alt="Delete Item"
              className="cursor-pointer"
              height={32}
              onClick={() => setShowModal(true)}
              src="/bin.svg"
              width={32}
            />
          </div>
        </div>
      </div>
      {showModal && (
        <Modal
          acceptButton={{
            title: "Yes, I'm sure",
            handleClick: removeItem,
          }}
          cancelButtonText="Cancel"
          setShowModal={setShowModal}
          subText="Are you sure you want to remove this product?"
          title="Remove Product"
        />
      )}
    </div>
  );
};
