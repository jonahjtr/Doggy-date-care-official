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

  const firstDayOfMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    1
  );
  const startingDay = firstDayOfMonth.getDay(); // 0 for Sunday, 1 for Monday, etc.

  const lastDayOfPrevMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    0
  );
  const daysInPrevMonth = lastDayOfPrevMonth.getDate();

  const lastDayOfMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0
  );
  const daysInCurrentMonth = lastDayOfMonth.getDate();

  const handleDayClick = (date) => {
    handleDateChange(date);
    onDayClick();
  };

  return (
    <div className="grid  grid-cols-7 gap-1 ">
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
        <div key={day} className="font-semibold">
          {day}
        </div>
      ))}

      {Array.from({ length: startingDay }, (_, i) => (
        <div
          key={`prev-month-${i}`}
          className=" h-[5vh] flex cursor-pointer opacity-50 text-gray-400"
          onClick={() =>
            handleDayClick(
              new Date(
                selectedDate.getFullYear(),
                selectedDate.getMonth() - 1,
                daysInPrevMonth - startingDay + i + 1
              )
            )
          }
        >
          <p className="border w-full">
            {daysInPrevMonth - startingDay + i + 1}
          </p>
        </div>
      ))}

      {Array.from({ length: daysInMonth }, (_, i) => (
        <div
          key={i + 1}
          className={`border h-[5vh] flex cursor-pointer ${
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

      {Array.from(
        { length: 6 - ((startingDay + daysInMonth) % 7) + 1 },
        (_, i) => (
          <div
            key={`next-month-${i}`}
            className=" opacity-50 h-[5vh] flex cursor-pointer text-gray-400"
            onClick={() =>
              handleDayClick(
                new Date(
                  selectedDate.getFullYear(),
                  selectedDate.getMonth() + 1,
                  i + 1
                )
              )
            }
          >
            <p className="border w-full">{i + 1}</p>
          </div>
        )
      )}
    </div>
  );
};

export default CalDays;
