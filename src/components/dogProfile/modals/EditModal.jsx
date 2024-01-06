import React, { useState } from "react";
import ViewHeader from "../profile_views/components/ViewHeader";
import usePutAxios from "../../../hooks/axios/usePutAxios";

const EditModal = ({ medicine, onSave, onClose }) => {
  const [editedMedicine, setEditedMedicine] = useState({ ...medicine });
  const [errorMessage, setErrorMessage] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedMedicine({ ...editedMedicine, [name]: value });
  };
  const dogId = localStorage.getItem("current_dog");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request using usePostAxios
      const response = await usePutAxios(
        `/dogs/medicine/${dogId}/17`,
        editedMedicine
      );

      // Handle the response as needed
      console.log("Response:", response);

      // Clear the form or perform other actions upon successful submission
      window.location.reload();
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
      setErrorMessage("Failed to create medicine. Please try again.");
    }
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full z-10">
      <div className="fixed flex items-center justify-center w-full h-full backdrop-filter backdrop-brightness-50 backdrop-blur-xl z-20">
        <div className="w-[80%] max-w-[500px] bg-darkGreen rounded-lg shadow-xl">
          <div className="bg-darkGreen text-white p-4 w-fit mx-auto rounded-t-lg">
            <ViewHeader title="Edit Medicine" />
          </div>
          <div className="p-4">
            <label className="block mb-2">
              Medicine Name:
              <input
                type="text"
                name="name"
                value={editedMedicine.name}
                onChange={handleInputChange}
                className="w-full border rounded p-2"
              />
            </label>
            <label className="block mb-2">
              Dosage:
              <input
                type="text"
                name="dosage"
                value={editedMedicine.dosage}
                onChange={handleInputChange}
                className="w-full border rounded p-2"
              />
            </label>
            <label className="block mb-2">
              Start Date:
              <input
                type="text"
                name="start_date"
                value={editedMedicine.start_date}
                onChange={handleInputChange}
                className="w-full border rounded p-2"
              />
            </label>
            <label className="block mb-2">
              End Date:
              <input
                type="text"
                name="end_date"
                value={editedMedicine.end_date}
                onChange={handleInputChange}
                className="w-full border rounded p-2"
              />
            </label>
            <label className="block mb-2">
              Frequency:
              <input
                type="text"
                name="frequency"
                value={editedMedicine.frequency}
                onChange={handleInputChange}
                className="w-full border rounded p-2"
              />
            </label>
            <label className="block mb-2">
              Instructions:
              <textarea
                name="instructions"
                value={editedMedicine.instructions}
                onChange={handleInputChange}
                className="w-full border rounded p-2"
              />
            </label>
            <label className="block mb-2">
              description:
              <textarea
                name="description"
                value={editedMedicine.description}
                onChange={handleInputChange}
                className="w-full border rounded p-2"
              />
            </label>
            <div className="text-right mt-4">
              <button
                className="bg-darkBeige text-white p-2 rounded-lg hover:bg-red-600 mr-2"
                onClick={handleSubmit}
              >
                Save
              </button>
              <button
                className="bg-darkBeige text-white p-2 rounded-lg hover:bg-red-600"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
