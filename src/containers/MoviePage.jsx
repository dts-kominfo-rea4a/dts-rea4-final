import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Movie from '../components/Movie/Movie';
import Loading from '../images/loading.gif';
import Popular from '../components/Home/Popular';
import tmdb from '../config/tmdb';

function MoviePage() {
    let params = useParams();
    const [movie, setMovie] = useState();
    const idMovie = params.movieId;
    const myFetchData = async () => {
      const {data} = await tmdb.get( `movie/${idMovie}` , { params : { append_to_response:'videos'}});
      setMovie(data);
    }
    useEffect(
        () => {
          
          myFetchData();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [idMovie]
    )
  return (
    movie?  ( 
      <>
    <Movie item={movie}/> 
    <Popular/>
    </>) : ( <div style={{display:'flex', justifyContent:'center',alignItems:'center', height:'600px' }}><img src={Loading} width="80px" alt="Loading"/></div>)
    // <p>a</p>
  )
}

export default MoviePage