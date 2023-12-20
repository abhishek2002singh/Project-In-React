import { useState , useEffect } from "react";
import { SEC_URL } from '../Utils/Constants';

const useRestaurantCard=(resid)=>{

    const [resMenu ,setresMenu]=useState(null)

    const fetchMenu =async()=>{
        const dt=await fetch(SEC_URL+resid)

        const json=await dt.json();

        console.log(json)
         setresMenu(json.data)
    }

    

    useEffect(()=>{
        fetchMenu();
    }, [])

    return resMenu


}

export default useRestaurantCard