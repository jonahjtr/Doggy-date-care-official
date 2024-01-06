import React from "react";
import { PageNameAtom } from "../../jotai/statusStates";
import { useAtom } from "jotai";

const SideBarButton = ({ buttonName, icon }) => {
  const [currentPage, setCurrentPage] = useAtom(PageNameAtom);

  return (
    <div
      onClick={() => setCurrentPage(buttonName)}
      className={`bg-${
        currentPage === buttonName ? "white" : "none"
      } rounded-l-xl`}
    >
      <a href="#" className="relative flex flex-row items-center h-11 pr-6">
        <span className="inline-flex  ml-4">{icon}</span>
        <span className="ml-2 text-sm tracking-wide truncate">
          {buttonName}
        </span>
      </a>
    </div>
  );
};

export default SideBarButton;
