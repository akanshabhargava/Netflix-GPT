import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";
const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  // const [trailerId, setTrailerId] = useState(null); // one way to store the id
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );

    const videos = await data.json(); // videos will be an array of multiple videos
    //console.log("videos", videos);
    const filterTrailers = videos.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterTrailers.length
      ? filterTrailers[0]
      : videos.results[0]; // if the trailer not exist ie filterTrailers.length =0  then take ist video of video.resutls otherwise gettting the first trailer

    //console.log(trailer);
    dispatch(addTrailerVideo(trailer));
    // setTrailerId(trailer.key);
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
