import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../utils/useNowPlayingMovies' 
import MainConterner from './MainConterner'
import SecondryContainer from './SecondryContainer'
import useNowPopularMovies from '../utils/useNowPopularMovies'
import useNowTreandingMovies from '../utils/useNowTreandingMovies'
import useTopRatingMoviesP from '../utils/useTopRatingMoviesP'


const Browse = () => {
    
     useNowPlayingMovies();
     useNowPopularMovies()
     useNowTreandingMovies()
     useTopRatingMoviesP()

  return (
    <div>
      <Header />
      <MainConterner />
      <SecondryContainer />
    </div>
  )
}

export default Browse