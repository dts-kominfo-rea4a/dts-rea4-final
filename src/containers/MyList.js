import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore"; 
import { db } from "../firebase";

import MovieSlider from "../components/MovieSlider";
import requests from "../Requests";
import Footer from "../components/footer";
import Nav from "../components/Nav";
import Slider from "react-slick";
import { IconButton } from "@mui/material";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";

const MyList = () => {
    const [list, setList] = useState([]);
    const user = useSelector(selectUser);
    const base_url = "https://image.tmdb.org/t/p/w342";
    const getList = async () => {
        const querySnapshot = await getDocs(collection(db, "movieList"));
        console.log(querySnapshot);
        let movieList = [];
        querySnapshot.forEach((doc) => {
            // console.log(doc.data());
            if (doc.data().uid === user.uid) {
                movieList.push({listId: doc.id, movie: doc.data().movies});
            }
        });

        setList(movieList);
        console.log(movieList);
    };

    const deleteMovie = async (listId) => {
      const docRef = doc(db, "movieList", listId);
      console.log(docRef);
      deleteDoc(docRef)
        .then(() => {
          console.log("Entire Document has been deleted successfully.");
          getList();
        })
        .catch((error) => {
          console.log(error);
        });
    }
    
    // const slidesToShow = list.length > 4 ? 4 : 3;
    const settings = {
      dots: false,
      infinite: 0,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      adaptiveHeight: 1,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    useEffect(() => {
      getList();
    }, []);
    
    return (
      <div>
        <Nav />
        <MovieSlider fetchUrl={requests.fetchTrending} />
        <div className="row">
          <h2>My Watching List</h2>
          <Slider {...settings} className="slider-row row__posters">
            {list?.map((item) => (
              <div className="row__poster" key={item.movie.id}>
                <div className="movie-link">
                  <IconButton
                    href={"/movie/" + item.movie.id}
                    aria-label="delete"
                    size="large"
                  >
                    <SmartDisplayIcon fontSize="large" />
                  </IconButton>
                  <IconButton
                    onClick={() => deleteMovie(item.listId)}
                    aria-label="delete"
                    size="large"
                  >
                    <PlaylistRemoveIcon fontSize="large" />
                  </IconButton>
                </div>

                <img
                  src={`${base_url}${item.movie.backdrop_path}`}
                  alt={item.movie.name}
                />
              </div>
            ))}
          </Slider>
        </div>

        <Footer />
      </div>
    );
};

export default MyList;
