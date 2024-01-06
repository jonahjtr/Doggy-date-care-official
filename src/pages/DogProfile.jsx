import React, { useEffect } from "react";
import SideNav from "../components/sidebarNav/SideNav";
import { currentDogId } from "../jotai/statusStates";
import { useAtomValue, useAtom } from "jotai";
import useGetAxios from "../hooks/axios/useGetAxios";

const DogProfile = () => {
  const dogId = JSON.parse(localStorage.getItem("current_dog"));
  const { data, error } = useGetAxios(`/dogs/${dogId}`);
  console.log(data);
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
        <div className="    grow min-h-screen "></div>
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
