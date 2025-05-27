import React from 'react';
import web from '../Media/website.jpg'

const OurServices = () => {
  return (
    <div className="bg-[#0F172A] text-white min-h-screen py-16 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-12 animate__animated animate__fadeIn">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="service-card p-8 bg-gray-800  hover:shadow-[#38BDF8] rounded-lg shadow-md transition-all duration-1000 transform hover:scale-105 hover:bg-gray-700 animate__animated animate__fadeIn animate__delay-1s">
            <h2 className="text-2xl font-semibold mb-4 text-[#30D5C8]">Digital Marketing</h2>
            <p className="">
              We offer comprehensive digital marketing strategies to enhance your online presence and drive targeted traffic to your business.
            </p>
          </div>
          <div className="service-card p-8 bg-gray-800  hover:shadow-[#38BDF8] rounded-lg shadow-md transition-all duration-1000 transform hover:scale-105 hover:bg-gray-700 animate__animated animate__fadeIn animate__delay-2s">
            <h2 className="text-2xl font-semibold mb-4 text-[#30D5C8]">Graphics Designing</h2>
            <p className="">
              Our creative graphics designing services ensure that your brand stands out with visually compelling and impactful designs.
            </p>
          </div>
          <div className="service-card p-8 bg-gray-800  hover:shadow-[#38BDF8] rounded-lg shadow-md transition-all duration-1000 transform hover:scale-105 hover:bg-gray-700 animate__animated animate__fadeIn animate__delay-3s">
            <h2 className="text-2xl font-semibold mb-4 text-[#30D5C8]">Web Development</h2>
            <img src={web}/>
            <p className="">
              We specialize in creating custom websites that are both functional and aesthetically pleasing, tailored to meet your unique needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
