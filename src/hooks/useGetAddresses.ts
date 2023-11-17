import { AddressType } from "@/app/types";
import useGetData from "./useGetData";

const useGetAddresses = () => {
  return useGetData<AddressType>("/my-addresses");
};
export default useGetAddresses;
