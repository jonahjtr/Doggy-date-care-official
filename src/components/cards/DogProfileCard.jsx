import React from "react";

const DogProfileCard = ({ data }) => {
  function setCurrentDog(data) {
    localStorage.setItem("current_dog", data.dog_id);
    console.log(data.medicines);
  }
  return (
    <div
      onClick={() => setCurrentDog(data)}
      className=" bg-darkGreen  h-[150px] lg:h-[200px] 2xl:h-[250px] w-full max-w-[1300px] mx-auto grid grid-cols-6 my-6 p-1  rounded-xl "
    >
      <div className="col-span-2  flex justify-center items-center">
        <img
          className="  rounded-full bg-lightBeige w-[130px] lg:w-[150px] lg:h-[150px]  2xl:h-[200px] 2xl:w-[200px] h-[130px] "
          src={data.dog_profile_picture}
        />
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
        <section className="  h-3/4 grid grid-cols-3 gap-x-3 gap-y-4 p-2 py-3  xl:h-2/3 ">
          <div className="bg-darkBeige "> </div>
          <div className="bg-darkBeige"></div>
          <div className="bg-darkBeige"></div>
          <div className="bg-darkBeige"></div>
          <div className="bg-darkBeige"></div>
          <div className="bg-darkBeige"></div>
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
