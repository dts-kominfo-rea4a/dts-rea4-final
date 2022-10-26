import React, { useEffect, useState } from "react";
import MovieCard from "../components/Movie/MovieCard";
import tmdb from '../config/tmdb';
import NavbarUser from "../components/NavbarUser";
import { Button, TextField, Typography } from "@mui/material";
import { MultiSelect } from "react-multi-select-component";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


const DiscoverPage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [genres, setGenres] = useState([]);
  const [year,setYear] = useState('');
  const [sort,setSort] = useState('');
  const [tipe,setTipe] = useState('movie');

  
  const fetchData = async (pageNum,filter) => {
    let mygenre = '';
    console.log('filter',filter);
    // eslint-disable-next-line array-callback-return
    genres.map( (item,i) => {
        console.log(item);
        if (i === 0){
            mygenre = item.value;
        } else {
            mygenre = mygenre + '|' +item.value;
        }
    });
    console.log(mygenre);
    const {data} = await tmdb.get( `discover/${tipe}` , { params : { page: pageNum, year:year, sort_by:sort, with_genres:mygenre , language: 'en-US' }});
    if (filter){
        setMovies(data.results);
    } else {
        setMovies((prevstate) => [...prevstate, ...data.results]);
    }
  };

  useEffect(() => {
    // console.log(data);
    
    
    fetchData(page,false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  console.log(movies)

  const loadMore = () => {
    setPage((prevstate) => prevstate + 1);
  };

  const genreMovies = [
    {
        "value": 28,
        "label": "Action"
    },
    {
        "value": 12,
        "label": "Adventure"
    },
    {
        "value": 16,
        "label": "Animation"
    },
    {
        "value": 35,
        "label": "Comedy"
    },
    {
        "value": 80,
        "label": "Crime"
    },
    {
        "value": 99,
        "label": "Documentary"
    },
    {
        "value": 18,
        "label": "Drama"
    },
    {
        "value": 10751,
        "label": "Family"
    },
    {
        "value": 14,
        "label": "Fantasy"
    },
    {
        "value": 36,
        "label": "History"
    },
    {
        "value": 27,
        "label": "Horror"
    },
    {
        "value": 10402,
        "label": "Music"
    },
    {
        "value": 9648,
        "label": "Mystery"
    },
    {
        "value": 10749,
        "label": "Romance"
    },
    {
        "value": 878,
        "label": "Science Fiction"
    },
    {
        "value": 10770,
        "label": "TV Movie"
    },
    {
        "value": 53,
        "label": "Thriller"
    },
    {
        "value": 10752,
        "label": "War"
    },
    {
        "value": 37,
        "label": "Western"
    }
  ];
  const sortMovies = ['popularity.asc','popularity.desc','release_date.asc','release_date.desc','revenue.asc','revenue.desc','primary_release_date.asc','primary_release_date.desc','original_title.asc','original_title.desc','vote_average.asc','vote_average.desc','vote_count.asc','vote_count.desc'];
  

  const handlerYear = (evt) => {
    setYear(evt.target.value)
  }

  const handlerSort = (evt) => {
    setSort(evt.target.value)
  }

  const handlerTipe = (evt) => {
    setTipe(evt.target.value)
  }

  const handleFilter = () => {
    // fetchData(1);
    console.log('sort',sort);
    if (sort === ''){
        console.log('sortkosong');
    }
    
    fetchData(1,true);
    
  }
  return (
    
    <>
    <NavbarUser />
    
    <div>
      <div className="mx-auto py-10 px-6 max-w-[90%]">
        <Typography>Discover Movies and Series</Typography>
        <div className="grid grid-cols-2 gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 xl:gap-x-8 mt-12">
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="select-tipe">Tipe</InputLabel>
            <Select
                labelId="select-tipe"
                autoComplete="tipe"
                id="select-tipe"
                value={tipe}
                label="Tipe"
                placeholder="Tipe"
                onChange={handlerTipe}
                size = "small"
            >
                <MenuItem value="movie">Movie</MenuItem>
                <MenuItem value="tv">Series</MenuItem>
               
            </Select>
            </FormControl>
            <MultiSelect
            options={genreMovies}
            value={genres}
            onChange={setGenres}
            labelledBy={"Select Genre"}
            isCreatable={true}
            style={{
                color:'#0000'
            }}
            />
            <TextField
                fullWidth
                autoComplete="username"
                type="text"
                label="Year"
                size="small"
                onChange={handlerYear}
                value={year}
            />
             <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
             <InputLabel id="demo-select-small">Sort</InputLabel>
             <Select
                labelId="demo-select-small"
                autoComplete="year"
                id="demo-select-small"
                value={sort}
                label="Sort By"
                placeholder="sort"
                onChange={handlerSort}
                size = "small"
            >
                <MenuItem value="">
                <em>None</em>
                </MenuItem>
                {sortMovies.map((item,i) =>(
                    <MenuItem value={item} key={i}>{item}</MenuItem>
                ))
                }
               
            </Select>
            </FormControl>
            <Button variant="contained" onClick={handleFilter} size="small">Filter</Button>
        </div>
        
        <div className="grid grid-cols-2 gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 xl:gap-x-8 mt-12">
          {movies.map((item,id) => (
           <MovieCard item={item} key={id} type={tipe}/>
          ))}
        </div>
        <div className="flex items-center justify-center mt-10">
        <button className="bg-cyan-600 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded " onClick={loadMore} disabled={page>15 ? true: false}>
          Load More
        </button>
                  
        </div>
      </div>
    </div>
    </>
  );
};

export default DiscoverPage;
