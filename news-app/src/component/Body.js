import React from 'react'
import Closure from './Closure'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect ,useState } from 'react'
import {API_URL} from '../Utils/Api'
import { API_SEC_URL } from '../Utils/Api'

const Body = (props) => {
  const category = props.category

  

    const [news , setnews]=useState([])
    
   


    const fetchData=async()=>{
        const data=await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=fa64d9a275a04f9091203ae6779054f8`)
        const json=await data.json();
        console.log(json);
        setnews(json.articles)
        // console.log(news)
        // console.log("hii")


       
    }

  

    useEffect(()=>{
        fetchData();
     } ,[category])

  return (
    <div>
      <div className='flex flex-wrap justify-center m-2 '>

      {
        news.map((count)=>
            <Closure Clu={count} />
        )
      }

      </div>
     


    </div>
  )
}

export default Body