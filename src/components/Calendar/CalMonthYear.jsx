import React from "react";

const CalMonthYear = (props) => {
  const { selectedDate, handleMonthChange, handleYearChange } = props;
  return (
    <div className="bg-grey">
      <select
        className="mr-2"
        value={selectedDate.getMonth()}
        onChange={handleMonthChange}
      >
        {Array.from({ length: 12 }, (_, i) => (
          <option key={i} value={i}>
            {i + 1}
          </option>
        ))}
      </select>
      <select value={selectedDate.getFullYear()} onChange={handleYearChange}>
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
