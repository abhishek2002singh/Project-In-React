import { useEffect } from 'react'
import {API_OPTION} from './constant'
import { useDispatch } from 'react-redux'
import { addPopularMovies} from "./moviesSLice"


const useNowPopularMovies=()=>{
    const dispatch=useDispatch();

    const getPopularMovies=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTION)
      const json=await data.json();
    //  console.log(json.results)
      dispatch(addPopularMovies(json.results))
    };
  
    useEffect(()=>{
      getPopularMovies();
  
    },[])
}

export default useNowPopularMovies;