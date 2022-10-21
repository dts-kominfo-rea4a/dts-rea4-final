import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Carousel from "react-material-ui-carousel";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import inshortNewsApiInstance from "../Apis/InshortNewsApiInstance";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardNews from "./CardNews";
import {Divider} from "@mui/material";

const TopNews = () => {
    const [topNews, setTopNews] = useState([]);
    const [content, setContent] = useState("");

    useEffect(() => {
        const fetchDataNews = async () => {
            try {
                const responseNewsApi = await inshortNewsApiInstance.get("/news", {
                    params: {
                        category: "world"
                    }
                })

                setTopNews(responseNewsApi.data.data)
            } catch (err) {
                console.log(err)
            }
        }

        fetchDataNews()
    }, []);

    function Item(props) {
        return (
            <>
                <img src={props.item.imageUrl} alt="" width={"100%"} height={"350"}/>
            </>
        )
    }

    return (
        <Box sx={{flexGrow: 1, mt: 3}}>
            <Grid container spacing={5}>
                <Grid item xs={4}>
                    <Typography gutterBottom variant="h5" component="div" sx={{textAlign: "justify"}}>
                        {content.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{textAlign: "justify"}}>
                        {content.content}
                    </Typography>
                    <Divider sx={{mt: 1, mb: 1}}/>
                    <Typography gutterBottom variant="body2" color="text.secondary" sx={{textAlign: "justify"}}>
                        {content.author} - {content.date}
                    </Typography>
                </Grid>
                <Grid item xs={8}>
                    <Carousel
                        navButtonsAlwaysVisible={true}
                        NextIcon={<NavigateNextIcon/>}
                        PrevIcon={<NavigateBeforeIcon/>}
                        onChange={(e) => setContent(topNews[e])}
                    >
                        {
                            topNews.filter((item, i) => i < 10).map((news, i) => <Item key={i} item={news}/>)
                        }
                    </Carousel>
                </Grid>
            </Grid>
        </Box>
    );
}

export default TopNews