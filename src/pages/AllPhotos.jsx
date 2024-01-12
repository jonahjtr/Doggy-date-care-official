import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import useGetAxios from "../hooks/axios/useGetAxios";
import SideNav from "../components/sidebarNav/SideNav";

const AllPhotos = () => {
  const [photosList, setPhotosList] = useState([]);

  const { data, error } = useGetAxios("/user/photos");

  useEffect(() => {
    if (data && data.length > 0) {
      setPhotosList(data);
    }
  }, [data]);

  if (!data || data.length < 1 || error) {
    return <div> no user neededData {error}</div>;
  }

  return (
    <div className="flex ">
      <SideNav />
      <div className="grow">
        <div className=" mobileBP:h-[calc(100vh-_70px)] ">
          <Header />
          <div className="h-1/2 overflow-y-hidden flex flex-wrap w-1/2 mx-auto bg-grey ">
            {photosList.map((photo, index) => {
              if (index < 5) return <div key={index}>bad image url</div>;
              return (
                <div className="" key={index}>
                  <img
                    className="w-[100px] mx-4 h-[100px]"
                    src={photo.photo_url}
                    alt={photo.photo_name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPhotos;
