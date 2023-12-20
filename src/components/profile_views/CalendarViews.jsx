import React from "react";
import ViewHeader from "./components/ViewHeader";
import Calendar from "../modals/Calendar";

const CalendarViews = () => {
  return (
    <section className="w-full bg-darkGreen  h-[250px]  lg:h-[350px] 2xl:h-[400px] max-w-[1000px] mx-auto p-2 px-4 rounded-3xl mt-0 my-5 flex flex-col justify-evenly items-center border">
      <ViewHeader title={"Calendar"} />
      <div className=" w-full border h-4/5 mb-3">
        <Calendar />
      </div>
    </section>
  );
};

export default CalendarViews;
