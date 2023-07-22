import { ButtonHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import { rubik } from "@/styles";

const fontRubik = rubik?.className;

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
};

export const buttonColor = {
  primary: "bg-[#232321] hover:bg-[#4A69E2]",
  secondary: "bg-[#4A69E2] hover:bg-[#232321]",
};

export const buttonSize = {
  sm: "",
  md: "text-xs lg:text-sm py-[12px]",
  lg: "",
};

export const commonButtonClass = `${fontRubik} text-white rounded-[8px] px-6`;

export const UnStyledButton = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button {...props}>{children}</button>;
};

export const Button = ({
  color = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        commonButtonClass,
        buttonColor[color],
        buttonSize[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
