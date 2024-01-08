import React from "react";

function Banner() {
  return (
    <div className="relative w-full h-64">
      {/* Banner Background */}
      <div className="w-full h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>

      {/* Profile Picture */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white rounded-full w-16 h-16">
        <img
          src="your-profile-picture-url.jpg"
          alt="Profile Picture"
          className="rounded-full w-full h-full"
        />
      </div>
    </div>
  );
}

export default Banner;
