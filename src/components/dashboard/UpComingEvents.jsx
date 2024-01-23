import React from "react";
import LoadingComponent from "../utils/LoadingComponent";

const UpComingEvents = ({ events, loading }) => {
  console.log(events);
  return (
    <div className="w-4/5 rounded-2xl bg-grey h-2/3">
      <div className=" h-1/4  px-3 w-full"> upcoming events</div>
      <div className=" h-3/4 w-full p-2 pt-1">
        {loading ? (
          <LoadingComponent />
        ) : events.length === 0 ? (
          <div>no events</div>
        ) : (
          <div className="w-full h-full rounded-2xl  no-scrollbar pt-1 overflow-y-auto">
            {events.map((event, index) => {
              const dateObj = new Date(event.start_date_time);
              const timeWithTimeZoneOffset = dateObj.toLocaleTimeString(
                undefined,
                {
                  timeZoneName: "short",
                }
              );
              const dayOfMonth = dateObj.getDate();
              return (
                <div
                  className=" bg-primary flex h-[50px] rounded-xl  mb-3"
                  key={index}
                >
                  <div className="w-[50px] flex justify-center items-center bg-white h-[50px] rounded-xl ">
                    {dayOfMonth}
                  </div>
                  <div className="grow mr-2 my-0.5  ">
                    <div className="px-2">
                      <h3> so many days until</h3>
                    </div>
                    <div className="flex justify-between px-2">
                      <p>{event.description}</p>
                      <div>{timeWithTimeZoneOffset}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default UpComingEvents;
