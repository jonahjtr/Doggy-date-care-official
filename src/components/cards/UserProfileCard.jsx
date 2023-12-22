import React from "react";
import ProfileButton from "../utils/ProfileButton";

const UserProfileCard = () => {
  return (
    <div className="bg-primary  p-3 mx-auto shadow-2xl  w-[90%] max-w-[1300px] flex flex-col md:flex-row justify-evenly rounded-xl ">
      <div className="w-[200px] xs:w-[300px]  mx-auto lg:mx-0">
        <div className="  mx-auto w-[200px] xs:w-[300px]">
          <div className=" bg-white   w-2/3 pb-2/3  mx-auto rounded-full my-auto "></div>
        </div>
        <div className="  p-4 text-white  w-max  xs:text-4xl mx-auto text-center ">
          Jonah Tillman
        </div>
      </div>
      <div className=" mx-auto w-[200px] md:w-full lg:mx-0  md:grid md:grid-cols-2 ">
        <ProfileButton buttonName="Files" />
        <ProfileButton buttonName="Photos" />
        <ProfileButton buttonName="Notes" />
        <ProfileButton buttonName="Dates" />
        <ProfileButton buttonName="Calendar" />
        <ProfileButton buttonName="files" />
      </div>
    </div>
  );
};

export default UserProfileCard;
