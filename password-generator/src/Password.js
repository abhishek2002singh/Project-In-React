// import React from 'react'
// import { useState , useEffect ,useCallback ,useRef } from 'react';



// const Password = () => {


//   // const length=10;

//   const [count , setcount]=useState(8)

//   const [numberAllow , setnumberallow]=useState(false);

//   const [character , setcharater]=useState(false)

//   const [pass , setpass]=useState("")

//   //useRef hook
// const passwordref=useRef(null)
 

//   const PasswordGenerator=()=>{
//     let pas=""

//     let str="ABCDEFFHIJKLMNOPQRSTUVWXYXabcdefghijklmnopqrstuvwxyz"

//     if(numberAllow){
//       str+="1234578960";
//     }

//     if(character)
//   {
//     str+="!@#$%^&*[]{}'~";
//   }

//   for(let i=1;i<=count;i++){
//     let char=Math.floor(Math.random()*str.length)

//     pas +=str.charAt(char);
//   }

//   setpass(pas);

//   } 

//   const copypasswordtoclipboard= useCallback(()=>{

//          passwordref.current?.select();
//         //  passwordref.current?.setSelectionRange(0,3);
//         window.navigator.clipboard.writeText(pass)
//   } , [pass])

//   useEffect(()=>{
//     PasswordGenerator()

//   } , [count , numberAllow ,character ,setpass  ])

//   return (
//        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-600'>

//         <h1 className=' text-center text-white text-center my-3'>Password generator</h1>
    

//         <div className='flex shadow rounded-lg overflow-hidden mb-4'>

//           <input type="text" value={pass} className='outline-none w-full py-1 px-3'  placeholder='password' readOnly  ref={passwordref}/>

//           <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
             
//              onClick={copypasswordtoclipboard}
           
//           >copy</button>

//         </div>

//         <div className='flex text-sm gap-x-2'>

//           <div className='flex items-center gap-x-1'>

//             <input type="range"   min={6} max={100} value={count} className='curser-pointer'
//                 onChange={(e)=>{
//                   setcount(e.target.value);
//                 }}
//             />
//             <label>
//               length: {count}
//             </label>

//           </div>

//           <div className='flex items-center gap-x-1'>
//             <input type="checkbox"  defaultChecked={numberAllow} id='numberInput'  onChange={()=>{
//               setnumberallow((prev)=>
//                 !prev
//               )
//             }}/>
//             <label htmlFor='numberInput'>
//                   numbers
//             </label>

//           </div>

//           <div className='flex items-center gap-x-1'>
//             <input type="checkbox"  defaultChecked={character} id='characterInput'  onChange={()=>{
//               setnumberallow((prev)=>
//                 !prev
//               )
//             }}/>
//             <label htmlFor='numberInput'>
//                  character
//             </label>

//           </div>

//         </div>
          
//        </div>
//   )
// }

// export default Password



import React, { useState, useEffect } from 'react';

const Password = () => {
  const [count, setCount] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [character, setCharacter] = useState(false);
  const [pass, setPass] = useState('');

  const PasswordGenerator = () => {
    let newPassword = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllow) {
      characters += '1234567890';
    }

    if (character) {
      characters += '!@#$%^&*[]{}\'~';
    }

    for (let i = 0; i < count; i++) {
      const charIndex = Math.floor(Math.random() * characters.length);
      newPassword += characters.charAt(charIndex);
    }

    setPass(newPassword);
  };

  useEffect(() => {
    PasswordGenerator();
  }, [count, numberAllow, character]);

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-600'>
      <h1 className='text-center text-white my-3'>Password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type="text"
          value={pass}
          placeholder='password'
          className='outline-none w-full py-1 px-3'
          readOnly
        />
        <button
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={() => {
            navigator.clipboard.writeText(pass);
          }}
        >
          Copy
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={100}
            value={count}
            className='cursor-pointer'
            onChange={(e) => {
              setCount(e.target.value);
            }}
          />
          <label>Length: {count}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={numberAllow}
            id='numberInput'
            onChange={() => {
              setNumberAllow((prev) => !prev);
            }}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={character}
            id='characterInput'
            onChange={() => {
              setCharacter((prev) => !prev);
            }}
          />
          <label htmlFor='characterInput'>Character</label>
        </div>
      </div>
    </div>
  );
};

export default Password;
