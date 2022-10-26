import React, { useEffect, useState } from "react";
import MovieCard from "../components/Movie/MovieCard";
import tmdb from '../config/tmdb';
import '../styles/MovieList.css';
import {useParams} from 'react-router-dom';
import NavbarUser from "../components/NavbarUser";
import { Typography } from "@mui/material";


const MoviesPage = () => {
  let params = useParams();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [oldCategory,setOldCategory] = useState('');
  const category = params.category;

  let title = '';
  switch(category) {
    case 'popular':
      title = 'Movies Popular';break;
    case 'now_playing':
      title = 'Now Playing';break;
    case 'upcoming':
      title = 'Movies Upcoming';break;
    case 'top_rated':
      title = 'Movies Top Rated';break;
    default:
      title = 'Movies';break;
  }

  const fetchData = async (pageNum) => {
    const {data} = await tmdb.get( `movie/${category}` , { params : { page: pageNum, language: 'en-US' }});
    console.log(movies);
    if (category !== oldCategory){
      setMovies(data.results);
    } else {
      setMovies((prevstate) => [...prevstate, ...data.results]);
    }
    setOldCategory(category);
    // console.log(data.results);
  };

  useEffect(() => {
    console.log(page);
    
    console.log(page);
    fetchData(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page,category]);

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
      <Typography sx={{color:'white'}}>{title}</Typography>
        <div className="grid grid-cols-3 gap-y-10 gap-x-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 xl:gap-x-8 mt-12">
          {movies.map((item, index) => (
           <MovieCard item={item} key={index} type='movie' />
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
