import classNames from "classnames";
import Image from "next/image";
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
        className="w-1/2"
        placeholder="Search"
        startIcon={
          <Image alt="Search Icon" height={20} src={"/search.svg"} width={20} />
        }
        type="text"
      />
    </div>
  );
};
