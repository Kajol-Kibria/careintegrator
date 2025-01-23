'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
    const navarray= [
        {
          name:'Home',
          path:'/#hero',
        },
        {
          name:'About',
          path:'/#about',
        },
        {
          name:'Portfolio',
          path:'/#portfolio',
        },
        {
          name:'Contact',
          path:'/#contact',
        },
        {
          name:'Blogs',
          path:'/blogs',
        },
        
        
      ];
      const [menu, setMenu] = useState(false);
  return (
    <div >
        <div className='z-50 relative flex items-center justify-center  '>

<div className=' bg-gray-50/65 backdrop-blur-md hidden sm:block fixed py-3 px-44 top-0 w-full'>
  <div className='flex items-center justify-between'>

  <div className='ml-5'>
    <Image src='/logocare1.png' alt='' width={130} height={130}/>
  </div>
  <div>

  <div className='flex gap-6 font-semibold text-gray-800'>
    {navarray.map(({name, path})=>{return(
      <div key={name}>
        <Link href={path}>{name}</Link>
      </div>
    )})}
    </div>
  </div>
  
  </div>
</div>





  <div className=' sm:hidden block fixed top-0 right-0 left-0 '>
    <div className=' py-5 bg-gray-50/75 backdrop-blur-md  flex justify-between items-center'>

    <Image className=' ml-6' src='/logocare1.png' alt='' width={130} height={130}/>
    <div  onClick={()=>{setMenu(!menu)}}>
      <HiMenuAlt4 className={`${menu?'hidden':'block'} mx-3`} size={35}/>
      <IoClose className={`${menu?'block':'hidden'} mx-3`} size={35}/>
      
    </div>
    </div>
    <div onClick={()=>{setMenu(!menu)}} className={`${menu?'-my-3':'-my-[550px]'} py-8 shadow-lg bg-[#f6f6f6] font-bold text-gray-800 transition-all duration-700`}>
      <div className='grid gap-8 items-center justify-center text-center py-6'>
      {navarray.map(({name, path})=>{return(
      <div key={name}>
        <Link href={path}>{name}</Link>
      </div>
    )})}
      </div>
      <div className='flex items-center justify-center'>
    <a className=' hover:bg-black transition-all duration-300 text-white bg-[#023382] py-4 px-20 rounded-full' download href="./Manohar-Kamalapurkar-MBA.pdf">Download CV</a>

      </div>
    </div>
  </div>

</div>
    </div>
  )
}
