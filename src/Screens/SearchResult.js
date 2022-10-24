import Container from "@mui/material/Container";
import {useSelector} from "react-redux";
import {
    Backdrop,
    Box,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    CircularProgress,
    Grid,
    Typography
} from "@mui/material";
import {useEffect} from "react";
import SortSelect from "../Components/SortSelect";

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

const SearchResult = () => {
    const {loading, searchNews} = useSelector((state) => ({...state.app}))

    useEffect(() => {
        console.log(searchNews)

    }, [searchNews]);


    return (
        <Container maxWidth={'xl'}>
            <Grid container spacing={2} sx={{ mt: 3 }}>
                {
                    loading ? (<Loading />) : searchNews.length > 0 ? searchNews.map((news, i) => {
                        return (
                            <Grid key={i} item xs={4}>
                                <Card>
                                    <CardHeader
                                        title={news.title}
                                    />
                                    {
                                        news.image && (
                                            <CardMedia
                                                component="img"
                                                height="194"
                                                image={news.image}
                                                alt="Paella dish"
                                            />
                                        )
                                    }
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            {news.headline}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    }) : undefined
                }
            </Grid>
        </Container>
    )
}

export default SearchResult