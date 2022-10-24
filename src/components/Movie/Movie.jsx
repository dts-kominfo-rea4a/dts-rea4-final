
import React, { useState } from 'react';
import './Movie.css';
import { Link } from 'react-router-dom';
import TheatersIcon from '@mui/icons-material/Theaters';
import LanguageIcon from '@mui/icons-material/Language';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import iconAmazon from '../../images/icon-amazon.png';
import iconNetflix from '../../images/icon-netflix.png';
import Popular from '../Home/Popular';
function Movie( { item } ) {

const descriptionVideo = item.overview.length > 120 ? item.overview.substring(0, 120) + '...' : item.overview;
const [urlVideo,setUrlVideo] = useState('');
const [videoFullScreen,setVideoFullScreen] = useState(false);
function handleShowTrailer(){
    const trailer = item.videos.results;
    if(trailer !== undefined && trailer.length > 0){
        const url = `https://youtube.com/embed/${trailer[0].key}?autoplay=1&controls=0&showinfo=0&autohide=1`;
        setUrlVideo(url);
    }
}
function handleVideoFullScreen(){
    setVideoFullScreen(videoFullScreen);
}

return (
    <div
        className="details" 
        style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`
        }}
    >   
        <Link to="/" className="details--backbutton">Back</Link>
            <section> 
                <div>
                    <div className="details--info">
                        <h3 className={item.vote_average > 5 ? 'positive' : 'negative'}>{item.vote_average * 10 + '%'}</h3>
                    </div>

                    <h1>{item.original_title || item.original_name}</h1>

                    <h4>{descriptionVideo}</h4>

                    {
                        (item.videos.results !== undefined && item.videos.results.length !== 0)
                        &&
                        <a onClick={() => handleShowTrailer()} className="details--viewtrailer" href='#a'><div><TheatersIcon />Assistir trailer</div></a>
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
                </div>
               
            </section>
            <div>
                <br/>
                {item.overview}
                <Popular />
            </div>
            {
                urlVideo !== undefined
                &&
                <aside className={videoFullScreen ? 'video--fullscreen' : ''}>
                    <div>
                        <button onClick={() => handleVideoFullScreen()}><AspectRatioIcon /></button>
                    </div>
                    <iframe frameBorder="0" height="100%" width="100%" title="1"
                        src={urlVideo}>
                    </iframe>
                </aside>
            }
            
            
        </div>
        
       
  );
}

export default Movie;
