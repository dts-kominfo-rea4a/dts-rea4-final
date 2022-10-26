import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useTmdbStore, {
  selectFetchMovieSearch,
  selectMovieSearch,
} from "../stores/tmdb";
import { Icon } from "@iconify/react";

function SearchBar() {
  const fetchSearchMovies = useTmdbStore(selectFetchMovieSearch);
  const searchMovies = useTmdbStore(selectMovieSearch);
  const [searchQuery, setSearchQuery] = useState("");

  const handleChangeSearch = async (event) => {
    setSearchQuery(event.target.value);
    if (searchQuery) {
      await fetchSearchMovies(event.target.value);
    }
  };

  const handleSubmitSearch = (event) => {
    event.preventDefault();
  };

  return (
    <div className="relative hidden sm:block">
      <form
        className="relative flex flex-wrap gap-2 text-xs"
        onSubmit={handleSubmitSearch}
      >
        <input
          type="search"
          placeholder="Type to search movie"
          className="pl-8 pr-5 py-2 rounded bg-[#dddddd] focus:bg-[#cccccc] placeholder-secondary-400/80 text-secondary-400 outline-none w-[100vw] max-w-[200px] focus:max-w-[300px] focus:outline-primary/70 outline-4"
          onChange={handleChangeSearch}
        />
        <Icon
          icon="akar-icons:search"
          className="absolute left-0 text-secondary-500 h-full w-max p-[6px] "
        />
      </form>
      <div className="absolute right-0 flex flex-col bg-secondary-500 rounded max-h-[70vh] overflow-auto">
        {searchQuery ? (
          searchMovies?.map((movie) => (
            <Link
              to={`/detail/movie/${movie?.id}`}
              key={movie.id}
              className="border-b-gray-600/50 border-b-2 py-2 px-4 w-screen max-w-[380px]"
            >
              {movie?.title}
            </Link>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
