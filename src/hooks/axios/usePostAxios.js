import { useState, useEffect } from "react";
import axios from "axios";

const usePostAxios = async (url, values) => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("");
  const accessToken = localStorage.getItem("token");

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000" + url,
          { data: values },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (isMounted) {
          setData(response.data);
          setStatus(response.status);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setError(`${error.response.data.message}`);
          console.error(error.response);
          if (error.response.statusText === "Unauthorized") {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }
          setStatus(error.response.status);
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url, values, accessToken]);

  return { data, error, loading, status };
};

export default usePostAxios;
