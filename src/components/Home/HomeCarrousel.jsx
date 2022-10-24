import React from 'react'
import { useEffect,useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import useTmdbStore from '../../stores/tmdb';
import {Card, Box, CardContent, Typography, CardMedia} from "@mui/material";
import axios from 'axios';
import Loading from '../../images/loading.gif'

function HomeCarrousel() {
    const tmdb = useTmdbStore();
    
    const [movies, setMovies] = useState();
    const myFetchData = async () => {
      const {data} = await axios.get( tmdb.url + 'trending/all/day?api_key=' + tmdb.key + '&languange=en-US&page=1');
      setMovies(data);
    }
    useEffect(
        () => {
            myFetchData();
            // eslint-disable-next-line
        }, []
    )
   
    
        return (
            movies ?  (
              <>
          <Carousel
              indicators="true"
              navButtonsAlwaysVisible='true'
              duration='1000'
              height='350px'
              >
          {
            movies.results.map( (item) => <Item2 key={item.id} item={item} /> ) 
          }
          </Carousel>
          </>
          ) : (
            
            <div style={{ textAlign: 'center' }}>
              <img src={Loading} width="30px" alt="Loading"/>
            </div>
          )
        )
    
    
}

function Item2(props)
{
    return (
      
        <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          {props.item.original_title ? props.item.original_title : props.item.original_name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          {props.item.overview}
          </Typography>
        </CardContent>
        
      </Box>
      <CardMedia
        component="img"
        sx={{ width: '50%' }}
        image={"https://image.tmdb.org/t/p/original/" + props.item.backdrop_path} height='350px'
        alt="Live from space album cover"
      />
    </Card>
    )
}

export default HomeCarrousel