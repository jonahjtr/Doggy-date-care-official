import React, { useState } from "react";
import axios from "axios";

function FileUpload(data) {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("file_nickname", "image");
    const accessToken = localStorage.getItem("token");
    axios
      .post(`http://localhost:3000/dogs/${data.url}`, formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        window.location.reload();
        console.log("File uploaded successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg ">
      <h2 className="text-2xl font-semibold mb-4">Upload a File</h2>
      <div className="mb-4">
        <input
          type="file"
          accept=".jpg, .jpeg, .png, .gif, image/*, .pdf"
          onChange={handleFileChange}
          className="border py-2 px-3 rounded-lg w-full"
        />
      </div>
      <button
        onClick={handleUpload}
        className="bg-darkBeige  hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
      >
        Upload
      </button>
    </div>
  );
}

export default FileUpload;
