import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { GiCheckMark } from "react-icons/gi";
import { BsSend } from "react-icons/bs";
import { GoArrowUpRight } from "react-icons/go";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter, FaWhatsapp  } from "react-icons/fa";
import { RiMastercardFill } from "react-icons/ri";
import { IoArrowForwardCircle } from "react-icons/io5";


import { IoMail } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { GrCycle } from "react-icons/gr";




export default function Home() {
  return (
    <div className=''>

       
      <div id='hero' className='sm:px-0 px-4 sm:h-screen herobg pt-44 sm:flex items-center justify-around'>
      
      <Image className='sm:block hidden  absolute right-[700px] top-[290px] ' src='/arrow2.png' width={120} height={120} alt='image'/>
      <Image className='sm:block hidden  absolute left-16 top-[690px] ' src='/arrow.png' width={120} height={120} alt='image'/>
      <Image className='sm:block hidden  absolute left-36 top-16 rotate-180' src='/image-removebg-preview.png' width={250} height={250} alt='image'/>
      <Image className='sm:block hidden  absolute right-[850px] top-28 ' src='/Screenshot_3-removebg-preview.png' width={150} height={150} alt='image'/>
      <Image className='sm:block hidden opacity-10 absolute right-40 bottom-10' src='/PngItem_85242.png' width={150} height={150} alt='image'/>
      <Image className='sm:hidden block w-full mx-auto -mt-16 mb-6' src={'/pic4.jpeg'} width={350} height={350} alt='image'/>
        <div className='sm:w-1/3 sm:pl-48'>
          <p className='text-[#FF5F49] font-bold text-md flex items-center gap-1'><GiCheckMark/>Product Director</p>
          <p className=' bold sm:text-6xl text-5xl sm:my-4 my-2 '>It&apos;s Manohar</p>
          <p className=' bold sm:text-6xl text-4xl sm:my-4 my-2 '>Kamalapurkar</p>
          <p className=' sm:w-[22vw]'>My blend of strategic foresight, 
            technical expertise, and operational excellence 
            ensures impactful solutions that drive
            efficiency, improve patient outcomes, and support organizational goals.</p>
          
          <div className='space-x-5 my-10'>
            <a className='text-[#FF5F49] border-2 border-[#FF5F49]/35 inline-block p-2' href=''><FaLinkedinIn size={17}/></a>
            <a className='text-[#FF5F49] border-2 border-[#FF5F49]/35 inline-block p-2' href=''><FaTwitter size={17}/></a>
            <a className='text-[#FF5F49] border-2 border-[#FF5F49]/35 inline-block p-2' href=''><FaWhatsapp size={17}/></a>
            <a className='text-[#FF5F49] border-2 border-[#FF5F49]/35 inline-block p-2' href=''><RiMastercardFill size={17}/></a>
          </div>

        </div>
        <div className='sm:w-1/3'>
          <Image className='sm:block hidden ' src={'/pic4-removebg.png'} width={520} height={520} alt='image'/>
          <div className='pb-10 flex items-center sm:-translate-x-10 sm:-translate-y-10'>
            <div className= 'px-1 text-center w-1/3 sm:w-48 h-28  content-center bg-[#f0e0ff] inline-block rounded-l-xl '>
              <p className='bold text-2xl'>14+ </p>
              <p className=''>Years Experience</p>
            </div>
            <div className='px-1 border-l-4 border-r-4 border-white text-center sm:w-48 w-1/3 h-28  content-center bg-[#f0e0ff] inline-block  '>
              <p className='bold text-2xl'>250+</p>
              <p className=''>Project Completed</p>
            </div>
            <div className='px-1 text-center w-1/3 sm:w-48 h-28  content-center bg-[#f0e0ff] inline-block rounded-r-xl '>
              <p className='bold text-2xl'>58</p>
              <p className=''>Happy Clients</p>
              
            </div>
          </div>

        </div>
      <div className='sm:w-1/4 sm:-translate-x-48 sm:-translate-y-40'>
      <p className='text-[#FF5F49]  font-semibold  text-md sm:my-4 my-2 uppercase'>Formal introduction</p>
      <p className=' bold  sm:text-2xl text-xl sm:my-4 my-2 '>Hello, I am Manohar Kamalapurkar, Product Director at The Care Integrator</p>
      <p className=' regular  text-md sm:my-4 my-2 '> demo text demo text demo text demo text demo text demo textdemo text demo text demo text</p>
      <button>
      <Link className='my-4 text-sm flex items-center gap-3 text-white bg-[#FF5F49] px-6 py-4 bold' href='/#about'>Read About Me<IoArrowForwardCircle size={24}/></Link>
      </button>
      </div>
      </div>

      




      <div id='about' className='relative sm:h-screen sm:py-28 py-16 sm:px-40'>
        <Image className='absolute right-[670px] top-[300px]' src='/glow.png' alt='' width={200} height={200}/>
        <Image className='sm:block hidden  absolute left-0 top-16 ' src='/image-removebg-preview (2).png' width={180} height={180} alt='image'/>
        <Image className='sm:block hidden  absolute -bottom-10  right-[500px]' src='/smile.png' width={160} height={160} alt='image'/>
      
        <p  className='text-center font-bold text-3xl '>About Me</p>
        
        <div className='sm:my-20 my-5 px-5 sm:flex items-center justify-around'>
          <div className='flex-col flex items-center'>
            <p className='my-5 text-center sm:text-3xl text-2xl bold  sm:w-2/3'>Imagine a world where health insurance is not frustrating</p>
            <Image className=' rounded-3xl' src='/healthcare.avif' alt='' width={800} height={800} />
          </div>
          <div className='sm:w-2/5 '>
          <div >

            <p className='my-4 uppercase text-[#FF5F49] font-bold'>Read about me</p>
            <p className='sm:text-5xl text-3xl bold  mb-5'>Healthcare professional and entrepreneur </p>
            <p>with over 14 years of experience in large-scale enterprise business analysis, strategic leadership, and product management.  I excel in driving growth and innovation in Healthcare products with a proven track record of collaborating with product, sales, and go-to-market teams to achieve organizational goals.</p>
            <button className='my-4 text-sm px-6 py-4 bold border-2 border-[#FF5F49] text-[#FF5F49]'>Book Appointments</button>
          </div>
          </div>
        </div>
        
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
