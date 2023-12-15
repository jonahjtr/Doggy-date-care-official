import React from "react";
import { Link } from "react-router-dom";

const DogProfileCard = ({ data }) => {
  function setCurrentDog(data) {
    localStorage.setItem("current_dog", data.dog_id);
  }

  return (
    <div
      onClick={() => setCurrentDog(data)}
      className=" bg-darkGreen  h-[150px] lg:h-[200px] 2xl:h-[250px] w-full max-w-[1300px] mx-auto grid grid-cols-6 my-6 p-1  rounded-xl "
    >
      <div className="col-span-2  flex justify-center items-center">
        <Link to={"/dog-profile"}>
          <img
            className="  rounded-full bg-lightBeige w-[130px] lg:w-[150px] lg:h-[150px]  2xl:h-[200px] 2xl:w-[200px] h-[130px] "
            src={data.dog_profile_picture}
          />
        </Link>
      </div>
      <section className=" p-2 col-span-4 ">
        <section className="  flex justify-between h-1/4 2xl:h-1/3 lg:py-2 ">
          <h1 className="bg-darkBeige rounded-xl flex justify-center items-center px-4 ">
            {data.dog_name}
          </h1>
          <p className="bg-darkBeige rounded-xl flex justify-center items-center px-2 ">
            {data.dog_date_of_birth}
          </p>
        </section>
        <section className=" text-xs text-center h-3/4 grid grid-cols-3 gap-x-3 gap-y-4 p-2 py-3  xl:h-2/3 ">
          <Link>
            <div className="bg-darkBeige ">
              <p>Breed Info</p>
            </div>
          </Link>
          <Link>
            <div className="bg-darkBeige">
              <p> my characteristics</p>
            </div>
          </Link>
          <Link>
            <div className="bg-darkBeige">
              <p> my files</p>
            </div>
          </Link>
          <Link>
            <div className="bg-darkBeige">
              <p>my photos</p>
            </div>
          </Link>
          <Link>
            <div className="bg-darkBeige">
              <p>my dates</p>
            </div>
          </Link>
          <Link>
            <div className="bg-darkBeige">
              <p>my dates</p>
            </div>
          </Link>
        </section>
      </section>
    </div>
  );
};

export default DogProfileCard;

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
