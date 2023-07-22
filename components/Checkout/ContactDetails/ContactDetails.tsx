import classNames from "classnames";
import { TextInput } from "@/components/TextInput";
import { Typography } from "@/components/Typography";
import { subTextClassName, titleClassName } from "../style";

export const ContactDetails = () => {
  return (
    <div className="mb-[16px] lg:mb-[32px]">
      <Typography
        variant="headline"
        className={classNames(titleClassName, "mb-[8px]")}
      >
        Contact Details
      </Typography>
      <Typography variant="paragraph" className={subTextClassName}>
        We will use these details to keep you inform about your delivery.
      </Typography>
      <TextInput
        className="w-full lg:w-1/2"
        type="email"
        placeholder="Email*"
        required
      />
    </div>
  );
};
