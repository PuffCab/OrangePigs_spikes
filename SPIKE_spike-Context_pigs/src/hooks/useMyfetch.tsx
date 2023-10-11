import React, { useEffect, useState } from "react";

interface ReturnData<T> {
  data: null | T;
  loading: boolean;
  error: string;
}
interface ErrorResponse {
  error: string;
}

function useMyfetch<T>(url: string): ReturnData<T> {
  const [data, setData] = useState<null | T>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("second");

  const fetchData = async (url: string) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const result = (await response.json()) as T;
        console.log("result un custom Hook :>> ", result);
        setData(result);
        setLoading(false);
      } else {
        const result = (await response.json()) as ErrorResponse;
        setError(result.error);
      }
    } catch (e) {
      console.log("error :>> ", e);
      const { message } = e as Error;
      setError(message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url)
      .catch((error) => {
        console.log("error :>> ", error);
        const { message } = error as Error;
        setError(message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  const returnObject = {
    data: data,
    error: error,
    loading: loading,
  };

  return returnObject;
}

export default useMyfetch;
