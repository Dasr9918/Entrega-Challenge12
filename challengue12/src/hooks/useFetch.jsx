import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null
  });

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      setState({
        data,
        isLoading: false,
        hasError: null
      });
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        hasError: error.message
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { ...state };
};

export default useFetch;
