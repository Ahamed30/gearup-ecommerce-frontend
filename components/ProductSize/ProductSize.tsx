import classNames from "classnames";
import { SHOE_SIZE } from "@/constants";
import { rubik } from "@/styles";
import { UnStyledButton } from "../Button";

interface ProductSizeProps {
  size?: string[];
  selectedSize: string | null;
  handleSizeSelect: (size: string) => void;
}

export const ProductSize = ({
  size,
  selectedSize,
  handleSizeSelect,
}: ProductSizeProps) => {
  const fontRubik = rubik?.className;

  let shoeIndex = 0;

  const totalSizeLength = size?.length || 0;

  return (
    <div className="mb-[32px]">
      {SHOE_SIZE.map((currSize, index) => {
        const isSizeAvailable =
          shoeIndex < totalSizeLength && size && size[shoeIndex] === currSize;
        shoeIndex += isSizeAvailable ? 1 : 0;
        const sizeClassName = classNames(
          fontRubik,
          "px-[16px] py-[8px] rounded-[8px] mr-[8px] mb-[4px]",
          {
            "bg-[#232321] text-[#FFFFFF]":
              selectedSize === currSize && isSizeAvailable,
            "bg-[#FFFFFF] text-[#232321]":
              selectedSize !== currSize && isSizeAvailable,
            "bg-[#D2D1D3] text-[#8F8C91]": !isSizeAvailable,
          }
        );

        return (
          <UnStyledButton
            className={sizeClassName}
            key={index}
            onClick={() => handleSizeSelect(currSize)}
            disabled={!isSizeAvailable}
          >
            {currSize}
          </UnStyledButton>
        );
      })}
    </div>
  );
};
