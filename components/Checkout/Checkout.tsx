"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import CustomCheckbox from "../CustomCheckBox/CustomCheckBox";
import { Typography } from "../Typography";
import { ContactDetails } from "./ContactDetails";
import { Address } from "./Address";
import { DeliveryOptions } from "./DeliveryOptions";
import { linkClassName, newsTextClassName, buttonClass } from "./style";
import { Button } from "../Button";
import { OrderSummary } from "../OrderSummary";
import { OrderDetails } from "../OrderDetails";
import { useUser } from "@/context/UserContext";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export const Checkout = () => {
  // {TODO: Need to move it to context}
  const { user, handleChangeData } = useUser();
  const { cart } = useCart();
  const router = useRouter();
  const [isDeliveryTypeSelected, setIsDeliveryTypeSelected] =
    useState<boolean>(true);

  /**
   * NOTE: THIS FUNCTION IS COMPLETED JUST NEED TO MOVE IT TO BACKEND DUE TO CORS POLICY
   */
  // const validateAddress = async () => {
  //   console.log("-->", user?.deliveryAddress);
  //   if (user?.deliveryAddress) {
  //     const { city, state, country } = user?.deliveryAddress;
  //     const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  //     const res = await fetch(
  //       proxyUrl +
  //         `https://nominatim.openstreetmap.org/search?q=${city}%2C${state}%2C${country}`
  //     )
  //       .then((res) => res.json())
  //       .catch((err) => console.error("Errorrrr", err));
  //     console.log("Res", res);
  //   }
  // };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!cart?.deliveryType) {
      setIsDeliveryTypeSelected(false);
      return;
    }
    console.log(":::", user);
    // validateAddress(); // need to move this to backend
    // You can now use the formData object to send it to your backend or perform any other operations
    // need to empty the cart
    router.push("/orderConfirmation");
  };

  useEffect(() => {
    if (cart?.deliveryType) setIsDeliveryTypeSelected(true);
  }, [cart?.deliveryType]);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-[20px] lg:gap-[40px]">
      <form
        className="mb-[24px] md:mb-[40px] sm:w-full md:w-3/5"
        onSubmit={handleSubmit}
      >
        {/* TODO: Once logged In show them saved address instead of contact details  */}
        <Typography variant="headline" className={linkClassName}>
          Login and Checkout faster
        </Typography>
        <ContactDetails />
        <Address typeOfAddress="deliveryAddress" />
        <DeliveryOptions isDeliveryTypeSelected={isDeliveryTypeSelected} />
        <div className="mb-[32px]">
          <CustomCheckbox
            text={`My billing and delivery information are the same`}
            className="mb-[24px]"
            name="sameBillingDelivery"
            onChange={(e) => handleChangeData(e)}
            isEnabled
          />
          {!user?.sameBillingDelivery && (
            <Address typeOfAddress="billingAddress" />
          )}
          <Typography variant="headline" className={newsTextClassName}>
            Also want product updates with our newsletter?
          </Typography>
          <CustomCheckbox
            text={`Yes, I’d like to receive emails about exclusive sales and more.`}
            className="mb-[24px]"
            name="receiveNewsletter"
            onChange={(e) => handleChangeData(e)}
          />
        </div>
        <Button color="primary" type="submit" className={buttonClass}>
          <Typography
            color="#FFFFFF"
            variant="headline"
            className="text-sm lg:text-base uppercase"
          >
            Review AND PAY
          </Typography>
          <Image
            src="/arrow-forward.svg"
            height={16}
            width={16}
            alt="Go forward"
          />
        </Button>
      </form>
      <div className="gap-[20px] md:flex-col md:flex-grow">
        <OrderSummary step="checkout" />
        <OrderDetails />
      </div>
    </div>
  );
};
