import React, { useState, useEffect } from "react";
import useGetAxios from "../hooks/axios/useGetAxios";
import usePostAxios from "../hooks/axios/usePostAxios";
import PhotoUpload from "../components/forms/PhotoUpload";

import SideNav from "../components/sidebarNav/SideNav";
import DogProfileBanner from "../components/dogProfile/DogProfileBanner";
import Header from "../components/Header";
import Calendar from "../components/Calendar/Calendar";

import PhotoViewCard from "../components/dogProfile/profile_views/PhotoViewCard";
import FileViewCard from "../components/dogProfile/profile_views/FileViewCard";
import MedsViewCard from "../components/dogProfile/profile_views/MedsViewCard";
import EventCard from "../components/dogProfile/profile_views/EventCards";

const DogProfile = () => {
  const [dateEvents, setDateEvents] = useState([]);
  const [dogPhotos, setDogPhotos] = useState([]);
  const [dogMeds, setDogMeds] = useState([]);
  const [dogFiles, setDogFiles] = useState([]);
  const [isProfilePhotoModalopen, setIsProfilePhotoModalopen] = useState(false);

  const dogId = JSON.parse(localStorage.getItem("current_dog"));
  const { data, error, loading } = useGetAxios(`/dogs/${dogId}`);

  useEffect(() => {
    setDateEvents(data.date_events);
    setDogPhotos(data.dog_photos);
    setDogMeds(data.medicines);
    setDogFiles(data.dog_files);
  }, [data]);
  if (error) {
    return <div> error occured</div>;
  }

  const handleProfilePhotoUpload = async (event) => {
    //upload photo here
  };

  const handleProfilePhotoModal = () => {
    setIsProfilePhotoModalopen(!isProfilePhotoModalopen);
  };
  console.log("date events", dateEvents);
  if (isProfilePhotoModalopen) {
    return (
      <div className="h-screen w-screen flex justify-center items-center bg-grey">
        <div className="w-[250px] h-[150px] shadow-2xl bg-white">
          <PhotoUpload
            url={`photos/profile/${dogId}`}
            toggleModal={handleProfilePhotoModal}
          />
        </div>
      </div>
    );
  }
  if (data) {
    return (
      <div className="flex h-screen ">
        <SideNav />
        <div className="grow flex flex-col  h-screen overflow-y-auto">
          <Header />
          <DogProfileBanner openModal={handleProfilePhotoModal} data={data} />
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
                  <EventCard loading={loading} datesList={dateEvents} />
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
};

export default DogProfile;
