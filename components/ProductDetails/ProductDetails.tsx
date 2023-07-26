"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { ProductSize } from "../ProductSize";
import { CartItemType, ProductType } from "@/types";
import { Typography } from "../Typography";
import { Button, UnStyledButton } from "../Button";
import {
  newReleaseClassName,
  addToCartButtonClassName,
  favouriteButtonClassName,
} from "./styles";
import classNames from "classnames";

interface ProductDetailsProps {
  productData?: ProductType;
}

export const ProductDetails = ({ productData }: ProductDetailsProps) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isSizeSelected, setIsSizeSelected] = useState<boolean>(true);
  const [isFavourite, setIsFavouriteSelected] = useState<boolean>(false);
  const [showAddedToCart, setShowAddedToCart] = useState<boolean>(false);
  const { addToCart } = useCart();

  if (!productData) {
    return null;
  }

  const {
    id,
    newProduct,
    productName,
    price,
    salePrice,
    size,
    productDescription,
    heroImage,
    color,
  } = productData;

  const handleSizeSelect = (size: string) => {
    if (selectedSize == null) setIsSizeSelected(true);
    setSelectedSize(size);
  };

  const handleFavoriteClick = () => {
    setIsFavouriteSelected(!isFavourite);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      setIsSizeSelected(false);
      return;
    }
    setShowAddedToCart(true);
    const currItem: CartItemType = {
      id,
      quantity: 1,
      heroImage,
      productName,
      price,
      salePrice,
      size: selectedSize,
      color,
    };

    addToCart(currItem);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAddedToCart(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [showAddedToCart]);

  return (
    <div className="relative">
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
        {!isSizeSelected && (
          <Typography
            variant="headline"
            color="#EF4444"
            className="text-base mb-[16px]"
          >
            Please select a size*
          </Typography>
        )}
      </div>
      <div className="flex gap-[8px] mb-[8px]">
        <UnStyledButton
          className={addToCartButtonClassName}
          onClick={handleAddToCart}
        >
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
      {showAddedToCart && (
        <div
          className={classNames(
            `block absolute top-0 right-0 py-4 px-7 rounded-lg bg-slate-50 border-2 border-green-500 transition-opacity`,
            showAddedToCart ? "opacity-100" : "opacity-0"
          )}
        >
          <Typography variant="headline">Product Added to Cart</Typography>
          <div
            className="absolute top-0 right-0 cursor-pointer"
            onClick={() => setShowAddedToCart(false)}
          >
            <Image
              width={25}
              height={25}
              src={`/close-icon.svg`}
              alt={`Close Icon`}
            />
          </div>
        </div>
      )}
    </div>
  );
};
