import React from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "Rs 7,000",
      features: [
        "Social Media Management",
        "Content Creation",
        "Monthly Analytics Report",
        "graphics design 12 post ",
        "1 video",
        "1 festival post free",
      ],
      buttonColor: "bg-[#30D5C8]",
      borderColor: "border-[#30D5C8]",
    },
    {
      name: "Standard",
      price: "Rs 12,000",
      features: [
        "All Basic Features",
        "SEO Optimization",
        "Email Marketing",
        "Weekly Analytics Report",
        "Artwork 15",
        "Motion video 3",
        "Free all festival post"
      ],
      buttonColor: "bg-[#30D5C8]",
      borderColor: "border-[#30D5C8]",
      highlight: true, // Highlight Standard plan
    },
    {
      name: "Premium",
      price: "Rs 30,000",
      features: [
        "All Standard Features",
        "PPC Advertising",
        "Advanced Analytics",
        "24/7 Support",
        "Artwork 30",
        "Motion video 5",
        "Free all festival post"
      ],
      buttonColor: "bg-[#30D5C8]",
      borderColor: "border-[#30D5C8]",
    },
  ];

  return (
    <div className="relative bg-[#0B1120] text-white py-16 px-4">
      {/* Background Texture */}
      <div className="absolute inset-0">
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 800"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle cx="400" cy="400" r="300" fill="#30D5C8" />
          <circle cx="400" cy="400" r="250" fill="url(#grad1)" />
          <defs>
            <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" style={{ stopColor: '#30D5C8', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#0B1120', stopOpacity: 1 }} />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="relative container mx-auto text-center">
        <motion.h1
          className="text-5xl font-extrabold mb-12 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Our Pricing Plans
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-r from-[#0B1120] to-gray-900 p-8 rounded-xl shadow-xl border ${plan.borderColor} hover:bg-red-400 overflow-hidden transform hover:-translate-y-1 transition-all duration-300 ${plan.highlight ? "scale-105 shadow-2xl" : ""}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Cool Art */}
              <div className="absolute inset-0 opacity-20">
                <svg
                  className="absolute bottom-0 right-0 w-32 h-32 opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 100 100"
                >
                  <polygon points="50,15 61,62 15,62" fill="#30D5C8" />
                </svg>
              </div>

              <h2 className={`text-3xl font-semibold mb-6 ${plan.highlight ? "text-[#30D5C8]" : ""}`}>{plan.name}</h2>
              <p className="text-4xl font-bold mb-8">{plan.price}</p>
              <ul className="text-left mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-lg mb-4">
                    • {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${plan.buttonColor} text-[#0B1120] px-5 py-3 rounded-lg hover:bg-[#2AC2B3] transition-colors duration-300`}
              >
                Choose Plan
              </motion.button>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
