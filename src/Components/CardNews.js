import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {CardActionArea, Divider} from "@mui/material";

const CardNews = ({item}) => {
    return (
        <Card elevation={0}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={item.imageUrl}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="body" sx={{textAlign: "justify"}}>
                        {item.title}
                    </Typography>
                    <Divider sx={{mt: 1, mb: 1}}/>
                    <Typography gutterBottom variant="body2" color="text.secondary" sx={{textAlign: "justify"}}>
                        {item.author} - {item.date}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default CardNews