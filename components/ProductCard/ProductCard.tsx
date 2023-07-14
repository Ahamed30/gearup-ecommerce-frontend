"use client";

import Image from "next/image";
import { buttonClass, newProductClass, productNameClass } from "./styles";
import { ProductCardType } from "@/types";

interface ProductCardProps {
  product?: ProductCardType;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  if (!product) return;

  const { productName, price, newProduct, productImages } = product;

  //  need to update carousel
  const imageUrl = productImages?.length == 1 ? productImages[0].url : "";

  return (
    <div className="w-full">
      <div
        className="bg-white relative h-0 border rounded-[28px] mb-[16px]"
        style={{ paddingBottom: "100%" }}
      >
        <div className="w-full p-4">
          {productImages?.length == 1 && (
            <Image
              src={`${imageUrl}`}
              alt={"Shoe"}
              layout="fill"
              objectFit="cover"
              className="rounded-[28px] p-2"
            />
          )}
        </div>
        {newProduct && <div className={newProductClass}>New</div>}
      </div>
      <p title={`${productName}`} className={productNameClass}>
        {productName}
      </p>
      <button className={buttonClass}>
        View Product - <span className="text-[#FFA52F]"> ${price}</span>
      </button>
    </div>
  );
};
