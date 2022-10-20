import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'

const Home = () => {
  

  return (
    <>
      <Main />
      <Row title='Now Playing' />
      <Row title='Popular'/>
      <Row title='UpComing' />
      <Row title='Latest' />
      <Row title='Top Rated' />
    </>
  )
}

export default Home