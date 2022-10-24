import React from 'react';
import HomeCarrousel from "../components/Home/HomeCarrousel"
import NowPlaying from '../components/Home/NowPlaying';
import Popular from '../components/Home/Popular';
import PopularIndonesia from '../components/Home/PopularIndonesia';
function HomePage() {
  return (
    <>
    <HomeCarrousel/>
    <Popular/>
    <NowPlaying/>
    <PopularIndonesia/>
    </>
  )
}

export default HomePage