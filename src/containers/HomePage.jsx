import React,{useEffect} from 'react';
import HomeCarrousel from "../components/Home/HomeCarrousel"
import NowPlaying from '../components/Home/NowPlaying';
import Popular from '../components/Home/Popular';
import PopularIndonesia from '../components/Home/PopularIndonesia';
import { auth,saveIdListMovies } from '../authentication/firebase';
import {  onAuthStateChanged } from "firebase/auth";
import tmdb, {tmdbConfig} from '../config/tmdb';

function HomePage() {
  useEffect( ()=> {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        let users = user.displayName.split(',');
        if (users[1] === undefined || users[1] === null){
          console.log(users[1]);
          const myfetchData = async () => {
            const {data} = await tmdb.post(`list?session_id=${tmdbConfig.sessionId}`,{
              name : user.email,
              description: "List collection",
              language: "en"
            });
            if (data){
              saveIdListMovies(user.displayName+','+data.list_id);
            }
            console.log(data);
          }
          myfetchData();
          
          console.log('masuk');
        }
      } else {
        // User is signed out
        // ...
      }
    });
  },[])
  return (
    <>
    <HomeCarrousel/>
    <section>
    <Popular/>
    <NowPlaying/>
    <PopularIndonesia/>
    </section>
    </>
  )
}

export default HomePage