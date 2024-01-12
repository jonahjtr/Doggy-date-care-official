import React from "react";
import CreateModal from "./modals/CreateModal";
import FileUpload from "../../forms/FileUpload";
import LoadingComponent from "../../utils/LoadingComponent";

const NotesViewCard = ({ loading }) => {
  return (
    <section className="  bg-primary w-[90%] h-full mx-auto   p-2 rounded-2xl flex flex-col justify-evenly items-center  ">
      <div className="w-full h-1/5">
        <CreateModal
          url={`photos/`}
          title={"Notes"}
          component={<FileUpload />}
        />
      </div>

      <div className="w-full rounded-xl h-4/5 bg-white">
        <div className="w-full h-full   ">
          {loading ? (
            <LoadingComponent />
          ) : (
            <div>list of notes, and characteristics of current dog</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NotesViewCard;
