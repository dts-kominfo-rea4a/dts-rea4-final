import {useEffect} from 'react';
import {Link} from 'react-router-dom'
import {
    Box,
    Grid,
    Backdrop,
    CardActionArea,
    CircularProgress
} from "@mui/material";

import {getNews} from "../Features/newsSlice";
import {useSelector, useDispatch} from "react-redux";

import CardNews from "./CardNews";

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

const News = ({category}) => {
    const {loading, news} = useSelector((state) => ({...state.app}))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNews({category}))
    }, [category]);

    return (
        <>
            {
                loading ? (<Loading/>) : (
                    <Box sx={{flexGrow: 1, mt: 3}}>
                        <Grid container spacing={2}>
                            {

                                news.length > 0 && news[0].map((item, i) => {
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
                )
            }
        </>
    );
}

export default News