import React from "react";

const NavBar = () => {
  return (
    <div className="w-full h-[50px] grid grid-cols-3">
      <div className="place-end"></div>

      <div className="self-center mx-auto rounded-xl bg-white w-[100px] h-[30px] flex justify-center items-center">
        logo
      </div>
      <div className="flex justify-end pr-4 my-auto">
        <div className=" bg-white w-[30px] h-[30px] rounded-full flex justify-center items-center">
          =
        </div>
      </div>
    </div>
  );
};

export default NavBar;
