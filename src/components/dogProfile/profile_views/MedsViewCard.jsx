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
      console.log("medicineId: ", medicineId);
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

  return (
    <section className="  bg-primary w-[90%] h-full mx-auto   p-2 rounded-2xl flex flex-col justify-evenly items-center  ">
      <div className="w-full h-1/5">
        <CreateModal
          url={`/dogs/medicine/${dogId}`}
          title="Medicines"
          component={<MedCreate />}
        />
      </div>
      <div className="w-full rounded-xl h-4/5 max-h-[30vh] overflow-hidden bg-white ">
        <div className="w-full h-full overflow-y-auto">
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
              <div
                key={index}
                className="bg-greyp-2 flex rounded border shadow"
              >
                <div className="bg-purple w-4/5">
                  <h2 className="text-sm font-semibold mb-1">
                    {medicine.name}
                  </h2>
                  <p className="text-xs mb-1">Dosage: {medicine.dosage}</p>

                  <p className="text-xs mb-1">
                    Frequency: {medicine.frequency}
                  </p>
                  <p className="text-xs">
                    Instructions: {medicine.instructions}
                  </p>
                  <p className="text-xs">Description: {medicine.description}</p>
                </div>
                <div className="border w-1/5 bg-grey">
                  <p className="text-xs mb-1">
                    Start Date: {medicine.start_date}
                  </p>
                  <p className="text-xs mb-1">End Date: {medicine.end_date}</p>
                  <div className="bg-white flex justify-between">
                    <button
                      className="border"
                      onClick={() => handleEditClick(medicine)}
                    >
                      Edit
                    </button>

                    {confirmDelete ? (
                      <button
                        className="bg-purple"
                        ref={deleteRef}
                        onClick={() => handleDelete(medicine.id)}
                      >
                        confirm delete
                      </button>
                    ) : (
                      <button
                        className="border"
                        onClick={() => setConfirmDelete(true)}
                      >
                        delete
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
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
