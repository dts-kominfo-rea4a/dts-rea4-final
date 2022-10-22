import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TopNews from "../Components/TopNews";
import News from "../Components/News";
import SortSelect from "../Components/SortSelect";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getNews} from "../Features/newsSlice";
import {Backdrop, CircularProgress} from "@mui/material";
import NewsMenu from "../Components/NewsMenu";

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

export default function Home({category}) {
    const {loading, news} = useSelector((state) => ({...state.app}))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNews({category}))
    }, [category]);

    return (
        <React.Fragment>
            <CssBaseline/>
            {
                loading ? (<Loading/>) : (
                    <Container maxWidth={'xl'}>
                        <TopNews news={news} category={category} />
                        <SortSelect/>
                        <News news={news} category={category}/>
                    </Container>
                )
            }
        </React.Fragment>
    );
}
