import React from "react";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";

const CalDays = (props) => {
  const {
    selectedDate,
    daysInMonth,
    handleDateChange,
    highlightedDays,
    onDayClick,
  } = props;
  const handleDayClick = (date) => {
    handleDateChange(date);
    onDayClick();
  };
  return (
    <div className="grid  grid-cols-7 gap-1 ">
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
        <div key={day} className=" font-semibold">
          {day}
        </div>
      ))}
      {Array.from({ length: 7 }, (_, i) => (
        <div key={`empty-${i}`} />
      ))}
      {Array.from({ length: daysInMonth }, (_, i) => (
        <div
          key={i + 1}
          className={`border  h-[5vh] flex cursor-pointer ${
            selectedDate.getDate() === i + 1 &&
            selectedDate.getMonth() === selectedDate.getMonth() &&
            selectedDate.getFullYear() === selectedDate.getFullYear()
              ? "bg-accent text-white" // Apply a different background color to the current day
              : ""
          }`}
          onClick={() =>
            handleDayClick(
              new Date(
                selectedDate.getFullYear(),
                selectedDate.getMonth(),
                i + 1
              )
            )
          }
        >
          <p className="border w-full">{i + 1}</p>

          {highlightedDays.includes(i + 1) && (
            <PetsOutlinedIcon className="pr-1" color="primary" />
          )}
        </div>
      ))}
    </div>
  );
};

export default CalDays;
