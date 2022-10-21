import React, {useEffect, useState} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {Divider} from "@mui/material";

import inshortNewsApiInstance from "../Apis/InshortNewsApiInstance";
import CardNewsNoImg from "./CardNewsNoImg";

const NewsDetail = () => {
    let params = useParams()
    const [searchParams] = useSearchParams()
    const category = searchParams.get('category')

    const [news, setNews] = useState({});


    useEffect(  () => {
        const fetchDataNews = async () => {
            try {
                const responseNewsApi = await inshortNewsApiInstance.get("/news", {
                    params: {
                        category: category
                    }
                })

                setNews(responseNewsApi.data.data)

                // console.log(news)
            } catch (err) {
                console.log(err)
            }
        }

        fetchDataNews()
    }, []);

    return (
        <Container maxWidth={'xl'}>
            <Box sx={{flexGrow: 1, mt: 3}}>
                <Grid container spacing={5}>
                    <Grid item xs={8}>
                        <img src={news[params.id]?.imageUrl} alt="" width={"100%"} height={"350"}/>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography gutterBottom variant="h5" component="div" sx={{textAlign: "justify"}}>
                            {news[params.id]?.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{textAlign: "justify"}}>
                            {news[params.id]?.content} <a href={news[params.id]?.readMoreUrl} target="_blank">readmore</a>
                        </Typography>
                        <Divider sx={{mt: 1, mb: 1}}/>
                        <Typography gutterBottom variant="body2" color="text.secondary" sx={{textAlign: "justify"}}>
                            {news[params.id]?.author} - {news[params.id]?.date}
                        </Typography>
                    </Grid>
                </Grid>

                <Divider sx={{mt: 3, mb: 3, borderBottomWidth: 3, borderColor: 'black'}}/>
                <Grid container spacing={2}>
                    {
                        news  && news.length > 0 ? news.map((item, i) => {
                            return (
                                <Grid key={i} item xs={3}>
                                    <CardNewsNoImg item={item}/>
                                </Grid>
                            )
                        })
                            : null
                    }
                </Grid>
            </Box>
        </Container>
    )
        ;
}

export default NewsDetail