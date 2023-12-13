import React from "react";
import LoginForm from "../components/forms/LoginForm";
const Login = () => {
  const logout = () => {
    // Clear authentication information
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    alert("logged out");
    // Redirect or perform other logout actions
    // For example, redirecting to the login page
    window.location.href = "/login";
  };
  return (
    <div className="flex justify-center">
      <button
        onClick={logout}
        className="w-[100px] h-[30px] border border-black"
      >
        logout here
      </button>
      <LoginForm />
    </div>
  );
};

export default Login;
