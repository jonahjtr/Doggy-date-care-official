import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LoadingComponent from "../utils/LoadingComponent";

const CreateAccountForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  };
  const [errorMessage, setErrorMessage] = useState("");
  const [allValues, setAllValues] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);

  const changeHandler = (e) => {
    setAllValues({
      ...allValues,
      [e.target.name]: e.target.value,
    });
    console.log(allValues);
  };

  const handleStateChange = (selectedState) => {
    setAllValues({
      ...allValues,
      state: selectedState,
    });
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/auth/register",
        allValues
      );
      console.log(response);
      if (response.status == 200) {
        setIsLoading(false);

        window.location.href = "/login";
      }
    } catch (error) {
      setIsLoading(false);
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
        <h2 className="text-2xl font-semibold mb-4">Create Account</h2>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              First name:
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              value={allValues.first_name}
              onChange={changeHandler}
              name="first_name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Last name:
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              value={allValues.last_name}
              onChange={changeHandler}
              name="last_name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Username:
            </label>
            <input
              className="mt-1 p-2 w-full border rounded-md"
              type="text"
              value={allValues.username}
              onChange={changeHandler}
              name="username"
              placeholder="Enter a username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Email:
            </label>
            <input
              type="email"
              className="mt-1 p-2 w-full border rounded-md"
              value={allValues.email}
              onChange={changeHandler}
              name="email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Password:
            </label>
            <input
              type="password"
              className="mt-1 p-2 w-full border rounded-md"
              value={allValues.password}
              onChange={changeHandler}
              name="password"
            />
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-green-500 text-black px-4 py-2 rounded-md hover:bg-green-600"
          >
            Create Account
          </button>
        </form>
      </div>
      <Link to={"/login"}> login page here</Link>
    </div>
  );
};

export default CreateAccountForm;

// <div className="mb-4">
//   <label className="block text-sm font-medium text-gray-600">
//     Date of Birth:
//   </label>
//   <input
//     type="date"
//     className="mt-1 p-2 w-full border rounded-md"
//     value={allValues.date_of_birth}
//     onChange={changeHandler}
//     name="date_of_birth"
//   />
// </div>
// <div className="mb-4">
//   <label className="block text-sm font-medium text-gray-600">
//     Phone Number:
//   </label>
//   <input
//     type="tel"
//     className="mt-1 p-2 w-full border rounded-md"
//     value={allValues.phone_number}
//     onChange={changeHandler}
//     name="phone_number"
//   />
// </div>
// <div className="mb-4">
//   <label className="block text-sm font-medium text-gray-600">
//     City:
//   </label>
//   <input
//     type="text"
//     className="mt-1 p-2 w-full border rounded-md"
//     value={allValues.city}
//     onChange={changeHandler}
//     name="city"
//   />
// </div>

// <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//   <label
//     className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//     htmlFor="grid-state"
//   >
//     State
//   </label>
//   <div className="relative">
//     <select
//       className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//       id="grid-state"
//       value={allValues.state}
//       onChange={(e) => handleStateChange(e.target.value)}
//     >
//       <option>New Mexico</option>
//       <option>Missouri</option>
//       <option>Texas</option>
//     </select>
//     <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//       <svg
//         className="fill-current h-4 w-4"
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 20 20"
//       >
//         <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//       </svg>
//     </div>
//   </div>
// </div>;
