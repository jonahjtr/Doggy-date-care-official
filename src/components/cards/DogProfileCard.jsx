import React from "react";
import { Link } from "react-router-dom";
import Button from "../utils/Button";

const DogProfileCard = ({ data }) => {
  function setCurrentDog(data) {
    localStorage.setItem("current_dog", data.dog_id);
  }

  return (
    <div
      onClick={() => setCurrentDog(data)}
      className="bg-darkGreen h-[150px] lg:h-[250px] 2xl:h-[250px] w-full max-w-[1300px] mx-auto grid grid-cols-6 my-6  rounded-xl"
    >
      <div className="col-span-2 h-[150px] lg:h-[250px] 2xl:h-[250px] border flex flex-col justify-center items-center">
        <Link className=" w-1/2 pb-1/2 rounded-full mx-auto bg-white overflow-hidden">
          {/* Place your profile picture here */}
        </Link>
        <h1 className=" text-white text-3xl text-center overflow-hidden">
          {data.dog_name}
        </h1>
      </div>

      <section className=" p-2 col-span-4 ">
        <section className=" text-xs text-center h-full grid grid-cols-3 gap-x-6 gap-y-6 p-2 py-6    ">
          <Link>
            <Button buttonName="Breed Info" />
          </Link>
          <Link>
            <Button buttonName="My Notes" />
          </Link>
          <Link>
            <Button buttonName="My Meds" />
          </Link>
          <Link>
            <Button buttonName="My photos" />
          </Link>
          <Link>
            <Button buttonName="My Files" />
          </Link>
          <Link>
            <Button buttonName="My Dates" />
          </Link>
        </section>
      </section>
    </div>
  );
};

export default DogProfileCard;

// <div className="col-span-2 border flex flex-col justify-center items-between">
//   <Link className=" w-full h-full " to={"/dog-profile"}>
//     <div className="  max-h-full w-[100px] h-[100px]    md:w-1/2 md:pb-1/2 rounded-full mx-auto bg-white"></div>
//   </Link>
//   <h1 className=" pt-3 text-white flex  text-3xl  justify-center items-center px-4 ">
//     {data.dog_name}
//   </h1>
// </div>;

// <img
//   className="  rounded-full bg-white w-[100px] lg:w-[120px] lg:h-[120px]  2xl:h-[180px] 2xl:w-[180px] h-[100px] "
//   src={data.dog_profile_picture}
// />
// <h1 className=" pt-3 text-white flex  text-3xl  justify-center items-center px-4 ">
// {data.dog_name}
// </h1>

//  <img
//    className=" rounded-full   w-1/2 pb-1/2 bg-white "
//    src={data.dog_profile_picture}
//  />;

// <div className="border border-black bg-darkBeige w-full h-1/4">
//             <p>{data.dog_age}</p>
//           </div>
//           <div className="border border-black bg-darkBeige w-full h-1/4">
//             <p>{data.dog_sex}</p>
//           </div>
//           <div className="  border border-black bg-darkBeige w-full h-1/4">
//             <p>medicines</p>
//           </div>
//           <div className="border border-black bg-darkBeige w-full h-1/4">
//             <p>{data.dog_age}</p>
//           </div>
//           <div className="border border-black bg-darkBeige w-full h-1/4">
//             <p>{data.dog_sex}</p>
//           </div>
//           <div className="  border border-black bg-darkBeige w-full h-1/4">
//             <p>{data.dog_breed}</p>
//           </div>
// <section className="  flex justify-between h-1/4 2xl:h-1/3 lg:py-2 "></section>;
