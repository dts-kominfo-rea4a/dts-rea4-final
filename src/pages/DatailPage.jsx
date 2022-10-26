import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useTmdbStore, {
  selectFetchMovieById,
  selectMovieById,
} from "../stores/tmdb";

function DatailPage() {
  const params = useParams();
  const fetchMovie = useTmdbStore(selectFetchMovieById);
  const movie = useTmdbStore(selectMovieById);
  const navigate = useNavigate();

  useState(async () => {
    try {
      await fetchMovie(params.type, params.id);
    } catch (error) {
      navigate("/not-found");
    }
  }, [fetchMovie]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="grow">
        <div key={movie.id} className="relative min-h-screen w-full">
          <img
            src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
            alt={movie.title ? movie.title : movie.name}
            className="absolute h-full w-full object-cover object-center"
          />
          <div className="absolute h-full w-full bg-gradient-to-t from-[#040C16]"></div>
          <div className="absolute h-full w-full bg-gradient-to-r from-secondary-100/10"></div>
          <div className="absolute left-0 h-full max-w-[640px] mx-12 flex flex-col justify-start items-start pt-10 gap-4">
            <h2 className="text-5xl font-bold">
              {movie.title ? movie.title : movie.name}
            </h2>
            <div className="flex gap-2">
              {movie?.genres?.map((genre) => (
                <div
                  className="bg-secondary-600/70 rounded px-8 py-3 text-sm"
                  key={genre.name}
                >
                  {genre.name}
                </div>
              ))}
            </div>
            <p className="text-sm font-light">{movie.overview}</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default DatailPage;
