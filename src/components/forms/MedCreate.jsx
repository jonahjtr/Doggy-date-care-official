import React, { useState } from "react";
import usePostAxios from "../../hooks/usePostAxios";

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

      console.log("Response:", response);

      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Failed to create medicine. Please try again.");
    }
  };

  return (
    <div className="w-[80%] max-w-[500px]  mx-auto">
      <h1 className="text-3xl font-semibold mb-6 text-center">{title}</h1>
      {errorMessage && (
        <p className="text-red-500 mb-4 text-center">{errorMessage}</p>
      )}
      <form onSubmit={handleSubmit}>
        {/* Medicine Name */}
        <div className="mb-4">
          <label
            htmlFor="medicine_name"
            className="block text-gray-700 font-bold mb-2"
          >
            Medicine Name:
          </label>
          <input
            required
            type="text"
            id="medicine_name"
            name="medicine_name"
            value={formData.medicine_name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Start Date */}
        <div className="mb-4">
          <label
            htmlFor="medicine_start_date"
            className="block text-gray-700 font-bold mb-2"
          >
            Start Date:
          </label>
          <input
            required
            type="date"
            id="medicine_start_date"
            name="medicine_start_date"
            value={formData.medicine_start_date}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* End Date */}
        <div className="mb-4">
          <label
            htmlFor="medicine_end_date"
            className="block text-gray-700 font-bold mb-2"
          >
            End Date:
          </label>
          <input
            required
            type="date"
            id="medicine_end_date"
            name="medicine_end_date"
            value={formData.medicine_end_date}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Dosage */}
        <div className="mb-4">
          <label
            htmlFor="medicine_dosage"
            className="block text-gray-700 font-bold mb-2"
          >
            Dosage:
          </label>
          <input
            required
            type="text"
            id="medicine_dosage"
            name="medicine_dosage"
            value={formData.medicine_dosage}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Instructions */}
        <div className="mb-4">
          <label
            htmlFor="medicine_instructions"
            className="block text-gray-700 font-bold mb-2"
          >
            Instructions:
          </label>
          <textarea
            required
            id="medicine_instructions"
            name="medicine_instructions"
            value={formData.medicine_instructions}
            onChange={handleChange}
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>

        {/* Frequency */}
        <div className="mb-4">
          <label
            htmlFor="medicine_frequency"
            className="block text-gray-700 font-bold mb-2"
          >
            Frequency:
          </label>
          <input
            required
            type="text"
            id="medicine_frequency"
            name="medicine_frequency"
            value={formData.medicine_frequency}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Description:
          </label>
          <textarea
            required
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>

        {/* Submit Button */}
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
