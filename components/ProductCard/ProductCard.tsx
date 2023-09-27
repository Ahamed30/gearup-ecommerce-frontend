"use client";

import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { ProductCardType } from "@/types";
import { buttonClass, productNameClass, tagClass } from "./styles";
import { Button } from "../Button";
import { Typography } from "../Typography";

interface ProductCardProps {
  product?: ProductCardType;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  if (!product) return;

  const { id, productName, price, newProduct, offerPercent, heroImage } =
    product;

  //  need to update carousel

  return (
    <Link href={`/product/${id}`}>
      <div className="w-full">
        <div
          className="bg-white relative h-0 border rounded-[28px] mb-[16px]"
          style={{ paddingBottom: "100%" }}
        >
          <div className="w-full p-4">
            <Image
              alt={"Shoe"}
              className="rounded-[28px] p-2 object-cover"
              fill
              src={`${heroImage.url}`}
            />
          </div>
          {newProduct && (
            <div className={classNames(tagClass, "bg-[#4A69E2]")}>
              <Typography
                className="text-[12px] font-semibold"
                color="#FFFFFF"
                variant="headline"
              >
                New
              </Typography>
            </div>
          )}
          {!newProduct && offerPercent && (
            <div className={classNames(tagClass, "bg-[#FFA52F]")}>
              <Typography
                className="text-[12px] font-semibold"
                variant="headline"
              >{`${offerPercent} off`}</Typography>
            </div>
          )}
        </div>
        {/* {TODO: Need hover the text} */}
        <Typography
          className={productNameClass}
          title={`${productName}`}
          variant="headline"
        >
          {productName}
        </Typography>
        <Button className={buttonClass} color="primary" size="md">
          <Typography as="span" color="#FFFFFF" variant="headline">
            View Product -
            <Typography as="span" color="#FFA52F" variant="headline">
              &nbsp;${price}
            </Typography>
          </Typography>
        </Button>
      </div>
    </Link>
  );
};
