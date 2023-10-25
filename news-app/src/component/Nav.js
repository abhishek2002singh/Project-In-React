import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='fixed top-0   w-full'  >
        <ul className='flex justify-around cursor-pointer  p-5  bg-slate-400 '>
            <li>NewsMonkey</li>
            <li>
              <Link to="/">Home
              </Link></li>
            <li>
              <Link to="/Business">
              Business
              </Link>
              </li>
            <li>
            <Link to="/Entertainment">
            Entertainment
            </Link>
            </li>
            <li>
              <Link to="/General">General
              </Link></li>
              <li>
              <Link to="/Health">Health
              </Link></li>
              <li>
              <Link to="/Science">Science
              </Link></li>
              <li>
              <Link to="/Sports
               ">Sports

              </Link></li>
              <li>
              <Link to="/Technology">Technology
              </Link></li>
              <li></li>


            
        </ul>


    </div>
  )
}

export default Nav