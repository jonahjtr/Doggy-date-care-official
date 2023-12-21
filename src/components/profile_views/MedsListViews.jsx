import React, { useState } from "react";
import CreateModal from "../modals/CreateModal";
import MedCreate from "../forms/MedCreate";
import EditModal from "../modals/EditModal";
import useDeleteAxios from "../../hooks/useDeleteAxios";

const MedsListViews = ({ medicineList, dogId }) => {
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [confirmVisable, setConfirmVisible] = useState(false);

  const handleEditClick = (medicine) => {
    setIsModalVisible(true);
    setSelectedMedicine(medicine);
  };

  const handleEditSave = (editedMedicine) => {
    console.log("Edited Medicine Data: ", editedMedicine);
  };

  const handleDelete = async (medicineId) => {
    try {
      const result = await useDeleteAxios(
        `/dogs/medicine/${dogId}/${medicineId}`
      );
      if (result) {
        // Remove the deleted medicine from the local medicineList
        window.location.reload();
        // Update the state with the updated medicine list
        console.log("Delete successful", result);
      }
    } catch (error) {
      console.error("Delete failed", error.message);
    }
  };
  const handleDeleteClick = (medicine) => {
    setConfirmVisible(true);
  };
  const handleEditClose = () => {
    setIsModalVisible(false);
    setSelectedMedicine(null);
  };
  if (!medicineList) {
    return (
      <section className="w-full bg-darkGreen  h-[250px]  lg:h-[350px] 2xl:h-[400px] max-w-[1000px] mx-auto p-2 px-4 rounded-3xl mt-0 my-5 flex flex-col justify-evenly items-center border">
        <h1 className="bg-lightGreen p-2 px-4 mb-2 rounded-xl">meds list</h1>
        <div className=" w-full border flex justify-center items-center rounded-2xl h-4/5 mb-3">
          No meds on record.
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-darkGreen  h-[250px]  lg:h-[350px] 2xl:h-[400px] max-w-[1000px] mx-auto p-2 px-4 rounded-3xl mt-0 my-5 flex flex-col justify-evenly items-center border">
      <CreateModal
        url={`/dogs/medicine/${dogId}`}
        title="Medicines"
        component={<MedCreate />}
      />
      <div className=" py-2 rounded-xl w-full border h-4/5 mb-3">
        <div className="h-full overflow-y-scroll">
          {medicineList.map((medicine, index) => (
            <div key={index} className="bg-white p-2 rounded shadow">
              <h2 className="text-sm font-semibold mb-1">{medicine.name}</h2>
              <p className="text-xs mb-1">Dosage: {medicine.dosage}</p>
              <p className="text-xs mb-1">Start Date: {medicine.start_date}</p>
              <p className="text-xs mb-1">End Date: {medicine.end_date}</p>
              <p className="text-xs mb-1">Frequency: {medicine.frequency}</p>
              <p className="text-xs">Instructions: {medicine.instructions}</p>
              <p className="text-xs">Description: {medicine.description}</p>

              <button onClick={() => handleEditClick(medicine)}>Edit</button>
              <div></div>

              {confirmVisable ? (
                <button onClick={() => handleDelete(medicine.id)}>
                  confirm delete
                </button>
              ) : (
                <button onClick={() => setConfirmVisible(true)}>delete</button>
              )}
            </div>
          ))}
        </div>
        {isModalVisible && (
          <EditModal
            medicine={selectedMedicine}
            onSave={handleEditSave}
            onClose={handleEditClose}
          />
        )}
      </div>
    </section>
  );
};

export default MedsListViews;
