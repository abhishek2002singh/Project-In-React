import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../utils/useNowPlayingMovies' 
import MainConterner from './MainConterner'
import SecondryContainer from './SecondryContainer'
import useNowPopularMovies from '../utils/useNowPopularMovies'


const Browse = () => {
    
     useNowPlayingMovies();
     useNowPopularMovies()

  return (
    <div>
      <Header />
      <MainConterner />
      <SecondryContainer />
    </div>
  )
}

export default Browse