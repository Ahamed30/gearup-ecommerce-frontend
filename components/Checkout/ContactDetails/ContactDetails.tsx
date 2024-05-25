import classNames from "classnames";
import { TextInput } from "@/components/TextInput";
import { Typography } from "@/components/Typography";
import { useUser } from "@/context/UserContext";
import { subTextClassName, titleClassName } from "../style";

export const ContactDetails = () => {
  const { handleChangeData, user } = useUser();
  return (
    <div className="mb-[16px] lg:mb-[32px]">
      <Typography
        className={classNames(titleClassName, "mb-[8px]")}
        variant="headline"
      >
        Contact Details
      </Typography>
      <Typography className={subTextClassName} variant="paragraph">
        We will use these details to keep you inform about your delivery.
      </Typography>
      <TextInput
        className="w-full lg:w-1/2"
        name="email"
        onChange={(e) => handleChangeData(e)}
        placeholder="Email*"
        required
        type="email"
        value={user?.email}
      />
    </div>
  );
};
