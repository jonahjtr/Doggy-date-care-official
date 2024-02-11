import React from "react";

const EventsCard = ({ event }) => {
  const dateObj = new Date(event.start_date_time);
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
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  const formattedHours = hours % 12 || 12; // Convert 0 to 12
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes; // Add leading zero if needed
  const timeString = formattedHours + ":" + formattedMinutes + " " + ampm;

  const dayOfMonth = dateObj.getDate();
  const monthOfEvent = dateObj.getMonth();

  return (
    <div className="bg-primary flex h-[80px] rounded-xl mb-3">
      <div className="bg-white w-[60px] h-[80px] flex flex-col justify-evenly items-center rounded-xl text-center">
        <h1 className="text-xl">{months[monthOfEvent]}</h1>
        <p className="text-3xl">{dayOfMonth}</p>
      </div>
      <div className="overflow-y-hidden w-full px-2 ">
        <div>
          <h1 className=" h-[30%] w-fit text-lg font-bold truncate overflow-y-hidden mx-auto">
            {event.title || "no title"}
          </h1>
        </div>
        <div className="flex  h-[60px] overflow-y-hidden">
          <p className="w-80% h-full overflow-hidden">
            <span className="line-clamp-2 pr-2">
              {event.description}ssdfsdd sdsdsds sdfdsdsdsdf sfgfdgsdfgdfv
              dfsdfsdfsddsfsdfsddfvdfsdfg
            </span>
          </p>
          <p className="w-[20%]">{timeString}</p>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
