import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaintBrush,
  faLaptopCode,
  faMobileAlt,
  faBullhorn,
  faVideo,
  faCube,
  faChartLine,
  faPalette,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

const OurServices = () => {
  const services = [
    {
      icon: faPaintBrush,
      title: 'Branding & Visual Identity',
      description: 'Craft a unique brand identity that speaks volumes. From logos to brand guidelines, we create visual stories that resonate with your audience.',
      features: ['Logo Design', 'Brand Strategy', 'Visual Guidelines', 'Brand Collateral'],
      gradient: 'from-orange-400 to-pink-500',
      glowColor: 'rgba(251, 146, 60, 0.4)'
    },
    {
      icon: faPalette,
      title: 'Graphics Design',
      description: 'Eye-catching graphics that stop the scroll. Posters, social media content, advertisements, and everything visual.',
      features: ['Social Media Graphics', 'Poster Design', 'Ad Creatives', 'Print Materials'],
      gradient: 'from-pink-500 to-rose-500',
      glowColor: 'rgba(236, 72, 153, 0.4)'
    },
    {
      icon: faLaptopCode,
      title: 'Website Design & Development',
      description: 'Stunning, high-performance websites that convert visitors into customers. Built with cutting-edge technology.',
      features: ['Custom Websites', 'E-Commerce', 'Landing Pages', 'Web Applications'],
      gradient: 'from-cyan-400 to-blue-500',
      glowColor: 'rgba(34, 211, 238, 0.4)'
    },
    {
      icon: faMobileAlt,
      title: 'UI/UX & App Interface Design',
      description: 'Intuitive digital experiences that users love. We design interfaces that are both beautiful and functional.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
      gradient: 'from-violet-500 to-purple-600',
      glowColor: 'rgba(139, 92, 246, 0.4)'
    },
    {
      icon: faBullhorn,
      title: 'Social Media Management',
      description: 'Build a thriving online presence. Strategic content, consistent engagement, and data-driven growth.',
      features: ['Content Calendar', 'Community Management', 'Analytics', 'Growth Strategy'],
      gradient: 'from-blue-500 to-indigo-600',
      glowColor: 'rgba(59, 130, 246, 0.4)'
    },
    {
      icon: faVideo,
      title: 'Content Creation & Video Editing',
      description: 'Compelling content that tells your story. From concept to final cut, we create videos that captivate.',
      features: ['Video Production', 'Motion Graphics', 'Reels & Shorts', 'Podcast Editing'],
      gradient: 'from-red-500 to-orange-500',
      glowColor: 'rgba(239, 68, 68, 0.4)'
    },
    {
      icon: faCube,
      title: 'Motion Graphics & 3D Visuals',
      description: 'Bring your ideas to life with stunning animations and 3D visualizations that leave lasting impressions.',
      features: ['3D Modeling', 'Animation', 'Visual Effects', 'Product Visualization'],
      gradient: 'from-emerald-400 to-teal-500',
      glowColor: 'rgba(52, 211, 153, 0.4)'
    },
    {
      icon: faChartLine,
      title: 'Digital Marketing & SEO',
      description: 'Drive targeted traffic and grow your business. Data-driven strategies that deliver measurable results.',
      features: ['SEO Optimization', 'PPC Campaigns', 'Email Marketing', 'Analytics'],
      gradient: 'from-yellow-400 to-amber-500',
      glowColor: 'rgba(251, 191, 36, 0.4)'
    }
  ];

  // Service Card with 3D Tilt Effect
  const ServiceCard = ({ service, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set(e.clientX - centerX);
      y.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
      setIsHovered(false);
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformPerspective: 1000,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative group"
      >
        {/* Glow Effect */}
        <div 
          className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
          style={{ background: service.glowColor }}
        />
        
        {/* Card */}
        <div className="relative glass-card p-8 h-full flex flex-col transition-all duration-500 group-hover:border-white/20">
          {/* Icon */}
          <motion.div
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FontAwesomeIcon icon={service.icon} className="text-white text-2xl" />
          </motion.div>

          {/* Title */}
          <h3 className="font-space font-bold text-xl text-white mb-3 group-hover:text-gradient transition-all duration-300">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-white/60 text-sm mb-6 flex-grow">
            {service.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-6">
            {service.features.map((feature, i) => (
              <span 
                key={i}
                className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-white/70 border border-white/10"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* CTA */}
          <motion.button
            className="flex items-center gap-2 text-neon-cyan font-medium text-sm group/btn"
            whileHover={{ x: 5 }}
          >
            Learn More
            <FontAwesomeIcon 
              icon={faArrowRight} 
              className="text-xs group-hover/btn:translate-x-1 transition-transform" 
            />
          </motion.button>

          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-3xl">
            <div 
              className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br ${service.gradient} opacity-20 rotate-45`}
            />
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden bg-dark-secondary">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />
      
      {/* Floating Orbs */}
      <motion.div 
        className="absolute top-1/4 -left-20 w-60 h-60 bg-neon-purple/20 rounded-full blur-[100px]"
        animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/4 -right-20 w-60 h-60 bg-neon-cyan/20 rounded-full blur-[100px]"
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-neon-cyan text-sm font-medium mb-4">
            What We Do
          </span>
          <h2 className="font-space text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            From concept to creation, we offer end-to-end digital solutions that help your brand 
            stand out and make an impact.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="glass-card inline-flex items-center gap-6 p-6 rounded-2xl">
            <p className="text-white/80">
              Need a custom solution? <span className="text-white font-medium">Let's discuss your project.</span>
            </p>
            <motion.a
              href="#contact"
              className="btn-neon-filled text-sm py-2.5 px-5 whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;
