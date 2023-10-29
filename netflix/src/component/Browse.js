import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../utils/useNowPlayingMovies' 
import MainConterner from './MainConterner'
import SecondryContainer from './SecondryContainer'


const Browse = () => {
    
     useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainConterner />
      <SecondryContainer />
    </div>
  )
}

export default Browse