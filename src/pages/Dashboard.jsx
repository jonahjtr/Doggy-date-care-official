import React, { useEffect, useState } from "react";
import useGetAxios from "../hooks/axios/useGetAxios";
import SideNav from "../components/sidebarNav/SideNav";
import UpComingEvents from "../components/dashboard/UpComingEvents";
import Header from "../components/Header";
import Calendar from "../components/Calendar/Calendar";
import ModernDogProfileCard from "../components/dashboard/ModernDogProfileCard";

const Dashboard = () => {
  const { data, error, status, loading } = useGetAxios("/user/profile");
  const [dogs, setDogs] = useState([
    { dog_id: 1, dog_name: "loading dogs", dog_profile_url: "" },
  ]);
  const [events, setEvents] = useState([]);

  console.log(data);
  useEffect(() => {
    if (status === 200) {
      setDogs(data.dogs);
      setEvents(data.date_events);
      let current_dog = localStorage.getItem("current_dog");
      if (!current_dog) {
        localStorage.setItem("current_dog", data.dogs[0].dog_id);
      }
    } else {
      if (data.statusText === "Unauthorized") {
        console.log("sadlfjksldfj");
      }
      console.log("status text", error); //this is message that responds back for the error
      setDogs([]);
    }
  }, [data, error]);

  return (
    <div className="flex ">
      <SideNav />
      <div className="grow">
        <div className={`min-h-screen`}>
          <Header />
          <main
            className={`flex flex-col mobileBP:flex-row bg-white  mobileBP:h-[calc(100vh_-_70px)]`}
          >
            <section className={`flex flex-col mobileBP:w-1/2 `}>
              <div
                className={`mobileBP:h-2/5   flex justify-center items-center `}
              >
                <div className="w-4/5 px-3 bg-grey rounded-[7px] h-2/3">
                  hello, welcome back
                </div>
              </div>
              <div className={`mobileBP:h-3/5 flex items-center `}>
                <div className="w-4/5 rounded-2xl mobileBP:h-4/5 max-h-[50vh]  mx-auto no-scrollbar overflow-y-auto">
                  {dogs.length == 0 ? (
                    <div> no dogs </div>
                  ) : (
                    dogs.map((dog, index) => (
                      <ModernDogProfileCard
                        index={index}
                        key={index}
                        dog={dog}
                      />
                    ))
                  )}
                </div>
              </div>
            </section>
            <section className={`flex   flex-col mobileBP:w-1/2  `}>
              <div
                className={` mobileBP:h-2/5 flex justify-center items-center `}
              >
                {<UpComingEvents loading={loading} events={events} />}
              </div>
              <div className={`mobileBP:h-3/5 flex items-center `}>
                <div className=" rounded-2xl bg-primary  w-4/5 h-4/5 mx-auto overflow-y-hidden">
                  <Calendar
                    dashboard={true}
                    datesList={
                      !data.dogs || data.dogs.length === 0
                        ? []
                        : data.date_events
                    }
                  />
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
