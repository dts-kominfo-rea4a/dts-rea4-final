import * as React from 'react'
import { useEffect,useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import Loading from '../../images/loading.gif';
import tmdb, {tmdbConfig} from '../../config/tmdb';
import { Link} from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import { auth } from '../../authentication/firebase';
import {  onAuthStateChanged } from "firebase/auth";

const ReadMore = (text) => {
  const over= JSON.stringify(text);
  const overview= over.replace(/[^\w\s]/g,"").replace(/(^\s+|\s+$)/g,"").replace(/\s+/g," ").replace("children","");
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {setIsReadMore(!isReadMore)};

  return (
    <p>
      {isReadMore ? overview.slice(0, 150): overview }
      {overview.length > 150 &&
        <span onClick={toggleReadMore} className="text-gray-500 cursor-pointer">
          {isReadMore ? '...read more' : ' ...show less'}
        </span>
      }
    </p>
  )
}

function HomeCarrousel() {
    const [movies, setMovies] = useState();
    const [messageList, setMessageList] = useState();
    const [open, setOpen] = React.useState(false);
    const myFetchData = async () => {
      const {data} = await tmdb.get( 'trending/all/day' ,{params: { language: 'en-US',page:'1'}});
      setMovies(data);
    }
    useEffect(
        () => {
            myFetchData();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []
    )

    const addList = async (id) => {
      let users = [];

      await onAuthStateChanged(auth, (user) => {
        if (user) {
          users = user.displayName.split(',');
          // setUser(users);
        } else {
          setMessageList('List data Not Available');
          setOpen(true);
        }
      });

      if (users){
        console.log(users);
        const {data} = await tmdb.post(`list/${users[1]}/add_item?session_id=${tmdbConfig.sessionId}`,{
          media_id : id,
        });
        console.log(data);
        setOpen(true);
        setMessageList(data.status_message);
      }
      
     
    };

    
   
    console.log(movies);
    console.log('render');
        return (
            movies ?  (
              <>
          <Carousel
              indicators="true"
              navButtonsAlwaysVisible='true'
              duration='500'
              height='350px'
              >
          {
            movies.results.map( (item) => {
              return (
                <div className="w-full h-[70vh] md:h-[600px] text-[#FFFDE3]" key={item.id}>
      <div className="w-full h-full">
        <div className="absolute w-full h-[70vh] md:h-[600px] bg-gradient-to-r from-black">
          {" "}
        </div>
        <img
          className="w-full h-[70vh] md:h-full object-cover"
          src={`https://image.tmdb.org/t/p/original${item?.backdrop_path}`}
          alt=""
        />
        <div className="absolute w-full top-[20%] p-4 md:p-16">
          <h1 className="text-2xl md:text-5xl font-bold">{item?.title || item?.name} </h1>
          <div className="my-4">
            <Link to={ `${item.media_type}/${item.id}`}>
              <button className=" border bg-gray-300 text-black border-gray-300 py-2 px-5">
                Play
              </button>
            </Link>
            <button className="border text-[#FFFDE3] border-gray-300 py-2 px-5 ml-4 " onClick={ () => addList(item.id)}>
              Add to My List
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released  {item?.release_date}{" "}
          </p>
          
          <div className="w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[50%] text-gray-200 text-sm md:text-base mt-2">
              <ReadMore>
                {item?.overview}
              </ReadMore>
          </div>
        <Snackbar open={open} autoHideDuration={6000} message={messageList}>
          
        </Snackbar>
            

        </div>
      </div>
    </div>
              )
            }
             // <Item2 key={item.id} item={item} />
            
            ) 
          }
          </Carousel>
          </>
          ) : (
            
            <div style={{ textAlign: 'center' }}>
              <img src={Loading} width="30px" alt="Loading"/>
            </div>
          )
        )
    
    
}

// function Item2(props)
// {
//     return (
      
    //     <Card sx={{ display: 'flex' }}>
    //   <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    //     <CardContent sx={{ flex: '1 0 auto' }}>
    //       <Typography component="div" variant="h5">
    //       {props.item.original_title ? props.item.original_title : props.item.original_name}
    //       </Typography>
    //       <Typography variant="subtitle1" color="text.secondary" component="div">
    //       {props.item.overview}
    //       </Typography>
    //     </CardContent>
        
    //   </Box>
    //   <CardMedia
    //     component="img"
    //     sx={{ width: '50%' }}
    //     image={"https://image.tmdb.org/t/p/original/" + props.item.backdrop_path} height='350px'
    //     alt="Live from space album cover"
    //   />
    // </Card>
    
//     )
// }

export default HomeCarrousel