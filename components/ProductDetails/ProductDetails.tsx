"use client";

import { useState } from "react";
import Image from "next/image";
import { ProductSize } from "../ProductSize";
import { ProductType } from "@/types";
import { Typography } from "../Typography";
import { Button, UnStyledButton } from "../Button";
import {
  newReleaseClassName,
  addToCartButtonClassName,
  favouriteButtonClassName,
} from "./styles";

interface ProductDetailsProps {
  productData?: ProductType;
}

export const ProductDetails = ({ productData }: ProductDetailsProps) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isFavourite, setIsFavouriteSelected] = useState<boolean>(false);

  if (!productData) {
    return null;
  }

  const {
    newProduct,
    productName,
    price,
    salePrice,
    size,
    productDescription,
  } = productData;

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const handleFavoriteClick = () => {
    setIsFavouriteSelected(!isFavourite);
  };

  return (
    <div>
      {newProduct && (
        <Typography
          variant="headline"
          color="#FFFFFF"
          className={newReleaseClassName}
        >
          New Release
        </Typography>
      )}
      <Typography
        variant="headline"
        className="text-2xl lg:text-3xl font-semibold lg:uppercase mb-[16px]"
      >
        {productName}
      </Typography>
      <div className="mb-[32px]">
        <Typography
          as="span"
          variant="headline"
          color="#4A69E2"
          className="text-2xl font-semibold mr-[16px]"
        >
          {salePrice ? <s>${price}</s> : `$${price}`}
        </Typography>
        {salePrice && (
          <Typography
            as="span"
            variant="headline"
            color="#EF4444"
            className="text-2xl font-semibold"
          >
            ${salePrice}
          </Typography>
        )}
      </div>
      <div>
        <div className="flex justify-between mb-[8px]">
          <Typography
            variant="headline"
            className="text-base font-semibold uppercase"
          >
            Size
          </Typography>
          <Typography
            variant="headline"
            className="text-base font-semibold uppercase underline underline-offset-2 cursor-pointer"
          >
            Size Chart
          </Typography>
        </div>
        <ProductSize
          size={size}
          selectedSize={selectedSize}
          handleSizeSelect={handleSizeSelect}
        />
      </div>
      <div className="flex gap-[8px] mb-[8px]">
        <UnStyledButton className={addToCartButtonClassName}>
          Add to cart
        </UnStyledButton>
        <UnStyledButton
          className={favouriteButtonClassName}
          onClick={handleFavoriteClick}
        >
          <Image
            height={16}
            width={16}
            src={isFavourite ? "/heart-red.svg" : "/heart.svg"}
            alt="Add to favourite"
          />
        </UnStyledButton>
      </div>
      <Button color="secondary" className="w-full uppercase mb-[16px]">
        Buy it now
      </Button>
      <div>
        <Typography
          variant="headline"
          className="text-base font-semibold uppercase mb-[8px]"
        >
          About this product
        </Typography>
        <Typography className="text-[16px] font-normal mb-[32px]">
          {productDescription}
        </Typography>
      </div>
    </div>
  );
};
