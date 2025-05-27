import React from 'react';
import Slider from 'react-slick';
import s1 from '../Media/web/s1.png'
import s2 from '../Media/web/s2.png'
import s3 from '../Media/web/s3.png'
import s4 from '../Media/web/s4.png'
import s5 from '../Media/web/s5.png'
import s6 from '../Media/web/s6.png'


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const WebProjects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="relative h-full w-full z-10 bg-zinc-950 text-white py-16 px-4">
        <div class="absolute bottom-0 -z-50 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-12 z-50 ">Web Pr<span className='text-[#30D5C8]'>ojects</span></h1>
        <Slider {...settings}>
          <div className="p-4">
            <img src={s1} alt="Project 1" className="rounded-lg shadow-lg" />
          </div>
          <div className="p-4">
            <img src={s2} alt="Project 2" className="rounded-lg shadow-lg" />
          </div>
          <div className="p-4">
            <img src={s3} alt="Project 3" className="rounded-lg shadow-lg" />
          </div>
          <div className="p-4">
            <img src={s4} alt="Project 4" className="rounded-lg shadow-lg" />
          </div>
          <div className="p-4">
            <img src={s5} alt="Project 5" className="rounded-lg shadow-lg" />
          </div>
          <div className="p-4">
            <img src={s6} alt="Project 6" className="rounded-lg shadow-lg" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default WebProjects;
