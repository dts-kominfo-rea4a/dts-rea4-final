import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom'

import inshortNewsApiInstance from "../Apis/InshortNewsApiInstance";
import CardNews from "./CardNews";
import {CardActionArea} from "@mui/material";

const TopNews = () => {
    const [news, setNews] = useState([]);
    const [category, setCategory] = useState("");

    useEffect(() => {
        const fetchDataNews = async () => {
            try {
                const responseNewsApi = await inshortNewsApiInstance.get("/news", {
                    params: {
                        category: "all"
                    }
                })

                setNews(responseNewsApi.data.data)
                setCategory(responseNewsApi.data.category)
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
                                <CardActionArea component={Link} to={`${i}?category=${category}`}>
                                    <CardNews item={item}/>
                                </CardActionArea>
                            </Grid>
                        )
                    })
                }

            </Grid>
        </Box>
    );
}

export default TopNews