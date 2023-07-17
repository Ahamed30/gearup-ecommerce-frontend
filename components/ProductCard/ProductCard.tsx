"use client";

import Image from "next/image";
import Link from "next/link";
import {
  buttonClass,
  newProductClass,
  offerPercentClass,
  productNameClass,
} from "./styles";
import { ProductCardType } from "@/types";

interface ProductCardProps {
  product?: ProductCardType;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  if (!product) return;

  const { id, productName, price, newProduct, productImages, offerPercent } =
    product;

  //  need to update carousel
  const imageUrl = productImages?.length == 1 ? productImages[0].url : "";

  return (
    <Link href={`/product/${id}`}>
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
                fill
                className="rounded-[28px] p-2 object-cover"
              />
            )}
          </div>
          {newProduct && <div className={newProductClass}>New</div>}
          {!newProduct && offerPercent && (
            <div className={offerPercentClass}>{`${offerPercent} off`}</div>
          )}
        </div>
        <p title={`${productName}`} className={productNameClass}>
          {productName}
        </p>
        <button className={buttonClass}>
          View Product - <span className="px-1 text-[#FFA52F]"> ${price}</span>
        </button>
      </div>
    </Link>
  );
};
