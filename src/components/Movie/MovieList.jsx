import React, { useEffect, useState } from "react";
import  MovieCard from "../components/Movie/MovieCard";
import InfiniteScroll from "react-infinite-scroller";
import tmdb from '../../config/tmdb';

const MovieList = (item) => {
 
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async (pageNum) => {
    const {data} = await tmdb.get( `movie/popular` , { params : { page: {pageNum}, language: 'en-US' }});
    // console.log(data);
    setMovies((prevstate) => [...prevstate, ...data.results]);
    // console.log(data.results);
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  console.log(movies)

  const loadMore = () => {
    setPage((prevstate) => prevstate + 1);
  };

  return (
    <div>
        <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={true || false}
        loader={<div className="loader" key={0}>Loading ...</div>}
        useWindow={false}
    >
      <div className="mx-auto py-10 px-6 max-w-[90%]">
        <div className="grid grid-cols-2 gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 xl:gap-x-8 mt-12">
          {movies.map((item) => (
           <MovieCard item={item} key={item.id}/>
          ))}
        </div>
        <div className="flex items-center justify-center mt-10">
        <button className="bg-cyan-600 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded " onClick={loadMore} disabled={page>15 ? true: false}>
          Load More
        </button>
                  
        </div>
      </div>
      </InfiniteScroll>
    </div>
  );
};

export default MovieList;
