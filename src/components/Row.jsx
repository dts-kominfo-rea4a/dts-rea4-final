import React from 'react'
import useMovies, {selectMovies} from '../apis/imdb';


export const Row = ({title, fetchURL}) => {
  const movies = useMovies(selectMovies);
  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative flex items-center'>

      </div>
    </>
  )
}

export default Row;
