import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logout } from "../authentication/firebase";
import useMovieStore, {
  selectMovie,
  selectFetchMovie,
  selectFetchMovieTrending,
  selectMovieTrendingWeek,
  selectTvTrendingWeek,
  setKeywordMovie,
  selectKeywordMovie,
  setFilterMovie,
  selectKeywordTv,
  setKeywordTv,
  setFilterTv,
} from "../stores/movie";
import Navbar from "../components/Navbar";

const Home = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const movie = useMovieStore(selectMovie);
  const movieTrendingWeek = useMovieStore(selectMovieTrendingWeek);
  const TvTrendingWeek = useMovieStore(selectTvTrendingWeek);
  const fetchMovie = useMovieStore(selectFetchMovie);
  const fetchMovieTrending = useMovieStore(selectFetchMovieTrending);
  const keywordMovie = useMovieStore(selectKeywordMovie);
  const keywordMovieSet = useMovieStore(setKeywordMovie);
  const filterMovie = useMovieStore(setFilterMovie);
  const keywordTv = useMovieStore(selectKeywordTv);
  const keywordTvSet = useMovieStore(setKeywordTv);
  const filterTv = useMovieStore(setFilterTv);

  const baseUrlImage = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    fetchMovie();
    fetchMovieTrending("movie", "week");
    fetchMovieTrending("tv", "week");
  }, [fetchMovieTrending, fetchMovie]);

  // Fungsi ini akan menjadi async await
  // Karena keluarDariApps bersifat async, dan kita harus menunggu
  // keluarDariAppsSelesai, baru boleh navigate
  const buttonLogoutOnClickHandler = async () => {
    // Kita akan memanggil fungsi keluarDariApps di sini
    await logout();
    navigate("/login");
  };

  const textFieldkeywordMovieOnChangeHandler = (event) => {
    keywordMovieSet(event.target.value);
    if (event.target.value !== "") {
      filterMovie(event.target.value, movieTrendingWeek);
    } else {
      fetchMovieTrending("movie", "week");
    }
  };

  const textFieldkeywordTvOnChangeHandler = (event) => {
    keywordTvSet(event.target.value);
    if (event.target.value !== "") {
      filterTv(event.target.value, TvTrendingWeek);
    } else {
      fetchMovieTrending("tv", "week");
    }
  };

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} logout={buttonLogoutOnClickHandler} />
      <div className="w-full h-[500px] text-white">
        <div className="w-full h-full">
          <div className="absolute w-full h-[500px] bg-gradient-to-r from-black"></div>
          <img
            className="w-full h-full object-cover"
            src={`${baseUrlImage}/${movie?.backdrop_path}`}
            alt={movie?.title}
          />
          <div className="absolute w-full top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
            <div className="my-4">
              <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
                Play
              </button>
              <button className="border text-white border-gray-300 py-2 px-5 ml-4">
                Watch Later
              </button>
            </div>
            <p className="text-gray-400 text-sm">
              Released: {movie?.release_date}
            </p>
            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
              {truncateString(movie?.overview, 150)}
            </p>
          </div>
        </div>
      </div>

      {/* <div className="text-slate-700 pl-3 text-semibold font-sans flex flex-wrap justify-between">
          <div></div>
          {!isLoggedIn ? (
            <Link
              to="/login"
              className="bg-blue-400 p-2 rounded-md text-slate-100 font-semibold hover:bg-blue-600"
            >
              Login / Register
            </Link>
          ) : (
            <button
              className="bg-teal-400 rounded-md p-2 shadow-lg text-slate-50 font-sans font-semibold hover:bg-teal-700"
              onClick={buttonLogoutOnClickHandler}
            >
              logout
            </button>
          )}
        </div> */}

      <div className="text-xl text-slate-700 font-bold font-sans text-center p-3">
        {/* <p
              className={
                !isLoggedIn
                  ? "text-md font-thin text-red-600"
                  : "text-md font-thin text-teal-600"
              }
            >
              {!isLoggedIn
                ? "user harus login dulu nih !!"
                : "user sudah login yah .. "}
            </p> */}
      </div>
      <div className="flex justify-between align-middle px-2">
        <div>
          <h3 className="text-slate-50 text-2xl font-bold">
            Trending This Week
          </h3>
        </div>
        <div>
          <h6 className="text-slate-100 font-bold">Movies >></h6>
        </div>
      </div>
      <div className="px-2">
        <input
          type="text"
          value={keywordMovie}
          onChange={textFieldkeywordMovieOnChangeHandler}
          className="bg-slate-50 rounded-md w-full max-w-md"
          placeholder="type keyword in here .."
        />
      </div>
      <div className="flex flex-nowrap gap-2 justify-start mb-10 overflow-x-auto scrollbar-hide px-2">
        {movieTrendingWeek.map((data) => (
          <div
            className="shadow-xl mt-2 mb-0 h-56 lg:w-44 md:w-44 sm:w-44 flex-none relative group"
            key={data.id}
          >
            <Link to={`view/movie/${data.id}`} className="bg-blue-400">
              <img
                alt=""
                className="w-44 hover:opacity-20 rounded-sm max-h-full"
                src={`${baseUrlImage}${data.poster_path}`}
              />
              <div className="opacity-0 group-hover:opacity-100 duration-300 absolute left-0 bottom-0 right-0 z-10 flex justify-center items-end text-sm bg-blue-400 text-slate-100 font-semibold">
                View
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-between align-middle px-2">
        <div>
          <h3 className="text-slate-50 text-2xl font-bold mb-2 ">
            Trending This Week
          </h3>
        </div>
        <div>
          <h6 className="text-slate-100 font-bold"> TV Series >></h6>
        </div>
      </div>
      <div className="px-2">
        <input
          type="text"
          value={keywordTv}
          onChange={textFieldkeywordTvOnChangeHandler}
          className="bg-slate-50 rounded-md w-full max-w-md"
          placeholder="type keyword in here .."
        />
      </div>
      <div className="flex flex-nowrap gap-2 justify-start mb-10 overflow-x-auto scrollbar-hide px-2">
        {TvTrendingWeek.map((data) => (
          <div
            key={data.id}
            className="shadow-xl mt-2 mb-0 h-56 lg:w-44 md:w-44 sm:w-44 rounded-md flex-none relative group"
          >
            <Link to={`view/tv/${data.id}`} className="bg-blue-400">
              <img
                alt=""
                className="w-44 hover:opacity-20 rounded-sm max-h-full"
                src={`${baseUrlImage}${data.poster_path}`}
              />
              <div className="opacity-0 group-hover:opacity-100 duration-300 absolute left-0 bottom-0 right-0 z-10 flex justify-center items-end text-sm bg-blue-400 text-slate-100 font-semibold">
                View
              </div>
            </Link>
          </div>
        ))}
      </div>
      {/* <div className="w-full max-w-full bg-lime-400">d</div> */}
    </>
  );
};

export default Home;
