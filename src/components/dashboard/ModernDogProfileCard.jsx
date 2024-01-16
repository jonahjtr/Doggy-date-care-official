import React from "react";
import { Link } from "react-router-dom";

const ModernDogProfileCard = ({ dog, index }) => {
  const { dog_id, dog_name, dog_profile_url } = dog;

  const handleClick = () => {
    localStorage.setItem("current_dog", dog_id);
    console.log(dog_id);
  };

  return (
    <Link to={"/dog-profile"}>
      <div
        onClick={handleClick}
        className="flex items-center cursor-pointer justify-center  w-[90%] mx-auto  pt-4 py-3"
      >
        <div className=" bg-black rounded-xl max-h-[20vh] overflow-hidden  w-[110px] mr-[-20px] z-20 h-[110px] lg:h-[180px] lg:w-[180px]">
          <img src={dog_profile_url} alt="" />
        </div>
        <div className="border text-xl max-h-[14vh]  sm:text-2xl lg:text-4xl text-white rounded-e-xl w-2/3 bg-purple h-[100px] lg:h-[130px] flex pl-8 lg:pl-12 items-center text-ellipsis  overflow-hidden">
          {dog_name}
        </div>
      </div>
    </Link>
  );
};

export default ModernDogProfileCard;
