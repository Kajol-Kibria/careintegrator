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

       
      <div id='hero' className='h-[95vh] flex  items-center justify-around'>
        <div>
          <p className='text-[#023382] font-semibold text-xl flex items-center gap-2'><GiCheckMark/>Product Director</p>
          <p className='text-[#435863] text-7xl font-bold'>Hy! I am</p>
          <p className='text-[#313d44] text-6xl my-4 font-bold'>Manohar Kamalapurkar</p>
          <p className='text-gray-800 w-[30vw]'>My blend of strategic foresight, 
            technical expertise, and operational excellence 
            ensures impactful solutions that drive
            efficiency, improve patient outcomes, and support organizational goals.</p>
          <div className='flex items-center gap-4 my-10'>
            <Link href='/#contact' className='flex items-center gap-3 hover:bg-white hover:text-[#023382] transition-all duration-300 text-white bg-[#023382] py-2 px-6 border border-[#023382] rounded-lg' >Let&apos;s Talk<BsSend/></Link>
            <Link href='/blogs' className='flex items-center gap-3 hover:bg-[#023382] hover:text-white transition-all duration-300 text-black border border-[#023382]  py-2 px-6 rounded-lg' >My Blogs<GoArrowUpRight/></Link>
          </div>

        </div>
        <div>
          <Image className='rounded-[80px]' src={'/pic4.jpeg'} width={500} height={500} alt='image'/>
        </div>

      </div>

      




      <div id='about' className='h-screen py-28'>
        <p  className='text-center font-bold text-3xl '>About Me</p>
        <div className='flex items-center justify-around my-20'>
          <div>
          <div className='sm:flex gap-20'> 
          <div >
        <p className='py-3 text-xl  text-gray-500 font-semibold'>First Name : <span className='text-gray-600 font-bold'>Manohar</span></p>
        <p className='py-3 text-xl  text-gray-500 font-semibold'>Last Name : <span className='text-gray-600 font-bold'>Kamalapurkar</span></p>
        <a href='/Manohar-Kamalapurkar-MBA.pdf' download className='w-fit my-4 text-center group uppercase text-sm text-gray-600 flex gap-3 items-center py-2 px-4 border  border-[#023382] rounded-full hover:text-white hover:bg-[#023382] transition-all duration-200 font-bold active:scale-90'>Download RESUME <FiDownload  className='text-[#023382] group-hover:text-white  transition-all duration-200' size={18}/></a>
        </div>
        <div>
          <p className='py-3 text-xl  text-gray-500 font-semibold'>Address : <span className='text-gray-600 font-bold'>Rochester hills , Michigan , USA</span></p>
          <p className='py-3 text-xl  text-gray-500 font-semibold'>Telephone : <span className='text-gray-600 font-bold'> 2489899293</span></p>
          <p className='py-3 text-xl text-gray-500 font-semibold'>Email : <span className='text-gray-600 font-bold'>manohar.kamalapurkar@gmail.com</span></p>
        </div>
        </div>
          </div>
          <div>
          <div className='border rounded-lg w-72 h-92 my-10 sm:my-0 mx-auto'>
          <div className='px-5 py-5'>
          <span className='text-[#023382] text-5xl font-bold'>14+ years</span>
          <hr className='mt-3'/><hr className=''/><h1 className='my-4  text-gray-800 text-xl'> of expertise in healthcare and product management.</h1>
          </div>
        </div>
          </div>
          
        </div>
        <p className='text-center font-bold text-xl my-10'>Achievements</p>
        <div className='flex justify-center  '>

          <div className='w-44 p-2 border hover:border-[#023382] transition-all duration-300 mx-auto text-center shadow-md rounded-xl flex flex-col items-center justify-center '>
           
              <p className=' mt-3 text-lg font-semibold text-gray-900'>Strategic Product Leadership:</p>
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
