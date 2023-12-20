import { useEffect } from 'react'
import {API_OPTION} from './constant'
import { useDispatch } from 'react-redux'
import { addTopRatingMovies} from "./moviesSLice"


const useTopRatingMoviesP=()=>{
    const dispatch=useDispatch();

    const getTopRatingMovies=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTION)
      const json=await data.json();
    //  console.log(json.results)
      dispatch(addTopRatingMovies(json.results))
    };
  
    useEffect(()=>{
      getTopRatingMovies();
  
    },[])
}

export default useTopRatingMoviesP;