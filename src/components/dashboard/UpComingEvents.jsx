import React from "react";

const events = [
  {
    title: "First event",
    date: "2020-01-01",
    day: "09",
    description: "title",
  },
  {
    title: "Second event",
    date: "2020-02-01",
    day: "20",
    description: "title",
  },
  {
    title: "Third event",
    date: "2020-03-01",
    day: "13",
    description: "title",
  },
  {
    title: "Fourth event",
    date: "2020-04-01",
    day: "18",
    description: "title",
  },
];

const UpComingEvents = ({ events }) => {
  console.log(events);
  return (
    <div className="w-4/5 bg-grey h-2/3">
      <div className="border h-1/4 w-full"> upcoming events</div>
      <div className="border h-3/4 w-full p-3">
        <div className="w-full h-full  no-scrollbar pt-1 overflow-y-auto">
          {events.map((event, index) => {
            const dateObj = new Date(event.date);
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
                <div className="grow mr-2 my-0.5 border ">
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
      </div>
    </div>
  );
};

export default UpComingEvents;
