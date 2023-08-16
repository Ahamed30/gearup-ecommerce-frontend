import Image from "next/image";
import { Button } from "../Button";
import { Typography } from "../Typography";

export const RewardsBanner = () => {
  return (
    <div className="border bg-[#FAFAFA] rounded-2xl p-6 w-full lg:w-1/2">
      <div className="flex flex-col gap-y-6 pb-10 lg:pb-16">
        <Typography
          variant="headline"
          className="text-3xl md:text-4xl font-semibold"
        >
          Join Kicks Club Get Rewarded Today.
        </Typography>
        <Typography className="text-base">
          As kicks club member you get rewarded with what you love for doing
          what you love. Sign up today and receive immediate access to these
          Level 1 benefits:
        </Typography>
        <ul className="pl-6 list-disc">
          <li>Free Shipping</li>
          <li>A 15% off voucher for your next purchase</li>
          <li>Access to Members Only products and sales</li>
          <li>Access to adidas Running and Training apps</li>
          <li>Special offers and promotions</li>
        </ul>
        <Typography>
          Join now to start earning points, reach new levels and unlock more
          rewards and benefits from adiClub.
        </Typography>
      </div>
      <Button
        color="primary"
        type="submit"
        className="w-full flex justify-between items-center cursor-pointer"
      >
        <Typography
          color="#FFFFFF"
          variant="headline"
          className="text-sm lg:text-base uppercase"
        >
          Join the club
        </Typography>
        <Image
          src="/arrow-forward.svg"
          height={16}
          width={16}
          alt="Go forward"
        />
      </Button>
    </div>
  );
};
