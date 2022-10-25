import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import requests from '../apis/imdb';

const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(
    () => {
      const fetchData = async () => {
        try {
          const response = await axios.get(requests.reqPopularMovies);
          setMovies(response.data.results);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
  }, []);


  const truncateOverview = (overview, n) => {
    if (overview?.length > n) {
      return overview.slice(0, n) + '...';
    } else {
      return overview;
    }
  };

  return (
    <div className='w-full h-[950px] text-white '>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[950px] bg-gradient-to-r from-black'></div>
        <img 
          loading='lazy' 
          className='w-full h-full object-cover' 
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} 
          alt={movie?.title} 
        />
        <div className='absolute w-full top-[40%] p-4 md:p-8'> 
          <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
          <div className='my-4'>
            <Link to={`/movie/${movie?.id}`}>
              <button className='border bg-red-500 border-red-500 text-white text-sm py-2 px-5'>Detail..</button>
            </Link>
          </div>
            <p className='text-sm text-gray-400 mt-2 py-2'>Released: {movie?.release_date} </p>
            <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]'>{movie?.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default Main