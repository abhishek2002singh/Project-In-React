import { useEffect } from 'react'
import {API_OPTION} from './constant'
import { useDispatch } from 'react-redux'
import { addPopularMovies, addTreandingMovies} from "./moviesSLice"


const useNowTreandingMovies=()=>{
    const dispatch=useDispatch();

    const getTreandingMovies=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTION)
      const json=await data.json();
    //  console.log(json.results)
      dispatch(addTreandingMovies(json.results))
    };
  
    useEffect(()=>{
      getTreandingMovies();
  
    },[])
}

export default useNowTreandingMovies;