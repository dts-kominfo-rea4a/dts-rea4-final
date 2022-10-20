import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import newsApiInstance from "../Apis/newsApiInstance";

const TopNews = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchDataNews = async () => {
            try {
                const responseNewsApi = await newsApiInstance.get(
                    "/top-headlines"
                )

                setNews(responseNewsApi.data.articles)
            } catch (err) {
                console.log(err)
            }
        }

        fetchDataNews()
    }, []);

    return (
        <Box sx={{flexGrow: 1, mt: 3}}>
            <Grid container spacing={2}>

                {
                    news.map((item, i) => {
                        return (
                            <Grid key={i} item xs={4}>
                                <Card elevation={0}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={item.urlToImage}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })
                }

            </Grid>
        </Box>
    );
}

export default TopNews