import React from "react";

const BreedViews = ({ breed_info }) => {
  console.log(breed_info);
  if (!breed_info || breed_info.length < 1)
    return <div>no information to diplay</div>;
  return (
    <div className="text-xs bg-lightBeige roundex-2xl h-full ">
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
            {breed_info.average_height ? breed_info.average_height : "unknown"}
            <p className="font-bold mx-auto">average weight:</p>{" "}
            {breed_info.average_weight ? breed_info.average_weight : "unknown"}
          </div>
          <div className="border h-2/3">bottom 94, dog pic</div>
        </section>
        <section className=" border h-full flex flex-col text-xs justify-around ">
          <div className="flex h-1/5 justify-between flex-col items-center">
            <p className="font-bold"> temperament:</p>
            <p>{breed_info.temperament ? breed_info.temperament : "unknown"}</p>
          </div>
          <div className="flex  flex-col justify-between items-center">
            <p className="font-bold">Diet:</p>
            <p>
              {breed_info.training_info ? breed_info.training_info : "unknown"}
            </p>
          </div>
          <div className="flex   flex-col justify-between items-center">
            <p className="font-bold">Diet:</p>
            <p>{breed_info.history ? breed_info.history : "unknown"}</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BreedViews;
