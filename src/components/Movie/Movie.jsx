
import React, { useState } from 'react';
import '../../styles/Movie.css';
import TheatersIcon from '@mui/icons-material/Theaters';
import LanguageIcon from '@mui/icons-material/Language';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import iconAmazon from '../../images/icon-amazon.png';
import iconNetflix from '../../images/icon-netflix.png';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import { auth } from '../../authentication/firebase';
import {  onAuthStateChanged } from "firebase/auth";
import tmdb, {tmdbConfig} from '../../config/tmdb';


function Movie( { item } ) {

    const [urlVideo,setUrlVideo] = useState('');
    const [playVideo,setPlayVideo] = useState(false);
    const [videoFullScreen,setVideoFullScreen] = useState(false);
    const [id,setId] = useState('');
    const [messageList, setMessageList] = useState();
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

    function handleShowTrailer(){
    
        const trailer = item.videos.results;
        if(trailer !== undefined && trailer.length > 0){
            const trailerid = trailer.find(
                (vid) => vid.type === "Trailer"
            );
            // console.log(trailerid.key);
            const url = `https://youtube.com/embed/${trailerid.key}?autoplay=1&controls=1`;
            setUrlVideo(url);
            setId(item.id);
        }
        setPlayVideo(true);
    }

    function handleVideoFullScreen(){
        setVideoFullScreen(!videoFullScreen);
    }

    useEffect( () => {
        if (id !== item.id){
            setPlayVideo(false);
        }
    },[item, videoFullScreen,id]);

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

return (
    playVideo ? (
        <div
        className="details" 
    >   
        <button className="details--backbutton" onClick={() => {
            navigate(-1);
          }}>Back</button>
       
            <section className={videoFullScreen ? 'video--fullscreen' : ''}> 
          
            <iframe frameBorder="0" height="100%" width="100%" title={item.original_name ||item.original_title}
                        src={urlVideo}>
                    </iframe>
                    <div>
                        <button onClick={() => handleVideoFullScreen()}><AspectRatioIcon /></button>
                    </div>
            </section>
                        
            
        </div>
    ) : (
    <div
        className="details" 
        style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`
        }}
    >   
         <button className="details--backbutton" onClick={() => {
            navigate(-1);
          }}>Back</button>
            <section> 
                <div>
                    <div className="details--info">
                        <h3 className={item.vote_average > 5 ? 'positive' : 'negative'}>{item.vote_average * 10 + '%'}</h3>
                    </div>

                    <h1>{item.original_title || item.original_name}</h1>

                    <h4>{item.overview}</h4>

                    {
                        (item.videos.results !== undefined && item.videos.results.length !== 0)
                        &&
                        <a onClick={() => handleShowTrailer()} className="details--viewtrailer" href='#a'><div><TheatersIcon />Play Trailer</div></a>
                    }
                     {
                        (item.homepage !== undefined && item.homepage !== '') && 
                            <a href={item.homepage} target="_blank" rel="noopener noreferrer" className="details--officialsite">
                                <div>
                                    {
                                        item.homepage.includes('netflix') ?
                                        <img alt="Netflix" src={iconNetflix} width="23"/> :
                                        item.homepage.includes('amazon') ?
                                        <img alt="Amazon" src={iconAmazon} width="23"/> :
                                        <LanguageIcon />
                                    }
                                
                                </div>
                            </a>
                     }
                     <a onClick={ () => addList(item.id)} className="details--viewtrailer" href='#a'>
                        <div><PlaylistAddIcon />Add To List</div>
                    </a>
                </div>
                <Snackbar open={open} autoHideDuration={6000} message={messageList}>
          
                </Snackbar>
               
            </section>
            
            
        </div>
    )
       
  );
}

export default Movie;
