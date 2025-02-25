import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
const VideoBackground = ({ movieId }) => {
  //fetch trailer video and updating the store with trailer video data
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  // const dispatch = useDispatch();
  // // const [trailerId, setTrailerId] = useState(null); // one way to store the id
  // const getMovieVideos = async () => {
  //   const data = await fetch(
  //     `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
  //     API_OPTIONS
  //   );

  //   const videos = await data.json(); // videos will be an array of multiple videos
  //   console.log("videos", videos);
  //   const filterTrailers = videos.results.filter(
  //     (video) => video.type === "Trailer"
  //   );
  //   const trailer = filterTrailers.length
  //     ? filterTrailers[0]
  //     : videos.results[0]; // if the trailer not exist ie filterTrailers.length =0  then take ist video of video.resutls otherwise gettting the first trailer

  //   console.log(trailer);
  //   dispatch(addTrailerVideo(trailer));
  //   // setTrailerId(trailer.key);
  // };

  // useEffect(() => {
  //   getMovieVideos();
  // }, []);
  useMovieTrailer(movieId);
  return (
    <div className="w-screen ">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
