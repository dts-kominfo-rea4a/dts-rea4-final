import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Typography, Box,} from '@mui/material';




export default function Postingan() {

  const [Berita, setBerita] = useState([]);

  useEffect(
    () => {

      const dataBerita = async () => {
        try {
          const responDariNyt = await axios.get("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=3a9VRGo3CCBzGYf4vpoGOAWWUOuNrlLD"); 

          setBerita(responDariNyt.data.results.books);

        } catch(err) {
          console.log(err);
        }
      };
      dataBerita();
    },
    //depList
    []
  );


  return (
    <div>
      <Box sx={{marginBottom:"50px"}}>
        <Typography>
          <h1>Container data Berita dari NYt</h1>
        </Typography>
        {Berita.map((news) => {
          return (
            <div news={news} key={news.rank}>
              <img src={news.book_image} />
              <div>{news.title}</div>
              <div>{news.description}</div>
            </div>
          );
        })}
      </Box>
      ini halaman postingan
      <Link to="/">Home</Link>
      
      </div>
  )
}
