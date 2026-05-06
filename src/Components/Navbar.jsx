import React, { useState, useEffect } from 'react';
import logo from '../Media/logo.png';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home',     href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Work',     href: '#portfolio' },
    { name: 'Process',  href: '#process' },
    { name: 'Pricing',  href: '#pricing' },
    { name: 'Team',     href: '#team' },
    { name: 'Contact',  href: '#contact' },
  ];

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3 bg-[#0D0D0D]/95 backdrop-blur-xl border-b border-[#242424]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}
            className="flex items-center gap-3 group"
          >
            <img
              src={logo}
              alt="Subik Digital Hub"
              className="w-10 h-10 rounded-full border border-white/15 object-cover transition-all duration-300 group-hover:border-[#C8572A]/60"
            />
            <div>
              <p className="font-header font-bold text-base text-white leading-none tracking-wide">SUBIK</p>
              <p className="font-body text-[10px] text-white/40 tracking-[0.15em] uppercase">Digital Hub</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className="relative font-body text-sm font-medium text-white/60 hover:text-white transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-accent-green group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/9779828940955?text=Hi%20Subik%20Digital%20Hub%2C%20I%27d%20like%20to%20start%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-orange text-sm py-2.5 px-5"
              style={{ background: 'var(--accent-green)', borderColor: 'var(--accent-green)', boxShadow: '0 0 10px rgba(54, 211, 153, 0.3)' }}
            >
              Start Your Project →
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            id="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[2px] bg-white transition-all duration-300 origin-center ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-6 h-[2px] bg-white transition-all duration-300 origin-center ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-[#0D0D0D] flex flex-col"
          >
            <div className="flex flex-col justify-center h-full px-8 pt-20 pb-10">
              <nav className="flex flex-col gap-2 mb-10">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    className="font-header font-bold text-3xl text-white/80 hover:text-white py-3 border-b border-white/8 transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col gap-3"
              >
                <a
                  href="https://wa.me/9779828940955?text=Hi%20Subik%20Digital%20Hub%2C%20I%27d%20like%20to%20start%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-orange w-full text-center justify-center"
                  style={{ background: 'var(--accent-green)', borderColor: 'var(--accent-green)' }}
                >
                  Message on WhatsApp →
                </a>
                <a
                  href="mailto:subik.info@gmail.com"
                  className="btn-outline-light w-full text-center justify-center"
                >
                  Send an Email
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex flex-col gap-1 text-white/40 text-sm font-body"
              >
                <span>📞 +977-9828940955</span>
                <span>📞 +977-9745384280</span>
                <span>📍 Maitidevi, Kathmandu</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
