import {
  newReleaseClassName,
  normalPriceClassName,
  salePriceClassName,
  productNameClassName,
  sizeTitleClassName,
  sizeClassName,
  addToCartButtonClassName,
  favouriteButtonClassName,
  buyNowClassName,
} from "./styles";
import { SHOE_SIZE } from "@/constants";
import Image from "next/image";

export const ProductDetails = () => {
  return (
    <div className="w-1/3">
      <p className={newReleaseClassName}>New Release</p>
      <p className={productNameClassName}>
        ADIDAS 4DFWD X PARLEY RUNNING SHOES
      </p>
      <div className="mb-[32px]">
        <span className={normalPriceClassName}>
          <s>$125.00</s>
        </span>
        <span className={salePriceClassName}>$100.00</span>
      </div>
      <div>
        <div className={sizeTitleClassName}>
          <p>Size</p>
          <p className="underline underline-offset-2 cursor-pointer">
            Size Chart
          </p>
        </div>
        <div className="mb-[32px]">
          {SHOE_SIZE.map((size) => {
            return <button className={sizeClassName}>{size}</button>;
          })}
        </div>
        <div className="flex gap-[8px] mb-[8px]">
          <button className={addToCartButtonClassName}>Add to cart</button>
          <button className={favouriteButtonClassName}>
            <Image
              height={16}
              width={16}
              src="/heart.svg"
              alt="Add to favourite"
            />
          </button>
        </div>
        <button className={buyNowClassName}>Buy it now</button>
      </div>
    </div>
  );
};
