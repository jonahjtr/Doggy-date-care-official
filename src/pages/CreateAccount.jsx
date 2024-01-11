import React, { useEffect } from "react";
import CreateAccountForm from "../components/forms/CreateAccountForm";
import useCheckToken from "../components/utils/useCheckToken";
const CreateAccount = () => {
  const isLoggedIn = useCheckToken();

  useEffect(() => {
    if (isLoggedIn === true) {
      window.location.replace("/dashboard");
    }
  }, []);
  return (
    <div>
      <CreateAccountForm />
    </div>
  );
};

export default CreateAccount;
