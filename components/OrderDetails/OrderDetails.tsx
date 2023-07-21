import Image from "next/image";
import { Typography } from "../Typography";

export const OrderDetails = () => {
  const salePrice = true;
  return (
    <div className="border rounded-[16px] bg-[#FAFAFA] p-[24px] lg:p-6">
      <div className="mb-[16px] lg:mb-[32px]">
        <Typography
          variant="headline"
          className="text-xl lg:text-3xl font-semibold mb-[8px]"
        >
          Order
        </Typography>
      </div>
      <div className="flex gap-[16px]  lg:gap-[24px]">
        <div className="relative w-3/4 lg:w-1/2 h-[180px] md:h-[180px]">
          <Image
            src="/shoe1.jpg"
            fill
            className="object-cover rounded-[24px]"
            alt="ProductImage"
          />
        </div>
        <div className="flex-grow">
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
            <div className="text-sm lg:text-lg font-semibold flex flex-row gap-3 lg:gap-6 mb-[8px] lg:mb-[32px]">
              <div className="flex items-center">
                <Typography className="text-base lg:text-xl">
                  Size 10
                </Typography>
              </div>
              <div className="flex items-center">
                <Typography className="text-base lg:text-xl">
                  Quantity 1
                </Typography>
              </div>
            </div>
            <div className="flex flex-row mb-[8px] gap-3">
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
        </div>
      </div>
    </div>
  );
};
