import NotFound from "../components/NotFound";
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
import PopUp from "../components/Popup";
import SearchIcon from '@mui/icons-material/Search';
// import { styled, alpha, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

 import TimeAgo from 'javascript-time-ago';
 import en from 'javascript-time-ago/locale/en';
 import useNewsStore,{
  fetchNews, iniNews,
} from '../store/news';
TimeAgo.addLocale(en)

 // Create formatter (English).
 const timeAgo = new TimeAgo('en-US')
 const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(1)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
// const Searchstyle = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: '20px',
//     backgroundColor: alpha(theme.palette.common.white),
//     '&:hover': {
//       backgroundColor: alpha(theme.palette.common.black, 0.25),
//     },
//     marginRight: theme.spacing(1),
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(1),
//       width: 'auto',
//     },
//   }));


const Search =()=>{
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
    return(<>
    <Search>
                <StyledInputBase sx={{marginTop:'5px'}}
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                  // onChange={searchOnChangeHandler}
                />
                <IconButton size="large" aria-label="search" color="inherit">
                  <SearchIcon /> 
                </IconButton>
              </Search>

   
  
    
        <Container maxWidth="xl" sx={{marginTop:3}} >
            <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
                Search Result
            </Typography>
            <Box sx={{ flexGrow: 1 }}  >  
                <Grid container column={12} spacing={{ xs: 2, md: 3 }}>
                    {terapNews.news?.map((news,index)=> (
            <Grid item xs={12} sm={4} md={3} key={index}>
                
            <Box sx={{ maxWidth: 345, minHeight:450}} >
<Card>

            {/* <Link to={`/show/${news.url}`} > */}
            {/* <a 
            // href={news.url}
            >{news?.url} */}
            <CardActionArea
            onClick={readMore}
            id={news?.url}
            value={news?.url}
            // alt={news.summary}
            >
                <CardMedia 
             sx={{borderRadius:'10px'}}
                            component="img" key={news}
                            image={news?.image}
                            height='200'
                        />
                        {/* </a> */}
            {/* </Link> */}

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
        </>
    );
  }

export default Search;