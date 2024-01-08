import React, { useEffect } from "react";
import SideNav from "../components/sidebarNav/SideNav";
import useGetAxios from "../hooks/axios/useGetAxios";
import DogProfileBanner from "../components/dogProfile/DogProfileBanner";
import Header from "../components/Header";
import PhotoViews from "../components/dogProfile/profile_views/PhotoViews";
import CreateView from "../components/dogProfile/profile_views/CreateView";

const DogProfile = () => {
  const dogId = JSON.parse(localStorage.getItem("current_dog"));
  const { data, error } = useGetAxios(`/dogs/${dogId}`);
  if (!data) {
    // Render a message if currentDogId is null
    return (
      <div>
        <SideNav />
        <div>Please select a dog.</div>
      </div>
    );
  }

  if (data) {
    return (
      <div className="flex">
        <SideNav />
        <div className="grow flex flex-col justify-center min-h-screen ">
          <Header />
          <DogProfileBanner data={data} />
          <main className="bg-purple flex flex-col xl:flex-row grow ">
            <div className=" border xl:w-2/3 flex flex-col md:flex-row bg-white">
              <section className="w-full  pt-28 md:pt-20 xl:w-1/2 flex flex-col justify-around h-full   xl:pt-28">
                <div className="h-[40vh] md:h-[48%]  mb-6  min-h-[250px]  w-full">
                  <CreateView
                    component={<PhotoViews />}
                    props={{
                      data:
                        data.dog_photos && data.dog_photos.length > 0
                          ? data.dog_photos
                          : [],
                    }}
                  />
                </div>
                <div className=" h-[40vh] md:h-[48%]  mb-6 min-h-[250px]   w-full">
                  <CreateView />
                </div>
              </section>
              <section className="w-full  xl:w-1/2 flex flex-col justify-around h-full md:pt-20 xl:pt-28">
                <div className="h-[40vh] md:h-[48%]  mb-6 min-h-[250px]  w-full">
                  <CreateView />
                </div>
                <div className="h-[40vh] md:h-[48%]  mb-6 min-h-[250px]  w-full">
                  <CreateView />
                </div>
              </section>
            </div>
            <div className=" grow bg-white"> calendar</div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div>
      <SideNav />
      <div>Loading...</div>
    </div>
  );
};

export default DogProfile;
