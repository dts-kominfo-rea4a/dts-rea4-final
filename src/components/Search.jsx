import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import requests from '../apis/imdb';

function Search() {
  const [movie, setMovies] = useState();
  const [search, setSearch] = useState();

  const onChangeHandler = async (e) => {
    setSearch(e);
    if (e !== '') {
      const response = await axios.get(requests.reqSearch + `&query=${search}`);
      setMovies(response.data.results);
    }
  };

  console.log(movie);
  console.log(search);

  return (
    <>
    <div className='flex flex-col items-center w-3/4 h-full mr-5 ml-2'>
      <input type={'search'} 
        onChange={ e => onChangeHandler(e.target.value)} 
        value={search} 
        onBlur={() => {
          setTimeout(() => {
            setMovies([]);
            setSearch('');
          }, 500);
        }}
        className='bg-gradient-to-tr from-slate-700 bg-gray-800 text-white rounded max-md:h-auto w-full px-5 py-2 mr-1 ml-2 focus:outline-none' 
        placeholder='Search for a movie' />
        <ul className='absolute rounded-xl shadow-lg hover:shadow-xl rounded bg-gradient-to-tr from-slate-700 bg-gray-800 text-white max-h-[300px] w-9/12 mt-14 overflow-y-auto'>
          {movie?.map((movie) => (
            <Link to={`/movie/${movie.id}`}>
            <li className='px-4 py-2 text-white hover:bg-gray-500' key={movie.id}>{movie.title}</li>
            </Link>
          ))}
        </ul>
    </div>
    </>
  )
}

export default Search