import React, { useState, useEffect } from "react";
import SideNav from "../components/sidebarNav/SideNav";
import useGetAxios from "../hooks/axios/useGetAxios";
import DogProfileBanner from "../components/dogProfile/DogProfileBanner";
import Header from "../components/Header";
import Calendar from "../components/Calendar/Calendar";
import PhotoViewCard from "../components/dogProfile/profile_views/PhotoViewCard";
import FileViewCard from "../components/dogProfile/profile_views/FileViewCard";
import MedsViewCard from "../components/dogProfile/profile_views/MedsViewCard";
import NotesViewCard from "../components/dogProfile/profile_views/NotesViewCard";

const DogProfile = () => {
  const [dateEvents, setDateEvents] = useState([]);
  const [dogPhotos, setDogPhotos] = useState([]);
  const [dogMeds, setDogMeds] = useState([]);
  const [dogFiles, setDogFiles] = useState([]);

  const dogId = JSON.parse(localStorage.getItem("current_dog"));
  const { data, error, loading } = useGetAxios(`/dogs/${dogId}`);

  useEffect(() => {
    setDateEvents(data.date_events);
    setDogPhotos(data.dog_photos);
    setDogMeds(data.medicines);
    setDogFiles(data.dog_files);
  }, [data]);

  if (data) {
    return (
      <div className="flex h-screen ">
        <SideNav />
        <div className="grow flex flex-col  h-screen overflow-y-auto">
          <Header />

          <DogProfileBanner data={data} />

          <main className="bg-purple flex flex-col xl:flex-row grow ">
            <div className=" border xl:w-2/3 flex flex-col md:flex-row bg-white">
              <section className="w-full  pt-28 md:pt-20 xl:w-1/2 flex flex-col justify-around h-full   xl:pt-28">
                <div className="h-[40vh] md:h-[48%]  mb-6  min-h-[250px]  w-full">
                  <PhotoViewCard
                    loading={loading}
                    dogId={dogId}
                    photoList={dogPhotos}
                  />
                </div>
                <div className=" h-[40vh] md:h-[48%]  mb-6 min-h-[250px]   w-full">
                  <MedsViewCard
                    loading={loading}
                    dogId={dogId}
                    medicineList={dogMeds}
                  />
                </div>
              </section>
              <section className="w-full  xl:w-1/2 flex flex-col justify-around h-full md:pt-20 xl:pt-28">
                <div className="h-[40vh] md:h-[48%]  mb-6 min-h-[250px]  w-full">
                  <FileViewCard
                    loading={loading}
                    dogId={dogId}
                    fileList={dogFiles}
                  />
                </div>
                <div className="h-[40vh] md:h-[48%]  mb-6 min-h-[250px]  w-full">
                  <NotesViewCard loading={loading} dogId={dogId} />
                </div>
              </section>
            </div>
            <div className=" grow bg-white">
              <Calendar datesList={dateEvents} />
            </div>
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
