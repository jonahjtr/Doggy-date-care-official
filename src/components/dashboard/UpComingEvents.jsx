import React from "react";
import LoadingComponent from "../utils/LoadingComponent";
import EventsCard from "./EventsCard";

const UpComingEvents = ({ events, loading }) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  console.log("events", events);

  let year = 0;
  console.log("new events", events);
  return (
    <div className="w-4/5 rounded-2xl bg-grey h-2/3">
      <div className=" h-1/6  px-3 w-full"> upcoming events</div>
      <div className=" h-5/6 w-full p-2 pt-1">
        {loading ? (
          <LoadingComponent />
        ) : events.length === 0 ? (
          <div>no events</div>
        ) : (
          <div className="w-full h-full rounded-2xl  no-scrollbar pt-1 overflow-y-auto">
            {events.map((event, index) => (
              <div>
                <EventsCard event={event} key={index} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UpComingEvents;

// {
//   event.start_date_time.substring(0, 4);
// }

// <div className="w-[50px] h-[50px] flex flex-col justify-center items-center bg-white  rounded-xl ">
//   <div>{months[monthOfEvent]}</div>
//   <div>{dayOfMonth}</div>
// </div>
// <div className="grow mr-2 my-0.5  ">
//   <div className="px-2">
//     <h3> days until</h3>
//   </div>
//   <div className="flex justify-between px-2 truncate">
//     <p className="truncate ">{event.description}</p>
//     <div className="truncate w-[80%]">
//       {timeWithTimeZoneOffset}
//     </div>
//   </div>
// </div>

//  const dateObj = new Date(event.start_date_time);
//  const timeWithTimeZoneOffset = dateObj.toLocaleTimeString(undefined, {
//    timeZoneName: "short",
//  });
//  const dayOfMonth = dateObj.getDate();
//  const monthOfEvent = dateObj.getMonth();
//  return (
//    <div className=" bg-primary flex h-[80px] rounded-xl  mb-3" key={index}>
//      <div className=" bg-white w-[80px] h-[80px] flex flex-col justify-evenly items-center rounded-xl text-center">
//        <h1 className=" text-xl ">{months[monthOfEvent]}</h1>
//        <p className=" text-3xl">{dayOfMonth}</p>
//      </div>
//      <div className=" flex-grow mx-2 bg-orange">
//        <div>
//          <h1 className="bg-white w-fit text-lg font-bold truncate overflow-y-hidden mx-auto">
//            title
//          </h1>
//        </div>
//        <div>
//          <p className="w-[80%]"> description</p>
//          <p className="w-[20%]">time/date </p>
//        </div>
//      </div>
//    </div>
//  );
