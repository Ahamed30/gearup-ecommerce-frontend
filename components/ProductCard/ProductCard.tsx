import Image from "next/image";
import { buttonClass, newProductClass, productNameClass } from "./styles";

export const ProductCard = () => {
  return (
    <div className="w-full">
      <div
        className="bg-white relative h-0 border rounded-[28px] mb-[16px]"
        style={{ paddingBottom: "100%" }}
      >
        <div className="w-full p-4">
          <Image
            src={"/shoe1.jpg"}
            alt={"Shoe"}
            layout="fill"
            objectFit="cover"
            className="rounded-[28px] p-2"
          />
        </div>
        <div className={newProductClass}>New</div>
      </div>
      <p className={productNameClass}>ADIDAS 4DFWD X PARLEY RUNNING SHOES</p>
      <button className={buttonClass}>
        View Product - <span className="text-[#FFA52F]"> $125</span>
      </button>
    </div>
  );
};
