import classNames from "classnames";
import Image from "next/image";
import { InputHTMLAttributes, useState } from "react";
import { openSans } from "@/styles";
import { Typography } from "../Typography";

interface CustomCheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
  className?: string;
  isEnabled?: boolean;
}

export const CustomCheckbox = ({
  text,
  className,
  isEnabled = false,
  onChange,
  ...props
}: CustomCheckBoxProps) => {
  const [checked, setChecked] = useState(isEnabled);
  const fontOpenSans = openSans?.className;

  const handleCheckboxChange = (e: any) => {
    setChecked((prevChecked) => !prevChecked);
    onChange?.(e);
  };

  return (
    <label
      className={classNames(
        "flex flex-row gap-2 items-center cursor-pointer",
        className
      )}
    >
      <div className="relative">
        <input
          checked={checked}
          className="hidden"
          onChange={(e) => handleCheckboxChange(e)}
          type="checkbox"
          {...props}
        />
        {checked ? (
          <Image
            alt="Checked this box"
            className="object-cover"
            height={24}
            src="/checkbox-true.svg"
            width={24}
          />
        ) : (
          <Image
            alt="Checked this box"
            className="object-cover"
            height={24}
            src="/checkbox-false.svg"
            width={24}
          />
        )}
      </div>
      <Typography as="p" className={`${fontOpenSans} text-base font-semibold`}>
        {text}
      </Typography>
    </label>
  );
};
