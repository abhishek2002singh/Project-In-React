import React from 'react'
import { signOut } from "firebase/auth";
import {auth} from '../utils/Firebase'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';
import {  onAuthStateChanged } from "firebase/auth";

import {useDispatch} from 'react-redux'
import {addUser, removeUser} from '../utils/userSlice'
import  { useEffect } from 'react'


const Header = () => {

  const navigate=useNavigate();
  const user=useSelector(store=>store.user);
  const dispatch=useDispatch()

  const HandalSignOut=()=>{
    
signOut(auth).then(() => {
  // Sign-out successful.
  navigate("/")
  
}).catch((error) => {
  // An error happened.
  navigate("/error")
});
  }


  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        const {uid,email , displayName ,photoURL} = user;
        dispatch(addUser({uid: uid , email: email , displayName:displayName , photoURL: photoURL}))
        // ...
       navigate("/browse")
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/")
      
      }
    });

    return ()=>unsubscribe();
  },[])
  return (
    <div className='flex justify-between w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
      <div className='flex '>
         <img className='w-20 '  src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
       { user && <ul className='flex  cursor-pointer text-[15px] text-white'>
          <li className='m-2  '>Home</li>
          <li className='m-4  '>TV Shows</li>
          <li className='m-4  '>Movies</li>
          <li className='m-4 '>News & Popular</li>
          <li className='m-4 '>My List</li>
          <li className='m-4 '>Browse by Languages</li>
         </ul>}
      </div>

      {user&&<div className='flex pr-10 m-4 '>
        <ul className='flex '>
          <li className='pr-4'>kamal</li>
          <li className='pr-4'>lalu</li>
          <li className='pr-4'>
            <img className='w-12 h-12 rounded-full' src={user?.photoURL} alt="" />
          </li>
          <li onClick={HandalSignOut} className='pr-4'>Logout</li>
        </ul>
      </div>}

    </div>

  )
}

export default Header