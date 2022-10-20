import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Carousel from "react-material-ui-carousel";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import newsApiInstance from "../Apis/newsApiInstance";

const TopNews = () => {
    const [topNews, setTopNews] = useState([]);

    useEffect(() => {
        const fetchDataNews = async () => {
            try {
                const responseNewsApi = await newsApiInstance.get(
                    "/top-headlines"
                )

                setTopNews(responseNewsApi.data.articles)
            } catch (err) {
                console.log(err)
            }
        }

        fetchDataNews()
    }, []);

    function Item(props) {
        return (
            <>
                <img src={props.item.urlToImage} alt="" width={"100%"} height={"600"}/>
            </>
        )
    }

    return (
        <Box sx={{flexGrow: 1, mt: 3}}>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Grid>
                <Grid item xs={8}>
                    <Carousel
                        navButtonsAlwaysVisible={true}
                        NextIcon={<NavigateNextIcon/>}
                        PrevIcon={<NavigateBeforeIcon/>}
                    >
                        {
                            topNews.map((news, i) => <Item key={i} item={news}/>)
                        }
                    </Carousel>
                </Grid>
            </Grid>
        </Box>
    );
}

export default TopNews