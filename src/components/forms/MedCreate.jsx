import React, { useState } from "react";
import usePostAxios from "../../hooks/axios/usePostAxios";

const MedCreate = ({ url, title }) => {
  const initialValues = {
    medicine_name: "",
    medicine_start_date: "",
    medicine_end_date: "",
    medicine_dosage: "",
    medicine_instructions: "",
    medicine_frequency: "",
    description: "",
  };

  const [errorMessage, setErrorMessage] = useState(null);
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await usePostAxios(url, formData);

      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage(`Failed to create medicine. Please try again.`);
    }
  };

  return (
    <div className="w-[80%] max-w-[500px] h-[500px]   mx-auto">
      <h1 className="text-3xl font-semibold mb-6 text-center">{title}</h1>
      {errorMessage && <p className="mb-4 text-center">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="medicine_name" className=" font-bold ">
            Medicine Name:
          </label>
          <input
            required
            type="text"
            id="medicine_name"
            name="medicine_name"
            value={formData.medicine_name}
            onChange={handleChange}
            className="w-full border rounded-lg "
          />
        </div>

        <div className="mb-4 flex">
          <label htmlFor="medicine_start_date" className="font-bold ">
            Start Date:
          </label>
          <input
            required
            type="date"
            id="medicine_start_date"
            name="medicine_start_date"
            value={formData.medicine_start_date}
            onChange={handleChange}
            className="w-full border  rounded-lg "
          />

          <label htmlFor="medicine_end_date" className="">
            End Date:
          </label>
          <input
            required
            type="date"
            id="medicine_end_date"
            name="medicine_end_date"
            value={formData.medicine_end_date}
            onChange={handleChange}
            className="w-full rounded-lg"
          />
        </div>

        {/* Dosage */}
        <div className="mb-4">
          <label htmlFor="medicine_dosage" className="">
            Dosage:
          </label>
          <input
            required
            type="text"
            id="medicine_dosage"
            name="medicine_dosage"
            value={formData.medicine_dosage}
            onChange={handleChange}
            className="w-full"
          />
        </div>

        {/* Instructions */}
        <div className="mb-4">
          <label htmlFor="medicine_instructions" className="">
            Instructions:
          </label>
          <textarea
            required
            id="medicine_instructions"
            name="medicine_instructions"
            value={formData.medicine_instructions}
            onChange={handleChange}
            rows="2"
            className="w-full "
          ></textarea>
        </div>

        {/* Frequency */}
        <div className="mb-4">
          <label htmlFor="medicine_frequency" className="">
            Frequency:
          </label>
          <input
            required
            type="text"
            id="medicine_frequency"
            name="medicine_frequency"
            value={formData.medicine_frequency}
            onChange={handleChange}
            className="w-full "
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="">
            Description:
          </label>
          <textarea
            required
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="2"
            className="w-full "
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-darkBeige  text-white p-2 mt-2 rounded-lg hover:bg-orange"
          >
            Create Medicine
          </button>
        </div>
      </form>
    </div>
  );
};

export default MedCreate;
