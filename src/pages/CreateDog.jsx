import React, { useState } from "react";
import Header from "../components/Header";
import axios from "axios";

import LoadingComponent from "../components/utils/LoadingComponent";
import DatePicker from "../components/datePicker/DatePicker";

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
  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  const handleDateChange = (date) => {
    setAllValues({
      ...allValues,
      date_of_birth: formatDate(date),
    });
    console.log(allValues);
  };

  if (isLoading) return <LoadingComponent />;

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <Header />
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <p className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
          Doggy Date Care
        </p>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Create your Dogs Profile
            </h1>
            {errorMessage && (
              <p className="text-red-500 mb-4">{errorMessage}</p>
            )}
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Name
                </label>
                <input
                  type="name"
                  name="name"
                  value={allValues.name}
                  onChange={changeHandler}
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Courage"
                  required=""
                />
              </div>
              <DatePicker id="date" handleDateChange={handleDateChange} />
              <div>
                <label
                  htmlFor="date_of_birth"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Date of birth
                </label>
                <input
                  type="date_of_birth"
                  name="date_of_birth"
                  value={allValues.date_of_birth}
                  onChange={changeHandler}
                  id="date_of_birth"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="08/05/2020"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="sex"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  sex
                </label>
                <input
                  type="sex"
                  name="sex"
                  value={allValues.sex}
                  onChange={changeHandler}
                  id="sex"
                  placeholder="male/female"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required=""
                />
              </div>
              <div className="w-full flex flex-wrap">
                <div className="w-full">
                  <label
                    htmlFor="breed"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Breed
                  </label>
                  <input
                    type="text"
                    name="breed"
                    value={allValues.breed}
                    onChange={changeHandler}
                    id="breed"
                    placeholder="Labrador"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required=""
                  />
                </div>
              </div>
              <button
                onClick={handleSubmit}
                type="submit"
                className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
              >
                Create a dog profile
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateDog;
