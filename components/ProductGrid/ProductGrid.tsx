"use client";

import { ProductCard } from "../ProductCard";
import { ProductCardType } from "@/types";

interface ProductGridProps {
  products?: Array<ProductCardType>;
}

export const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="mx:auto mb-6 lg:mb-8 grid gap-4 md:gap-8 grid-cols-2 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {products?.map((product) => {
        return <ProductCard product={product} />;
      })}
    </div>
  );
};
