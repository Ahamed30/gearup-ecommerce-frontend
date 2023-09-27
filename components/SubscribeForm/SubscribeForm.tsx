import { SubscribeFormType } from "@/types";
import { headerTextClassName, logoContainer, logoNameClass } from "./style";
import { Button } from "../Button";
import { TextInput } from "../TextInput";
import { Typography } from "../Typography";

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
            className={headerTextClassName}
            color="#FFFFFF"
            variant="headline"
          >
            {headerText}
          </Typography>
          <Typography
            className="text-base lg:text-xl font-semibold mb-[24px] lg:mb-[32px]"
            color="#E7E5E4"
          >
            {subText}
          </Typography>
          <div className="flex flex-row gap-4">
            <TextInput
              className="w-1/2"
              placeholder="Email address"
              state="dark"
              type="email"
            />
            <Button
              className="flex justify-center items-center uppercase"
              color="primary"
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
