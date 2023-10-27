import React, { useRef } from 'react'
import Header from './Header'
import {  createUserWithEmailAndPassword ,  signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from '../utils/Firebase'


import { useState } from 'react';
import { BACKGROUND_IMAGE_URL , } from '../utils/consts'
import { checkValidaData } from '../utils/Validate';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {

  

  const [isChecked, setIsChecked] = useState(false);
  const [method , setmethod]= useState(true)
  const [errormassage , seterrormassage]=useState(null)
  const navigate=useNavigate();

  const email=useRef(null);
  const password=useRef(null);
  const name=useRef(null);

  const handleButtonClick= ()=>{
    //validate the data
    
    // console.log(email.current.value)
    // console.log(password.current.value)
    const massage=checkValidaData(email.current.value , password.current.value)
    // console.log(massage);
    seterrormassage(massage)

    if(massage) return

    if(!method){
       //sign up logic
       createUserWithEmailAndPassword(auth, email.current.value , password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: "name.current.value", photoURL: "https://avatars.githubusercontent.com/u/108977081?v=4"
    }).then(() => {
      // Profile updated!
      // ...

      console.log(user)
      navigate("/browse")
    }).catch((error) => {
      // An error occurred
      // ...
      seterrormassage(error.massage);
    });
    
   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormassage(errorCode+"-"+errorMessage)
  });


    }
    else{

      signInWithEmailAndPassword(auth, email.current.value , password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...

    console.log(user)
    navigate("/browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    seterrormassage(errorCode+"-"+errorMessage)
  });

    }
  }

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

      <form onSubmit={(e)=>e.preventDefault()} className=' w-[450px] p-12 bg-black absolute mt-20 mx-auto right-0 left-0 text-white rounded'>
        <h1 className='font-bold text-3xl py-4'>{method ? "Sign-In" : "Sign-Up"}</h1>
        {!method&&<input ref={name} type='text' placeholder='User-name' className=' p-3 my-4 w-full bg-slate-800 rounded' />}
        <input ref={email} type='text' placeholder='E-mail Address' className=' p-3 my-4 w-full bg-slate-800 rounded' />
        <input ref={password} type='Password' placeholder='Password' className='p-3 my-4 w-full bg-slate-800 rounded ' />
         <p className='text-red-500'>{errormassage}</p>
        <button className='p-4 my-4 bg-red-700 w-full rounded' 
        
        onClick={handleButtonClick}

        >{method ? "Sign-In" : "Sign-Up"}</button>
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