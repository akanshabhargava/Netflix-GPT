import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies.nowPlayingMovies);
  // console.log("Main contqiner hi");
  //if (movies === null) return; // we have retunr this because initially store will be empty due to which below statement will cause error;
  if (!movies) return; // mostly convention followed in industr.in place of movies===null we can write movies===null
  const mainMovie = movies[0];
  //console.log(mainMovie);
  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
