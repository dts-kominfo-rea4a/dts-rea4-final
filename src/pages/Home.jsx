import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logout } from "../authentication/firebase";
import useMovieStore, {
  // selectMovie,
  // selectFetchMovie,
  selectFetchMovieTrending,
  // selectMovieTrendingDay,
  selectMovieTrendingWeek,
  selectTvTrendingWeek,
} from "../stores/movie";

const Home = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  // const movie = useMovieStore(selectMovie);
  // const movieTrendingDay = useMovieStore(selectMovieTrendingDay);
  const movieTrendingWeek = useMovieStore(selectMovieTrendingWeek);
  const TvTrendingWeek = useMovieStore(selectTvTrendingWeek);
  // const fetchMovie = useMovieStore(selectFetchMovie);
  const fetchMovieTrending = useMovieStore(selectFetchMovieTrending);

  const baseUrlImage = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    // fetchMovie();
    fetchMovieTrending("movie", "week");
    fetchMovieTrending("tv", "week");
  }, []);

  // Fungsi ini akan menjadi async await
  // Karena keluarDariApps bersifat async, dan kita harus menunggu
  // keluarDariAppsSelesai, baru boleh navigate
  const buttonLogoutOnClickHandler = async () => {
    // Kita akan memanggil fungsi keluarDariApps di sini
    await logout();
    navigate("/login");
  };

  return (
    <>
      <div className="p-4 bg-slate-900 w-full">
        <div className="text-slate-700 pl-3 text-semibold font-sans flex flex-wrap justify-between">
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
        </div>
        {/* start content  */}
        <div className="w-full max-w-full rounded-md  mt-2 mx-auto">
          <div className="text-xl text-slate-700 font-bold font-sans text-center p-3">
            <p
              className={
                !isLoggedIn
                  ? "text-md font-thin text-red-600"
                  : "text-md font-thin text-teal-600"
              }
            >
              {!isLoggedIn
                ? "user harus login dulu nih !!"
                : "user sudah login yah .. "}
            </p>
          </div>
          <div className="flex justify-between align-middle">
            <div>
              <h3 className="text-slate-50 text-2xl font-bold">
                Trending This Week
              </h3>
            </div>
            <div>
              <h6 className="text-slate-100 font-bold">Movies >></h6>
            </div>
          </div>
          <div className="flex flex-nowrap gap-2 justify-start mb-10 overflow-x-auto">
            {movieTrendingWeek.map((data) => (
              <div
                className="shadow-xl mt-2 mb-0 h-56 lg:w-44 md:w-44 sm:w-44 flex-none relative group"
                key={data.id}
              >
                <Link to={`view/${data.id}`} className="bg-blue-400">
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
          <div className="flex justify-between align-middle">
            <div>
              <h3 className="text-slate-50 text-2xl font-bold mb-2">
                Trending This Week
              </h3>
            </div>
            <div>
              <h6 className="text-slate-100 font-bold"> TV Series >></h6>
            </div>
          </div>
          <div className="flex flex-nowrap gap-2 justify-start mb-10 overflow-x-auto">
            {TvTrendingWeek.map((data) => (
              <div
                key={data.id}
                className="shadow-xl mt-2 mb-0 h-56 lg:w-44 md:w-44 sm:w-44 rounded-md flex-none relative group"
              >
                <Link to={`view/${data.id}`} className="bg-blue-400">
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
        </div>
      </div>
    </>
  );
};

export default Home;
