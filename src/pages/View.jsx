import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../authentication/firebase";
import useMovieStore, {
  selectMovieById,
  selectFetchMovieById,
} from "../stores/movie";
import { Link } from "react-router-dom";

const ViewDetail = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [user, isLoading] = useAuthState(auth);
  const movie = useMovieStore(selectMovieById);
  const fetchMovieById = useMovieStore(selectFetchMovieById);
  const baseUrlImage = "https://image.tmdb.org/t/p/original";

  useEffect(
    () => {
      fetchMovieById(params.id, params.type);
      // Nah di sini mungkin kita bisa modifikasi / menggunakan
      // isLoading sebagai logic untuk menampilkan loading screen
      // (pada pembelajaran ini loading screen tidak dibuat)
      if (isLoading) {
        // Tampilkan loading screen (bila ada)
        return;
      }

      // Lalu apabila usernya ditemukan (ada / tidak null)
      // Maka akan kita navigasikan ke halaman HomePage
      if (!user) {
        navigate("/login");
      }
    },
    // Sekarang dependency kita tergantung pada user dan isLoading dari useAuthState
    [user, isLoading, navigate, fetchMovieById, params]
  );
  return (
    <>
      {/* <h1 className="text-white">Ini Detail Page {movie.original_title}</h1>
      <img
        src={`${baseUrlImage}${movie.poster_path}`}
        className="max-w-full max-h-full"
        alt=""
      /> */}
      <div className='w-full h-screen text-white'>
        <div className='w-full h-full'>
          <div className='absolute w-full h-screen bg-gradient-to-r from-black'></div>
          <img
            className='w-full h-full object-cover'
            src={`${baseUrlImage}${movie.poster_path}`}
            alt=""
          />
          <div className='absolute w-full top-[20%] p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl font-bold'>{movie.original_title}</h1>
            <div className='my-4'>
              <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>
                Play
              </button>
              <button className='border text-white border-gray-300 py-2 px-5 ml-4'>
                Watch Later
              </button>
            </div>
            <p className='text-gray-400 text-sm'>
              Released: {movie?.release_date}
            </p>
            <p className='w-full py-2 md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
              {movie?.overview}
            </p>
            <Link to="/home">
              <button className='border bg-gray-300 text-black border-gray-300 py-2 px-7'>
                  Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default ViewDetail;
