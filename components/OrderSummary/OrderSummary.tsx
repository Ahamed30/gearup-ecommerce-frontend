import { useState } from "react";
import Image from "next/image";
import {
  buttonClassName,
  inputBox,
  inputBoxContainer,
  itemClassName,
  orderContainer,
  promoTextClassName,
  titleClassName,
  totalClassName,
} from "./style";

export const OrderSummary = () => {
  const [promoBoxOpen, setPromoBoxOpen] = useState<Boolean>(false);
  const [inputValue, setInputValue] = useState("");

  const [items, setItems] = useState([
    { name: "1 ITEM", price: "$130.00" },
    { name: "Delivery", price: "$6.99" },
    { name: "Sales Tax", price: "-" },
  ]);
  const total = "$136.99";

  const togglePromoBox = () => {
    setPromoBoxOpen(!promoBoxOpen);
  };

  const handleInputChange = (event: { target: { value: string } }) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    const promoCodeItem = { name: "Promo Applied", price: "-$12" };
    setItems((prevItems) => [...prevItems, promoCodeItem]);
    togglePromoBox();
  };

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
      // Handle Enter key press event
      const promoCodeItem = { name: "Promo Code", price: "$12" };
      setItems((prevItems) => [...prevItems, promoCodeItem]);
      togglePromoBox();
    }
  };

  return (
    <div className={orderContainer}>
      <p className={titleClassName}>Order Summary</p>
      {items.map((item, index) => (
        <div key={index} className={itemClassName}>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      ))}
      <div className={totalClassName}>
        <p>Total</p>
        <p>{total}</p>
      </div>
      <button className={buttonClassName}>CHECKOUT</button>
      <p className={promoTextClassName} onClick={() => togglePromoBox()}>
        User a promo code
      </p>
      {promoBoxOpen && (
        <div className="lg:border lg:rounded-[16px] lg:bg-[#FAFAFA] p-6 flex justify-center items-center mt-[16px]">
          <div className={inputBoxContainer}>
            <input
              className={inputBox}
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Promo code"
            />
            <div
              className="flex items-center ml-2 cursor-pointer"
              onClick={handleClick}
            >
              <Image
                src="/message-send-icon.svg"
                height={24}
                width={24}
                alt="Add Promo Code"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
