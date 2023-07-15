import Image from "next/image";
import classNames from "classnames";
import { desktopSearchInputClass } from "./style";

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
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <Image width={20} height={20} src={"/search.svg"} alt="Search Icon" />
        </span>
        <input
          type="text"
          placeholder="Search"
          className={desktopSearchInputClass}
        />
      </div>
    </div>
  );
};
