import React from 'react'
import MoviesList from './MoviesList'
import {useSelector} from 'react-redux'

const SecondryContainer = () => {

  const movies=useSelector((store)=>store.movies)

  return movies.nowPlayingMovies && (
    <div className='-mt-24 relative'>
      <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MoviesList title={"Tranding Movies"} movies={movies.nowPlayingMovies} />
      <MoviesList title={"Popular Movies"} movies={movies.PopularMovies} />
      <MoviesList title={"Up Coming Movies"} movies={movies.nowPlayingMovies} />
      <MoviesList title={"Horer Movies"} movies={movies.nowPlayingMovies} />
    </div>
  )
}

export default SecondryContainer