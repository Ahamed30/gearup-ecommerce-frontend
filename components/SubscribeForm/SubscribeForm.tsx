import { SubscribeFormType } from "@/types";
import {
  headerTextClassName,
  inputBox,
  inputBoxContainer,
  logoContainer,
  logoNameClass,
  subTextClassName,
  submitButton,
} from "./style";

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
          <h3 className={headerTextClassName}>{headerText}</h3>
          <p className={subTextClassName}>{subText}</p>
          <div className={inputBoxContainer}>
            <input className={inputBox} placeholder="Email address" />
          </div>

          <button className={submitButton}>Submit</button>
        </div>
        <div className={logoContainer}>
          <h1 className={logoNameClass}>GearUp</h1>
        </div>
      </div>
    </div>
  );
};
