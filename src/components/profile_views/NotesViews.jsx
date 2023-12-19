import React from "react";

const NotesViews = () => {
  return (
    <section className="w-full bg-darkGreen  h-[250px]  lg:h-[350px] 2xl:h-[400px] max-w-[1000px] mx-auto p-2 px-4 rounded-3xl mt-0 my-5 flex flex-col justify-evenly items-center border">
      <h1 className="bg-lightGreen p-2 px-4 mb-5 rounded-xl">
        characteristics/ notes
      </h1>
      <div className=" w-full border h-4/5 mb-3">
        list of notes, and characteristics of current dog
      </div>
    </section>
  );
};

export default NotesViews;
