import { SubscribeFormType } from "@/types";
import { headerTextClassName, logoContainer, logoNameClass } from "./style";
import { Typography } from "../Typography";
import { TextInput } from "../TextInput";
import { Button } from "../Button";

export interface SubscribeFormProps {
  subscribeFormData?: SubscribeFormType;
}

export const SubscribeForm = ({ subscribeFormData }: SubscribeFormProps) => {
  if (!subscribeFormData) return;

  const { headerText, subText } = subscribeFormData;

  return (
    <div className="p-[24px] lg:p-[40px]">
      <div className="lg:flex lg:flex-row lg:justify-between gap-16">
        <div className="w-full">
          <Typography
            as="h3"
            variant="headline"
            color="#FFFFFF"
            className={headerTextClassName}
          >
            {headerText}
          </Typography>
          <Typography
            color="#E7E5E4"
            className="text-base lg:text-xl font-semibold mb-[24px] lg:mb-[32px]"
          >
            {subText}
          </Typography>
          <div className="flex flex-row gap-4">
            <TextInput
              type="email"
              className="w-1/2"
              state="dark"
              placeholder="Email address"
            />
            <Button
              color="primary"
              className="flex justify-center items-center uppercase"
            >
              Submit
            </Button>
          </div>
        </div>
        <div className={logoContainer}>
          {/* {TODO: Need to update a logo} */}
          <h1 className={logoNameClass}>GearUp</h1>
        </div>
      </div>
    </div>
  );
};
