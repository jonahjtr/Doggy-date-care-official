import React, { useState } from "react";
import FileUpload from "../forms/FileUpload";
import ViewHeader from "../profile_views/components/ViewHeader";

const FileUploadModal = (data) => {
  const [isCardVisible, setIsCardVisible] = useState(false);

  const toggleCard = () => {
    setIsCardVisible(!isCardVisible);
  };

  return (
    <div className="relative w-full grid grid-cols-[25%_50%_25%] ">
      {/* Blurry background */}
      {isCardVisible && (
        <div className="fixed top-0 left-0 w-screen h-screen backdrop-filter backdrop-brightness-50 backdrop-blur-xl z-10"></div>
      )}
      <div className="  "> </div>
      <div className="flex justify-center items-center">
        <ViewHeader title={data.title} />
      </div>
      <div className="  flex justify-end pr-4 pb-4 ">
        <button onClick={toggleCard} className="text-3xl">
          +
        </button>
      </div>

      {/* Popout card */}
      {isCardVisible && (
        <div className="fixed flex-col items-end top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-darkGreen p-4 rounded-lg shadow-md z-20">
          <FileUpload url={data.url} />
          <button
            className="bg-darkBeige  text-white p-2 mt-2 rounded-lg hover:bg-red-600"
            onClick={toggleCard}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default FileUploadModal;
