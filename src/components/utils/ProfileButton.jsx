import React from "react";

const ProfileButton = ({ buttonName }) => {
  return (
    <button class=" shadow-xl place-self-center bg-transparent text-3xl my-2 text-white w-[200px] md:w-[170px] lg:w-[260px] px-6  py-1 lg:py-3   border-2 border-accent hover:text-white hover:bg-accent hover:border-transparent rounded">
      {buttonName}
    </button>
  );
};

export default ProfileButton;
