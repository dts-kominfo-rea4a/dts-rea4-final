import {useEffect, useState} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import {
    Container,
    Box,
    Grid,
    Typography,
    Divider, Backdrop, CircularProgress
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";

import CardNewsNoImg from "./CardNewsNoImg";
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
    const [searchParams] = useSearchParams()
    const category = searchParams.get('category')

    const {loading, news} = useSelector((state) => ({...state.app}))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNews({category}))
    }, [category]);

    return (
        <>
            {
                loading ? (<Loading/>) : (
                    <Container maxWidth={'xl'}>
                        <Box sx={{flexGrow: 1, mt: 3}}>
                            <Grid container spacing={5}>
                                <Grid item xs={8}>
                                    {
                                        news.length > 0 ? (<img src={news[0][params.id].imageUrl} alt="" width={"100%"} height={"350"}/>) : undefined
                                    }
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography gutterBottom variant="h5" component="div" sx={{textAlign: "justify"}}>
                                        { news.length > 0 && news[0][params.id]?.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{textAlign: "justify"}}>
                                        {news.length > 0 && news[0][params.id]?.content}

                                        {
                                            news.length > 0 ? (<a href={news[0][params.id]?.readMoreUrl} target="_blank" rel="noreferrer">readmore</a>) : undefined
                                        }
                                    </Typography>
                                    <Divider sx={{mt: 1, mb: 1}}/>
                                    <Typography gutterBottom variant="body2" color="text.secondary"
                                                sx={{textAlign: "justify"}}>
                                        {news.length > 0 && news[0][params.id]?.author} - {news.length > 0 && news[0][params.id]?.date}
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Divider sx={{mt: 3, mb: 3, borderBottomWidth: 3, borderColor: 'black'}}/>
                            <Grid container spacing={2}>
                                {
                                    news.length > 0 && news[0].length > 0 ? news[0].map((item, i) => {
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
            }
        </>
    )
        ;
}

export default NewsDetail