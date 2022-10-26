// import useNewsStore from "../store/news";
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
import { Link, Outlet } from "react-router-dom";

 import TimeAgo from 'javascript-time-ago';
 import en from 'javascript-time-ago/locale/en';
 import useNewsStore,{
  fetchNews, iniNews,
} from '../store/news';


 TimeAgo.addLocale(en)

 // Create formatter (English).
 const timeAgo = new TimeAgo('en-US')

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



  const LatestNews = () => {
    const terapNews = useNewsStore();
    const news = useNewsStore(iniNews);
  // const colors= useColorStore(selectColor);

  useEffect(()=>{
// terapNews();
    terapNews.fetchNews();
  }, []) 
  
    return (
        <Container maxWidth="xl" sx={{marginTop:3}} >
            <Typography variant='h4'>
                Latest News
            </Typography>
            <Box sx={{ flexGrow: 1 }}  >  
                <Grid container column={12} spacing={{ xs: 2, md: 3 }}>
                    {terapNews.news?.map((news,index)=> (
            <Grid item xs={12} sm={4} md={3} key={index}>
                
            <Box sx={{ maxWidth: 345, minHeight:450}} >
<Card>

            <Link to={`/show/${news.url}`} >
                <CardMedia sx={{borderRadius:'10px'}}
                            component="img" key={news}
                            image={news.image||"https://www.freeiconspng.com/img/13630"}
                            height='200'
                        />
            </Link>

                        <CardContent sx={{height:100, p:1, paddingTop:2}}>
                
                <Typography variant="h6" color="black" 
                sx={{display: "-webkit-box",
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
                textAlign:'justify'}}>
                   
                    {news.title}
                    

                </Typography>
                
            </CardContent>
            <CardActions sx={{display:'flex', justifyContent:"space-between", justify:'flex-bottom'}}>
                {/* <Button size="small" sx={{color:'text.secondary'}}>{news.dateLong}</Button> */}
                <Typography variant="body2" color="text.secondary">
                {timeAgo.format(news.dateLong)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {news.author}
                </Typography>

                {/* <Button size="small" sx={{color:'text.secondary'}}>{news.author}</Button> */}
            </CardActions>
            </Card>
            </Box>
            </Grid>
            


            
            ))}
            </Grid>
            <Outlet/>
            </Box>
            
        </Container>
    );
  }

  export default LatestNews;