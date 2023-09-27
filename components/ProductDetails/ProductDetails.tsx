"use client";

import classNames from "classnames";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { CartItemType, ProductType } from "@/types";
import {
  newReleaseClassName,
  addToCartButtonClassName,
  favouriteButtonClassName,
} from "./styles";
import { Button, UnStyledButton } from "../Button";
import { ProductSize } from "../ProductSize";
import { Typography } from "../Typography";

interface ProductDetailsProps {
  productData: ProductType;
}

export const ProductDetails = ({ productData }: ProductDetailsProps) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isSizeSelected, setIsSizeSelected] = useState<boolean>(true);
  const [isFavourite, setIsFavouriteSelected] = useState<boolean>(false);
  const [showAddedToCart, setShowAddedToCart] = useState<boolean>(false);
  const { addToCart } = useCart();

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
    setShowAddedToCart(true);
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
          className={newReleaseClassName}
          color="#FFFFFF"
          variant="headline"
        >
          New Release
        </Typography>
      )}
      <Typography
        className="text-2xl lg:text-3xl font-semibold lg:uppercase mb-[16px]"
        variant="headline"
      >
        {productName}
      </Typography>
      <div className="mb-[32px]">
        <Typography
          as="span"
          className="text-2xl font-semibold mr-[16px]"
          color="#4A69E2"
          variant="headline"
        >
          {salePrice ? <s>${price}</s> : `$${price}`}
        </Typography>
        {salePrice && (
          <Typography
            as="span"
            className="text-2xl font-semibold"
            color="#EF4444"
            variant="headline"
          >
            ${salePrice}
          </Typography>
        )}
      </div>
      <div>
        <div className="flex justify-between mb-[8px]">
          <Typography
            className="text-base font-semibold uppercase"
            variant="headline"
          >
            Size
          </Typography>
          <Typography
            className="text-base font-semibold uppercase underline underline-offset-2 cursor-pointer"
            variant="headline"
          >
            Size Chart
          </Typography>
        </div>
        <ProductSize
          handleSizeSelect={handleSizeSelect}
          selectedSize={selectedSize}
          size={size}
        />
        {!isSizeSelected && (
          <Typography
            className="text-base mb-[16px]"
            color="#EF4444"
            variant="headline"
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
            alt="Add to favourite"
            height={16}
            src={isFavourite ? "/heart-red.svg" : "/heart.svg"}
            width={16}
          />
        </UnStyledButton>
      </div>
      <Button className="w-full uppercase mb-[16px]" color="secondary">
        Buy it now
      </Button>
      <div>
        <Typography
          className="text-base font-semibold uppercase mb-[8px]"
          variant="headline"
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
              alt={`Close Icon`}
              height={25}
              src={`/close-icon.svg`}
              width={25}
            />
          </div>
        </div>
      )}
    </div>
  );
};
