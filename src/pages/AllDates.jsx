import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import useGetAxios from "../hooks/axios/useGetAxios";
import SideNav from "../components/sidebarNav/SideNav";
import Calendar from "../components/Calendar/Calendar";

const AllDates = () => {
  const [datesList, setDatesList] = useState([]);

  const { data, error } = useGetAxios("/user/dates");

  useEffect(() => {
    if (data.dates && data.dates.length > 0) {
      setDatesList(data.dates);
    }
  }, [data]);

  if (!data.dates || data.dates.length < 1 || error) {
    return <div> no user neededData {error}</div>;
  }

  return (
    <div className="flex">
      <SideNav />
      <div className="w-[80%] mx-auto">
        <Calendar type={"main"} datesList={datesList} />
      </div>
    </div>
  );
};

export default AllDates;

//  <div className=" mobileBP:h-[calc(100vh-_70px)] ">
//    <Header />
//    <div className="h-1/2 overflow-y-auto flex flex-wrap w-1/2 mx-auto bg-grey ">
//      {datesList.map((date, index) => {
//        return (
//          <div className="w-[600px] border  " key={index}>
//            <p>{date.title ? date.title : "title"}</p>
//            <p>{date.location ? date.location : "location"}</p>
//            <p>{date.description ? date.description : "description"}</p>
//            <p>
//              {date.start_date_time
//                ? date.start_date_time
//                : "start date time"}
//            </p>
//            <p>
//              {date.end_date_time ? date.end_date_time : "end date time"}
//            </p>
//          </div>
//        );
//      })}
//    </div>
//  </div>;
