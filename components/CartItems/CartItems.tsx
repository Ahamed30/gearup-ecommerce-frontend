import classNames from "classnames";
import Image from "next/image";
import {
  cartTextClassName,
  normalPriceClassName,
  productTitleClassName,
  salePriceClassName,
  subTextClassName,
  titleClassName,
} from "./style";

export const CartItems = () => {
  const salePrice = true;
  return (
    <div className="border rounded-[16px] bg-[#FAFAFA] p-4 lg:p-6">
      <div className="mb-[32px]">
        <p className={titleClassName}>Your Bag</p>
        <p className={subTextClassName}>
          Items in your bag not reserved- check out now to make them yours.
        </p>
      </div>
      <div className="flex gap-[16px] md:gap-[60px] lg:gap-[24px] mb-[16px]">
        <div className="relative w-1/2 lg:w-1/4 h-[200px] lg:h-[180px]">
          <Image
            src="/shoe1.jpg"
            fill
            className="object-cover rounded-[24px]"
            alt="ProductImage"
          />
        </div>
        <div className="w-1/2 flex-grow">
          <div className="lg:flex lg:justify-between gap-5">
            <div>
              <p className={productTitleClassName}>DROPSET TRAINER SHOES</p>
              <p className={cartTextClassName}>Enamel Blue/ University White</p>
              <div
                className={classNames(
                  cartTextClassName,
                  "lg:flex lg:justify-between gap-6 mb-[8px] lg:mb-[32px]"
                )}
              >
                <div className="flex items-center gap-2">
                  <p>Size 10</p>
                  <Image
                    src="/chevron-down.svg"
                    height={24}
                    width={24}
                    alt="DropDownIcon"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <p>Quantity 1</p>
                  <Image
                    src="/chevron-down.svg"
                    height={24}
                    width={24}
                    alt="DropDownIcon"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row lg:flex-col mb-[8px] lg:mb-[32px] gap-3">
              {salePrice && <p className={salePriceClassName}>$75</p>}
              <p className={normalPriceClassName}>
                {salePrice ? <s>$100</s> : `$100`}
              </p>
            </div>
          </div>

          <div className="flex gap-[24px]">
            <Image
              src="/heart-black.svg"
              height={32}
              width={32}
              alt="Add to favourite"
              className="cursor-pointer"
            />
            <Image
              src="/bin.svg"
              height={32}
              width={32}
              alt="Delete Item"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
