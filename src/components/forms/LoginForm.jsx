import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import useCheckToken from "../utils/useCheckToken";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const [errorMessage, setErrorMessage] = useState("");
  const [allValues, setAllValues] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);

  const isLoggedIn = useCheckToken();

  useEffect(() => {
    if (isLoggedIn === true) {
      window.location.replace("/dashboard");
    }
  }, []);
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
  const handleLogin = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post("http://localhost:3000/auth/login", {
        email: allValues.email,
        password: allValues.password,
      });
      console.log(response);
      const token = response.data.token;
      const hasDogs = response.data.hasDogs;
      if (response.status != 200) throw new Error("Something went wrong");
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("token", token);
      setIsLoading(false);
      if (hasDogs) {
        window.location.href = "/dashboard";
      } else {
        window.location.href = "/create-dog";
      }
    } catch (error) {
      console.log(error.response);
      console.error("Login failed:", error.response);
      setErrorMessage(`invalid email or password ${error}`);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
              Log in
            </h1>
            {errorMessage && (
              <p className="text-red-500 mb-4">{errorMessage}</p>
            )}
            <form class="space-y-4 md:space-y-6" action="#">
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
                onClick={handleLogin}
                type="submit"
                class="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
