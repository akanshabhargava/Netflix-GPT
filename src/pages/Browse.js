import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";

import useNowPalyingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {
  // const dispatch = useDispatch();
  // const getNowPlayingMovies = async () => {
  //   const data = await fetch(
  //     "https://api.themoviedb.org/3/movie/now_playing?page=1",
  //     API_OPTIONS
  //   );
  //   const json = await data.json();
  //   console.log(json.results);

  //   dispatch(addNowPlayingMovies(json.results));
  // };
  // useEffect(() => {
  //   getNowPlayingMovies();
  // }, []);
  useNowPalyingMovies();
  usePopularMovies();
  return (
    <div className="">
      <Header />

      {/*
          MainContainer 
          - VideoBackground
          - VideoTitle
          SecondaryContainer
           - MovieList*n
            -Cards*n
           


        */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
