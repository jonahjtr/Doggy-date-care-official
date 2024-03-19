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
      if (response.status == 200 || 201) {
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
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          href="#"
          class="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
        >
          Doggy Date Care
        </Link>
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Create an account
            </h1>
            {errorMessage && (
              <p className="text-red-500 mb-4">{errorMessage}</p>
            )}
            <form class="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="username"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Username:
                </label>
                <input
                  type="username"
                  name="username"
                  value={allValues.username}
                  onChange={changeHandler}
                  id="username"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="bestDoggy13"
                  required=""
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  value={allValues.email}
                  onChange={changeHandler}
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={allValues.password}
                  onChange={changeHandler}
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required=""
                />
              </div>
              <div class="w-full flex flex-wrap">
                <div class="w-1/2 pr-2">
                  <label
                    for="first_name"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    value={allValues.first_name}
                    onChange={changeHandler}
                    id="first_name"
                    placeholder="John"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required=""
                  />
                </div>
                <div class="w-1/2 pl-2">
                  <label
                    for="last_name"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    value={allValues.last_name}
                    onChange={changeHandler}
                    id="last_name"
                    placeholder="Smith"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required=""
                  />
                </div>
              </div>
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  "
                    required=""
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label class="font-light text-gray-500 ">
                    I accept the{" "}
                    <Link class="font-medium text-primary-600 hover:underline ">
                      Terms and Conditions
                    </Link>
                  </label>
                </div>
              </div>
              <button
                onClick={handleSubmit}
                type="submit"
                class="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
              >
                Create an account
              </button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateAccountForm;

// <div className="min-h-screen flex items-center justify-center bg-gray-50">
//   <div className="bg-white p-8 rounded shadow-md w-96">
//     <h2 className="text-2xl font-semibold mb-4">Create Account</h2>
//     {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
//     <form>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-600">
//           First name:
//         </label>
//         <input
//           type="text"
//           className="mt-1 p-2 w-full border rounded-md"
//           value={allValues.first_name}
//           onChange={changeHandler}
//           name="first_name"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-600">
//           Last name:
//         </label>
//         <input
//           type="text"
//           className="mt-1 p-2 w-full border rounded-md"
//           value={allValues.last_name}
//           onChange={changeHandler}
//           name="last_name"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-600">
//           Username:
//         </label>
//         <input
//           className="mt-1 p-2 w-full border rounded-md"
//           type="text"
//           value={allValues.username}
//           onChange={changeHandler}
//           name="username"
//           placeholder="Enter a username"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-600">
//           Email:
//         </label>
//         <input
//           type="email"
//           className="mt-1 p-2 w-full border rounded-md"
//           value={allValues.email}
//           onChange={changeHandler}
//           name="email"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-600">
//           Password:
//         </label>
//         <input
//           type="password"
//           className="mt-1 p-2 w-full border rounded-md"
//           value={allValues.password}
//           onChange={changeHandler}
//           name="password"
//         />
//       </div>
//       <button
//         type="button"
//         onClick={handleSubmit}
//         className="bg-green-500 text-black px-4 py-2 rounded-md hover:bg-green-600"
//       >
//         Create Account
//       </button>
//     </form>
//   </div>
//   <Link to={"/login"}> login page here</Link>
// </div>
