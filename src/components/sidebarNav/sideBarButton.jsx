import React from "react";

const SideBarButton = ({ buttonName, icon, currentPage, pathName }) => {
  return (
    <div
      className={`bg-${
        currentPage === pathName ? "white" : "none"
      } ml-2 rounded-l-xl`}
    >
      <a
        href={pathName}
        className="relative flex flex-row items-center h-11 pr-6"
      >
        <span className="inline-flex  ml-4">{icon}</span>
        <span className="ml-2 text-sm tracking-wide truncate">
          {buttonName}
        </span>
      </a>
    </div>
  );
};

export default SideBarButton;
