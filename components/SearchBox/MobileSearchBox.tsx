import Image from "next/image";
import { TextInput } from "../TextInput";

export const MobileSearchBox = () => {
  return (
    <TextInput
      className="w-full my-2"
      placeholder="Search"
      startIcon={
        <Image alt="Search Icon" height={20} src={"/search.svg"} width={20} />
      }
      type="text"
    />
  );
};
