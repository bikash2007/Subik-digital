import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faQuoteLeft,
  faStar,
  faChevronLeft,
  faChevronRight,
  faPlay,
  faPause
} from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Sharma',
      role: 'CEO, TechSpire College',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=rajesh&backgroundColor=0ea5e9',
      content: 'Subik Design Hub transformed our entire digital presence. Their creative approach and attention to detail exceeded our expectations. The social media campaign they designed for us resulted in a 40% increase in student inquiries.',
      rating: 5,
      project: 'Social Media Campaign'
    },
    {
      id: 2,
      name: 'Priya Karki',
      role: 'Founder, CoffeeWave Nepal',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=priya&backgroundColor=a855f7',
      content: 'Working with the Subik team was an absolute pleasure. They understood our vision perfectly and created a brand identity that truly represents who we are. Our customers constantly compliment our new branding!',
      rating: 5,
      project: 'Brand Identity'
    },
    {
      id: 3,
      name: 'Anil Thapa',
      role: 'Marketing Director, UrbanKart',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=anil&backgroundColor=ec4899',
      content: 'The UI/UX design for our e-commerce platform was phenomenal. User engagement increased by 60% after the redesign. Subik Design Hub delivers world-class quality at competitive prices.',
      rating: 5,
      project: 'E-Commerce UI/UX'
    },
    {
      id: 4,
      name: 'Sunita Maharjan',
      role: 'Owner, The Garden Kitchen',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sunita&backgroundColor=14b8a6',
      content: 'From our menu design to complete restaurant branding, everything was crafted with such care and creativity. Our customers love the new look, and it really sets us apart from competitors.',
      rating: 5,
      project: 'Restaurant Branding'
    },
    {
      id: 5,
      name: 'Bikram Shrestha',
      role: 'Startup Founder',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=bikram&backgroundColor=f97316',
      content: 'As a startup, we needed a partner who understood our constraints but could still deliver premium quality. Subik Design Hub exceeded all expectations. Fast, professional, and incredibly talented!',
      rating: 5,
      project: 'Website Development'
    },
    {
      id: 6,
      name: 'Maya Gurung',
      role: 'NGO Director',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=maya&backgroundColor=8b5cf6',
      content: 'The motion graphics and video content they created for our awareness campaign went viral! Their creativity and understanding of digital trends is remarkable. Highly recommend their services.',
      rating: 5,
      project: 'Motion Graphics'
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Get visible testimonials for 3D carousel effect
  const getVisibleTestimonials = () => {
    const prev = (currentIndex - 1 + testimonials.length) % testimonials.length;
    const next = (currentIndex + 1) % testimonials.length;
    return [prev, currentIndex, next];
  };

  const visibleIndices = getVisibleTestimonials();

  return (
    <section id="testimonials" className="relative py-12 md:py-24 lg:py-32 overflow-hidden bg-dark-secondary">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />
      
      {/* Floating Orbs */}
      <motion.div 
        className="absolute top-1/4 -left-20 w-60 h-60 bg-neon-purple/15 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/4 -right-20 w-60 h-60 bg-neon-cyan/15 rounded-full blur-[100px]"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-neon-cyan text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="font-space text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            What Our <span className="text-gradient">Clients</span> Say
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our amazing clients have to say about 
            working with us.
          </p>
        </motion.div>

        {/* 3D Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative h-[400px] md:h-[350px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -50 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute w-full"
              >
                <div className="glass-card p-8 md:p-12 text-center relative">
                  {/* Decorative Quote */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center shadow-neon-cyan">
                    <FontAwesomeIcon icon={faQuoteLeft} className="text-white text-lg" />
                  </div>

                  {/* Content */}
                  <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 mt-4">
                    "{testimonials[currentIndex].content}"
                  </p>

                  {/* Rating */}
                  <div className="flex items-center justify-center gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <FontAwesomeIcon icon={faStar} className="text-amber-400 text-lg" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex flex-col items-center">
                    <motion.img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full border-2 border-neon-cyan/30 mb-4"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                    />
                    <h4 className="font-space font-bold text-lg text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-white/50 text-sm mb-2">
                      {testimonials[currentIndex].role}
                    </p>
                    <span className="px-3 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan text-xs font-medium">
                      {testimonials[currentIndex].project}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/60 hover:text-white hover:border-neon-cyan/30 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </motion.button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 bg-neon-cyan' 
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/60 hover:text-white hover:border-neon-cyan/30 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </motion.button>

            {/* Auto-play toggle */}
            <motion.button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                isAutoPlaying 
                  ? 'bg-neon-cyan/20 text-neon-cyan' 
                  : 'glass text-white/40'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={isAutoPlaying ? faPause : faPlay} className="text-sm" />
            </motion.button>
          </div>
        </div>

        {/* Avatar Stack */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center mt-10 md:mt-16"
        >
          <div className="flex -space-x-4 mb-4">
            {testimonials.slice(0, 5).map((testimonial, index) => (
              <motion.img
                key={testimonial.id}
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full border-2 border-dark-secondary"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, zIndex: 10 }}
              />
            ))}
            <motion.div
              className="w-12 h-12 rounded-full bg-neon-cyan/20 border-2 border-dark-secondary flex items-center justify-center text-neon-cyan text-sm font-bold"
              whileHover={{ y: -5 }}
            >
              +{testimonials.length - 5}
            </motion.div>
          </div>
          <p className="text-white/60 text-sm">
            Join <span className="text-neon-cyan font-medium">30+ happy clients</span> who trust us
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
