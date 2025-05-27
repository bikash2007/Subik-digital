import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import Navbar from '../Components/Navbar';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="relative bg-[#0B1120] text-white min-h-screen py-16 px-4">
        {/* Background pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <svg
            className="absolute top-0 left-0 transform rotate-45 opacity-10"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#30D5C8"
              fillOpacity="0.2"
              d="M0,160L60,170.7C120,181,240,203,360,186.7C480,171,600,117,720,106.7C840,96,960,128,1080,144C1200,160,1320,160,1380,160L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            />
          </svg>
        </div>

        <div className="relative container mx-auto text-center mt-28">
          <motion.h1
            className="text-5xl font-extrabold mb-12 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            Contact Us
          </motion.h1>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="bg-gradient-to-r from-[#0B1120] to-gray-900 p-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
              <form>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-lg mb-2">Name</label>
                  <input type="text" id="name" className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#30D5C8]" placeholder="Your Name" />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-lg mb-2">Email</label>
                  <input type="email" id="email" className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#30D5C8]" placeholder="Your Email" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-lg mb-2">Message</label>
                  <textarea id="message" className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#30D5C8]" rows="4" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="bg-[#30D5C8] text-[#0B1120] px-5 py-3 rounded-lg hover:bg-[#2AC2B3] transition-colors duration-300">Send Message</button>
              </form>
            </div>
            <div className="bg-gradient-to-r from-[#0B1120] to-gray-900 p-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <h2 className="text-3xl font-semibold mb-6">Contact Information</h2>
              <p className="text-lg mb-6">Feel free to reach out to us via any of the methods below:</p>
              <div className="text-left mb-6">
                <p className="text-lg"><strong>Address:</strong> Golfutar, Kathmandu, Nepal</p>
                <p className="text-lg"><strong>Phone:</strong> +977-9745384280</p>
                <p className="text-lg"><strong>Email:</strong> subik.info@gmail.com</p>
              </div>
              <div className="flex justify-start mt-8 space-x-8">
                <a href="https://www.linkedin.com/company/103771862" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="text-4xl hover:text-[#30D5C8] transition-colors duration-300" />
                </a>
                <a href="https://www.instagram.com/subik.info/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className="text-4xl hover:text-[#30D5C8] transition-colors duration-300" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61562979841228" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} className="text-4xl hover:text-[#30D5C8] transition-colors duration-300" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Contact;
