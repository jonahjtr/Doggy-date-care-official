import React from "react";
import { Link } from "react-router-dom";

const NewDogCard = ({ data, index }) => {
  const { dog_id, dog_name, dog_profile_url } = data;
  function setCurrentDog(data) {
    localStorage.setItem("current_dog", dog_id);
  }
  return (
    <Link to="/dog-profile2">
      <div
        onClick={() => setCurrentDog(data)}
        className={
          index === 0
            ? " h-[250px] w-[250px] flex flex-col justify-around mx-auto shadow bg-primary  rounded-3xl"
            : " h-[250px] mt-10 w-[250px] flex flex-col justify-around mx-auto shadow bg-primary  rounded-3xl"
        }
      >
        <div
          className="rounded-full h-[160px] w-[160px] mx-auto pb-1/2"
          style={{
            backgroundImage: `url(${dog_profile_url})`,
            backgroundSize: "cover",
          }}
        ></div>

        <div className="text-4xl mx-auto text-actWhite">{dog_name}</div>
      </div>
    </Link>
  );
};

export default NewDogCard;

// <div className="h-[250px] w-[250px] sm:h-[410px] sm:w-[400px] max-w-[100%] mx-auto  mt-3 shadow-2xl bg-primary rounded-2xl"></div>
//
