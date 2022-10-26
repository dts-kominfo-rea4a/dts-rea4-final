import {Link} from 'react-router-dom'
import {
    Box,
    Grid,
    CardActionArea
} from "@mui/material";

import CardNews from "./CardNews";

const News = ({news, category}) => {
    return (
        <Box sx={{flexGrow: 1, mt: 3}}>
            <Grid container spacing={2}>
                {
                    news.length > 0 ? news.map((item, i) => {
                        return (
                            <Grid key={i} item sm={6} md={3}>
                                <CardActionArea component={Link} to={`${i}?link=${item.link}&category=${category}`}>
                                    <CardNews item={item}/>
                                </CardActionArea>
                            </Grid>
                        )
                    }) : undefined
                }
            </Grid>
        </Box>
    );
}

export default News