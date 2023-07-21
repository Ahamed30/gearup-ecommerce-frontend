import { ProductType } from "@/types";
import { ProductCarousel } from "../ProductCarousel";
import { ProductDetails } from "../ProductDetails";

interface ProductDescriptionProps {
  productData: ProductType;
}

export const ProductDescription = ({
  productData,
}: ProductDescriptionProps) => {
  return (
    <div className="md:flex md:justify-between md:gap-12">
      <ProductCarousel productImages={productData.productImages} />
      <ProductDetails productData={productData} />
    </div>
  );
};
