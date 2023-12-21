import React from "react";
import DogProfileCard from "./cards/DogProfileCard";

const HomePageFeed = ({ list }) => {
  localStorage.setItem("dogData", JSON.stringify(list));
  console.log("list for homepage", list);
  return (
    <div className=" mx-auto bg-white py-6 sm:px-5 sm:w-[80%] xl:w-[85%] 2xl-[50%]">
      {list ? (
        list.map((data) => <DogProfileCard key={data.name} data={data} />)
      ) : (
        <p>No dogs available.</p>
      )}
    </div>
  );
};

export default HomePageFeed;
