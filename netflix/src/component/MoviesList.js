
import MoviesCards from './MoviesCards'


const MoviesList = ({title , movies}) => {

  
    console.log(movies)


  return (
    <div className='flex overflow-x-scroll bg-black'>
        <div>
            <h1 className='text-4xl font-bold py-5 text-white'>{title}</h1>

            <div className='flex gap-4'>

            {movies?.map(movie=> <MoviesCards key={movie.id} posterPath={ movie.poster_path} />)}
              
            </div>
            
           
           
               
          

            </div>
        </div>
    
  )
}

export default MoviesList