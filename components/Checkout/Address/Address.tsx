import { useEffect, useState } from "react";
import classNames from "classnames";
import { Typography } from "@/components/Typography";
import { titleClassName } from "../style";
import { TextInput } from "@/components/TextInput";
import { AddressType } from "@/types";
import { useUser } from "@/context/UserContext";

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
  };

  useEffect(() => {
    const { firstName, street, phoneNumber, city, state, country } =
      addressDetails;

    if (firstName && street && phoneNumber && city && state && country) {
      updateAddress(addressDetails, typeOfAddress);
      console.log("...", addressDetails);
    }
  }, [addressDetails]);

  return (
    <div>
      {/* // TODO: Need to update shipping address fields */}
      <div className="mb-[32px]">
        <Typography
          variant="headline"
          className={classNames(titleClassName, "mb-[16px] md:mb-[32px]")}
        >
          {typeOfAddress === "billingAddress"
            ? "Billing Address"
            : "Shipping Address"}
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <TextInput
            className="w-full mb-[16px]"
            type="text"
            name="firstName"
            placeholder="First Name*"
            onChange={(e) => handleAddress(e)}
            required
          />
          <TextInput
            className="w-full  mb-[16px]"
            placeholder="Last Name"
            name="lastName"
            onChange={(e) => handleAddress(e)}
            type="text"
          />
          <TextInput
            className="w-full mb-[16px]"
            type="text"
            name="street"
            placeholder="Street Name*"
            onChange={(e) => handleAddress(e)}
            required
          />
          <TextInput
            className="w-full mb-[16px]"
            type="text"
            name="city"
            placeholder="City*"
            onChange={(e) => handleAddress(e)}
            required
          />
          <TextInput
            className="w-full mb-[16px]"
            type="text"
            name="state"
            placeholder="State*"
            onChange={(e) => handleAddress(e)}
            required
          />
          <TextInput
            className="w-full mb-[16px]"
            type="text"
            name="country"
            placeholder="Country*"
            onChange={(e) => handleAddress(e)}
            required
          />
          <TextInput
            className="w-full"
            placeholder="Postal Code*"
            name="postalCode"
            onChange={(e) => handleAddress(e)}
            required
          />
          <TextInput
            className="w-full"
            placeholder="Phone Number*"
            helper="E.g. (123) 456-7890"
            pattern="^\d{10}$"
            name="phoneNumber"
            onChange={(e) => handleAddress(e)}
            required
          />
        </div>
      </div>
    </div>
  );
};
