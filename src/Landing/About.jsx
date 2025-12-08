import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLightbulb, faRocket, faHeart, faUsers, 
  faAward, faGlobe, faCode, faPalette 
} from '@fortawesome/free-solid-svg-icons';
import profile from '../Media/graphic/profile.png';
import bikash from '../Media/web/profile.png';

const About = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  // Mission, Vision, Values data
  const values = [
    {
      icon: faLightbulb,
      title: 'Innovation',
      description: 'Pushing creative boundaries with fresh, bold ideas that redefine digital experiences.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: faHeart,
      title: 'Passion',
      description: 'Every pixel we place, every line we code is driven by our love for exceptional design.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: faRocket,
      title: 'Excellence',
      description: 'We don\'t settle for good. We aim for extraordinary in everything we create.',
      color: 'from-cyan-400 to-blue-500'
    },
  ];

  // Timeline data
  const timeline = [
    { year: '2022', title: 'The Beginning', description: 'Started as a passion project between two creative minds' },
    { year: '2023', title: 'First Clients', description: 'Delivered our first major branding project' },
    { year: '2024', title: 'Team Growth', description: 'Expanded services and welcomed new talent' },
    { year: '2025', title: 'Going Global', description: 'Serving clients across multiple countries' },
  ];

  // Team data
  const team = [
    {
      name: 'Suyog Lakai',
      role: 'Creative Director',
      image: profile,
      skills: ['Photoshop', 'Illustrator', 'Canva', 'Figma', 'After Effects'],
      description: 'A talented graphic designer with a keen eye for detail and a passion for creativity. Transforms ideas into visually stunning designs.',
      social: { linkedin: '#', instagram: '#' }
    },
    {
      name: 'Bikash Bhandari',
      role: 'Lead Developer',
      image: bikash,
      skills: ['React.js', 'Tailwind CSS', 'JavaScript', 'Framer Motion', 'Node.js'],
      description: 'A skilled web developer renowned for creating engaging and user-friendly websites that blend functionality with aesthetic appeal.',
      social: { linkedin: '#', instagram: '#' }
    }
  ];

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden bg-dark-primary">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-mesh opacity-50" />
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-neon-purple/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-neon-cyan/20 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-neon-cyan text-sm font-medium mb-4">
            Our Story
          </span>
          <h2 className="font-space text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            About <span className="text-gradient">Subik Design Hub</span>
          </h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto">
            We're a youth-led creative powerhouse based in Nepal, on a mission to transform how 
            businesses connect with their audience through exceptional digital experiences.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-12 items-center mb-24"
        >
          <motion.div variants={fadeInUp} className="order-2 lg:order-1">
            <h3 className="font-space text-3xl font-bold text-white mb-6">
              Born from <span className="text-gradient-pink">Passion</span>, 
              Driven by <span className="text-gradient">Innovation</span>
            </h3>
            <div className="space-y-4 text-white/70">
              <p>
                In the heart of Nepal, two young creatives dared to dream big. What started as late-night 
                brainstorming sessions and shared passion for design evolved into Subik Design Hub – 
                a creative agency that refuses to play by conventional rules.
              </p>
              <p>
                We believe that great design isn't just about aesthetics – it's about solving problems, 
                telling stories, and creating connections that matter. Every project we take on is an 
                opportunity to push boundaries and deliver something extraordinary.
              </p>
              <p>
                Today, we work with brands big and small, from local startups to international companies, 
                helping them stand out in an increasingly digital world.
              </p>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              {[
                { icon: faAward, value: '50+', label: 'Projects' },
                { icon: faUsers, value: '30+', label: 'Clients' },
                { icon: faGlobe, value: '5+', label: 'Countries' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center glass-card p-4"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <FontAwesomeIcon icon={stat.icon} className="text-neon-cyan text-2xl mb-2" />
                  <div className="font-space font-bold text-2xl text-white">{stat.value}</div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Animated Visual */}
          <motion.div 
            variants={fadeInUp}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Rotating rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-neon-cyan/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-8 rounded-full border-2 border-neon-purple/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-16 rounded-full border-2 border-neon-blue/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="glass-card p-8 rounded-2xl text-center"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="font-space text-4xl font-bold text-gradient mb-2">SDH</div>
                  <div className="text-white/60 text-sm">Since 2022</div>
                </motion.div>
              </div>

              {/* Floating icons */}
              {[
                { icon: faCode, position: 'top-0 left-1/2 -translate-x-1/2', delay: 0 },
                { icon: faPalette, position: 'bottom-0 left-1/2 -translate-x-1/2', delay: 1 },
                { icon: faRocket, position: 'left-0 top-1/2 -translate-y-1/2', delay: 2 },
                { icon: faLightbulb, position: 'right-0 top-1/2 -translate-y-1/2', delay: 3 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${item.position} glass w-12 h-12 rounded-xl flex items-center justify-center`}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: item.delay * 0.5 }}
                >
                  <FontAwesomeIcon icon={item.icon} className="text-neon-cyan" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Mission, Vision, Values */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-6 mb-24"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={fadeInUp}
              className="glass-card p-8 group hover:border-neon-cyan/30 transition-all duration-500"
              whileHover={{ y: -10 }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <FontAwesomeIcon icon={value.icon} className="text-white text-xl" />
              </div>
              <h4 className="font-space font-bold text-xl text-white mb-3">{value.title}</h4>
              <p className="text-white/60">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-24"
        >
          <motion.h3 
            variants={fadeInUp}
            className="font-space text-3xl font-bold text-center text-white mb-12"
          >
            Our <span className="text-gradient">Journey</span>
          </motion.h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-blue hidden md:block" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  variants={fadeInUp}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <motion.div
                      className="glass-card p-6 inline-block"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="font-space font-bold text-neon-cyan text-lg mb-1">{item.year}</div>
                      <h4 className="font-space font-bold text-white text-xl mb-2">{item.title}</h4>
                      <p className="text-white/60">{item.description}</p>
                    </motion.div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative">
                    <motion.div 
                      className="w-4 h-4 rounded-full bg-neon-cyan shadow-neon-cyan"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    />
                  </div>
                  
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h3 className="font-space text-3xl font-bold text-white mb-4">
              Meet the <span className="text-gradient">Creative Minds</span>
            </h3>
            <p className="text-white/60 max-w-2xl mx-auto">
              The passionate individuals behind every pixel and line of code
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                className="glass-card p-8 group"
                whileHover={{ y: -10 }}
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  {/* Avatar */}
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full opacity-50 blur-sm group-hover:opacity-100 transition-opacity" />
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="relative w-28 h-28 rounded-full object-cover border-2 border-white/10"
                    />
                  </motion.div>

                  {/* Info */}
                  <div className="flex-1 text-center sm:text-left">
                    <h4 className="font-space font-bold text-xl text-white">{member.name}</h4>
                    <p className="text-neon-cyan font-medium mb-3">{member.role}</p>
                    <p className="text-white/60 text-sm mb-4">{member.description}</p>
                    
                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-neon-cyan border border-neon-cyan/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
