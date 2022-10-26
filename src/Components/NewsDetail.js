import {useEffect} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import {
    Container,
    Box,
    Grid,
    Typography,
    Divider, Backdrop, CircularProgress, CardActionArea, Link
} from "@mui/material";

import CardNewsNoImg from "./CardNewsNoImg";
import {useDispatch, useSelector} from "react-redux";
import {getNews, getNewsDetail} from "../Features/newsSlice";

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
    const link = searchParams.get('link')
    const category = searchParams.get('category')

    const {loading, detailNews, news} = useSelector((state) => ({...state.app}))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNewsDetail({link}))
        dispatch(getNews({category}))
    }, [id, link]);

    return (
        <Container maxWidth={'xl'}>
            {
                loading ? (<Loading/>) : (
                    <Box sx={{flexGrow: 1, mt: 3}}>
                        <Grid container spacing={5}>
                            <Grid item xs={12}>
                                <img src={detailNews.image} alt="" width={"100%"} height={"500"}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography gutterBottom variant="h5" component="div" sx={{textAlign: "justify"}}>
                                    {detailNews.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{textAlign: "justify"}}>
                                    {detailNews.post_content}
                                </Typography>
                                <Divider sx={{mt: 1, mb: 1}}/>
                                <Typography gutterBottom variant="body2" color="text.secondary"
                                            sx={{textAlign: "justify"}}>
                                    {detailNews.author} - {detailNews.pusblised_at}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Divider sx={{mt: 3, mb: 3, borderBottomWidth: 3, borderColor: 'black'}}/>
                        <Grid container spacing={2}>
                            {
                                news.length > 0 ? news.map((item, i) => {
                                        return (
                                            <Grid key={i} item xs={3}>
                                                <CardActionArea component={Link}
                                                                to={`${i}?link=${item.link}&category=${category}`}>
                                                    <CardNewsNoImg item={item} category={category}/>
                                                </CardActionArea>
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