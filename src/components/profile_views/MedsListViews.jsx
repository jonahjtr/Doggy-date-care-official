import React from "react";
const medicineList = [
  {
    medicine_dosage: "Dosage 1",
    medicine_end_date: "2023-01-05",
    medicine_frequency: "Frequency 1",
    medicine_id: 17,
    medicine_instructions: "Instructions 1",
    medicine_name: "Medicine 1 for Dog 26",
    medicine_start_date: "2023-01-01",
  },
];

const MedsListViews = (list) => {
  const medicineList = list.list;

  if (!medicineList) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">No meds</h1>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-scroll">
      {medicineList.map((medicine, index) => (
        <div key={index} className="bg-white p-2 rounded shadow">
          <h2 className="text-sm font-semibold mb-1">
            {medicine.medicine_name}
          </h2>
          <p className="text-xs mb-1">Dosage: {medicine.medicine_dosage}</p>
          <p className="text-xs mb-1">
            Start Date: {medicine.medicine_start_date}
          </p>
          <p className="text-xs mb-1">End Date: {medicine.medicine_end_date}</p>
          <p className="text-xs mb-1">
            Frequency: {medicine.medicine_frequency}
          </p>
          <p className="text-xs">
            Instructions: {medicine.medicine_instructions}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MedsListViews;
