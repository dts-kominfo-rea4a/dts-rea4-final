import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../authentication/firebase";
import useMovieStore, {
  selectMovieById,
  selectFetchMovieById,
} from "../stores/movie";
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
      <h1 className="text-white">Ini Detail Page {movie.original_title}</h1>
      <img
        src={`${baseUrlImage}${movie.poster_path}`}
        className="max-w-full max-h-full"
        alt=""
      />
    </>
  );
};
export default ViewDetail;
