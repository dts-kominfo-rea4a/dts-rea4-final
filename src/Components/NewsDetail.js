import {useEffect, useState} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import {
    Container,
    Box,
    Grid,
    Typography,
    Divider, Backdrop, CircularProgress
} from "@mui/material";

import CardNewsNoImg from "./CardNewsNoImg";
import {useDispatch, useSelector} from "react-redux";
import {getNews} from "../Features/newsSlice";

const Loading = () => {
    return (
        <Backdrop
            sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
            open={true}
        >
            <CircularProgress color="inherit"/>
        </Backdrop>
    )
}

const NewsDetail = () => {
    let params = useParams()
    const {id} = params
    const [searchParams] = useSearchParams()
    const category = searchParams.get('category')

    const {loading, news} = useSelector((state) => ({...state.app}))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNews({category}))
    }, [id, category]);



    return (
        <Container maxWidth={'xl'}>
            {
                loading ? (<Loading/>) : (
                    <Box sx={{flexGrow: 1, mt: 3}}>
                        <Grid container spacing={5}>
                            <Grid item xs={8}>
                                {
                                    news.length > 0 ? (<img src={news[id].urlToImage} alt="" width={"100%"} height={"350"}/>) : undefined
                                }
                            </Grid>
                            <Grid item xs={4}>
                                <Typography gutterBottom variant="h5" component="div" sx={{textAlign: "justify"}}>
                                    {news.length > 0 && news[id].title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{textAlign: "justify"}}>
                                    {news.length > 0 && news[id].content}
                                    {
                                        news.length > 0 ? (<a href={news[0].url} target="_blank" rel="noreferrer">readmore</a>) : undefined
                                    }

                                </Typography>
                                <Divider sx={{mt: 1, mb: 1}}/>
                                <Typography gutterBottom variant="body2" color="text.secondary"
                                            sx={{textAlign: "justify"}}>
                                    {news.length > 0 && news[id].author} - {news.length > 0 && news[id].publishedAt}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Divider sx={{mt: 3, mb: 3, borderBottomWidth: 3, borderColor: 'black'}}/>
                        <Grid container spacing={2}>
                            {
                                news.length > 0 ? news.map((item, i) => {
                                        return (
                                            <Grid key={i} item xs={3}>
                                                <CardNewsNoImg item={item}/>
                                            </Grid>
                                        )
                                    })
                                    : undefined
                            }
                        </Grid>
                    </Box>
                )
            }
        </Container>
    )
        ;
}

export default NewsDetail