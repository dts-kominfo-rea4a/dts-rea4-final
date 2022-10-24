import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import useTmdbStore from '../stores/tmdb';
import axios from "axios";
import Movie from '../components/Movie/Movie';
import Loading from '../images/loading.gif';

function Moviepage() {
    let params = useParams();
    const tmdb = useTmdbStore();
    const [movie, setMovie] = useState();
    const idMovie = params.movieId;
    const myFetchData = async () => {
      const {data} = await axios.get( tmdb.url + 'movie/' + idMovie + '?api_key=' + tmdb.key + '&append_to_response=videos');
      setMovie(data);
    }
    useEffect(
        () => {
          
          myFetchData();
            // eslint-disable-next-line
        }, [idMovie]
    )
  return (
    movie?  ( 
      <>
    <Movie item={movie}/> 
    {/* <Popular/> */}
    </>) : ( <div style={{display:'flex', justifyContent:'center',alignItems:'center', height:'600px' }}><img src={Loading} width="80px" alt="Loading"/></div>)
    // <p>a</p>
  )
}

export default Moviepage