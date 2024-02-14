import React from "react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const CalMonthYear = (props) => {
  const { selectedDate, handleMonthChange, handleYearChange } = props;
  return (
    <div className=" flex justify-center items-center h-[50px] w-full">
      <select
        className="mr-2 text-xl font-medium bg-grey text-white bg-opacity-0"
        value={selectedDate.getMonth()}
        onChange={handleMonthChange}
      >
        {Array.from({ length: 12 }, (_, i) => (
          <option key={i} value={i}>
            {months[i]}
          </option>
        ))}
      </select>
      <select
        className="bg-grey text-xl font-sm bg-opacity-0 text-white"
        value={selectedDate.getFullYear()}
        onChange={handleYearChange}
      >
        {Array.from({ length: 10 }, (_, i) => (
          <option key={i} value={selectedDate.getFullYear() - 5 + i}>
            {selectedDate.getFullYear() - 5 + i}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CalMonthYear;
