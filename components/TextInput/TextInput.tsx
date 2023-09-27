import classNames from "classnames";
import type { InputHTMLAttributes, ReactNode } from "react";
import { openSans } from "@/styles";
import { Typography } from "../Typography";

const fontOpenSans = openSans?.className;

export const commonInputContainer =
  "px-2 py-2.5 rounded-lg border justify-start items-center inline-flex";

export const inputBox = `${fontOpenSans} w-full px-2 placeholder-[#79767C] text-[16px] font-normal tracking-wide bg-transparent focus:outline-none`;

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  state?: "default" | "error" | "valid" | "dark";
  title?: string;
  helper?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
};

export const stateBorderColor = {
  default: "border-[#232321]",
  dark: "border-[#FFFFFF]",
  error: "border-[#DA1E28]",
  valid: "border-[#008B28]",
};

export const stateTextColor = {
  default: "#1F1A24",
  dark: "#FFFFFF",
  error: "#DA1E28",
  valid: "#008B28",
};

export const TextInput = ({
  state = "default",
  className,
  title,
  helper,
  startIcon,
  endIcon,
  ...props
}: TextInputProps) => {
  return (
    <div className={classNames("flex flex-col", className)}>
      {title && (
        <Typography
          className="text-[14px] font-normal mb-[8px]"
          color={state}
          variant="paragraph"
        >
          {title}
        </Typography>
      )}
      <div
        className={classNames(commonInputContainer, stateBorderColor[state])}
      >
        {startIcon && (
          <div className="flex items-center cursor-pointer">{startIcon}</div>
        )}
        <input
          className={classNames(
            inputBox,
            state === "dark" && "placeholder-[#E7E7E3]"
          )}
          style={{ color: stateTextColor[state] }}
          {...props}
        />
        {endIcon && (
          <div className="flex items-center ml-2 cursor-pointer">{endIcon}</div>
        )}
      </div>
      {helper && (
        <Typography
          className="text-[12px] font-normal mt-[4px]"
          color={stateTextColor[state]}
          variant="paragraph"
        >
          {helper}
        </Typography>
      )}
    </div>
  );
};
