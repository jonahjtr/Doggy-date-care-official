import React, { useState, useEffect } from "react";
import { format, parseISO } from "date-fns";
import { utcToZonedTime, zonedTimeToUtc } from "date-fns-tz";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import CalEvents from "./CalEvents";
import CalMonthYear from "./CalMonthYear";
import CalDays from "./CalDays";
import FlipCal from "./FlipCal";

const Calendar = ({ datesList }) => {
  const currentDate = new Date(); // Get the current date
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [highlightedDays, setHighlightedDays] = useState([]);
  const [eventsData, setEventsData] = useState([]); // Store server response data
  const [selectedDateEvents, setSelectedDateEvents] = useState([]); // Store events for the selected date
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMonthChange = (event) => {
    const newMonth = parseInt(event.target.value);
    const newDate = new Date(
      selectedDate.getFullYear(),
      newMonth,
      selectedDate.getDate()
    );
    setSelectedDate(newDate);
  };

  const handleDayClick = () => {
    setIsFlipped(!isFlipped);
  };
  const handleYearChange = (event) => {
    const newYear = parseInt(event.target.value);
    const newDate = new Date(
      newYear,
      selectedDate.getMonth(),
      selectedDate.getDate()
    );
    setSelectedDate(newDate);
  };
  const daysInMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0
  ).getDate();

  useEffect(() => {
    if (datesList && datesList.length > 0) {
      setEventsData(datesList);

      // Function to compare if two dates are the same (ignoring time)
      const isSameDay = (date1, date2) => {
        return (
          date1.getFullYear() === date2.getFullYear() &&
          date1.getMonth() === date2.getMonth() &&
          date1.getDate() === date2.getDate()
        );
      };

      // Filter events for the selected date
      const selectedDateEvents = datesList.filter((event) => {
        const eventDate = utcToZonedTime(
          parseISO(event.date),
          Intl.DateTimeFormat().resolvedOptions().timeZone
        );
        return isSameDay(eventDate, selectedDate);
      });
      setSelectedDateEvents(selectedDateEvents);

      // Highlight days with events in the current month
      const daysWithEvents = datesList
        .filter((event) => {
          const eventDate = utcToZonedTime(
            parseISO(event.date),
            Intl.DateTimeFormat().resolvedOptions().timeZone
          );

          return (
            eventDate.getMonth() === selectedDate.getMonth() &&
            eventDate.getFullYear() === selectedDate.getFullYear()
          );
        })
        .map((event) => {
          const eventDate = utcToZonedTime(
            parseISO(event.date),
            Intl.DateTimeFormat().resolvedOptions().timeZone
          );
          return eventDate.getDate();
        });

      setHighlightedDays(daysWithEvents);
    }
  }, [selectedDate]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  useEffect(() => {
    // Add a window resize event listener
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // windowWidth > 768 &&

  if (windowWidth < 1600) {
    return (
      <FlipCal
        selectedDate={selectedDate}
        handleMonthChange={handleMonthChange}
        handleYearChange={handleYearChange}
        dateAdapter={AdapterDateFns}
        daysInMonth={daysInMonth}
        handleDateChange={handleDateChange}
        highlightedDays={highlightedDays}
        selectedDateEvents={selectedDateEvents}
      />
    );
  }
  return (
    <div className="rounded-xl p-y-10 h-[100%] bg-grey text-center ">
      <div className="flex flex-col md:flex-row h-full ">
        <div className=" w-full    h-full">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <div className="p-2 h-full">
              <div className="flex items-center mb-2">
                <CalMonthYear
                  selectedDate={selectedDate}
                  handleMonthChange={handleMonthChange}
                  handleYearChange={handleYearChange}
                />
              </div>
              <CalDays
                selectedDate={selectedDate}
                daysInMonth={daysInMonth}
                handleDateChange={handleDateChange}
                highlightedDays={highlightedDays}
                handleDayClick={handleDayClick}
                onDayClick={handleDayClick}
              />
            </div>
          </LocalizationProvider>
        </div>
        <div className="w-full border-l shadow  md:w-4/5 md:min-h-[180px] flex items-center  overflow-y-auto ">
          <CalEvents selectedDateEvents={selectedDateEvents} />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
