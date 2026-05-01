import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faStar,
  faCrown,
  faRocket,
  faArrowRight,
  faShieldHalved,
  faZap,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      subtitle: "Best for new brands starting social media growth",
      marketPrice: "Rs 12,500",
      discountedPrice: "Rs 10,000",
      priceNote: "/month",
      icon: faRocket,
      accentColor: "neon-cyan",
      btnClass: "btn-neon",
      savings: "Save Rs 2,500",
      features: [
        "1 social media account",
        "5 static posts",
        "Content calendar and monthly reporting",
        "Social media marketing strategy (basic)",
        "Competitive analysis (basic)",
      ],
      popular: false,
      cta: "Select Basic",
    },
    {
      name: "Advanced",
      subtitle: "Perfect for businesses scaling content and reach",
      marketPrice: "Rs 18,000",
      discountedPrice: "Rs 15,000",
      priceNote: "/month",
      icon: faStar,
      accentColor: "neon-purple",
      btnClass: "btn-neon-filled btn-purple",
      savings: "Save Rs 3,000",
      features: [
        "Cover page design",
        "2 social media accounts",
        "8 static posts + stories",
        "Reels editing (2 videos - 2D/AI)",
        "Social media strategy",
        "Competitive analysis",
      ],
      popular: true,
      cta: "Go Advanced",
    },
    {
      name: "Premium",
      subtitle: "For established brands needing high-impact output",
      marketPrice: "Rs 32,000",
      discountedPrice: "Rs 25,000",
      priceNote: "/month",
      icon: faCrown,
      accentColor: "neon-pink",
      btnClass: "btn-neon-filled",
      savings: "Save Rs 7,000",
      features: [
        "3 social media accounts",
        "12 static posts + 10 stories",
        "Reels editing (5 videos - 2D/AI)",
        "Advanced strategy and analysis",
        "Custom ad post designs",
        "Hashtag strategy",
      ],
      popular: false,
      cta: "Select Premium",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="pricing" className="relative py-12 md:py-24 lg:py-32 overflow-hidden bg-[#050816]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-mesh opacity-30" />
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      {/* Premium Floating Elements */}
      <motion.div 
        className="orb orb-cyan w-[40rem] h-[40rem] -top-40 -left-60 opacity-30" 
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div 
        className="orb orb-purple w-[35rem] h-[35rem] -bottom-40 -right-40 opacity-20" 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-6"
          >
            <FontAwesomeIcon icon={faTrophy} className="text-neon-cyan text-xs" />
            <span className="text-neon-cyan text-[10px] font-bold uppercase tracking-widest">
              Limited Time Special Rates
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-space text-4xl md:text-5xl lg:text-8xl font-black text-white mb-6 md:mb-8 tracking-tighter"
          >
            Scale Your <span className="text-gradient">Empire</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-inter leading-relaxed"
          >
            Join the elite circle of brands growing with Subik Digital Hub. Choose a plan that matches your ambition.
          </motion.p>
        </div>

        {/* Pricing Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-3 gap-10 items-stretch"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className="relative group h-full"
            >
              {/* Animated Border for Popular */}
              {plan.popular && (
                <div className="absolute -inset-[2px] rounded-[32px] bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta animate-gradient-x opacity-70 blur-[1px] group-hover:opacity-100 transition-opacity" />
              )}

              {/* Card Main Container */}
              <div className={`relative h-full glass-card overflow-hidden p-[1px] rounded-[30px] transition-all duration-500 ${
                plan.popular ? "bg-transparent scale-105" : "bg-white/5 hover:border-white/20"
              }`}>
                <div className="h-full bg-dark-primary/95 rounded-[29px] p-8 md:p-10 flex flex-col relative z-20">
                  {/* Glass Highlight */}
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

                  {/* Pricing Icon */}
                  <div className="mb-8">
                    <div className={`w-16 h-16 rounded-[20px] mb-8 flex items-center justify-center border transition-all duration-500 group-hover:scale-110 ${
                      plan.popular 
                        ? "bg-neon-purple/10 border-neon-purple/40 shadow-[0_0_20px_rgba(168,85,247,0.2)]" 
                        : "bg-white/5 border-white/10 group-hover:border-neon-cyan/50"
                    }`}>
                      <FontAwesomeIcon 
                        icon={plan.icon} 
                        className={`text-2xl transition-all duration-500 ${
                          plan.popular ? "text-neon-purple text-glow-purple" : "text-white/80 group-hover:text-neon-cyan group-hover:text-glow-cyan"
                        }`} 
                      />
                    </div>
                    
                    <div className="flex items-center justify-between mb-2">
                       <h3 className="font-space text-3xl font-black text-white uppercase tracking-tight">{plan.name}</h3>
                       {plan.popular && (
                         <span className="px-3 py-1 bg-neon-purple text-white text-[9px] font-black uppercase rounded-full shadow-neon-purple animate-pulse">
                           Recommended
                         </span>
                       )}
                    </div>
                    <p className="text-white/40 text-sm font-medium">{plan.subtitle}</p>
                  </div>

                  {/* Pricing Section */}
                  <div className="mb-10">
                    <div className="flex items-center gap-3 mb-2">
                       <span className="text-white/30 line-through text-sm font-bold tracking-wider">{plan.marketPrice}</span>
                       <span className="px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-[9px] font-black uppercase border border-emerald-500/20">
                         {plan.savings}
                       </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-space text-5xl font-black text-white tracking-tighter">{plan.discountedPrice}</span>
                      <span className="text-white/30 text-xs font-bold uppercase tracking-widest">{plan.priceNote}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex-1 mb-12">
                    <p className="text-white/30 text-[10px] uppercase font-black tracking-widest mb-6 border-b border-white/5 pb-2">What's Included</p>
                    <ul className="space-y-5">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <FontAwesomeIcon icon={faCheck} className={`mt-1 text-xs ${plan.popular ? "text-neon-purple" : "text-neon-cyan"}`} />
                          <span className="text-white/70 text-[13px] font-medium leading-tight group-hover:text-white transition-colors">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Improved Action Button (Fix for glitching) */}
                  <motion.div whileHover="hover" whileTap="tap">
                    <motion.button
                      className={`w-full font-space py-5 rounded-2xl text-base font-black uppercase tracking-widest flex items-center justify-center relative overflow-hidden transition-all duration-300 ${
                        plan.popular 
                          ? "bg-neon-purple text-white shadow-[0_10px_30px_rgba(168,85,247,0.3)]" 
                          : "border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-primary shadow-[0_5px_15px_rgba(0,255,255,0.1)]"
                      }`}
                      variants={{
                        hover: { 
                          y: -5,
                          boxShadow: plan.popular 
                            ? "0 20px 40px rgba(168, 85, 247, 0.4)" 
                            : "0 10px 30px rgba(0, 255, 255, 0.3)"
                        },
                        tap: { scale: 0.96 }
                      }}
                    >
                      <span className="mr-3">{plan.cta}</span>
                      <motion.div
                        variants={{
                          hover: { x: 5 }
                        }}
                      >
                        <FontAwesomeIcon icon={faArrowRight} />
                      </motion.div>
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-32 max-w-4xl mx-auto"
        >
          <div className="p-10 rounded-[40px] glass-dark border border-white/5 relative overflow-hidden text-center group">
             {/* Background glow for the trust section */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-neon-cyan/5 blur-[80px] -z-10" />
             
             <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                <div className="text-left">
                   <h4 className="font-space text-2xl font-black text-white mb-2">Looking for a <span className="text-gradient">Custom Plan?</span></h4>
                   <p className="text-white/50 text-sm">We handle large-scale enterprise solutions and specialized niche strategies.</p>
                </div>
                
                <div className="flex items-center gap-6">
                   <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-12 h-12 rounded-full border-4 border-dark-primary bg-[#111827] flex items-center justify-center text-white/30 group-hover:border-neon-cyan/20 transition-colors">
                          <FontAwesomeIcon icon={faShieldHalved} />
                        </div>
                      ))}
                   </div>
                   <motion.button 
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="px-8 py-4 bg-white text-dark-primary font-space font-black uppercase text-xs rounded-xl hover:bg-neon-cyan transition-colors"
                   >
                     Talk to Experts
                   </motion.button>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
