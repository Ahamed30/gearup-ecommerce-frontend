import Image from "next/image";
import { TextInput } from "../TextInput";

export const MobileSearchBox = () => {
  return (
    <TextInput
      type="text"
      placeholder="Search"
      className="w-full my-2"
      startIcon={
        <Image width={20} height={20} src={"/search.svg"} alt="Search Icon" />
      }
    />
  );
};
