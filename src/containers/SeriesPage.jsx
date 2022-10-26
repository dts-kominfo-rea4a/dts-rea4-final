import React, { useEffect, useState } from "react";
import MovieCard from "../components/Movie/MovieCard";
import tmdb from '../config/tmdb';
import {useParams} from 'react-router-dom';
import NavbarUser from "../components/NavbarUser";
import { Typography } from "@mui/material";

const SeriesPage = () => {
  let params = useParams();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const category = params.category;


  let title = '';
  switch(category) {
    case 'popular':
      title = 'Series Popular';break;
    case 'on_the_air':
      title = 'Series On The Air';break;
    case 'airing_today':
      title = 'Series Airing Today';break;
    case 'top_rated':
      title = 'Series Top Rated';break;
    default:
      title = 'Series';break;
  }


  useEffect(() => {
    // console.log(data);
    const fetchData = async (pageNum) => {
      const {data} = await tmdb.get( `tv/${category}` , { params : { page: pageNum, language: 'en-US' }});
      setMovies((prevstate) => [...prevstate, ...data.results]);
    };
    fetchData(page);
  }, [page,category]);

  console.log(movies)

  const loadMore = () => {
    setPage((prevstate) => prevstate + 1);
  };

  return (
    <>
    <NavbarUser />
    
    <div>
      <div className="mx-auto py-10 px-6 max-w-[90%]">
        <Typography sx={{color:'white'}}>{title}</Typography>
        <div className="grid grid-cols-2 gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 xl:gap-x-8 mt-12">
          {movies.map((item) => (
           <MovieCard item={item} key={item.id} type='serie'/>
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

export default SeriesPage;
