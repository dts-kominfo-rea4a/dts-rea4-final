import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Movie from '../components/Movie/Movie';
import Popular from '../components/Home/Popular';
import tmdb from '../config/tmdb';
import Loading from '../images/loading.gif';

function SeriePage() {
    let params = useParams();
    const [movie, setMovie] = useState();
    const idMovie = params.serieId;
    const myFetchData = async () => {
      const {data} = await tmdb.get( `tv/${idMovie}` , { params : { append_to_response:'videos'}});
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

export default SeriePage