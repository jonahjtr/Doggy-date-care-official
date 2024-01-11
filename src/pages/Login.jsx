import React, { useEffect } from "react";
import LoginForm from "../components/forms/LoginForm";
import useCheckToken from "../components/utils/useCheckToken";
const Login = () => {
  const isLoading = useCheckToken();

  useEffect(() => {
    if (isLoading === true) {
      window.location.replace("/dashboard");
    }
  }, []);
  return (
    <div className="flex justify-center">
      <button className="w-[100px] h-[30px] border border-black">
        logout here
      </button>
      <LoginForm />
    </div>
  );
};

export default Login;
