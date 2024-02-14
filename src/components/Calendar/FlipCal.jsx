import { React, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import CalEvents from "./CalEvents";
import CalMonthYear from "./CalMonthYear";
import CalDays from "./CalDays";

const FlipCal = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleDayClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className="rounded-xl max-w-[500px] mx-auto text-center ">
      <div className="group  perspective:1000px   ">
        <div
          className={
            isFlipped
              ? "	 [transform-style:preserve-3d] transition-all duration-500 [transform:rotateY(180deg)] "
              : " [transform-style:preserve-3d] transition-all duration-500  "
          }
        >
          {/*-----------------------------       ------------------------------------*/}
          <div className="p-2   [backface-visibility:hidden] rounded-xl bg-purple absolute w-[100%]">
            <LocalizationProvider dateAdapter={props.AdapterDateFns}>
              <div className="flex  items-center ">
                <CalMonthYear
                  selectedDate={props.selectedDate}
                  handleMonthChange={props.handleMonthChange}
                  handleYearChange={props.handleYearChange}
                />
              </div>
              <CalDays
                selectedDate={props.selectedDate}
                daysInMonth={props.daysInMonth}
                handleDateChange={props.handleDateChange}
                highlightedDays={props.highlightedDays}
                onDayClick={handleDayClick}
              />
            </LocalizationProvider>
          </div>
          {/*-----------------------------       ------------------------------------*/}

          <div className="[backface-visibility:hidden]  [transform:rotateY(180deg)]">
            <CalEvents
              onDayClick={handleDayClick}
              selectedDateEvents={props.selectedDateEvents}
              flipOrNot={true}
            />
          </div>

          {/*-----------------------------       ------------------------------------*/}
        </div>
      </div>
    </div>
  );
};

export default FlipCal;
