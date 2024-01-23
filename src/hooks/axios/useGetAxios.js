import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url) => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");

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
          setStatus(response.status);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setError(`${error.response.data.message}`);
          // console.error(error.response);
          setStatus(error.response.status);
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url, accessToken]);

  return { data, error, status, loading };
};

export default useAxios;
