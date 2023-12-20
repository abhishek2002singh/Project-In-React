import { useState } from 'react'
import {Link} from 'react-router-dom'
import useOnlineStatus from '../Hooks/useOnlineStatus'

const Nav=()=>{

    const [sign , setsign]=useState("Log in") 
    const onlineStatus=useOnlineStatus();

    return(
        <div className="bg-white-300  w-full h-20  ">
            

            

            <div className="flex justify-around items-center">
                <div>
                    <img className="h-14 w-14 rounded-full m-3" src="data:image/jpeg;base64,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" alt="" />
                </div>
                <div className="text-black-700 w-1/2 ">
                    <ul className="flex justify-around  " >
                        <li>
                            Online status {onlineStatus? "✅" :"🔴"}
                        </li>
                        <li className="bg-white-300 hover:text-orange-600 active:text-orange-600 focus:outline-none  cursor-pointer text-lg">
                            <Link to="/">
                                 Home
                            </Link>
                           
                            
                            </li>
                        <li className="bg-white-300 hover:text-orange-600 active:text-orange-600 focus:outline-none  cursor-pointer text-lg">
                            <Link to="/About">
                                About 
                            </Link>
                            
                            </li>
                        <li className="bg-white-300 hover:text-orange-600 active:text-orange-600 focus:outline-none  cursor-pointer text-lg"
                        >
                            <Link to="/Content">
                            Content
                            </Link>
                           
                            
                            </li>

                        <li className="bg-white-300 hover:text-orange-600 active:text-orange-600 focus:outline-none  cursor-pointer text-lg"
                        
                        onClick={()=>{
                            sign==="Log in"?
                            setsign("Log out"):
                            setsign("Log in")
                          
                        }}

                        >{sign}</li>
                        <li>
                            <Link to='/glosery'>
                                Glosery
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
       
    )
}


export default Nav