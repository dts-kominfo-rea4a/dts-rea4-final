import React from "react";
import {
    Typography,
    Card,
    CardMedia,
    CardContent,
    CardActionArea
}
    from "@mui/material";
import Images from '../components/images/killua.jpg';

function DetailPage() {
    return (
        <Card sx={{ maxWidth: 365 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="300"
                    image={Images}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default DetailPage;

