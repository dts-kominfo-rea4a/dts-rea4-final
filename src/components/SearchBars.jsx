// import React from "react";
// import { useEffect } from "react";
// import { Link } from "react-router-dom";
// import useTmdbStore, { selectFetchMovieSearch, selectMovieSearch } from "../stores/tmdb";

// function SearchBar() {
//   const fetchMoviesFromQuery = useTmdbStore(selectFetchMovieSearch);
//   const movies = useTmdbStore(selectMovieSearch);

//   // const [searchQuery, setSearchQuery] = useState("");

//   // const handleSearchChange = (event) => {
//   //   setSearchQuery(event.target.value);
//   // };
//   // const handleSearchSubmit = async (event) => {
//   //   event.preventDefault();
//   //   await fetchMoviesFromQuery(searchQuery);
//   //   console.log(movies);
//   }


//   const handleSearchChange = async (event) => {
//     await fetchMoviesFromQuery(event.target.value);
//     console.log(movies)
//   }

//   return (
//     <div className="relative">
//       <form className="hidden sm:flex flex-wrap gap-2 text-xs">
//         <input
//           type="search"
//           placeholder="Type to search movie"
//           className="px-5 py-2 rounded bg-[#dddddd] focus:bg-[#cccccc] placeholder-secondary-400/80 text-secondary-400 outline-none w-[100vw] max-w-[200px] focus:max-w-[300px] focus:outline-primary/70 outline-4"
//           onChange={handleSearchChange}
//         />
//       </form>
//       <div className="absolute bg-red-500 w-screen max-w-[600px] right-0 p-2 flex flex-col">
//         {movies.map((movie) => {
//           <Link to={`/detail/movie/${movie.id}`} key={movie.id}>
//             {movie.title}
//           </Link>
//         })}
//       </div>
//     </div>
//   );
// }

// // export default SearchBar;
