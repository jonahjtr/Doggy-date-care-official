import React from "react";

const DogProfileCard = ({ data }) => {
  console.log(data);
  return (
    <div className="bg-darkGreen my-2 px-4 py-2 mx-auto flex rounded-3xl  min-h-[200px] max-h-[350px] h-[20vw] min-w-[450px] w-full max-w-[1300px] ">
      <div className="lg:w-[10vw] lg:h-[10vw] mx-auto   mr-4 rounded-[50%] overflow-hidden min-w-[150px] min-h-[150px] w-[150px] h-[150px]   my-auto">
        <img className=" h-full object-cover " src={data.dog_profile_picture} />
      </div>
      <section className="mx-auto border border-black my-auto h-full w-2/3">
        <div className="border border-black w-full mx-auto  flex justify-between px-3">
          <h1 className="bg-darkBeige ">{data.dog_name}</h1>
          <p className="bg-darkBeige ">{data.dog_date_of_birth}</p>
        </div>
        <section className="flex flex-col justify-evenly border border-black items-center h-4/5 bg-white  w-[70%] mx-auto">
          <div className="border border-black bg-darkBeige w-full h-1/4">
            <p>{data.dog_age}</p>
          </div>
          <div className="border border-black bg-darkBeige w-full h-1/4">
            <p>{data.dog_sex}</p>
          </div>
          <div className="  border border-black bg-darkBeige w-full h-1/4">
            <p>{data.dog_breed}</p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default DogProfileCard;
