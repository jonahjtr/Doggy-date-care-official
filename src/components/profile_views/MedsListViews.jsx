import React from "react";
import ViewHeader from "./components/ViewHeader";

const MedsListViews = ({ medicineList }) => {
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
      <ViewHeader title={"Characteristics"} />

      <div className=" py-2 rounded-xl w-full border h-4/5 mb-3">
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
              <p className="text-xs mb-1">
                End Date: {medicine.medicine_end_date}
              </p>
              <p className="text-xs mb-1">
                Frequency: {medicine.medicine_frequency}
              </p>
              <p className="text-xs">
                Instructions: {medicine.medicine_instructions}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedsListViews;
