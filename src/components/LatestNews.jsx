import useNewsStore from "../store/news";
import { useEffect } from "react";
import { Container,  } from "@mui/system";
import { 
    Typography, 
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Box,
    Grid,
    Paper,
 } from "@mui/material";
 import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



  const LatestNews = () => {
    const newsState = useNewsStore();
  // const colors= useColorStore(selectColor);

  useEffect(()=>{
    newsState.fetchNews()
  }, []) 
    return (
        <Container maxWidth="xl" sx={{marginTop:3}} >
            <Typography variant='h4'>
                Latest News
            </Typography>
            <Box sx={{ flexGrow: 1 }}  >  
                <Grid container column={12} spacing={{ xs: 2, md: 3 }}>
                    {newsState.news?.map((news,index)=> (
            <Grid item xs={12} sm={4} md={3} key={index}>
                

            <Box sx={{ maxWidth: 345, minHeight:450}} >
                <CardMedia sx={{borderRadius:'10px'}}
                            component="img" key={news}
                            image={news.image}
                            height='200'
                        />
                        <CardContent>
                
                <Typography variant="h6" color="black" >
                    <text numberOfLines={2}>
                    {news.title.length < 60
                ? `${news.title}`
                : `${news.title.substring(0, 60)} .....`}

                    </text>
                </Typography>
                
            </CardContent>
            <CardActions sx={{display:'flex', justifyContent:"space-between", justify:'flex-bottom'}}>
                {/* <Button size="small" sx={{color:'text.secondary'}}>{news.dateLong}</Button> */}
                <Typography variant="body2" color="text.secondary">
                {news.dateLong}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {news.author}
                </Typography>

                {/* <Button size="small" sx={{color:'text.secondary'}}>{news.author}</Button> */}
            </CardActions>
            </Box>
            </Grid>
            


            
            ))}
            </Grid>
            </Box>
            
        </Container>
    );
  }

  export default LatestNews;