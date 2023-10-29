import React from 'react'
import { useState , useEffect } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { SEC_URL } from '../Utils/Constants';

const RestaurantMenu = () => {

    const [resMenu , setresMenu]=useState(null);

    const {resid}=useParams();
   // console.log(resid)

    const fetchMenu =async()=>{
        const dt=await fetch(SEC_URL+resid)

        const json=await dt.json();

        //console.log(json)
         setresMenu(json.data)
    }

    

    useEffect(()=>{
        fetchMenu();
    }, [])

    if(resMenu===null)
    {
        return  <Shimmer />
    }

    const {name,avgRatingString,costForTwo   }=resMenu?.cards[0]?.card?.card?.info ;

      const {itemCards}=resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
      //  console.log(itemCards)
    
  return (
    <div>
      <h1 className='text-red-500 text-2xl font-bold underline'>Menu</h1>

       <h1 className='text-2xl font-bold'>{name}</h1>
       <h2 className='text-xl font-bold'>{"Rating : "+avgRatingString}{"Price of items : "+costForTwo/100}</h2>
       
  

 
  
        <ul >

           
           {
                itemCards.map((item)=>(
                    <li key={item.card.info.id}> {item.card.info.name} - {item.card.info.price/100}</li>

                ))
           }

        </ul>



    </div>
  )
}

export default RestaurantMenu