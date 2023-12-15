import { useState, useEffect } from "react";
import axios from "axios";

const useGetAxios = (url) => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const accessToken = localStorage.getItem("token");
  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000" + url, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (isMounted) {
          setData(response.data);
        }
      } catch (error) {
        if (isMounted) {
          setError(`${error}`);
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url, accessToken]);

  return { data, error };
};

export default useGetAxios;
