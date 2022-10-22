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
import {getNewsDetail} from "../Features/newsSlice";

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

    const {loading, newsDetail} = useSelector((state) => ({...state.app}))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNewsDetail({category, id}))

        console.log(newsDetail)
    }, [category]);

    return (
        <Container maxWidth={'xl'}>
            {
                loading ? (<Loading/>) : (
                    <Box sx={{flexGrow: 1, mt: 3}}>
                        <Grid container spacing={5}>
                            <Grid item xs={8}>
                                <img src={newsDetail.urlToImage} alt="" width={"100%"} height={"350"}/>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography gutterBottom variant="h5" component="div" sx={{textAlign: "justify"}}>
                                    {newsDetail.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{textAlign: "justify"}}>
                                    {newsDetail.content} <a href={newsDetail.url} target="_blank" rel="noreferrer">readmore</a>
                                </Typography>
                                <Divider sx={{mt: 1, mb: 1}}/>
                                <Typography gutterBottom variant="body2" color="text.secondary"
                                            sx={{textAlign: "justify"}}>
                                    {newsDetail.author} - {newsDetail.publishedAt}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Divider sx={{mt: 3, mb: 3, borderBottomWidth: 3, borderColor: 'black'}}/>
                        <Grid container spacing={2}>
                            {
                                newsDetail.length > 0 && newsDetail.length > 0 ? newsDetail.map((item, i) => {
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
                )
            }
        </Container>
    )
        ;
}

export default NewsDetail