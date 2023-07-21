import classNames from "classnames";
import { Typography } from "@/components/Typography";
import {
  cardTextClassName,
  cardTitleClassName,
  priceClassName,
  titleClassName,
} from "../style";

export const DeliveryOptions = () => {
  return (
    <div className="mb-[32px]">
      <Typography
        variant="headline"
        className={classNames(titleClassName, "mb-[16px] md:mb-[32px]")}
      >
        Delivery Options
      </Typography>
      <div className="flex flex-col items-start gap-[24px]">
        <div className="w-full flex p-4 items-start justify-between gap-[8px] rounded-[16px] bg-[#FAFAFA]">
          <div className="flex-grow">
            <Typography variant="headline" className={cardTitleClassName}>
              Standard Delivery
            </Typography>
            <Typography className={cardTextClassName}>
              Enter your address to see when you’ll get your order
            </Typography>
          </div>
          <div>
            <Typography className={priceClassName} color="#4A69E2">
              $6.00
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
