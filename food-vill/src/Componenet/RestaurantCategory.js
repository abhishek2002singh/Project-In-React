import ItemsList from "./ItemsList"
import {useState } from 'react'

const RestaurantCategory=({data})=>{
    // console.log({...props})
   //  console.log(data)

   const [showItems , setshowItems]=useState(false)

   const handleClick =()=>{
      setshowItems(!showItems)
   }

    return <div>
             {/* accordiens header */}
                     <div className="w-1/2 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
                     <div className="flex justify-between cursor-pointer" 
                     
                         onClick={handleClick}

                     >
                        <span className="font-bold text-lg">
                           {data.title}   ({data.itemCards.length})
                        </span>
                        <span>
                            ⬇️
                        </span>
                        </div>
                          {showItems && <ItemsList items={data.itemCards} />}
                     </div>
             {/* accordiens body */}
            

        </div>
    
}

export default RestaurantCategory