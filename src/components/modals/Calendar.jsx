import React, { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
} from "date-fns";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const goToNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const goToPreviousMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const renderCalendar = () => {
    const startOfCurrentMonth = startOfMonth(currentDate);
    const endOfCurrentMonth = endOfMonth(currentDate);

    const daysInMonth = eachDayOfInterval({
      start: startOfCurrentMonth,
      end: endOfCurrentMonth,
    });

    return (
      <div className="calendar">
        <div className="calendar-header flex justify-between items-center mb-4">
          <button
            className="text-xl font-bold cursor-pointer"
            onClick={goToPreviousMonth}
          >
            &lt;
          </button>
          <h2 className="text-xl font-bold">
            {format(currentDate, "MMMM yyyy")}
          </h2>
          <button
            className="text-xl font-bold cursor-pointer"
            onClick={goToNextMonth}
          >
            &gt;
          </button>
        </div>
        <div className="calendar-days grid grid-cols-7 gap-2">
          {daysInMonth.map((day) => (
            <div
              key={day}
              className="calendar-day text-center py-2 bg-gray-200 rounded-lg"
            >
              {format(day, "d")}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return <div className="calendar-container">{renderCalendar()}</div>;
};

export default Calendar;
