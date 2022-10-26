import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import Container from '@mui/material/Container';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import axios from 'axios';

const baseUrl = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=3a9VRGo3CCBzGYf4vpoGOAWWUOuNrlLD'

export default function LatestNews({ news }) {
    const [text, setText] = useState('');
    const [Berita, setBerita] = useState([]);

    async function searchAnime() {
        try {
          const Response = await window.fetch(`${baseUrl}?q=${text}`);
          const data = await Response.json();
          setBerita(data.data)
          console.log('d', data)
        } catch (e) {
          console.log(e)
        }
      }

    useEffect(
        () => {
            const dataBerita = async () => {
                try {
                    const responDariNyt = await axios.get("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=3a9VRGo3CCBzGYf4vpoGOAWWUOuNrlLD");

                    setBerita(responDariNyt.data.results.books);
                } catch (err) {
                    console.log(err);
                }
            };
            dataBerita();
        },
        //depList
        []
    );

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <div>
            <Container>
                <h1>Latest News</h1>
                <form >
                    <input
                        type='text'
                        placeholder='search here...'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <Button 
                        variant='primary' 
                        onClick={searchAnime}
                        >Search</Button>
                </form>
                <Grid container>
                    {Berita && Berita.map((news) => {
                        return (
                            <Grid item key={news.rank} md={4} xs={12} lg={3} paddingX={1}
                                paddingY={2}>
                                <Card item sx={{ maxWidth: 345, margin: '10px', }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image={news.book_image}
                                            alt={news.title}
                                            sx={{ maxHeight: 400 }}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {news.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {news.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Read More</Button>
                                        </CardActions>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </div>
    );
}
