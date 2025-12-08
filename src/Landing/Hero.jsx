import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlay } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Optimized spring physics
  const springConfig = { damping: 40, stiffness: 80 };
  const parallaxX = useSpring(useTransform(mouseX, [-500, 500], [-20, 20]), springConfig);
  const parallaxY = useSpring(useTransform(mouseY, [-500, 500], [-20, 20]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Reduced particles for performance
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 10,
  }));

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative h-screen min-h-[600px] max-h-[900px] flex items-center overflow-hidden bg-[#030014]"
    >
      {/* Deep Space Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-[#0a0520] to-[#030014]" />

      {/* Subtle grid */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Ambient glow orbs */}
      <div 
        className="absolute w-[400px] h-[400px] rounded-full opacity-30 blur-[100px]"
        style={{ 
          background: 'radial-gradient(circle, rgba(0, 255, 255, 0.4) 0%, transparent 70%)',
          top: '5%',
          left: '-5%',
        }}
      />
      <div 
        className="absolute w-[350px] h-[350px] rounded-full opacity-30 blur-[100px]"
        style={{ 
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)',
          bottom: '5%',
          right: '-5%',
        }}
      />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              background: particle.id % 3 === 0 ? '#00ffff' : particle.id % 3 === 1 ? '#a855f7' : '#0ea5e9',
              boxShadow: `0 0 ${particle.size * 4}px currentColor`,
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* === 3D HOLOGRAPHIC SPHERE === */}
      <motion.div 
        className="absolute right-[5%] lg:right-[8%] top-1/2 -translate-y-1/2 hidden md:block"
        style={{ x: parallaxX, y: parallaxY }}
      >
        <div className="relative w-[220px] h-[220px] lg:w-[300px] lg:h-[300px] xl:w-[350px] xl:h-[350px]">
          
          {/* Outer glow */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, rgba(0, 255, 255, 0.2), rgba(168, 85, 247, 0.2), rgba(14, 165, 233, 0.2), rgba(0, 255, 255, 0.2))',
              filter: 'blur(40px)',
              animation: 'pulse 4s ease-in-out infinite',
            }}
          />

          {/* Rotating rings */}
          <div
            className="absolute inset-3 lg:inset-4 rounded-full border border-cyan-400/40"
            style={{ 
              boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)',
              animation: 'spin 20s linear infinite',
            }}
          />
          <div
            className="absolute inset-8 lg:inset-10 rounded-full border border-purple-500/40"
            style={{ 
              boxShadow: '0 0 20px rgba(168, 85, 247, 0.2)',
              animation: 'spin 25s linear infinite reverse',
            }}
          />
          <div
            className="absolute inset-12 lg:inset-16 rounded-full border border-blue-400/40"
            style={{ 
              boxShadow: '0 0 20px rgba(14, 165, 233, 0.2)',
              animation: 'spin 30s linear infinite',
            }}
          />

          {/* Core sphere */}
          <div
            className="absolute inset-[25%] rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 30%, rgba(0, 255, 255, 0.5), rgba(168, 85, 247, 0.3) 50%, rgba(14, 165, 233, 0.2) 100%)',
              boxShadow: '0 0 60px rgba(0, 255, 255, 0.5), 0 0 100px rgba(168, 85, 247, 0.3), inset 0 0 40px rgba(255, 255, 255, 0.1)',
              animation: 'pulse 3s ease-in-out infinite',
            }}
          >
            <div
              className="absolute inset-[25%] rounded-full bg-white/30"
              style={{ filter: 'blur(15px)' }}
            />
          </div>

          {/* Floating shapes */}
          <div
            className="absolute -top-4 -left-4 w-8 h-8 lg:w-10 lg:h-10 border border-cyan-400/50"
            style={{ 
              transform: 'rotate(45deg)',
              animation: 'float 5s ease-in-out infinite',
            }}
          />
          <div
            className="absolute -bottom-3 -right-3 w-7 h-7 lg:w-9 lg:h-9 border border-purple-500/50 rounded-lg"
            style={{ animation: 'float 6s ease-in-out infinite reverse' }}
          />
        </div>
      </motion.div>

      {/* === MAIN CONTENT === */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl lg:max-w-3xl pt-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
            style={{
              background: 'rgba(0, 255, 255, 0.05)',
              border: '1px solid rgba(0, 255, 255, 0.2)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-cyan-400/90 tracking-wide">Nepal's Next-Gen Creative Agency</span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-4"
          >
            <h1 className="font-space font-bold leading-[1.05]">
              <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white">
                Where
              </span>
              
              <span 
                className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
                style={{
                  background: 'linear-gradient(90deg, #00ffff, #0ea5e9, #a855f7, #ec4899, #00ffff)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'gradientFlow 4s linear infinite',
                }}
              >
                Creativity
              </span>
              
              <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white">
                Meets <span className="text-white/50">the</span>
              </span>
              
              <span 
                className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
                style={{
                  background: 'linear-gradient(90deg, #a855f7, #ec4899, #f472b6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.3))',
                }}
              >
                Future
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base lg:text-lg text-white/50 max-w-lg mb-6 leading-relaxed"
          >
            A next-gen creative studio turning ideas into 
            <span className="text-white/80"> bold brands</span>, 
            <span className="text-cyan-400"> stunning visuals</span>, and 
            <span className="text-purple-400"> digital experiences</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3 mb-8"
          >
            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="group relative px-6 py-3 rounded-xl font-space font-semibold text-sm sm:text-base overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #00ffff, #0ea5e9)',
                boxShadow: '0 0 25px rgba(0, 255, 255, 0.4)',
              }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: '0 0 40px rgba(0, 255, 255, 0.6)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2 text-[#030014]">
                Start a Project
                <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('#portfolio')}
              className="group px-6 py-3 rounded-xl font-space font-semibold text-sm sm:text-base"
              style={{
                background: 'transparent',
                border: '1px solid rgba(168, 85, 247, 0.5)',
              }}
              whileHover={{ 
                borderColor: 'rgba(168, 85, 247, 1)',
                boxShadow: '0 0 30px rgba(168, 85, 247, 0.3)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center gap-2 text-white/80 group-hover:text-purple-300 transition-colors">
                <FontAwesomeIcon icon={faPlay} className="text-xs" />
                Explore Portfolio
              </span>
            </motion.button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-6 sm:gap-8 pt-6 border-t border-white/10"
          >
            {[
              { value: '50+', label: 'Projects' },
              { value: '30+', label: 'Clients' },
              { value: '100%', label: 'Satisfaction' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div 
                  className="text-xl sm:text-2xl lg:text-3xl font-space font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #00ffff, #a855f7)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs text-white/40 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[9px] text-white/30 uppercase tracking-[0.15em]">Scroll</span>
          <div className="w-4 h-6 rounded-full border border-white/20 flex justify-center pt-1">
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-0.5 h-0.5 rounded-full bg-cyan-400"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* CSS Animations */}
      <style>{`
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { 
            opacity: 0.8;
            transform: scale(1);
          }
          50% { 
            opacity: 1;
            transform: scale(1.02);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
