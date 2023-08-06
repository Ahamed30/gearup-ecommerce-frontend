export type AddressType = {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  country: string;
  postalCode: number | null;
  phoneNumber: number | null;
};
export type UserType = {
  email: string;
  deliveryAddress: AddressType | null;
  phoneNumber: number;
  sameBillingDelivery: true;
  billingAddress: AddressType | null;
  receiveNewsletter: false;
};
