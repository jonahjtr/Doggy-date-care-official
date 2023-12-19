import React from "react";

const BreedViews = ({ breed_info }) => {
  console.log(breed_info);
  if (!breed_info || breed_info.length < 1)
    return <div>no information to diplay</div>;
  return (
    <section className="w-full bg-darkGreen  h-[350px] sm:h-[400px]  lg:h-[350px] 2xl:h-[400px] max-w-[1000px] mx-auto p-2 px-4 rounded-3xl mt-0 my-5 flex flex-col justify-evenly items-center border">
      <h1 className="bg-lightGreen p-2 px-4 mb-5 ">breed info</h1>
      <div className="text-xs h-4/5 mb-3 bg-lightBeige  rounded-2xl w-full ">
        <div className="w-full h-1/6  flex justify-center">
          <h1 className=" text-2xl font-bold">
            {" "}
            {breed_info.breed_name ? breed_info.breed_name : "unknown"}
          </h1>
        </div>
        <main className="w-full h-5/6  border grid grid-cols-3">
          <section className="border flex flex-col justify-around ">
            <div className="flex h-1/6 justify-between flex-col items-center">
              <p className="font-bold">Excersize Needs:</p>
              <p>
                {breed_info.exercise_needs
                  ? breed_info.exercise_needs
                  : "unknown"}
              </p>
            </div>
            <div className="flex h-1/6  flex-col justify-between items-center">
              <p className="font-bold">Diet:</p>
              <p>
                {breed_info.diet_and_nutrition
                  ? breed_info.diet_and_nutrition
                  : "unknown"}
              </p>
            </div>
            <div className="flex h-1/6  flex-col justify-between items-center">
              <p className="font-bold">Grooming:</p>
              <p>
                {breed_info.grooming_needs
                  ? breed_info.grooming_needs
                  : "unknown"}
              </p>
            </div>
          </section>
          <section className="border flex  flex-col justify-between">
            <div className="flex flex-col text-xs">
              <p className="font-bold mx-auto">average height:</p>
              {breed_info.average_height
                ? breed_info.average_height
                : "unknown"}
              <p className="font-bold mx-auto">average weight:</p>{" "}
              {breed_info.average_weight
                ? breed_info.average_weight
                : "unknown"}
            </div>
            <div className="border h-2/3">bottom 94, dog pic</div>
          </section>
          <section className=" border h-full flex flex-col text-xs justify-around ">
            <div className="flex h-1/5 justify-between flex-col items-center">
              <p className="font-bold"> temperament:</p>
              <p>
                {breed_info.temperament ? breed_info.temperament : "unknown"}
              </p>
            </div>
            <div className="flex  flex-col justify-between items-center">
              <p className="font-bold">training:</p>
              <p>
                {breed_info.training_info
                  ? breed_info.training_info
                  : "unknown"}
              </p>
            </div>
            <div className="flex   flex-col justify-between items-center">
              <p className="font-bold">history:</p>
              <p>{breed_info.history ? breed_info.history : "unknown"}</p>
            </div>
          </section>
        </main>
      </div>
    </section>
  );
};

export default BreedViews;
