import classNames from "classnames";
import { rubik } from "@/styles";
import { SizeWithInventory } from "@/types";
import { UnStyledButton } from "../Button";

interface ProductSizeProps {
  allSizes?: SizeWithInventory[];
  selectedSize: string | null;
  handleSizeSelect: (size: string) => void;
}

export const ProductSize = ({
  allSizes,
  selectedSize,
  handleSizeSelect,
}: ProductSizeProps) => {
  const fontRubik = rubik?.className;

  return (
    <div className="mb-[32px]">
      {allSizes?.map(({ size, inventoryCount }, index) => {
        const isSizeAvailable = inventoryCount > 0;

        const sizeClassName = classNames(
          fontRubik,
          "px-[16px] py-[8px] rounded-[8px] mr-[8px] mb-[4px]",
          {
            "bg-[#232321] text-[#FFFFFF]":
              selectedSize === size && isSizeAvailable,
            "bg-[#FFFFFF] text-[#232321]":
              selectedSize !== size && isSizeAvailable,
            "bg-[#D2D1D3] text-[#8F8C91]": !isSizeAvailable,
          }
        );

        return (
          <UnStyledButton
            className={sizeClassName}
            disabled={!isSizeAvailable}
            key={index}
            onClick={() => handleSizeSelect(size)}
          >
            {size}
          </UnStyledButton>
        );
      })}
    </div>
  );
};
