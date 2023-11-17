import { SaveOrderRequestType } from "@/app/types";
import usePostData from "./usePostData";

const usePostCompletion = () => {
  return usePostData<SaveOrderRequestType>("/my-addresses");
};
export default usePostCompletion;
