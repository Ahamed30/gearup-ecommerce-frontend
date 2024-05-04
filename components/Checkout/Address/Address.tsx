import classNames from "classnames";
import { useState } from "react";
import { TextInput } from "@/components/TextInput";
import { Typography } from "@/components/Typography";
import { useUser } from "@/context/UserContext";
import { AddressType } from "@/types";
import { titleClassName } from "../style";

interface AddressProps {
  typeOfAddress: string;
}

export const Address = ({ typeOfAddress }: AddressProps) => {
  const { updateAddress } = useUser();

  const [addressDetails, setAddressDetails] = useState<AddressType>({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    state: "",
    country: "",
    postalCode: 0,
    phoneNumber: null,
  });

  const handleAddress = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setAddressDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    const { firstName, street, phoneNumber, city, state, country } =
      addressDetails;
    if (firstName && street && phoneNumber && city && state && country) {
      updateAddress(addressDetails, typeOfAddress);
    }
  };

  return (
    <div>
      {/* // TODO: Need to update shipping address fields */}
      <div className="mb-[32px]">
        <Typography
          className={classNames(titleClassName, "mb-[16px] md:mb-[32px]")}
          variant="headline"
        >
          {typeOfAddress === "billingAddress"
            ? "Billing Address"
            : "Shipping Address"}
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <TextInput
            className="w-full mb-[16px]"
            name="firstName"
            onChange={(e) => handleAddress(e)}
            placeholder="First Name*"
            required
            type="text"
          />
          <TextInput
            className="w-full  mb-[16px]"
            name="lastName"
            onChange={(e) => handleAddress(e)}
            placeholder="Last Name"
            type="text"
          />
          <TextInput
            className="w-full mb-[16px]"
            name="street"
            onChange={(e) => handleAddress(e)}
            placeholder="Street Name*"
            required
            type="text"
          />
          <TextInput
            className="w-full mb-[16px]"
            name="city"
            onChange={(e) => handleAddress(e)}
            placeholder="City*"
            required
            type="text"
          />
          <TextInput
            className="w-full mb-[16px]"
            name="state"
            onChange={(e) => handleAddress(e)}
            placeholder="State*"
            required
            type="text"
          />
          <TextInput
            className="w-full mb-[16px]"
            name="country"
            onChange={(e) => handleAddress(e)}
            placeholder="Country*"
            required
            type="text"
          />
          <TextInput
            className="w-full"
            name="postalCode"
            onChange={(e) => handleAddress(e)}
            placeholder="Postal Code*"
            required
          />
          <TextInput
            className="w-full"
            helper="E.g. (123) 456-7890"
            name="phoneNumber"
            onChange={(e) => handleAddress(e)}
            pattern="^\d{10}$"
            placeholder="Phone Number*"
            required
          />
        </div>
      </div>
    </div>
  );
};
