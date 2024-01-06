import React from "react";
import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import { isLoggedIn } from "../jotai/statusStates";
import { useAtom, useSetAtom } from "jotai";
const Header = () => {
  const amIloggedIn = useAtom(isLoggedIn);

  return (
    <header className="bg-white h-[70px] border px-3 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="text-xl font-bold">Your Brand</h1>
        </Link>
        <nav>
          {amIloggedIn == false || amIloggedIn == null ? (
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
              <li onClick={useLogout}>
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
