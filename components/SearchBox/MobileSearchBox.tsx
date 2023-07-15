import Image from "next/image";
import { mobileSearchInputClass } from "./style";

export const MobileSearchBox = () => {
  return (
    <div className="relative">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <Image width={20} height={20} src={"/search.svg"} alt="Search Icon" />
      </span>
      <input
        type="text"
        placeholder="Search"
        className={mobileSearchInputClass}
      />
    </div>
  );
};
