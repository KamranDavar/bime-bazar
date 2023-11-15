export interface AddressType {
  id: string;
  name: string;
  details: string;
}
export interface SaveOrderRequestType {
  nationalId: string;
  phoneNumber: string;
  addressId: string;
}
export type InputsType = SaveOrderRequestType
