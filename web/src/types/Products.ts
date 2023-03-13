export interface ProductsProps {
  id: string;
  name: string;
  price: string;
  brand: string;
  type: string;
  special: string;
  description: string;
  image: string;
}
[];

export interface AddressFormProps {
  zipCode: string;
  street: string;
  addressNumber: string;
  district: string;
  city: string;
  stateCode: string;
  paymentMethod: string;
  deliverSystem: string;
}
