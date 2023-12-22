import React from "react";

import NavBar from "../components/utils/NavBar";
import HomePageFeed2 from "../components/HomePageFeed2";

const NotHomePage = () => {
  return (
    <div className="w-full h-screen overflow-y-scroll bg-primary">
      <NavBar />
      <HomePageFeed2 />
    </div>
  );
};

export default NotHomePage;

//
// <HomePageFeed list={neededData.dogs} />
