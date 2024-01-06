import axios from "axios";

const usePutAxios = async (url, editedMedicine) => {
  const accessToken = localStorage.getItem("token");
  try {
    const response = await axios.put(
      "http://localhost:3000" + url,
      { medicine: editedMedicine }, // Request body data
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
    console.log("response");
    throw new Error(`Request failed: ${error.message}`);
  }
};

export default usePutAxios;
