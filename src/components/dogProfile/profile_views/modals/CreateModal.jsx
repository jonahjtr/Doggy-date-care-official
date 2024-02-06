import React, { useState } from "react";
import ViewHeader from "./ViewHeader";

const CreateModal = (props) => {
  const [isCardVisible, setIsCardVisible] = useState(false);

  const toggleCard = () => {
    setIsCardVisible(!isCardVisible);
  };

  return (
    <div className="w-full h-full grid grid-cols-[25%_50%_25%]  ">
      {isCardVisible && (
        <div className="fixed top-0 left-0 w-screen h-screen backdrop-filter backdrop-brightness-50 backdrop-blur-xl z-10"></div>
      )}
      <div className=" "> </div>
      <div className="flex justify-center items-center">
        <ViewHeader title={props.title} />
      </div>
      <div className="  flex items-center justify-end ">
        <button onClick={toggleCard} className="h-full ">
          <p className="text-3xl font-semibold pr-5"> +</p>
        </button>
      </div>

      {/* Popout card */}
      {isCardVisible && (
        <div className="fixed flex-col w-max min-w-[50%] items-end top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-darkGreen p-4 rounded-lg shadow-md z-20">
          {React.cloneElement(props.component, {
            url: props.url,
            title: props.title,
          })}

          <button
            className="bg-darkBeige  text-white p-2 mt-2 rounded-lg hover:bg-orange"
            onClick={toggleCard}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default CreateModal;
