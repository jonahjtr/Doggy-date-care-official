import React from "react";
import { Datepicker } from "flowbite-react";
const DatePicker = ({ handleDateChange }) => {
  return <Datepicker id="date" onSelectedDateChanged={handleDateChange} />;
};
export default DatePicker;
