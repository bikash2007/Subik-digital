import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheck, faStar, faCrown, faRocket,
  faChevronDown, faChevronUp, faArrowRight
} from '@fortawesome/free-solid-svg-icons';

const Pricing = () => {
  const [expandedPlan, setExpandedPlan] = useState(null);
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Starter',
      subtitle: 'Perfect for small businesses',
      price: 'Rs 7,000',
      priceNote: '/month',
      icon: faRocket,
      gradient: 'from-cyan-400 to-blue-500',
      glowColor: 'rgba(34, 211, 238, 0.3)',
      borderColor: 'border-cyan-400/30',
      features: [
        { text: 'Social Media Management', included: true },
        { text: 'Content Creation', included: true },
        { text: 'Monthly Analytics Report', included: true },
        { text: '12 Graphic Design Posts', included: true },
        { text: '1 Motion Video', included: true },
        { text: '1 Festival Post Free', included: true },
        { text: 'Basic SEO Support', included: false },
        { text: 'Priority Support', included: false },
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'Growth',
      subtitle: 'Best for growing brands',
      price: 'Rs 12,000',
      priceNote: '/month',
      icon: faStar,
      gradient: 'from-purple-500 to-pink-500',
      glowColor: 'rgba(168, 85, 247, 0.4)',
      borderColor: 'border-purple-500/50',
      features: [
        { text: 'All Starter Features', included: true },
        { text: 'SEO Optimization', included: true },
        { text: 'Email Marketing Setup', included: true },
        { text: 'Weekly Analytics Report', included: true },
        { text: '15 Graphic Design Posts', included: true },
        { text: '3 Motion Videos', included: true },
        { text: 'All Festival Posts Free', included: true },
        { text: 'Dedicated Support', included: true },
      ],
      popular: true,
      cta: 'Choose Growth'
    },
    {
      name: 'Premium',
      subtitle: 'For serious market leaders',
      price: 'Rs 30,000',
      priceNote: '/month',
      icon: faCrown,
      gradient: 'from-amber-400 to-orange-500',
      glowColor: 'rgba(251, 191, 36, 0.3)',
      borderColor: 'border-amber-400/30',
      features: [
        { text: 'All Growth Features', included: true },
        { text: 'PPC Advertising Setup', included: true },
        { text: 'Advanced Analytics Dashboard', included: true },
        { text: '24/7 Priority Support', included: true },
        { text: '30 Graphic Design Posts', included: true },
        { text: '5 Motion Videos', included: true },
        { text: 'All Festival Posts Free', included: true },
        { text: 'Dedicated Account Manager', included: true },
      ],
      popular: false,
      cta: 'Go Premium'
    },
  ];

  const PricingCard = ({ plan, index }) => {
    const isExpanded = expandedPlan === index;
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`relative ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
      >
        {/* Popular Badge */}
        {plan.popular && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
            <motion.div 
              className="px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold shadow-lg"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FontAwesomeIcon icon={faStar} className="mr-1" />
              Most Popular
            </motion.div>
          </div>
        )}

        {/* Card */}
        <motion.div
          className={`relative h-full glass-card p-8 transition-all duration-500 ${
            plan.popular 
              ? 'border-2 border-purple-500/50' 
              : `border ${plan.borderColor}`
          }`}
          whileHover={{ y: -10, scale: 1.02 }}
        >
          {/* Glow Effect for Popular */}
          {plan.popular && (
            <div 
              className="absolute -inset-1 rounded-3xl opacity-50 blur-xl -z-10"
              style={{ background: plan.glowColor }}
            />
          )}

          {/* Icon & Title */}
          <div className="text-center mb-8">
            <motion.div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg`}
              whileHover={{ rotate: 10, scale: 1.1 }}
            >
              <FontAwesomeIcon icon={plan.icon} className="text-white text-2xl" />
            </motion.div>
            <h3 className="font-space font-bold text-2xl text-white">{plan.name}</h3>
            <p className="text-white/50 text-sm mt-1">{plan.subtitle}</p>
          </div>

          {/* Price */}
          <div className="text-center mb-8">
            <div className="flex items-baseline justify-center gap-1">
              <span className="font-space font-bold text-5xl text-gradient">{plan.price}</span>
            </div>
            <span className="text-white/50 text-sm">{plan.priceNote}</span>
          </div>

          {/* Features */}
          <div className="space-y-4 mb-8">
            {plan.features.slice(0, isExpanded ? undefined : 5).map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3"
              >
                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                  feature.included 
                    ? 'bg-gradient-to-br from-emerald-400 to-teal-500' 
                    : 'bg-white/10'
                }`}>
                  <FontAwesomeIcon 
                    icon={faCheck} 
                    className={`text-xs ${feature.included ? 'text-white' : 'text-white/30'}`} 
                  />
                </div>
                <span className={feature.included ? 'text-white/80' : 'text-white/40 line-through'}>
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Expand/Collapse Button */}
          {plan.features.length > 5 && (
            <button
              onClick={() => setExpandedPlan(isExpanded ? null : index)}
              className="flex items-center gap-2 text-neon-cyan text-sm font-medium mb-6 hover:underline"
            >
              {isExpanded ? 'Show Less' : `+${plan.features.length - 5} more features`}
              <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} className="text-xs" />
            </button>
          )}

          {/* CTA Button */}
          <motion.button
            className={`w-full py-4 rounded-xl font-space font-semibold text-lg transition-all duration-300 ${
              plan.popular 
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-neon-purple' 
                : 'btn-neon'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {plan.cta}
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </motion.button>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="pricing" className="relative py-24 lg:py-32 overflow-hidden bg-dark-secondary">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent" />
      
      {/* Floating Orbs */}
      <motion.div 
        className="absolute top-1/3 -left-32 w-64 h-64 bg-neon-cyan/20 rounded-full blur-[100px]"
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/3 -right-32 w-64 h-64 bg-neon-purple/20 rounded-full blur-[100px]"
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
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
            Pricing
          </span>
          <h2 className="font-space text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Simple, <span className="text-gradient">Transparent</span> Pricing
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your business. All plans include our commitment to 
            quality and on-time delivery.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="glass-card inline-block p-6 rounded-2xl">
            <p className="text-white/60 mb-3">
              Need a custom solution? We create tailored packages for your unique requirements.
            </p>
            <a 
              href="#contact" 
              className="text-neon-cyan font-medium hover:underline inline-flex items-center gap-2"
            >
              Contact us for custom pricing
              <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
            </a>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 mt-12"
        >
          {[
            { text: 'No Hidden Fees', icon: faCheck },
            { text: 'Cancel Anytime', icon: faCheck },
            { text: '100% Satisfaction', icon: faCheck },
          ].map((badge, index) => (
            <div key={index} className="flex items-center gap-2 text-white/60">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <FontAwesomeIcon icon={badge.icon} className="text-emerald-400 text-xs" />
              </div>
              <span className="text-sm">{badge.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
