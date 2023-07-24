import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { AddressType, UserType } from "@/types";

interface UserContextType {
  user: UserType | null;
  handleChangeData: (e: {
    target: { name: string; value: string; type: string; checked: boolean };
  }) => void; // when updating via backend these can be update to Promise<void> from void
  updateAddress: (address: AddressType, typeOfAddress: string) => void;
}

//@ts-expect-error: ignore initial context creation
const UserContext = createContext<UserContextType>(null);

export const useUser = () => useContext(UserContext);

export interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  // console.log("...", cartFromCookie);
  const [user, setUser] = useState<UserType>({
    email: "",
    deliveryAddress: null,
    phoneNumber: 1234567890,
    billingAddress: null,
    sameBillingDelivery: true,
    receiveNewsletter: false,
  });

  const handleChangeData = (e: {
    target: { name: string; value: string; type: string; checked: boolean };
  }) => {
    const { name, value, type, checked } = e.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const updateAddress = (address: AddressType, typeOfAddress: string) => {
    setUser((prevCart) => {
      const updatedUser: UserType = { ...prevCart };

      if (typeOfAddress === "deliveryAddress") {
        updatedUser.deliveryAddress = address;
      } else {
        updatedUser.billingAddress = address;
      }

      return updatedUser;
    });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        handleChangeData,
        updateAddress,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
