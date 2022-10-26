import React, { useEffect, useState } from "react";
import MovieCard from "../components/Movie/MovieCard";
import tmdb from '../config/tmdb';
import '../styles/MovieList.css';
import {useParams} from 'react-router-dom';
import NavbarUser from "../components/NavbarUser";

const MoviesPage = () => {
  let params = useParams();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const category = params.category;

  const fetchData = async (pageNum) => {
    const {data} = await tmdb.get( `movie/${category}` , { params : { page: pageNum, language: 'en-US' }});
    console.log(movies);
    setMovies((prevstate) => [...prevstate, ...data.results]);
    // console.log(data.results);
  };

  useEffect(() => {
    console.log(page);
    
    console.log(page);
    fetchData(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  console.log(movies)
  console.log('render');
  const loadMore = () => {
    setPage((prevstate) => prevstate + 1);
    console.log('load');
  };

  return (
    <>
    <NavbarUser />
    <div>
      <div className="mx-auto py-10 px-6 max-w-[90%]">
        <div className="grid grid-cols-2 gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 xl:gap-x-8 mt-12">
          {movies.map((item, index) => (
           <MovieCard item={item} key={index} type='movie'/>
          ))}
        </div>
        <div className="flex items-center justify-center mt-10">
        <button className="bg-cyan-600 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded " onClick={loadMore} disabled={page>15 ? true: false}>
          Load More
        </button>
                  
        </div>
      </div>
    </div>
    </>
  );
};

export default MoviesPage;
