import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import s1 from '../Media/graphic/s1.jpg'
import s2 from '../Media/graphic/s2.jpg'
import s3 from '../Media/graphic/s3.jpg'
import s4 from '../Media/graphic/s4.jpg'
import s5 from '../Media/graphic/s5.jpg'
import s6 from '../Media/graphic/s6.jpg'
import s7 from '../Media/graphic/s7.jpg'


const GraphicProjects = () => {
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
    <div className="relative h-full w-full bg-slate-950 text-white py-16 px-4">
        <div class=""><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div></div>
        <h1 className="text-4xl font-bold text-center mb-12"> <span className='text-[#30D5C8]'>G</span>raphic <span className='text-[#30D5C8]'>Se</span>ction</h1>
         
    
      <div className="container mx-auto text-center">
      
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
            <img src={s7} alt="Project 6" className="rounded-lg shadow-lg" />
          </div>
          <div className="p-4">
            <img src={s6} alt="Project 6" className="rounded-lg shadow-lg" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default GraphicProjects;
