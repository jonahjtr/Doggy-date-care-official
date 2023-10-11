import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <Link className="link" to={"/sign-up"}>
        SignUpPage
      </Link>
      <br />
      <Link className="link" to={"/login"}>
        LoginPage
      </Link>
    </div>
  );
};

export default LandingPage;
