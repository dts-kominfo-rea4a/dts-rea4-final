import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import inshortNewsApiInstance from "../Apis/InshortNewsApiInstance";
import CardNews from "./CardNews";

const TopNews = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchDataNews = async () => {
            try {
                const responseNewsApi = await inshortNewsApiInstance.get("/news", {
                    params: {
                        category: "all"
                    }
                })

                setNews(responseNewsApi.data.data)
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
                            <Grid key={i} item xs={3}>
                                <CardNews item={item}/>
                            </Grid>
                        )
                    })
                }

            </Grid>
        </Box>
    );
}

export default TopNews