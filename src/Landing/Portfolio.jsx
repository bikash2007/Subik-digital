import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faExpand, faXmark, faArrowRight, faExternalLinkAlt,
  faPalette, faCode, faBullhorn, faLaptop, faPaintBrush
} from '@fortawesome/free-solid-svg-icons';

// Import sample images (using existing media)
import s1 from '../Media/graphic/s1.jpg';
import s2 from '../Media/graphic/s2.jpg';
import s3 from '../Media/graphic/s3.jpg';
import s4 from '../Media/graphic/s4.jpg';
import s5 from '../Media/graphic/s5.jpg';
import s6 from '../Media/graphic/s6.jpg';
import w1 from '../Media/web/s1.png';
import w2 from '../Media/web/s2.png';
import w3 from '../Media/web/s3.png';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', name: 'All Projects', icon: faPalette },
    { id: 'branding', name: 'Branding', icon: faPaintBrush },
    { id: 'web', name: 'Web Design', icon: faCode },
    { id: 'social', name: 'Social Media', icon: faBullhorn },
    { id: 'ui', name: 'UI/UX', icon: faLaptop },
  ];

  const projects = [
    {
      id: 1,
      title: 'Brand Identity for CoffeeWave',
      category: 'branding',
      image: s1,
      description: 'Complete brand identity design for a modern coffee chain, including logo, color palette, and brand guidelines.',
      client: 'CoffeeWave Nepal',
      year: '2024',
      tags: ['Logo Design', 'Brand Identity', 'Packaging'],
      size: 'large'
    },
    {
      id: 2,
      title: 'E-Commerce UI/UX for UrbanKart',
      category: 'ui',
      image: w1,
      description: 'User-centered e-commerce platform design with seamless shopping experience and modern interface.',
      client: 'UrbanKart',
      year: '2024',
      tags: ['UI/UX', 'E-Commerce', 'Mobile App'],
      size: 'medium'
    },
    {
      id: 3,
      title: 'Social Media Campaign for Techspire College',
      category: 'social',
      image: s2,
      description: 'Comprehensive social media strategy and creative campaign for student enrollment increase.',
      client: 'Techspire College',
      year: '2024',
      tags: ['Social Media', 'Marketing', 'Content Creation'],
      size: 'medium'
    },
    {
      id: 4,
      title: 'Logo Collection Vol. 01',
      category: 'branding',
      image: s3,
      description: 'A curated collection of minimal and modern logo designs for various industries.',
      client: 'Various Clients',
      year: '2023-2024',
      tags: ['Logo Design', 'Minimal', 'Modern'],
      size: 'small'
    },
    {
      id: 5,
      title: 'Website Redesign for Local Businesses',
      category: 'web',
      image: w2,
      description: 'Modern website redesigns helping local Nepali businesses establish their digital presence.',
      client: 'Multiple Local Businesses',
      year: '2024',
      tags: ['Web Design', 'Development', 'SEO'],
      size: 'large'
    },
    {
      id: 6,
      title: 'Festival Campaign Graphics',
      category: 'social',
      image: s4,
      description: 'Vibrant social media graphics for Dashain and Tihar festival campaigns.',
      client: 'Various Brands',
      year: '2024',
      tags: ['Graphics', 'Social Media', 'Seasonal'],
      size: 'small'
    },
    {
      id: 7,
      title: 'Restaurant Menu & Branding',
      category: 'branding',
      image: s5,
      description: 'Complete visual identity and menu design for an upscale restaurant.',
      client: 'The Garden Kitchen',
      year: '2024',
      tags: ['Menu Design', 'Branding', 'Print'],
      size: 'medium'
    },
    {
      id: 8,
      title: 'SaaS Dashboard UI',
      category: 'ui',
      image: w3,
      description: 'Clean and intuitive dashboard interface for a project management SaaS platform.',
      client: 'TaskFlow Pro',
      year: '2024',
      tags: ['Dashboard', 'UI Design', 'SaaS'],
      size: 'medium'
    },
    {
      id: 9,
      title: 'Event Poster Series',
      category: 'social',
      image: s6,
      description: 'Eye-catching event posters and promotional materials for music and cultural events.',
      client: 'Various Events',
      year: '2024',
      tags: ['Poster Design', 'Events', 'Print'],
      size: 'small'
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  // Project Card Component
  const ProjectCard = ({ project, index }) => (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
        project.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
        project.size === 'medium' ? 'md:col-span-1 md:row-span-2' : ''
      }`}
      onClick={() => setSelectedProject(project)}
    >
      {/* Image */}
      <div className="relative w-full h-full min-h-[280px] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-primary via-dark-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <span className="text-neon-cyan text-xs font-medium uppercase tracking-wider mb-2">
            {categories.find(c => c.id === project.category)?.name}
          </span>
          <h3 className="font-space font-bold text-xl text-white mb-2">{project.title}</h3>
          <p className="text-white/60 text-sm line-clamp-2 mb-4">{project.description}</p>
          
          <div className="flex items-center gap-3">
            <motion.button
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm text-white text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faExpand} />
              View Project
            </motion.button>
          </div>
        </div>

        {/* Neon Border on Hover */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-neon-cyan/50 transition-colors duration-500" />
      </div>
    </motion.div>
  );

  // Project Modal
  const ProjectModal = ({ project, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-primary/90 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        className="relative max-w-4xl w-full max-h-[90vh] overflow-auto glass-card rounded-3xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-white transition-colors"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        {/* Image */}
        <div className="relative h-64 md:h-80 overflow-hidden rounded-t-3xl">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-primary to-transparent" />
        </div>

        {/* Content */}
        <div className="p-8">
          <span className="inline-block px-3 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan text-xs font-medium mb-4">
            {categories.find(c => c.id === project.category)?.name}
          </span>
          
          <h2 className="font-space font-bold text-3xl text-white mb-4">{project.title}</h2>
          <p className="text-white/70 mb-6">{project.description}</p>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="text-white/50 text-sm mb-1">Client</h4>
              <p className="text-white font-medium">{project.client}</p>
            </div>
            <div>
              <h4 className="text-white/50 text-sm mb-1">Year</h4>
              <p className="text-white font-medium">{project.year}</p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map(tag => (
              <span key={tag} className="px-4 py-2 rounded-full bg-white/5 text-white/70 text-sm border border-white/10">
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <motion.button
            className="btn-neon-filled"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Start Similar Project</span>
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section id="portfolio" className="relative py-24 lg:py-32 overflow-hidden bg-dark-primary">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh opacity-30" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-neon-purple/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-neon-cyan/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-neon-cyan text-sm font-medium mb-4">
            Our Work
          </span>
          <h2 className="font-space text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Featured <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A showcase of our best work. Each project tells a unique story of creativity, 
            strategy, and execution.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category.id 
                  ? 'bg-neon-cyan text-dark-primary' 
                  : 'glass text-white/70 hover:text-white hover:border-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={category.icon} className="text-sm" />
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            className="btn-neon group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Projects</span>
            <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
