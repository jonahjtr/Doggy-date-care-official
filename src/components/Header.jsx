import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { isOpenAtom } from "../jotai/statusStates";
import useLogout from "../hooks/useLogout";
import useCheckToken from "./utils/useCheckToken";

const Header = () => {
  const [isOpen, setIsOpen] = useAtom(isOpenAtom);

  const isLoggedIn = useCheckToken();
  const handleLogout = () => {
    useLogout();
  };

  useEffect(() => {
    if (isLoggedIn === false) {
      window.location.replace("/login");
    }
  }, []);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  //make hamburger menu
  return (
    <header className="bg-white  h-[70px] max-h-[8vh]   border py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex justify-start items-center">
          <button onClick={handleClick} className="mx-4 md:hidden">
            ///
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
