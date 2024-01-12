import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import useCheckToken from "../utils/useCheckToken";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const isLoggedIn = useCheckToken();

  useEffect(() => {
    if (isLoggedIn === true) {
      window.location.replace("/dashboard");
    }
  }, []);
  const handleLogin = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post("http://localhost:3000/auth/login", {
        email,
        password,
      });
      console.log(response);
      const token = response.data.token;
      const hasDogs = response.data.hasDogs;
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
    <div className="mr-18 min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Email:
            </label>
            <input
              type="email"
              className="mt-1 p-2 w-full border rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Password:
            </label>
            <input
              type="password"
              className="mt-1 p-2 w-full border rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="button"
            onClick={handleLogin}
            className="bg-blue-500px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
      <Link to={"/create-account"}> create account page here</Link>{" "}
    </div>
  );
};

export default LoginForm;
