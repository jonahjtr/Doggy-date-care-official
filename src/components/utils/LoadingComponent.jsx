import React from "react";
import PetsIcon from "@mui/icons-material/Pets";
import RefreshIcon from "@mui/icons-material/Refresh";
const LoadingComponent = () => {
  return (
    <div className="	flex justify-center items-center">
      <p className="pr-5">Loading...</p>
      <RefreshIcon className=" animate-spin" />
    </div>
  );
};

export default LoadingComponent;
