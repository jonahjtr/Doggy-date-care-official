import React, { useState, useRef } from "react";
import CreateModal from "./modals/CreateModal";
import MedCreate from "../../forms/MedCreate";
import EditModal from "./modals/EditModal";
import useDeleteAxios from "../../../hooks/axios/useDeleteAxios";
import useClickOutside from "../../../hooks/clickOutside";
import LoadingComponent from "../../utils/LoadingComponent";

const MedsViewCard = ({ medicineList, dogId, loading }) => {
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const deleteRef = useRef(null);
  const handleEditClick = (medicine) => {
    setIsModalVisible(true);
    setSelectedMedicine(medicine);
  };
  useClickOutside(deleteRef, () => {
    setConfirmDelete(false);
  });
  const handleEditSave = (editedMedicine) => {
    console.log("Edited Medicine Data: ", editedMedicine);
  };
  const handleEditClose = () => {
    setIsModalVisible(false);
    setSelectedMedicine(null);
  };
  const handleDelete = async (medicineId) => {
    try {
      const result = await useDeleteAxios(
        `/dogs/medicine/${dogId}/${medicineId}`
      );
      if (result) {
        window.location.reload();
        console.log("Delete successful", result);
      }
    } catch (error) {
      console.error("Delete failed", error.message);
    }
  };

  // if (
  //   !medicineList ||
  //   medicineList.length === 0 ||
  //   medicineList[0].id === null
  // ) {
  //   return (
  //     <section className="  bg-primary w-[90%] h-full mx-auto   p-2 rounded-2xl flex flex-col justify-evenly items-center  ">
  //       <div className="w-full h-1/5">
  //         <CreateModal
  //           url={`/dogs/medicine/${dogId}`}
  //           title="Medicines"
  //           component={<MedCreate />}
  //         />
  //       </div>
  //       <div className="w-full rounded-xl h-4/5 bg-white">
  //         No meds on record.
  //       </div>
  //     </section>
  //   );
  // }

  return (
    <section className="  bg-primary w-[90%] h-full mx-auto   p-2 rounded-2xl flex flex-col justify-evenly items-center  ">
      <div className="w-full h-1/5">
        <CreateModal
          url={`/dogs/medicine/${dogId}`}
          title="Medicines"
          component={<MedCreate />}
        />
      </div>
      <div className="w-full rounded-xl h-4/5 bg-white">
        {loading ? (
          <LoadingComponent />
        ) : !medicineList ||
          medicineList.length === 0 ||
          medicineList[0].id === null ? (
          <div className="flex justify-center items-center">
            no meds to display
          </div>
        ) : (
          medicineList.map((medicine, index) => (
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

              {confirmDelete ? (
                <button
                  ref={deleteRef}
                  onClick={() => handleDelete(medicine.id)}
                >
                  confirm delete
                </button>
              ) : (
                <button onClick={() => setConfirmDelete(true)}>delete</button>
              )}
            </div>
          ))
        )}
      </div>
      {isModalVisible && (
        <EditModal
          medicine={selectedMedicine}
          onSave={handleEditSave}
          onClose={handleEditClose}
        />
      )}
    </section>
  );
};

export default MedsViewCard;
