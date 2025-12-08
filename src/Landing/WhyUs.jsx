import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLightbulb,
  faBolt,
  faGem,
  faChartLine,
  faHandshake,
  faGlobe,
  faArrowRight,
  faCheck
} from '@fortawesome/free-solid-svg-icons';

const WhyUs = () => {
  const advantages = [
    {
      icon: faLightbulb,
      title: 'Young & Creative Talent',
      description: 'Fresh perspectives and innovative ideas from a passionate team of young creatives who understand modern trends.',
      gradient: 'from-amber-400 to-orange-500',
      stat: 'Gen-Z Powered',
    },
    {
      icon: faBolt,
      title: 'Fast Delivery',
      description: 'We respect your time. Quick turnarounds without compromising on quality, because your deadlines matter.',
      gradient: 'from-cyan-400 to-blue-500',
      stat: '48hr Turnaround',
    },
    {
      icon: faGem,
      title: 'Premium Aesthetic Designs',
      description: 'Awwwards-level quality in every project. We create designs that stand out and make a lasting impression.',
      gradient: 'from-purple-500 to-pink-500',
      stat: '100% Premium',
    },
    {
      icon: faChartLine,
      title: 'Result-Focused Strategy',
      description: 'Every design decision is backed by strategy. We create work that not only looks good but drives results.',
      gradient: 'from-emerald-400 to-teal-500',
      stat: 'Data-Driven',
    },
    {
      icon: faHandshake,
      title: 'Transparent Pricing',
      description: 'No hidden fees, no surprises. Clear pricing from day one so you know exactly what you\'re investing in.',
      gradient: 'from-blue-500 to-indigo-600',
      stat: 'No Hidden Costs',
    },
    {
      icon: faGlobe,
      title: 'Nepali-Based Global Agency',
      description: 'Proudly based in Nepal, serving clients worldwide. Local expertise with a global perspective.',
      gradient: 'from-rose-500 to-red-600',
      stat: '5+ Countries',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="why-us" className="relative py-24 lg:py-32 overflow-hidden bg-dark-primary">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-mesh opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-cyan/5 rounded-full blur-[150px]" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-20" />

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
            Why Choose Us
          </span>
          <h2 className="font-space text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            What Makes Us <span className="text-gradient">Different</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            We're not just another design agency. Here's why brands choose Subik Design Hub 
            for their creative needs.
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
              className="group relative"
            >
              <motion.div
                className="glass-card h-full p-8 transition-all duration-500 group-hover:border-white/20"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Icon */}
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${advantage.gradient} flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FontAwesomeIcon icon={advantage.icon} className="text-white text-xl" />
                  </motion.div>
                  
                  {/* Stat Badge */}
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-neon-cyan border border-neon-cyan/20">
                    {advantage.stat}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-space font-bold text-xl text-white mb-3 group-hover:text-gradient transition-all duration-300">
                  {advantage.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {advantage.description}
                </p>

                {/* Decorative Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${advantage.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl`} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12 rounded-3xl"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '50+', label: 'Projects Delivered', suffix: '' },
              { value: '98', label: 'Client Satisfaction', suffix: '%' },
              { value: '24', label: 'Average Turnaround', suffix: 'hrs' },
              { value: '30+', label: 'Happy Clients', suffix: '' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                className="relative"
              >
                <div className="font-space font-bold text-4xl md:text-5xl text-gradient mb-2">
                  {stat.value}
                  <span className="text-2xl">{stat.suffix}</span>
                </div>
                <div className="text-white/50 text-sm">{stat.label}</div>
                
                {/* Divider (for desktop) */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-px h-12 -translate-y-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16"
        >
          <h3 className="font-space font-bold text-2xl md:text-3xl text-white mb-4">
            Ready to <span className="text-gradient">Transform</span> Your Brand?
          </h3>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Join the growing list of businesses that trust Subik Design Hub for their creative needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#contact"
              className="btn-neon-filled group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start Your Project</span>
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#portfolio"
              className="btn-neon"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Work
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
