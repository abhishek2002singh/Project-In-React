
import React from 'react';
import { useState , useEffect } from 'react';
import Closure from './Closure';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom'




const Main = () => {

    const [se,ser]=useState([])  
    
    const [search, setsearch]=useState()

    const[filtered ,setfiltered ]=useState([])
  

    useEffect(()=>{
       fetchData();
    } , [])


    const fetchData=async()=>{
       const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       const json=await data.json();
       console.log(json)
         ser(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
         setfiltered(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)      ;                                                                                                                                                                                                                                                                                                                 
    }
if(se.length===0)
{
   return <Shimmer/>
  
}
   
 return(
    <div className='bg-slate-100 h-full w-full pt-8'>
        <div className='pl-8 pr-8'>
          <div>
               <h2 className='text-2xl'>Best offer for you</h2>
               <button className='bg-red-500 ml-4 pl-4 pr-4 pt-2 pb-2 rounded-sm text-2xs '
                 onClick={()=>{
                  let filterdata=se.filter(res=>
                     res.info.avgRating>4.2
                     );
                     setfiltered(filterdata)
                     
                  }}
               >top restaurant</button>

               <input type="text"
                  placeholder='search item'
                  value={search}
                   className='m-4 p-2'
                  onChange={(e)=>{
                     setsearch(e.target.value)

                  }}


               />

               <button onClick={()=>{
                    let filt=se.filter(re=>
                        re.info.name.includes(search)
                    )
                    setfiltered(filt);
                    
                    console.log("hii")
                }}   className='m-4 p-2 rounded-2xl bg-red-500'>
                    search</button>

               
             
               
          </div>

          <div className='flex flex-wrap justify-center'>

          {filtered.map((restaurant) => (
            <Link key={restaurant.info.id} to={"/Restaurants/"+restaurant.info.id}>
             <Closure  clue={restaurant}/></Link>
            
                            
                            
                       
                    ))}

          </div>

         
        
        </div>

    </div>
 )
}

export default Main