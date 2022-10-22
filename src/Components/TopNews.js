import React, {useState} from 'react';
import {
    Box,
    Grid,
    Typography,
    Divider
} from '@mui/material';
import Carousel from "react-material-ui-carousel";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const TopNews = ({news}) => {
    const [content, setContent] = useState([]);

    function Item(props) {
        return (
            <>
                <img src={props.item.urlToImage} alt="" width={"100%"} height={"350"}/>
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
                    <Typography gutterBottom variant="body2" color="text.secondary"
                                sx={{textAlign: "justify"}}>
                        {content.author} - {content.date}
                    </Typography>
                </Grid>
                <Grid item xs={8}>
                    <Carousel
                        navButtonsAlwaysVisible={true}
                        NextIcon={<NavigateNextIcon/>}
                        PrevIcon={<NavigateBeforeIcon/>}
                        onChange={(e) => setContent(news[e])}
                    >
                        {
                            news.length > 0 ? news.map((news, i) => <Item key={i} item={news}/>) : undefined
                        }
                    </Carousel>
                </Grid>
            </Grid>
        </Box>
    );
}

export default TopNews