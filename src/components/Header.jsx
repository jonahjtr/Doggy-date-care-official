import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import uesCheckToken from "./utils/useCheckToken";
const Header = () => {
  const isLoggedIn = uesCheckToken();
  const handleLogout = () => {
    useLogout();
  };
  useEffect(() => {
    if (isLoggedIn === false) {
      window.location.replace("/login");
    }
  }, []);
  //make hamburger menu
  return (
    <header className="bg-white  h-[70px] max-h-[8vh]   border py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex justify-start items-center">
          <button onClick={console.log("sl")} className="mx-4 md:hidden">
            ///{" "}
          </button>
          <Link to="/">
            <h1 className="text-xl font-bold">Doggy Date Care</h1>
          </Link>
        </div>
        <nav>
          {isLoggedIn == false || isLoggedIn == null ? (
            <ul className="flex space-x-4">
              <li>
                <Link
                  to="/login"
                  className="text-blue-600 hover:text-blue-800 transition duration-300"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/create-account"
                  className="text-blue-600 hover:text-blue-800 transition duration-300"
                >
                  Sign Up
                </Link>
              </li>{" "}
            </ul>
          ) : (
            <ul className="flex space-x-4">
              <li onClick={handleLogout}>
                <Link to="/">log out</Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
