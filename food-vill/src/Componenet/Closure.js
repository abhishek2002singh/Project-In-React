// import Main from "./Main";
import { useContext } from "react";
import UserContext from "../Utils/UserContext";

import Main from "./Main";


export const Closure=(props)=>{

    const data=useContext(UserContext);
    const {clue}=props;
    return(
        
           
             <div className="text-center">
            <div className=""><img className="h-72 w-96 rounded-3xl m-5" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+clue.info.cloudinaryImageId} alt="" /></div>
            <div className="">
                <h3>{clue.info.name}</h3>
                <h3>{clue.info.avgRating}</h3>
                <h3>{clue.info.costForTwo}</h3>
                <h2 className="font-bold">{data.user.name}</h2>
                <h1 className="font-bold">{data.user.Email}</h1>
                
            </div>
            
          
            

        
        </div>

       
        
    )
}

// export const RestaurantPromotLevel=(Restaurant)=>{
//     return()=>{
//         return(
//             <div>
//                 <label>Prometed</label>
//                 <Main />
//             </div>
//         )

//     }
// }



export default Closure