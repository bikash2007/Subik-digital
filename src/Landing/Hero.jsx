import React from 'react'
import heroimg from '../Media/hero.png'
import { NavLink } from 'react-router-dom'

const   Hero = () => {
  return (
    <div className='text-white'>
<div className="fixed inset-0 -z-10 size-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />
       <div className='flex flex-wrap justify-center  w-full h-full pt-64 gap-3'>
            <div className='w-full flex px-1 flex-col h-full lg:w-2/4 items-center gap-6 '>
                 

                 <h1 className=' text-4xl lg:text-7xl tracking-widest font-bold text-center'> <span className='text-transparent bg-clip-text tracking-tight web bg-gradient-to-r from-[#30D5C8] to-[#00CCCC]'>Bringing Imagination to Digital Reality </span></h1>
                <p className='text-lg text-neutral-200'>Welcome to Subik Digital Design Agency's Youth Talent Group, where innovation and creativity collide! Our team is a dynamic blend of fresh minds and vibrant energy, dedicated to pushing the boundaries of digital design. We believe in the power of young talent to revolutionize the digital landscape with bold ideas and innovative solutions.</p>
              
                
                 <div className='w-full flex justify-center lg:justify-end px-5'>
                     <NavLink to={'/contact'} className='bg-[#0F172A] text-[#38BDF8] px-5 py-2 rounded-lg font-medium border hover:scale-95'>Contact Us </NavLink>
                    
                 </div>
               </div>
            <div className='w-full lg:w-1/4 flex justify-center items-center relative '>
                <img src={heroimg} className='w-2/3  first  ease-in-out transition-all duration-1000' />
             </div>
       </div>
    </div>
  )
}

export default Hero
