import classNames from "classnames";
import { Typography } from "@/components/Typography";
import { titleClassName } from "../style";
import { TextInput } from "@/components/TextInput";

export const ShippingAddress = () => {
  return (
    <div>
      {/* // TODO: Need to update shipping address fields */}
      <div className="mb-[32px]">
        <Typography
          variant="headline"
          className={classNames(titleClassName, "mb-[16px] md:mb-[32px]")}
        >
          Shipping Address
        </Typography>
        <div className="md:flex md:gap-[20px]">
          <TextInput
            className="w-full lg:w-1/2 mb-[16px]"
            placeholder="First Name*"
            required
          />
          <TextInput
            className="w-full lg:w-1/2  mb-[16px]"
            placeholder="Last Name"
            required
          />
        </div>
        <TextInput
          className="w-full mb-[16px]"
          placeholder="Find Delivery Address*"
          helper="Start typing your street address or zip code for suggestion"
          required
        />
        <TextInput
          className="w-full md:w-1/2"
          placeholder="Phone Number*"
          helper="E.g. (123) 456-7890"
          required
        />
      </div>
    </div>
  );
};
