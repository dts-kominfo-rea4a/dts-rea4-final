import React from 'react'
import { useEffect,useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import useTmdbStore, {
    selectTmbdb,
    selectError,
    selectFetchData,
    selectIsLoading,
} from '../../stores/tmdb';
import {Paper, Button, Grid, Card, Box, CardContent, Typography, CardMedia} from "@mui/material";

function HomeCarrousel() {
    const tmdb = useTmdbStore();
    // const fetchData = useTmdbStore(selectFetchData);
    // const isLoading = useTmdbStore(selectIsLoading);
    const [movies, setMovies] = useState([]);
    useEffect( () => {
        // const fetchData = async () => {
        //     try {
        //         await tmdb.fetchData("movie/upcoming","en-US","1");
        //         setMovies(tmdb.tmdb.results);
        //     } catch {
        //         console.log(tmdb.error())
        //     }
        // }
        tmdb.fetchData();
        
        console.log(tmdb.tmdb.results);
        console.log(tmdb.isLoading);
    },[]);
    useEffect( () => {
        // const fetchData = async () => {
        //     try {
        //         await tmdb.fetchData("movie/upcoming","en-US","1");
        //         setMovies(tmdb.tmdb.results);
        //     } catch {
        //         console.log(tmdb.error())
        //     }
        // }
        setMovies(tmdb.tmdb.results);
        console.log('setmovie')
    },[!tmdb.isLoading]);
    // console.log(movies);
   
        console.log('render');
        console.log(movies);
        return (
            !movies ?  (
                <div>
                  <p className="font-semibold">Sedang menunggu data</p>
                </div>
              ) : (
            <Carousel
                indicators="true"
                navButtonsAlwaysVisible='true'
                duration='1000'
                >
            {
                 movies.map( (item) => <Item2 key={item.id} item={item} /> ) 
            }
            </Carousel>)
        )
    
    
}

function Item2(props)
{
    return (
        // <Paper>
        //         <h2>{props.item.original_title}</h2>
        //         <p>{props.item.overview}</p>

        //         <Button className="CheckButton">
        //             Check it out!
        //         </Button>
                
            
        // </Paper>
        <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto', width:'50%' }}>
          <Typography component="div" variant="h5">
          {props.item.original_title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          {props.item.overview}
          </Typography>
        </CardContent>
        
      </Box>
      <CardMedia
        component="img"
        sx={{ width: '50%' }}
        image={"https://image.tmdb.org/t/p/original/" + props.item.backdrop_path}
        alt="Live from space album cover"
      />
    </Card>
    )
}

export default HomeCarrousel