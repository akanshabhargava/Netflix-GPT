import React from "react";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="  px-24 pt-[20%] absolute text-white bg-gradiant-to-r from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-sm w-1/2">{overview}</p>
      <div className="">
        <button className="bg-white text-black p-3 px-10 rounded-lg hover:bg-opacity-80">
          {" "}
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white p-3 px-10 bg-opacity-50 rounded-lg mx-2 hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
