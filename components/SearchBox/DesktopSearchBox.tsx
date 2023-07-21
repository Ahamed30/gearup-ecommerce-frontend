import Image from "next/image";
import classNames from "classnames";
import { TextInput } from "../TextInput";

interface DesktopSearchBoxProps {
  isDesktopSearchBoxOpen?: Boolean;
}

export const DesktopSearchBox = ({
  isDesktopSearchBoxOpen,
}: DesktopSearchBoxProps) => {
  const searchBoxClassName = classNames(
    `items-center justify-center w-full mt-8 hidden`,
    isDesktopSearchBoxOpen ? `lg:flex` : `hidden`
  );

  return (
    <div className={searchBoxClassName}>
      <TextInput
        type="text"
        placeholder="Search"
        startIcon={
          <Image width={20} height={20} src={"/search.svg"} alt="Search Icon" />
        }
        className="w-1/2"
      />
    </div>
  );
};
