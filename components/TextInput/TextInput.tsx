import type { InputHTMLAttributes } from "react";
import classNames from "classnames";
import { openSans } from "@/styles";
import { Typography } from "../Typography";

const fontOpenSans = openSans?.className;

export const commonInputContainer =
  "px-4 py-2.5 rounded-lg border justify-start items-center inline-flex";

export const inputBox = `${fontOpenSans} w-full placeholder-[#79767C] text-[16px] font-normal tracking-wide bg-transparent focus:outline-none`;

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  state?: "default" | "error" | "valid";
  title?: string;
  helper?: string;
};

export const stateBorderColor = {
  default: "border-[#232321]",
  error: "border-[#DA1E28]",
  valid: "border-[#008B28]",
};

export const stateTextColor = {
  default: "#1F1A24",
  error: "#DA1E28",
  valid: "#008B28",
};

export const TextInput = ({
  state = "default",
  className,
  title,
  helper,
  ...props
}: TextInputProps) => {
  return (
    <div className={classNames("flex flex-col", className)}>
      {title && (
        <Typography
          variant="paragraph"
          className="text-[14px] font-normal mb-[8px]"
          color="#1F1A24"
        >
          {title}
        </Typography>
      )}
      <div
        className={classNames(commonInputContainer, stateBorderColor[state])}
      >
        <input
          className={classNames(inputBox, `text-[${stateTextColor}]`)}
          {...props}
        />
      </div>
      {helper && (
        <Typography
          variant="paragraph"
          className="text-[12px] font-normal mt-[4px]"
          color={stateTextColor[state]}
        >
          {helper}
        </Typography>
      )}
    </div>
  );
};
