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
      icon: faChartLine,
      title: 'SEO (Search Engine Optimization)',
      description: 'Dominate Google search results in Nepal with our expert on-page SEO, off-page SEO, and local SEO services. We help businesses in Kathmandu, Lalitpur, Bhaktapur, and Pokhara rank #1.',
      features: ['On-Page SEO', 'Off-Page SEO', 'Local SEO Nepal', 'Technical SEO'],
      gradient: 'from-emerald-400 to-teal-500',
      glowColor: 'rgba(52, 211, 153, 0.4)'
    },
    {
      icon: faBullhorn,
      title: 'Social Media Management',
      description: 'Professional management of Facebook, Instagram, and TikTok for brand growth in Nepal. We create engaging content and build communities that drive real business results.',
      features: ['Facebook Marketing', 'Instagram Growth', 'TikTok Strategy', 'Community Management'],
      gradient: 'from-blue-500 to-indigo-600',
      glowColor: 'rgba(59, 130, 246, 0.4)'
    },
    {
      icon: faVideo,
      title: 'Video Marketing',
      description: 'High-quality promotional and motion graphic videos for Instagram, TikTok, and Facebook. Captivate your audience with professional video content that converts viewers into customers.',
      features: ['Promotional Videos', 'Motion Graphics', 'Reels & Shorts', 'Video Ads'],
      gradient: 'from-red-500 to-orange-500',
      glowColor: 'rgba(239, 68, 68, 0.4)'
    },
    {
      icon: faPaintBrush,
      title: 'Content Marketing',
      description: 'SEO-optimized blogs, articles, and content strategies designed to attract potential customers in Nepal. Build authority and drive organic traffic to your website.',
      features: ['SEO Blog Writing', 'Article Creation', 'Content Strategy', 'Copywriting'],
      gradient: 'from-orange-400 to-pink-500',
      glowColor: 'rgba(251, 146, 60, 0.4)'
    },
    {
      icon: faCube,
      title: 'Google Business Marketing',
      description: 'Google Business Profile setup and optimization for maximum local visibility in Nepal. Get found by customers searching for your services in Kathmandu and beyond.',
      features: ['GBP Setup', 'Profile Optimization', 'Local Visibility', 'Review Management'],
      gradient: 'from-yellow-400 to-amber-500',
      glowColor: 'rgba(251, 191, 36, 0.4)'
    },
    {
      icon: faPalette,
      title: 'Ads Management',
      description: 'Strategic PPC campaigns for Google Ads, Facebook Ads, and Instagram Ads. Maximize your ROI with data-driven ad management from Nepal\'s trusted digital marketing agency.',
      features: ['Google Ads', 'Facebook Ads', 'Instagram Ads', 'Campaign Optimization'],
      gradient: 'from-pink-500 to-rose-500',
      glowColor: 'rgba(236, 72, 153, 0.4)'
    },
    {
      icon: faLaptopCode,
      title: 'Website Development & Optimization',
      description: 'Modern, high-performance website development with stunning UI/UX design and technical SEO improvements. We build websites that rank higher and convert better for businesses in Nepal.',
      features: ['Custom Websites', 'UI/UX Design', 'Technical SEO', 'E-Commerce'],
      gradient: 'from-cyan-400 to-blue-500',
      glowColor: 'rgba(34, 211, 238, 0.4)'
    },
    {
      icon: faMobileAlt,
      title: 'Reporting & Analytics',
      description: 'Detailed performance tracking, monthly reports, and data-driven marketing decisions. Know exactly how your digital marketing campaigns are performing across Nepal.',
      features: ['Performance Tracking', 'Monthly Reports', 'Data Analytics', 'ROI Analysis'],
      gradient: 'from-violet-500 to-purple-600',
      glowColor: 'rgba(139, 92, 246, 0.4)'
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
    <section id="services" className="relative py-12 md:py-24 lg:py-32 overflow-hidden bg-dark-secondary">
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
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-neon-cyan text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="font-space text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Digital Marketing & Web Development <span className="text-gradient">Services in Nepal</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            From SEO and social media marketing to website development and Google Ads — Subik Digital Hub 
            offers end-to-end digital solutions for businesses across Nepal.
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
          className="text-center mt-12 md:mt-16"
        >
          <div className="glass-card inline-flex items-center gap-6 p-6 rounded-2xl">
            <p className="text-white/80">
              Looking for a custom digital marketing solution? <span className="text-white font-medium">Let's discuss how we can grow your business in Nepal.</span>
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
