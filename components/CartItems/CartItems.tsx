import Image from "next/image";
import { Typography } from "../Typography";

export const CartItems = () => {
  const salePrice = true;
  return (
    <div className="border rounded-[16px] bg-[#FAFAFA] p-4 lg:p-6">
      <div className="mb-[32px]">
        <Typography
          variant="headline"
          className="text-xl lg:text-3xl font-semibold mb-[8px]"
        >
          Your Bag
        </Typography>
        <Typography className="text-sm lg:text-base font-normal">
          Items in your bag not reserved- check out now to make them yours.
        </Typography>
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
              <Typography
                variant="headline"
                className="text-base lg:text-xl font-semibold mb-[8px]"
              >
                DROPSET TRAINER SHOES
              </Typography>
              <Typography className="text-sm lg:text-lg font-semibold mb-[8px]">
                Enamel Blue/ University White
              </Typography>
              <div className="text-sm lg:text-lg font-semibold lg:flex lg:justify-between gap-6 mb-[8px] lg:mb-[32px]">
                <div className="flex items-center gap-2">
                  <Typography className="text-base lg:text-xl">
                    Size 10
                  </Typography>
                  <Image
                    src="/chevron-down.svg"
                    height={24}
                    width={24}
                    alt="DropDownIcon"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Typography className="text-base lg:text-xl">
                    Quantity 1
                  </Typography>
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
              {salePrice && (
                <Typography
                  variant="headline"
                  color="#EF4444"
                  className="text-xl lg:text-2xl font-semibold"
                >
                  $75
                </Typography>
              )}
              <Typography
                variant="headline"
                color="#4A69E2"
                className="text-xl lg:text-2xl font-semibold"
              >
                {salePrice ? <s>$100</s> : `$100`}
              </Typography>
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
