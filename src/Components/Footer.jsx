import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faLocationDot, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import logo from '../Media/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '#hero' },
        { name: 'About Us', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Pricing', href: '#pricing' },
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'SEO Services', href: '#services' },
        { name: 'Social Media Marketing', href: '#services' },
        { name: 'Website Development', href: '#services' },
        { name: 'Google Ads Management', href: '#services' },
        { name: 'Video Marketing', href: '#services' },
      ]
    },
    {
      title: 'Contact',
      links: [
        { name: 'subik.info@gmail.com', href: 'mailto:subik.info@gmail.com', icon: faEnvelope },
        { name: '+977 9700218621', href: 'tel:+9779700218621', icon: faPhone },
        { name: 'Kathmandu, Nepal', href: '#', icon: faLocationDot },
      ]
    }
  ];

  const socialLinks = [
    { icon: faFacebook, href: 'https://www.facebook.com/profile.php?id=61562979841228', label: 'Facebook' },
    { icon: faInstagram, href: 'https://www.instagram.com/subik.info/', label: 'Instagram' },
    { icon: faLinkedin, href: 'https://www.linkedin.com/company/103771862', label: 'LinkedIn' },
    { icon: faTiktok, href: '#', label: 'TikTok' },
    { icon: faYoutube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="relative bg-dark-secondary border-t border-white/5 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-[100px]" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-neon-cyan/10 rounded-full blur-[100px]" />
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div 
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img src={logo} alt="Subik Digital Hub — Digital Marketing Agency Nepal" className="w-14 h-14 rounded-full border border-white/20" />
              <div>
                <h3 className="font-space font-bold text-xl text-gradient">SUBIK DIGITAL HUB</h3>
                <p className="text-white/50 text-sm">Digital Marketing & Web Development — Nepal</p>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Subik Digital Hub is Nepal's trusted digital marketing and web development agency based in Kathmandu. 
              We provide expert SEO, social media marketing, Google Ads management, content marketing, video production, 
              and website development services to help businesses across Nepal grow their online presence.
            </motion.p>

            {/* Social Links */}
            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/60 hover:text-neon-cyan hover:border-neon-cyan/30 transition-all duration-300 group"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FontAwesomeIcon icon={social.icon} className="text-lg group-hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column, colIndex) => (
            <motion.div 
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (colIndex + 1) }}
            >
              <h4 className="font-space font-semibold text-white mb-5">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-white/50 hover:text-neon-cyan transition-colors duration-300 text-sm"
                    >
                      {link.icon && (
                        <FontAwesomeIcon icon={link.icon} className="text-xs" />
                      )}
                      <span className="relative">
                        {link.name}
                        <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-neon-cyan group-hover:w-full transition-all duration-300" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div 
          className="mt-12 pt-10 border-t border-white/5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h4 className="font-space font-semibold text-white mb-1">Stay Updated</h4>
              <p className="text-white/50 text-sm">Get the latest updates on our projects and offerings</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-glass sm:w-64"
              />
              <motion.button
                className="btn-neon-filled whitespace-nowrap"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm text-center md:text-left">
              © {currentYear} Subik Digital Hub. All rights reserved. Digital Marketing Agency in Kathmandu, Nepal 💜
            </p>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-xl glass flex items-center justify-center text-neon-cyan border border-neon-cyan/30 hover:bg-neon-cyan hover:text-dark-primary transition-all duration-300 z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.95 }}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </motion.button>
    </footer>
  );
};

export default Footer;
