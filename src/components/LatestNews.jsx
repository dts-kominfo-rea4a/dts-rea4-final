import React, { useEffect, useState } from "react";
import { Container,  } from "@mui/system";
import { 
    Typography, 
    Card,
    CardMedia,
    CardContent,
    CardActions,
    CardActionArea,
    Box,
    Grid,
    Paper,
 } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Link, Outlet } from "react-router-dom";
import PopUp from "./Popup";

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

const LatestNews = ({}) => {
const terapNews = useNewsStore();
    // const news = useNewsStore(iniNews);
  // const colors= useColorStore(selectColor);
  const [showPopup, setShowPopup] = useState(false);
  const [newsContent, setNewsContent] = useState({});
  

  const readMore = (event) => {
    setNewsContent({ url: event.target.id, description: event.target.alt });
    setShowPopup(true);
    console.log(event.target.id);
  };

  const popUpClose = () => {
    setShowPopup(false);
  };

  useEffect(()=>{
// terapNews();
    terapNews.fetchNews();
  }, []) 
  
    return (
        <Container maxWidth="xl" sx={{marginTop:3}} >
            <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
                Latest News
            </Typography>
            <Box sx={{ flexGrow: 1 }}  >  
                <Grid container column={12} spacing={{ xs: 2, md: 3 }}>
                    {terapNews.news?.map((news,index)=> (
            <Grid item xs={12} sm={4} md={3} key={index}>
                
            <Box sx={{ maxWidth: 345, minHeight:450}} >
<Card>

            {/* <a 
            // href={news.url}
            >{news?.url} */}
            <CardActionArea
            onClick={readMore}
            id={news?.url}
            value={news?.url}
            // alt={news.summary}
            >
            <Link to={`/show/${news.url}`} >

                <CardMedia 
             sx={{borderRadius:'10px'}}
                            component="img" key={news}
                            image={news?.image}
                            height='200'
                        />
                        {/* </a> */}
            </Link>

                        <CardContent sx={{height:100, p:1, paddingTop:2}}>
                        {/* {news?.url} */}
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
            </CardActionArea>
            </Card>
            </Box>
            </Grid>
            ))}
            </Grid>
            <PopUp
              showPopup={showPopup}
              newsContent={newsContent}
              popUpClose={popUpClose}
            />
            <Outlet/>
            </Box>            
        </Container>
    );
  }

export default LatestNews;