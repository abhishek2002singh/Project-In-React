import React from 'react'
import Header from './Header'


import { useState } from 'react';
import { BACKGROUND_IMAGE_URL , } from '../utils/consts'

const LogIn = () => {

  

  const [isChecked, setIsChecked] = useState(false);
  const [method , setmethod]= useState(false)

  const levelup=()=>{
    setmethod(!method)
  }

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div  >
      
      <Header />

      <div
        className="absolute inset-0 w-full h-full bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${BACKGROUND_IMAGE_URL})` }}
      ></div>

      <form className=' w-[450px] p-12 bg-black absolute mt-20 mx-auto right-0 left-0 text-white rounded'>
        <h1 className='font-bold text-3xl py-4'>{method ? "Sign-In" : "Sign-Up"}</h1>
        {!method&&<input type='text' placeholder='User-name' className=' p-3 my-4 w-full bg-slate-800 rounded' />}
        <input type='text' placeholder='E-mail Address' className=' p-3 my-4 w-full bg-slate-800 rounded' />
        <input type='Password' placeholder='Password' className='p-3 my-4 w-full bg-slate-800 rounded ' />
        <button className='p-4 my-4 bg-red-700 w-full rounded'>{method ? "Sign-In" : "Sign-Up"}</button>
        <div className='flex justify-between'>
            <label>
                 <input
                    className='p-2'
                    type="checkbox"
                    checked={isChecked}
                     onChange={handleCheckboxChange}
                 />
                      Remember me
             </label>
             <div>
              <p>Need help?</p>
             </div>
      
        </div>
        <div className='mt-10'>
          <p className='text-gray-500 text-[1.1rem]'>New to Netflix?<span onClick={levelup} className='text-white cursor-pointer hover:underline'>{method ? "Sign Up now." : "Sign In now."}.</span></p>
          <p className='text-[0.8rem]'>This page is protected by Google reCAPTCHA to ensure you're not a bot <span className='text-green-500'>Learn more</span></p>
        </div>
      </form>

      
      
    </div>
  
  )
}

export default LogIn