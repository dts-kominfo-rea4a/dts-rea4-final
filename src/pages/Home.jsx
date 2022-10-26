import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../apis/imdb'

const Home = () => {

  return (
    <>
      <Main />
      <Row rID='2' movie='Popular' fetch={requests.reqPopularMovies}/>
      <Row rID='4' movie='Top Rated' fetch={requests.reqTopRated}/>
      <Row rID='3' movie='Up Coming' fetch={requests.reqUpComing}/>
      <Row rID='1' movie='Now Playing' fetch={requests.reqNowPlaying}/>
    </>
  )
}

export default Home