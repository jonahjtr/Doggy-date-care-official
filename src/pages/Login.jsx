import React, { useEffect } from "react";
import LoginForm from "../components/forms/LoginForm";
import Header from "../components/Header";
import useCheckToken from "../components/utils/useCheckToken";
const Login = () => {
  const isLoading = useCheckToken();

  useEffect(() => {
    if (isLoading === true) {
      window.location.replace("/dashboard");
    }
  }, []);
  return (
    <div className="">
      <Header />
      <LoginForm />
    </div>
  );
};

export default Login;
