import { 
    Container,
    Typography,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Button,

 } from "@mui/material";
import { useEffect } from "react";
 import useHotStore, { fetchHot, } from "../store/hot";
 import useNewsStore,{fetchBerita, iniBerita} from "../store/news";
 import TimeAgo from 'javascript-time-ago';
 import en from 'javascript-time-ago/locale/en';

 TimeAgo.addLocale(en)

 // Create formatter (English).
 const timeAgo = new TimeAgo('en-US')
const HotTopic = () => {
    const hotState = useHotStore();
    const newsState = useNewsStore();


    useEffect(()=>{
        hotState.fetchHot();
        newsState.fetchBerita();
    },[]);
    return(
        <Container maxWidth="xl" >
        <Typography variant='h2' sx={{ fontWeight: 'bold' }}>
            Hot Topic
            <Card sx={{ maxWidth: '100%', height:'400px', display:'flex' }}>
            {/* {hotState.hots?.map((hot,index,ind)=> (
            <>
            
                <Typography gutterBottom variant="h5" component="div" >
                {hot.title}
                </Typography>
            </>
                
                
            ))} */}
            
            {/* {hotState.hots.map((news,index)=>( */}
            {newsState.hotest?.map((news,index)=> (
                <>
                {/* <CardMedia
                component="img"
                image={news.image}
                // sx={{width:'1000'}}
                width='1000'
                
                
                />  */}
                {/* <Card sx={{display: 'flex', }}> */}
                {/* <div sx={{position: 'relative',
        textAlign: 'center',
        color: 'white',


        display: 'flex',
        alignItems: 'center',
        paddingLeft: '10',
        paddingBottom: '10',
        
        }}>*/}
                    <CardContent sx={{flex: '0 0 auto', p:0, width:'65%'}}> 
                      <div style={{position: 'relative',width:'100%'}} >
                        <CardMedia
                            component="img"
                            sx={{display: 'flex',
                            height: 400,
                            objectFit: 'contain',
                            alignItems: 'left',}}
                            image={news.image}
                        />
                        <div style={{position: 'absolute', color: 'black', left:'15',bottom:5, right:'30%',
                       
                        
                         transform: 'translateX(5%)'
                    }} ><Typography variant='h4' sx={{fontWeight:'bold'}}>{news?.title} 
                <CardActions sx={{display:'flex',  gap:'7em'}}>
                {/* <Button size="small" sx={{color:'text.secondary'}}>{news.dateLong}</Button> */}
                <Typography variant="body2" color="text.secondary">
                {timeAgo.format(news.dateLong)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {news.author}
                </Typography>

                {/* <Button size="small" sx={{color:'text.secondary'}}>{news.author}</Button> */}
            </CardActions>
                </Typography></div>
                    
                      </div>
                    </CardContent>
                {/* </div>                 */}
            {/* </Card>  */}
                <CardContent sx={{ p:3}}>
                     
                    
                       
                        <Typography variant="h5" color="text.secondary">
                        {/* {news.sub_title} */}
                        {news.summary}
                        </Typography>
                        
                        <CardActions sx={{display:'flex'}}>
                        <a href={news.url} color='secondary'>
                        <Typography variant="body2" color="text.secondary" sx={{ textAlign:'right', justify:'flex-bottom'}}>
                    Read More ...
                        </Typography></a>
                    
                </CardActions>
                </CardContent>
                
            </>
                ))}
            </Card>
            
        </Typography>
        </Container>
    )

}

export default HotTopic;