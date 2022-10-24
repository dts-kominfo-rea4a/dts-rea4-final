import { 
    Container,
    Typography,
    Card,
    CardMedia,
    CardContent,

 } from "@mui/material";

const HotTopic = () => {
    return(
        <Container maxWidth="xl" >
        <Typography variant='h2'>
            Hot Topic
            <Card sx={{ maxWidth: '100%', height:'350px', display:'flex' }}>
                <CardMedia
                    component="img"
                    image="https://picsum.photos/id/674/2000"
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
            </Card>
            
        </Typography>
        </Container>
    )

}

export default HotTopic;