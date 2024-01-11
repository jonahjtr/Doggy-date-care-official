import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import useGetAxios from "../hooks/axios/useGetAxios";
import SideNav from "../components/sidebarNav/SideNav";

const AllDogs = () => {
  const [dogsList, setDogsList] = useState([]);

  const { data, error } = useGetAxios("/dogs");
  const handleClick = (dog_id) => {
    localStorage.setItem("current_dog", dog_id);
    console.log(dog_id);
  };
  useEffect(() => {
    if (data && data.length > 0) {
      setDogsList(data);
    }
  }, [data]);

  if (!data || data.length < 1 || error) {
    return <div> no user neededData {error}</div>;
  }
  console.log(dogsList);
  return (
    <div className="flex ">
      <SideNav />
      <div className="grow">
        <div className=" mobileBP:h-[calc(100vh-_70px)] ">
          <Header />
          <div className="h-1/2 overflow-y-hidden flex flex-wrap w-1/2 mx-auto bg-grey ">
            {dogsList.map((dog, index) => {
              return (
                <Link to={"/dog-profile"}>
                  <div
                    onClick={() => handleClick(dog.id)}
                    className="flex items-center  cursor-pointer justify-center  w-[90%] mx-auto  pt-4 py-3"
                  >
                    <div className=" bg-black rounded-xl max-h-[20vh] overflow-hidden  w-[110px] mr-[-20px] z-20 h-[110px] lg:h-[180px] lg:w-[180px]">
                      <img src={dog.dog_profile_url} alt="" />
                    </div>
                    <div className="border text-xl max-h-[14vh]  sm:text-2xl lg:text-4xl text-white rounded-e-xl w-2/3 bg-purple h-[100px] lg:h-[130px] flex pl-8 lg:pl-12 items-center text-ellipsis  overflow-hidden">
                      {dog.name}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllDogs;
