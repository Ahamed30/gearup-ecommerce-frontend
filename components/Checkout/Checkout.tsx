"use client";

import { useState } from "react";
import Image from "next/image";
import CustomCheckbox from "../CustomCheckBox/CustomCheckBox";
import { Typography } from "../Typography";
import { ContactDetails } from "./ContactDetails";
import { ShippingAddress } from "./ShippingAddress";
import { DeliveryOptions } from "./DeliveryOptions";
import { linkClassName, newsTextClassName, buttonClass } from "./style";
import { Button } from "../Button";
import { OrderSummary } from "../OrderSummary";
import { OrderDetails } from "../OrderDetails";

export const Checkout = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    deliveryAddress: "",
    phoneNumber: "",
    standardDelivery: false,
    sameBillingDelivery: false,
    isOver13: false,
    receiveNewsletter: false,
  });

  const [selectedDeliveryType, setSelectedDeliveryType] = useState<String>();

  const handleChange = (e: {
    target: { name: string; value: string; type: string; checked: boolean };
  }) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Here, formData will contain all the information from the form
    console.log(formData);
    // You can now use the formData object to send it to your backend or perform any other operations
  };

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
        <ShippingAddress />
        <DeliveryOptions />
        <div className="mb-[32px]">
          <CustomCheckbox
            text={`My billing and delivery information are the same`}
            className="mb-[24px]"
          />
          <CustomCheckbox text={`I’m 13+ year old`} className="mb-[24px]" />
          <Typography variant="headline" className={newsTextClassName}>
            Also want product updates with our newsletter?
          </Typography>
          <CustomCheckbox
            text={`Yes, I’d like to receive emails about exclusive sales and more.`}
            className="mb-[24px]"
            required
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