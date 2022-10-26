import React, { useState, useEffect, } from 'react';
import { useNavigate, useParams, } from 'react-router-dom';
import axios from 'axios';

async function getMovieDetail(id) {
  const result = 
  await axios.get(`${process.env.REACT_APP_TMDB_API_URL}/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`);
  return result.data;
}

async function getMovieClips(id) {
  const result = 
  await axios.get(`${process.env.REACT_APP_TMDB_API_URL}/movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`);
  return result.data;
}


const MovieDetail = () => {
  const {movieId} = useParams();
  const [movie, setMovie] = useState("loading");
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.screen.availWidth);
  const [clips, setClips] = useState([]);
  let mt = width > 768 ? (width * 9 ) / 16 - 250 : 0;

  window.addEventListener("resize", () => {
    setWidth(window.screen.availWidth);
  });

  useEffect(() => {
    getMovieDetail(movieId).then((res) => {
      setMovie(res);
      getMovieClips(movieId).then((res) => {
        setClips(res.results);
      }).catch((err) => {
        console.log(err);
        navigate("/", {replace: true});
      });
      if (width < 768) {
        window.scroll({top: mt - 100, behavior: "smooth"});
      }
    }).catch((err) => {
      console.log(err);
      navigate("/", {replace: true});
    });
  }, [movieId, navigate, mt, width]);

  if (movie === "loading") {
    return (
      <div className=" h-screen flex items-center justify-center">
        <h1 className="text-white font-bold text-3xl">Loading...</h1>
      </div>
    );
  }

  return (
    <div className='min-h-[100vh] text-white text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-6xl font-bold' key={movie.id}>    
      <div
        className='flex flex-col items-center justify-center md:flex-row md:ml-[50px]'
        key={movie.id}
      >
        <img
          src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
          alt='poster'
          className='rounded-xl border-white border-4 max-w-[min(400px,90%)] sm:max-w-[50%]  md:h-[576px] z-10 mt-16'
        />
        <h1 className='z-10 md:ml-10 text-center'>{movie.title}</h1>
      </div>

      {/*Clips And Trailers Part */}
      <div className='mt-5 md:mt-10 text-xl md:text-2xl lg:text-4xl pb-[100px] mx-2 sm:mx-5 md:mx-[50px] lg:mx-[100px]'>
        <div className='mt-5 md:mt-10 text-lg md:text-xl lg:text-2xl'>
          <div>
            Release Date :-
            <span className=' font-normal'>{movie.release_date}</span>
          </div>
          <div>
            Duration :-
            <span className=' font-normal'>
              {parseInt(movie.runtime / 60)}:{movie.runtime % 60} hr
            </span>
          </div>
          <div>
            Rating :-
            <span className=' font-normal'>{movie.vote_average}/10</span>
          </div>
        </div>
        Clips And Trailers
        <div className='flex overflow-scroll scrollbar-hide snap-x mt-5 md:mt-10'>
          {clips.map((clip) => (
            <div
              className='ml-5'
              onClick={() => {
                window.open(`https://youtube.com/watch?v=${clip.key}`);
              }}
            >
              <div className='relative flex-shrink-0 h-[180px] md:h-[250px] lg:h-[300px] aspect-video rounded-xl'>
                <img
                  src={`https://img.youtube.com/vi/${clip.key}/hqdefault.jpg`}
                  className='absolute object-cover h-[180px] md:h-[250px] lg:h-[300px] aspect-video rounded-xl '
                  alt='youtube thumbnail'
                />
                <img
                  src="https://www.freeiconspng.com/uploads/video-play-icon-24.png"
                  alt='play icon'
                  className='absolute inset-0 w-[150px] h-[150px] m-auto'
                />
              </div>
              <p className='text-lg md:text-xl font-normal mt-1'>{clip.name}</p>
            </div>
          ))}
        </div>
        {/* Overview */}
        <div className='mt-5 md:mt-10'>OverView</div>
        <div className='mt-5 md:mt-10 font-normal text-lg md:text-xl lg:text-2xl'>
          {movie.overview}
        </div>
      </div>
    </div>
  );
}

export default MovieDetail