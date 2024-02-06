import React, { useState } from "react";
import LoadingComponent from "../utils/LoadingComponent";

function Banner({ data, openModal }) {
  const [modalStatus, setModalStatus] = useState(false);
  let outputDateOfBirth = null;
  if (data.dog_date_of_birth) {
    outputDateOfBirth = new Date(data.dog_date_of_birth).toLocaleDateString();
  }
  const handleClick = () => {
    openModal();
  };

  return (
    <div className="relative  min-h-[150px] h-1/5">
      <div className="w-full  h-full bg-gradient-to-b from-white to-primary flex"></div>
      {data && data.breed_info ? (
        <div className="absolute bottom-0 flex items-end  left-1/2 md:left-[18%] xl:left-[10%] transform -translate-x-1/2 translate-y-1/2 bg-primary rounded-full  w-[150px] h-[150px]   xl:w-[200px]  xl:h-[200px]">
          <img
            src={data.dog_profile_picture}
            alt="Profile Picture"
            className="rounded-full mx-auto w-full h-full"
          />
          <button onClick={handleClick} className=" ml-[-20px]">
            +
          </button>
          <div className="     sm:ml-3   whitespace-nowrap ">
            <h1 className=" text-xl xl:text-2xl font-bold">
              {data.dog_name ? data.dog_name : "doggy name"}
            </h1>
            <h3 className="text-md xl:text-xl font-bold">
              {data.breed_info.breed_name === undefined
                ? "doggy Breed"
                : data.breed_info.breed_name}
            </h3>
            <p className=" text-xs font-bold">
              {data.dog_date_of_birth ? outputDateOfBirth : "doggy dob"}
            </p>
          </div>
        </div>
      ) : (
        <LoadingComponent />
      )}
    </div>
  );
}

export default Banner;
