import React, { useState, useCallback } from "react";
function useFetchHttp() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const sendRequest = useCallback(async (requestConfig, requestData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "get",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body
          ? JSON.stringify({ text: requestConfig.body })
          : null,
      });
      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const data = await response.json();
      requestData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);
  return {
    isLoading: isLoading,
    error: error,
    sendRequest: sendRequest,
  };
}

export default useFetchHttp;
