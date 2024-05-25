"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { useUser } from "@/context/UserContext";
import { handlefetchOperation } from "@/utils/handlefetchOperation";
import { Address } from "./Address";
import { DeliveryOptions } from "./DeliveryOptions";
import { linkClassName, newsTextClassName, buttonClass } from "./style";
import { Button } from "../Button";
import { CustomCheckbox } from "../CustomCheckBox";
import { OrderDetails } from "../OrderDetails";
import { OrderSummary } from "../OrderSummary";
import { Typography } from "../Typography";

export const Checkout = () => {
  // {TODO: Need to move it to context}
  const { user, handleChangeData, isLoggedIn } = useUser();
  const { cart, setCart, setOrder } = useCart();
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

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!cart?.deliveryType) {
      setIsDeliveryTypeSelected(false);
      return;
    }
    // validateAddress(); // need to move this to backend
    const checkoutData = {
      userId: user?.email,
      ...user?.deliveryAddress,
    };
    await handlefetchOperation(
      `/checkout/setCheckout`,
      "POST",
      checkoutData as unknown as BodyInit
    );
    const placeOrderData = await handlefetchOperation(
      `/order/placeOrder`,
      "POST",
      {
        userId: user?.email,
      } as unknown as BodyInit
    );
    setOrder(cart);
    setCart(null);
    router.push(`/orderConfirmation/${placeOrderData?.id}`);
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
        {isLoggedIn ? (
          <Typography className={linkClassName} variant="headline">
            Login and Checkout faster
          </Typography>
        ) : null}
        {/* TODO: Need use this field for optional email. BE change required */}
        {/* <ContactDetails /> */}
        <Address typeOfAddress="deliveryAddress" />
        <DeliveryOptions isDeliveryTypeSelected={isDeliveryTypeSelected} />
        <div className="mb-[32px]">
          <CustomCheckbox
            className="mb-[24px]"
            isEnabled
            name="sameBillingDelivery"
            onChange={(e) => handleChangeData(e)}
            text={`My billing and delivery information are the same`}
          />
          {!user?.sameBillingDelivery && (
            <Address typeOfAddress="billingAddress" />
          )}
          <Typography className={newsTextClassName} variant="headline">
            Also want product updates with our newsletter?
          </Typography>
          <CustomCheckbox
            className="mb-[24px]"
            name="receiveNewsletter"
            onChange={(e) => handleChangeData(e)}
            text={`Yes, I’d like to receive emails about exclusive sales and more.`}
          />
        </div>
        <Button className={buttonClass} color="primary" type="submit">
          <Typography
            className="text-sm lg:text-base uppercase"
            color="#FFFFFF"
            variant="headline"
          >
            Review AND PAY
          </Typography>
          <Image
            alt="Go forward"
            height={16}
            src="/arrow-forward.svg"
            width={16}
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
