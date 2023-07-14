import { ProductCard } from "../ProductCard";

export const ProductGrid = () => {
  return (
    <div className="mx:auto grid gap-4 md:gap-8 grid-cols-2 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      <ProductCard />
    </div>
  );
};
