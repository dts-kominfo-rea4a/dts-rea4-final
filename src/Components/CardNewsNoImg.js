import {
    Card,
    CardContent,
    Typography,
    Divider, Link
} from "@mui/material";

const CardNews = ({item, category}) => {
    return (
        <Card elevation={0}>
            <CardContent>
                <Typography gutterBottom variant="body" sx={{textAlign: "justify"}}>
                    {item.title}
                </Typography>
                <Divider sx={{mt: 1, mb: 1}}/>
                <Typography gutterBottom variant="body2" color="text.secondary" sx={{textAlign: "justify"}}>
                    The Jakarta Post - {item.pusblised_at}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardNews