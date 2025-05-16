import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ title, posterPath }) => {
  return (
    <div className="w-36 pr-4 h-42  ">
      <img src={`${IMG_CDN_URL}${posterPath}`} alt={title} />
    </div>
  );
};

export default MovieCard;
