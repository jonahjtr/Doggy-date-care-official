import React from "react";

const CalEvents = ({ selectedDateEvents, onDayClick, flipOrNot }) => {
  const handleDayClick = (date) => {
    onDayClick();
  };

  const formatDate = (dateString) => {
    if (!dateString) return "No Date selected"; // Check if dateString is not null or undefined

    const date = new Date(dateString);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  const formattedDate = selectedDateEvents[0]
    ? formatDate(selectedDateEvents[0].date)
    : "Event"; // Check if the first event exists before formatting date

  return (
    <div className="w-full flex flex-col  justify-center">
      <div className="flex justify-between px-3 pb-4 border-b">
        <h1 className="mx-auto font-bold">
          {selectedDateEvents.length > 0 ? formattedDate : "No Events"}
        </h1>
        {flipOrNot && (
          <p
            onClick={() => handleDayClick()}
            className="text-4xl cursor-pointer font-bold pr-2"
          >
            x
          </p>
        )}
      </div>
      <div className="overflow-y-auto  h-[35dvh]">
        {selectedDateEvents.map((event, index) => (
          <div key={index} className="p-2">
            {event.title} - {event.description}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalEvents;
