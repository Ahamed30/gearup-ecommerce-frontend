"use client";

import Link from "next/link";
import { ProductCard } from "../ProductCard";
import { ProductGridType } from "@/types";
import { buttonClassName, titleClassName } from "./style";

interface ProductGridProps {
  productGrid?: ProductGridType;
}

export const ProductGrid = ({ productGrid }: ProductGridProps) => {
  if (!productGrid) return;

  const { name, products } = productGrid;

  return (
    <div className="mx-auto mb-6 lg:mb-8">
      <div className="flex justify-between items-end mb-6 lg:mb-7 ">
        <p className={titleClassName}>{name}</p>
        <Link href="/products/all">
          <button className={buttonClassName}>Shop New Drops</button>
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
