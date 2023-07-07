import Image from "next/image";

export const MobileSearchBox = () => {
  return (
    <div className="relative">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <Image width={20} height={20} src={"search.svg"} alt="Search Icon" />
      </span>
      <input
        type="text"
        placeholder="Search"
        className="pl-10 pr-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500"
      />
    </div>
  );
};
