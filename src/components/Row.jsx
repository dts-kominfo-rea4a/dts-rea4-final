import axios from 'axios';
import React, { useEffect, useState,} from 'react'
import Movie from './Movie';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';

export const Row = ({movie, fetch, rID}) => {
  const [movies, setMovies] = useState([]);

  useEffect(
    () => {
      const fetchData = async () => {
        try {
          const response = await axios.get(fetch);
          setMovies(response.data.results);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
  }, [fetch]);

  const slideLeft = () => {
    var slider = document.getElementById('slider' + rID);
    slider.scrollLeft =slider.scrollLeft - 500;
  };

  
  const slideRight = () => {
    var slider = document.getElementById('slider' + rID);
    slider.scrollLeft =slider.scrollLeft + 500;
  };
  

  return (
    <div id={rID}>
      <div className='flex ml-2 py-5 mt-10'>
        <div className='border border-l-2 rounded-full border-red-600 h-9'></div>
        <div className='pl-2'>
          <h2 className='text-white text-3xl font-semibold'>
            {movie}
          </h2>
        </div>
      </div>
      <div 
      className='relative flex items-center group' >
        <MdChevronLeft
          onClick={slideLeft}
          size={40} 
          className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'/>
        <div 
          id={'slider' + rID} 
          className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight 
          onClick={slideRight}
          size={40} 
          className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' 
        />

      </div>
    </div>
  );
};

export default Row;
