import React, { useState } from "react";
import ModernDogProfileCard from "./ModernDogProfileCard";
import Calendar from "../Calendar/Calendar";
import Header from "../Header";
import UpComingEvents from "./UpComingEvents";
import LoadingComponent from "../utils/LoadingComponent";

const DashboardFeed = ({ data, isLoading }) => {
  const [dogs, setDogs] = useState([]);

  return (
    <div className={`min-h-screen`}>
      <Header />
      <main
        className={`flex flex-col mobileBP:flex-row bg-white  mobileBP:h-[calc(100vh_-_70px)]`}
      >
        <section className={`flex flex-col mobileBP:w-1/2 `}>
          <div className={`mobileBP:h-2/5   flex justify-center items-center `}>
            <div className="w-4/5 px-3 bg-grey rounded-2xl h-2/3">
              hello, welcome back
            </div>
          </div>
          <div className={`mobileBP:h-3/5 flex items-center `}>
            <div className="w-4/5 rounded-2xl mobileBP:h-4/5 max-h-[50vh]  mx-auto no-scrollbar overflow-y-auto">
              {!data.dogs || data.dogs.length === 0 ? (
                <div className="flex h-full w-full justify-center items-center">
                  <LoadingComponent />
                </div>
              ) : (
                data.dogs.map((dog, index) => (
                  <ModernDogProfileCard key={index} dog={dog} />
                ))
              )}
            </div>
          </div>
        </section>
        <section className={`flex   flex-col mobileBP:w-1/2  `}>
          <div className={` mobileBP:h-2/5 flex justify-center items-center `}>
            {!data.dogs || data.dogs.length === 0 ? (
              <div className="flex h-full w-full justify-center items-center">
                <LoadingComponent />
              </div>
            ) : (
              <UpComingEvents events={data.date_events} />
            )}
          </div>
          <div className={`mobileBP:h-3/5 flex items-center `}>
            <div className=" rounded-2xl  w-4/5 h-4/5 mx-auto overflow-y-hidden">
              <Calendar
                dashboard={true}
                datesList={
                  !data.dogs || data.dogs.length === 0 ? [] : data.date_events
                }
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardFeed;
