import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { GiCheckMark } from "react-icons/gi";
import { BsSend } from "react-icons/bs";
import { GoArrowUpRight } from "react-icons/go";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { GrCycle } from "react-icons/gr";



export default function Home() {
  return (
    <div className='sm:w-[80vw] w-[95vw] mx-auto'>

       
      <div id='hero' className=' pt-44 sm:flex items-center justify-around'>
      
      <Image className='sm:block hidden  absolute left-0 top-[700px] ' src='/image-removebg-preview (1).png' width={150} height={150} alt='image'/>
      <Image className='sm:block hidden  absolute left-36 top-16 rotate-180' src='/image-removebg-preview.png' width={250} height={250} alt='image'/>
      <Image className='sm:block hidden  absolute right-[520px] top-36' src='/Screenshot_3-removebg-preview.png' width={150} height={150} alt='image'/>
      <Image className='sm:block hidden opacity-10 absolute right-40 bottom-10' src='/PngItem_85242.png' width={150} height={150} alt='image'/>
      <Image className='sm:hidden block w-full mx-auto -mt-16 mb-6' src={'/pic4.jpeg'} width={350} height={350} alt='image'/>
        <div>
          <p className='text-[#023382] font-bold text-md flex items-center gap-1'><GiCheckMark/>Product Director</p>
          <p className='text-[#222230] sm:text-7xl text-4xl font-bold'>Hy! I am</p>
          <p className='text-[#2d2d2d] sm:text-6xl text-5xl sm:my-4 my-2 font-bold'>Manohar Kamalapurkar</p>
          <p className='text-gray-800 sm:w-[30vw]'>My blend of strategic foresight, 
            technical expertise, and operational excellence 
            ensures impactful solutions that drive
            efficiency, improve patient outcomes, and support organizational goals.</p>
          <div className='flex items-center gap-4 my-10 font-semibold'>
            <Link href='/#contact' className='flex items-center gap-3 hover:bg-white hover:text-[#023382] transition-all duration-300 text-white bg-[#023382] py-2 px-6 border border-[#023382] rounded-lg' >Let&apos;s Talk<BsSend/></Link>
            <Link href='/blogs' className='flex items-center gap-3 hover:bg-[#023382] hover:text-white transition-all duration-300 text-black border border-[#023382]  py-2 px-6 rounded-lg' >My Blogs<GoArrowUpRight/></Link>
          </div>

        </div>
        <div className='flex items-center justify-center  relative sm:mr-20'>
          <div className='sm:block hidden  bg-[#1873a7]/70 absolute bottom-1 -z-40 w-[540px] h-[540px]  rounded-full'></div>
          <Image className='sm:block hidden  rounded-b-full ' src={'/pic4-removebg.png'} width={520} height={520} alt='image'/>
        </div>

      </div>

      




      <div id='about' className=' h-screen py-28'>
        <p  className='text-center font-bold text-3xl '>About Me</p>
        
        
      </div>






      <div id='portfolio' className='h-screen py-28'>
      <p  className='text-center font-bold text-3xl '>My Portfolio</p>
      </div>
      <div id='contact' className='h-screen py-28'>
      <p  className='text-center font-bold text-3xl '>Contact Me</p>
      </div>
    </div>
  )
}
