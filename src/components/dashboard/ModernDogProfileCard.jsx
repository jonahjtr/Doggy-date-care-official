import React from "react";
import { Link } from "react-router-dom";
import { currentDogId } from "../../jotai/statusStates";
import { useSetAtom } from "jotai";

const ModernDogProfileCard = ({ dog }) => {
  const { dog_id, dog_name, dog_profile_url } = dog;
  const setCurrentDogIdAtom = useSetAtom(currentDogId);

  const handleClick = () => {
    setCurrentDogIdAtom(dog_id);
    console.log(dog_id);
  };

  return (
    <Link to={"/dog-profile"}>
      <div
        onClick={handleClick}
        className="flex items-center justify-center w-[90%] mx-auto  pt-4 py-3"
      >
        <div className="border bg-black rounded-xl overflow-hidden  w-[110px] mr-[-20px] z-20 h-[110px]">
          <img src={dog_profile_url} alt="" />
        </div>
        <div className="border text-xl  sm:text-2xl lg:text-4xl text-white rounded-e-xl w-2/3 bg-purple h-[100px] flex pl-8 lg:pl-12 items-center text-ellipsis truncate overflow-hidden">
          {dog_name}
        </div>
      </div>
    </Link>
  );
};

export default ModernDogProfileCard;
