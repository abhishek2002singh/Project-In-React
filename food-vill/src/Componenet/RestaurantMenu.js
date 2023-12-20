import React from 'react'

import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';

import useRestaurantCard from '../Hooks/useRestaurantCard';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {

   

    const {resid}=useParams();
   // console.log(resid)

   const resMenu=useRestaurantCard(resid);

   
    if(resMenu===null)
    {
        return  <Shimmer />
    }

    const {name,avgRatingString,costForTwo   }=resMenu?.cards[2]?.card?.card?.info ;

      const {itemCards}=resMenu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
        //console.log(resMenu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

       const categories=resMenu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

      // console.log(categories)
    


  return (
    <div className='text-center '>
      {/* <h1 className='text-red-500 text-2xl font-bold underline'>Menu</h1> */}

       <h1 className='text-2xl font-bold my-6'>{name}</h1>
       <h2 className='text-lg font-bold space-x-2'>{"Rating : "+avgRatingString}{"Price of items : "+costForTwo/100}</h2>
       
        {/* //category */}

        {/* category make use accordiens */}

        {/* for more learn search accordiens */}

        {
          categories.map((category)=><RestaurantCategory data={category?.card?.card} />)
        }


  

 
  
        {/* <ul >

           
           {
                itemCards.map((item)=>(
                    <li key={item.card.info.id}> {item.card.info.name} - {item.card.info.price/100}</li>

                ))
           }

        </ul> */}



    </div>
  )
}

export default RestaurantMenu