"use client";

import Link from "next/link";
import { ProductCard } from "../ProductCard";
import { Typography } from "../Typography";
import { Button } from "../Button";
import { ProductGridType } from "@/types";

interface ProductGridProps {
  productGrid?: ProductGridType;
}

export const ProductGrid = ({ productGrid }: ProductGridProps) => {
  if (!productGrid) return;

  const { name, products } = productGrid;

  return (
    <div className="mx-auto mb-6 lg:mb-8">
      <div className="flex justify-between items-end mb-6 lg:mb-7 ">
        <Typography
          variant="headline"
          className="w-1/2 text-2xl lg:text-6xl font-semibold lg:uppercase"
        >
          {name}
        </Typography>
        <Link href="/products/all">
          {/* {TODO: Need to change it to small button} */}
          <Button
            color="secondary"
            className="uppercase tracking-wide flex justify-center items-center"
          >
            Shop New Drops
          </Button>
        </Link>
      </div>
      <div className="grid gap-4 md:gap-8 grid-cols-2 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {products?.map((product) => {
          return <ProductCard key={product?.id} product={product} />;
        })}
      </div>
    </div>
  );
};
