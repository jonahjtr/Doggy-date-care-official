import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LoadingComponent from "../components/utils/LoadingComponent";

const CreateDog = () => {
  const initialValues = {
    name: "",
    date_of_birth: "",
    sex: "",
    breed: "",
  };
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [allValues, setAllValues] = useState(initialValues);

  const changeHandler = (e) => {
    setAllValues({
      ...allValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleStateChange = (selectedState) => {
    setAllValues({
      ...allValues,
      state: selectedState,
    });
  };

  const accessToken = localStorage.getItem("token");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/dogs",

        allValues,

        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log(response);
      setIsLoading(false);
      if (response.status === 200) {
        console.log("all values", allValues);
        window.location.href = "/dashboard";
      } else {
        alert("something went wrong with dog creation");
      }
    } catch (error) {
      alert("account creation failed");
      console.error("Account creation failed:", error.response);
      setErrorMessage(
        "Account creation failed. Please check your information."
      );
    }
  };

  if (isLoading) return <LoadingComponent />;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Create Dog</h2>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Name:
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              value={allValues.name}
              onChange={changeHandler}
              name="name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Date of Birth:
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              value={allValues.date_of_birth}
              onChange={changeHandler}
              name="date_of_birth"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Sex:
            </label>
            <input
              className="mt-1 p-2 w-full border rounded-md"
              type="text"
              value={allValues.sex}
              onChange={changeHandler}
              name="sex"
              placeholder="enter a sex"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Breed:
            </label>
            <input
              type="email"
              className="mt-1 p-2 w-full border rounded-md"
              value={allValues.breed}
              onChange={changeHandler}
              name="breed"
            />
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-green-500 text-black px-4 py-2 rounded-md hover:bg-green-600"
          >
            Create Dog
          </button>
        </form>
      </div>
      <Link to={"/login"}> login page here</Link>
    </div>
  );
};

export default CreateDog;
