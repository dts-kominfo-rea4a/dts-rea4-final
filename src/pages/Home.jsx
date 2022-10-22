import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../apis/imdb'

const Home = () => {

  return (
    <>
      <Main />
      <Row rID='1' movie='Now Playing' fetch={requests.reqNowPlaying}/>
      <Row rID='2' movie='Popular' fetch={requests.reqPopularMovies}/>
      <Row rID='3' movie='UpComing' fetch={requests.reqUpComing}/>
      <Row rID='4' movie='Top Rated' fetch={requests.reqTopRated}/>
    </>
  )
}

export default Home