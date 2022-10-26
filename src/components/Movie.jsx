import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Movie = ({item, rID}) => {
  
  const [like] = useState(false);

  return (
    <>
      <div key={rID} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 '>
        <div>
          <img
          className='w-full h-full block rounded' 
          src={`https://image.tmdb.org/t/p/w300${item?.poster_path}`} 
          alt={item?.title} />
        </div>
        <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
          <div>
            
          </div>
          <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center w-full h-full text-center'>
            {item?.title}
          </p>
          <div className='flex absolute top-4 right-4 text-gray-300 px-4 py-2 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className=" mr-1 w-7 h-7 text-yellow-500"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <p className=''>{item?.vote_average}</p>
          </div>
          <div className='absolute bottom-4 right-4 text-gray-300 px-4 py-2 items-center'>
            <Link to={`/movie/${item?.id}`} id={item?.id}>
              More Details
            </Link>
          </div>
          <p>
            {like ? <FaHeart className='absolute top-4 left-4 text-gray-300'/> : <FaRegHeart className='absolute top-4 left-4 text-gray-300'/>}
          </p>
        </div>
      </div>
    </>
  )
}

export default Movie