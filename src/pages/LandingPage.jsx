import React from "react";
import { Link } from "react-router-dom";
import CreateAccount from "./CreateAccount";

const LandingPage = () => {
  return (
    <div className="pl-24 w-full">
      <Link to={"/create-account"}> create account page here</Link>
      <Link className="pl-24" to={"/login"}>
        {" "}
        log in page here
      </Link>
    </div>
  );
};

export default LandingPage;
