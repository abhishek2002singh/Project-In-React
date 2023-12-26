import {IMG_ITEMS_CARD} from '../Utils/Constants'

const ItemsList=({items})=>{
    console.log(items)
    return(

        <div>
        {/* category Items  */}

        {
            items.map((item)=>(
               <div  key={item.card.info.id} className="text-left p-2 m-2 border-gray-200 border-b-2  mb-12 mt-12 space-y-2 " >

                     
                  

                <div  className="flex justify-between ">
                      <div >
                        <span className="text-xl font-bold ">
                           {item.card.info.name}
                       </span>
                       <span className="text-xl ">
                           ₹- {item.card.info.price/100}
                         </span>
                         <p className="text-xs text-gray-500 mb-12 w-11/12">{item.card.info.description}</p>
                      </div>
                    
                    <div>
                       <img  src={IMG_ITEMS_CARD+item.card.info.imageId} alt="" />
                   </div>
                </div>
                     
              
            

               </div>
            ))
        }
       
    </div>

    )

    
}

export default ItemsList