import React, { useState } from "react";
import ViewHeader from "../profile_views/components/ViewHeader";

const EditModal = ({ medicine, onSave }) => {
  const [editedMedicine, setEditedMedicine] = useState({ ...medicine });
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedMedicine({ ...editedMedicine, [name]: value });
  };

  const handleSave = () => {
    onSave(editedMedicine);
    toggleModal(); // Close the modal after saving
  };

  return (
    <div className="relative w-full grid grid-cols-[25%_50%_25%]">
      {/* Blurry background */}
      {isModalVisible && (
        <div className="fixed top-0 left-0 w-screen h-screen backdrop-filter backdrop-brightness-50 backdrop-blur-xl z-10"></div>
      )}

      <div className="flex justify-center items-center">
        <ViewHeader title="Edit Medicine" />
      </div>

      <div className="flex justify-end pr-4 pb-4 ">
        <button onClick={toggleModal} className="text-3xl">
          +
        </button>
      </div>

      {/* Popout card */}
      {isModalVisible && (
        <div className="fixed flex-col w-max min-w-[50%] items-end top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-darkGreen p-4 rounded-lg shadow-md z-20">
          <label>
            Medicine Name:
            <input
              type="text"
              name="name"
              value={editedMedicine.name}
              onChange={handleInputChange}
            />
          </label>
          {/* Add other input fields for editing medicine details */}
          <label>
            Dosage:
            <input
              type="text"
              name="dosage"
              value={editedMedicine.dosage}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Start Date:
            <input
              type="text"
              name="start_date"
              value={editedMedicine.start_date}
              onChange={handleInputChange}
            />
          </label>
          <label>
            End Date:
            <input
              type="text"
              name="end_date"
              value={editedMedicine.end_date}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Frequency:
            <input
              type="text"
              name="frequency"
              value={editedMedicine.frequency}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Instructions:
            <textarea
              name="instructions"
              value={editedMedicine.instructions}
              onChange={handleInputChange}
            />
          </label>
          <label>
            description:
            <textarea
              name="description"
              value={editedMedicine.description}
              onChange={handleInputChange}
            />
          </label>
          <button
            className="bg-darkBeige text-white p-2 mt-2 rounded-lg hover:bg-red-600"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="bg-darkBeige text-white p-2 mt-2 rounded-lg hover:bg-red-600"
            onClick={toggleModal}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default EditModal;
