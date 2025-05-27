import React from 'react'
import profile from '../Media/graphic/profile.png'
import bikash from '../Media/web/profile.png'

const About = () => {
  return (
<>
      <div class="absolute top-0 z-10 h-screen w-screen "></div>
      <div className='w-full py-8 text-white  flex flex-col items-center justify-center  bg-neutral-950  border-y border-neutral-200'>
           <h1 className='text-4xl font-semibold '> <span className='text-[#30D5C8]'>About</span> Us</h1>
           <div className='flex justify-center  flex-wrap my-4 rounded-lg bg-[#0F172A] backdrop-blur-sm py-3'>
              <div className='flex w-full mb-2 lg:w-1/4 bg-red- justify-center items-center'>
                   <img src={profile} className='rounded-[50%] h-44 w-44'/>
              </div>
              <div className="flex flex-col w-3/4">
              <h6 className='font-semibold mb-2'>Suyog Lakai -<span className='text-[#38BDF8]'>Graphis Designer</span></h6>
              <h6 className='text-sm text-neutral-400 '>Meet Suyog Lakai, a talented graphic designer with a keen eye for detail and a passion for creativity. Suyog excels in transforming ideas into visually stunning designs, making each project a masterpiece. With a unique
                 blend of innovation and technical skill, Suyog brings a fresh perspective to the world of graphic design.</h6>
                 <div className="flex flex-wrap gap-3">
                    <h6 className=' mt-4 text-sm bg-neutral-800 text-[#30D5C8] font-medium rounded-2xl py-1 px-2'>Photoshop</h6>
                    <h6 className=' mt-4 text-sm bg-neutral-800 text-[#30D5C8] font-medium rounded-2xl py-1 px-2'>Illustrator</h6>
                    <h6 className=' mt-4 text-sm bg-neutral-800 text-[#30D5C8] font-medium rounded-2xl py-1 px-2'>Canva</h6>
                    <h6 className=' mt-4 text-sm bg-neutral-800 text-[#30D5C8] font-medium rounded-2xl py-1 px-2'>Figma</h6>
                    <h6 className=' mt-4 text-sm bg-neutral-800 text-[#30D5C8] font-medium rounded-2xl py-1 px-2'>After Effect</h6>
                     
                 </div>
              </div>
       </div>
           <div className='flex justify-center  flex-wrap my-4 rounded-lg bg-[#0F172A] backdrop-blur-sm py-3'>
              <div className='flex w-full mb-2 lg:w-1/4 bg-red- justify-center items-center'>
                   <img src={bikash} className='rounded-[50%] h-44 w-44'/>
              </div>
              <div className="flex flex-col w-3/4">
              <h6 className='font-semibold mb-2'>Bikash Bhandari -<span className='text-[#38BDF8]'>Web Devloper</span></h6>
              <h6 className='text-sm text-neutral-400 '>Introducing Bikash Bhandari, a skilled web designer renowned for his innovative approach and meticulous craftsmanship. Bikash specializes in creating engaging and user-friendly websites that blend functionality with aesthetic appeal.
                 With a deep understanding of modern design principles and cutting-edge technologies, Bikash delivers web experiences that captivate and inspire.</h6>
                 <div className="flex flex-wrap gap-3">
                    <h6 className=' mt-4 text-sm bg-neutral-800 text-[#30D5C8] font-medium rounded-2xl py-1 px-2'>HTML 5</h6>
                    <h6 className=' mt-4 text-sm bg-neutral-800 text-[#30D5C8] font-medium rounded-2xl py-1 px-2'>Tailwind css</h6>
                    <h6 className=' mt-4 text-sm bg-neutral-800 text-[#30D5C8] font-medium rounded-2xl py-1 px-2'>React js</h6>
                    <h6 className=' mt-4 text-sm bg-neutral-800 text-[#30D5C8] font-medium rounded-2xl py-1 px-2'>Framer Motion</h6>
                    <h6 className=' mt-4 text-sm bg-neutral-800 text-[#30D5C8] font-medium rounded-2xl py-1 px-2'>JavaScripts</h6>
                     
                 </div>
              </div>
       </div>
      </div>
</>
  )
}

export default About
