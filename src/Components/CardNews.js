import {
    Card,
    Typography,
    CardMedia,
    Divider,
    CardContent
} from "@mui/material";

const CardNews = ({item}) => {
    const {urlToImage, title, author, publishedAt} = item

    return (
        <Card elevation={0}>
                <CardMedia
                    component="img"
                    height="140"
                    image={urlToImage}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="body" sx={{textAlign: "justify"}}>
                        {title}
                    </Typography>
                    <Divider sx={{mt: 1, mb: 1}}/>
                    <Typography gutterBottom variant="body2" color="text.secondary" sx={{textAlign: "justify"}}>
                        {author} - {publishedAt}
                    </Typography>
                </CardContent>
        </Card>
    )
}

export default CardNews