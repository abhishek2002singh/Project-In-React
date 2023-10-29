import {  useSelector } from 'react-redux'
import useMovieTrailer from '../utils/useMovieTrailer';


const VideoBackground = ({moviesId}) => {

  //same work perform throw redux and useState
   //const [TrailerId , setTrailerId]=useState(null);

   //or

   const trailerVideos=useSelector(store=>store.movies?.trailerVideos);
   
   useMovieTrailer(moviesId);
  
  return (
    <div>
      <iframe width="560" height="315" src={"https://www.youtube.com/embed/Cm3Z1jEjHHc?si="+trailerVideos?.key} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
     
    </div>
  )
}

export default VideoBackground