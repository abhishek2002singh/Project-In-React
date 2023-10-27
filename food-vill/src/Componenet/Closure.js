// import Main from "./Main";


export const Closure=(props)=>{
    const {clue}=props;
    return(
        
           
             <div className="text-center">
            <div className=""><img className="h-72 w-96 rounded-3xl m-5" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+clue.info.cloudinaryImageId} alt="" /></div>
            <div className="">
                <h3>{clue.info.name}</h3>
                <h3>{clue.info.avgRating}</h3>
                <h3>{clue.info.costForTwo}</h3>
                
            </div>
            
          
            

        
        </div>

       
        
    )
}



export default Closure