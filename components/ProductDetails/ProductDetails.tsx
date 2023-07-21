"use client";

import { useState } from "react";
import Image from "next/image";
import { ProductSize } from "../ProductSize";
import { ProductType } from "@/types";
import {
  newReleaseClassName,
  normalPriceClassName,
  salePriceClassName,
  productNameClassName,
  titleClassName,
  addToCartButtonClassName,
  favouriteButtonClassName,
  buyNowClassName,
  aboutClassName,
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
      {newProduct && <p className={newReleaseClassName}>New Release</p>}
      <p className={productNameClassName}>{productName}</p>
      <div className="mb-[32px]">
        <span className={normalPriceClassName}>
          {salePrice ? <s>${price}</s> : `$${price}`}
        </span>
        {salePrice && <span className={salePriceClassName}>${salePrice}</span>}
      </div>
      <div>
        <div className={titleClassName}>
          <p>Size</p>
          <p className="underline underline-offset-2 cursor-pointer">
            Size Chart
          </p>
        </div>
        <ProductSize
          size={size}
          selectedSize={selectedSize}
          handleSizeSelect={handleSizeSelect}
        />
      </div>
      <div className="flex gap-[8px] mb-[8px]">
        <button className={addToCartButtonClassName}>Add to cart</button>
        <button
          className={favouriteButtonClassName}
          onClick={handleFavoriteClick}
        >
          <Image
            height={16}
            width={16}
            src={isFavourite ? "/heart-red.svg" : "/heart.svg"}
            alt="Add to favourite"
          />
        </button>
      </div>
      <button className={buyNowClassName}>Buy it now</button>
      <div>
        <p className={titleClassName}>About this product</p>
        <p className={aboutClassName}>{productDescription}</p>
      </div>
    </div>
  );
};
