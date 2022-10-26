import React, { useEffect, useState } from "react";
import MovieCard from "../components/Movie/MovieCard";
import tmdb from '../config/tmdb';
import {useParams} from 'react-router-dom';
import NavbarUser from "../components/NavbarUser";
import { Typography } from "@mui/material";

const MyListPage = () => {
  let params = useParams();
  const [movies, setMovies] = useState([]);
  const listId = params.listId;

  

  useEffect(() => {
    const fetchData = async () => {
    const {data} = await tmdb.get( `list/${listId}` , { params : {  language: 'en-US' }});
    console.log(data);
    setMovies(data.items);
    
    // console.log(data.results);
  };
    fetchData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(movies)

  

  return (
    <>
    <NavbarUser />
    
    <div>
        
      <div className="mx-auto py-10 px-6 max-w-[90%]">
        <Typography sx={{color:'white'}}>Searh Result for <b>My List Movie </b></Typography>
        <div className="grid grid-cols-2 gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 xl:gap-x-8 mt-12">
       
          {movies.map(item => {
            return (((item.media_type === 'movie') || (item.media_type === 'tv')) && item.poster_path !== null ) &&
            <MovieCard item={item} key={item.id} type={item.media_type} /> 
            })
          }
        </div>
        <div className="flex items-center justify-center mt-10">
        
                  
        </div>
      </div>
      
    </div>
    </>
  );
};

export default MyListPage;
