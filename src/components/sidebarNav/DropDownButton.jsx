import React from "react";

const SideBarButton = ({
  buttonName,
  icon,
  currentPage,
  pathName,
  onClick,
  extraPathName,
  isMenuOpen,
  allExtraPathNames,
}) => {
  const isOnSubPage = allExtraPathNames.includes(currentPage);
  return (
    <div
      className={` bg-${
        currentPage === pathName || isOnSubPage || currentPage === extraPathName
          ? "white"
          : "none"
      } ${
        isMenuOpen || isOnSubPage ? "rounded-tl-xl" : "rounded-l-xl"
      } ml-2  flex flex-row items-center h-11 `}
    >
      <a href={pathName} className="  ">
        <span className="  ml-4">{icon}</span>
        <span className="ml-2 text-sm tracking-wide truncate">
          {buttonName}
        </span>
      </a>
      <p
        onClick={onClick}
        className={` mx-auto ${currentPage === pathName ? "block" : "hidden"} `}
      >
        X
      </p>
    </div>
  );
};

export default SideBarButton;
