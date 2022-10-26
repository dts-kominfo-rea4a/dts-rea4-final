import { 
    Container,
    Typography,
    Card,
    CardMedia,
    CardContent,

 } from "@mui/material";
import { useEffect } from "react";
 import useHotStore, { fetchHot, } from "../store/hot";

const HotTopic = () => {
    const hotState = useHotStore();

    useEffect(()=>{
        hotState.fetchHot();
    },[]);
    return(
        <Container maxWidth="xl" >
        <Typography variant='h2'>
            Hot Topic
            <Card sx={{ maxWidth: '100%', height:'350px', display:'flex' }}>
            {/* {hotState.hots?.map((hot,index,ind)=> (
            <>
            
                <Typography gutterBottom variant="h5" component="div" >
                {hot.title}
                </Typography>
            </>
                
                
            ))} */}
            

            <CardMedia
                component="img"
                image={hotState.multimedia}
                
                /> 
                <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {hotState.hots.title}
                        {/* {hotState.hots.multimedia} */}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {hotState.hots.abstract}
                        </Typography>
                </CardContent>
            </Card>
            
        </Typography>
        </Container>
    )

}

export default HotTopic;