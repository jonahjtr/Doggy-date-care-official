import axios from "axios";

const usePostAxios = async (url, values) => {
  const accessToken = localStorage.getItem("token");
  console.log("axios url", url, "values", values);

  try {
    const response = await axios.post(
      "http://localhost:3000" + url,
      { data: values }, // Request body data
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  } catch (error) {
    console.error("Error:", error);
    throw new Error(`Request failed: ${error.message}`);
  }
};

export default usePostAxios;
