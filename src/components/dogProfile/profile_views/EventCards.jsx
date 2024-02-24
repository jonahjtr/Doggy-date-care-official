import React from "react";
import CreateModal from "./modals/CreateModal";
import FileUpload from "../../forms/FileUpload";
import EventsCard from "../../dashboard/EventsCard";
import LoadingComponent from "../../utils/LoadingComponent";

const EventCard = ({ datesList, loading }) => {
  console.log("events", datesList);
  const isDateListValid = Array.isArray(datesList) && datesList.length >= 0;
  console.log("isFileListValid", isDateListValid);
  return (
    <section className="  bg-primary w-[90%] h-full mx-auto   p-2 rounded-2xl flex flex-col justify-evenly items-center  ">
      <div className="w-full h-1/5">
        <CreateModal
          url={`photos/`}
          title={"Upcoming Events"}
          component={<FileUpload />}
        />
      </div>
      <div className="w-full rounded-xl h-4/5 bg-white">
        <div className="w-full h-full  ">
          {loading ? (
            <LoadingComponent />
          ) : (
            <div>
              {!isDateListValid ? (
                <div>no evenjhgjhgjhgfjhgjhgjhghjgts</div>
              ) : (
                datesList.map((event, index) => {
                  {
                    console.log(event);
                  }
                  return (
                    <div className="mt-4 px-1">
                      <EventsCard event={event} key={index} />
                    </div>
                  );
                })
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EventCard;
