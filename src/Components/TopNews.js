import React from 'react';
import {
    Box,
    Grid
} from '@mui/material';

import CarouselNews from "./CarouselNews";

const TopNews = ({news}) => {
    return (
        <Box sx={{flexGrow: 1, mt: 3}}>
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <CarouselNews news={news} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default TopNews