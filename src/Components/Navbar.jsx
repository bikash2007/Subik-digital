import React from 'react'
import logo from '../Media/logo.svg'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <div className='fixed flex justify-between w-full py-2 z-50 px-6 bg-zinc-900/30 backdrop-blur-md lg:px-24'>
       <NavLink to={'/'}>
          <div className=" flex items-center h-fit gap-2">
             <img src={logo} height={60} width={60} className='border border-cyan-900 rounded-full'/>
               <h1 className='text-white font-semibold'>SUBIK DESIGN HUB</h1>
          </div>
       </NavLink>
          <div className="flex gap-6 items-center justify-center text-white">
          <a href="https://www.linkedin.com/company/103771862" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="text-3xl hover:text-blue-500 transition-colors duration-300" />
            </a>
            <a href="https://www.instagram.com/subik.info/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="text-3xl hover:text-pink-500 transition-colors duration-300" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61562979841228" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="text-3xl hover:text-blue-700 transition-colors duration-300" />
            </a>
             
             <NavLink to={'/contact'}>
             <button className='bg-[#0F172A] text-[#03C8C9] px-5 py-2 rounded-lg font-medium border hover:scale-95'>Contact Us </button>
             </NavLink>
          </div>
    </div>
  )
}

export default Navbar
