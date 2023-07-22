"use client";

import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import { Button } from "../Button";
import { Typography } from "../Typography";
import { ProductCardType } from "@/types";
import { buttonClass, productNameClass, tagClass } from "./styles";

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
              src={`${heroImage.url}`}
              alt={"Shoe"}
              fill
              className="rounded-[28px] p-2 object-cover"
            />
          </div>
          {newProduct && (
            <div className={classNames(tagClass, "bg-[#4A69E2]")}>
              <Typography
                variant="headline"
                className="text-[12px] font-semibold"
                color="#FFFFFF"
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
          variant="headline"
          title={`${productName}`}
          className={productNameClass}
        >
          {productName}
        </Typography>
        <Button color="primary" size="md" className={buttonClass}>
          <Typography as="span" variant="headline" color="#FFFFFF">
            View Product -
            <Typography as="span" variant="headline" color="#FFA52F">
              &nbsp;${price}
            </Typography>
          </Typography>
        </Button>
      </div>
    </Link>
  );
};
