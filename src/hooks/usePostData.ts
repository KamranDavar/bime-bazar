import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

const useGetData = <T>(
  endPoint: string,
  requestConfig?: AxiosRequestConfig
) => {
  const [data, setData] = useState<T | undefined>();
  const [error, setError] = useState<any>();
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  const mutate = (data: T) => {
    setLoading(true);
    apiClient
      .post(endPoint, data, requestConfig)
      .then((res) => {
        setData(res.data);
        setSuccess(true)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => setLoading(false));
  };

  return { mutate, data, error, isLoading, isError: !!error, isSuccess };
};
export default useGetData;
