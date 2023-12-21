import React from "react";

const Button = ({ buttonName }) => {
  return (
    <button class="bg-transparent w-max text-xs lg:text-lg text-white  font-semibold hover:text-white  py-1 px-2  md:py-2 lg:px-4 border-2 border-darkBeige hover:bg-darkBeige  hover:border-transparent rounded">
      {buttonName}
    </button>
  );
};

export default Button;
