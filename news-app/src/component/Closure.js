import React from 'react'


const Closure = (props) => {
    const {Clu}=props;
  return (
    <div  className='h-[450px] w-96 m-5 '>
      <div >
        <img className=" h-80 w-96 rounded-3xl p-3 m-2 " src={Clu.urlToImage} alt="" />
      </div>
      <div >
      <h1 className='font-bold  m-2 text-center '>{Clu.title}</h1>
      <h4 className='text-red-700 m-2 text-center '>{Clu.source.name}</h4>
      <button  
    
             

      className='  p-1 '>click for more read</button>

      
      



      </div>
         
          
        
    </div>
  )
}

export default Closure