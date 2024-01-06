import axios from "axios";

const usePostAxios = async (url, values) => {
  const accessToken = localStorage.getItem("token");
  console.log("axios url", url, "values", values);

  try {
    const response = await axios.post(
      "http://localhost:3000" + url,
      { medicine: values }, // Request body data
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error:", error);
    throw new Error(`Request failed: ${error.message}`);
  }
};

export default usePostAxios;
