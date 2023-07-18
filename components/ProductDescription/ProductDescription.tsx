import { ProductCarousel } from "../ProductCarousel";
import { ProductDetails } from "../ProductDetails";

export const ProductDescription = () => {
  return (
    <div className="flex justify-between gap-4">
      <ProductCarousel />
      <ProductDetails />
    </div>
  );
};
