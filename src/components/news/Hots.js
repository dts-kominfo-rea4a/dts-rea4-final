import React from "react";
import {
    Box,
    Typography,
    Card,
    CardMedia,
    CardActions,
    Grid,
} from "@mui/material";
export default function Hots() {
    return (
        <Box>
            <Typography
                variant="h3"
                fontWeight={600}
                gutterBottom
            >
                Hot Topics
            </Typography>
            <Card sx={{ boxShadow: 0 }}>
                <Grid
                    container
                    spacing={4}
                >
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={8}
                        xl={8}
                    >
                        <Box
                            sx={{
                                position: "relative",
                            }}
                        >
                            <CardMedia
                                component="img"
                                image="https://media.istockphoto.com/vectors/news-update-vector-breaking-news-concept-reportage-illustration-with-vector-id1189961786?k=20&m=1189961786&s=612x612&w=0&h=--VbroxpJ2UUYHRV0grpL50o-L7gWiQgtPDcJzOx-H8="
                                alt="green iguana"
                                sx={{ height: { xs: 250, sm: 400, md: 400, lg: 400, xl: 400 } }}
                            />
                            <Box
                                sx={{
                                    padding: 2,
                                    position: "absolute",
                                    top: "50%",
                                    color: "white",
                                    maxWidth: 500,
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    gutterBottom
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: { xs: 16, sm: 32, md: 32, lg: 32, xl: 32 },
                                    }}
                                >
                                    Massa tortor nibh nulla condimentum imperdiet scelerisque...
                                </Typography>
                                <CardActions>
                                    <Typography
                                        gutterBottom
                                        variant="body2"
                                        component="div"
                                        sx={{ fontWeight: 700 }}
                                    >
                                        2 Hour Ago
                                    </Typography>
                                    <Typography
                                        gutterBottom
                                        variant="body2"
                                        component="div"
                                        sx={{ fontWeight: 700 }}
                                    >
                                        CNN Indonesia
                                    </Typography>
                                </CardActions>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={0}
                        sm={0}
                        md={0}
                        lg={4}
                        xl={4}
                        sx={{
                            display: {
                                xs: "none",
                                sm: "none",
                                md: "none",
                                lg: "block",
                                xl: "block",
                            },
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{ fontSize: 21 }}
                        >
                            Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare
                            adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec
                            vivamus pharetra. Velit, dui, egestas nisi, elementum mattis
                            mauris, magnis. Massa tortor nibh nulla condimentum imperdiet
                            scelerisque... Read more
                        </Typography>
                    </Grid>
                </Grid>
            </Card>
        </Box>
    );
}