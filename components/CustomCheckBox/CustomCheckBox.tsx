// components/CustomCheckbox.js
import { InputHTMLAttributes, useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import { Typography } from "../Typography";
import { openSans } from "@/styles";

interface CustomCheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
  className?: string;
  isEnabled?: boolean;
}

const CustomCheckbox = ({
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
      className={classNames("flex items-center cursor-pointer", className)}
    >
      <div className="relative">
        <input
          type="checkbox"
          className="hidden"
          checked={checked}
          onChange={(e) => handleCheckboxChange(e)}
          {...props}
        />
        {checked ? (
          <Image
            src="/checkbox-tick.svg"
            height={24}
            width={24}
            alt="Checked this box"
          />
        ) : (
          <div className="w-6 h-6 bg-white border border-gray-300 rounded-md" />
        )}
      </div>
      <Typography
        as="span"
        className={`ml-2 ${fontOpenSans} text-base font-semibold`}
      >
        {text}
      </Typography>
    </label>
  );
};

export default CustomCheckbox;
