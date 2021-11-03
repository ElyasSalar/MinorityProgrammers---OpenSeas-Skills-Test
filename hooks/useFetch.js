import { useEffect, useState } from "react";
import { api } from "../opensea/init";

export default function useFetch(url, otherParams){
  const [isLoading, setIsLoading] = useState(null);
  const [data, setData] = useState(null);
  
  useEffect(() => {
    setIsLoading(true)
    setData(null);

    api.get(url, {format: 'json', ...otherParams})
      .then(res => {
        setIsLoading(false);
        setData(res);
        return res;
      })
      .catch(err => {
        setIsLoading(false);
        console.error(err);
      });
  }, [url, otherParams?.order_by])

  return { data, isLoading };
}