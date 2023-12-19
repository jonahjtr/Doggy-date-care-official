import axios from "axios";

const useDeleteAxios = async (url) => {
  const accessToken = localStorage.getItem("token");

  try {
    const response = await axios.delete("http://localhost:3000" + url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

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

export default useDeleteAxios;
