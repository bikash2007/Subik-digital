import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faRocket,
  faHeart,
  faUsers,
  faAward,
  faGlobe,
  faCode,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import profile from "../Media/graphic/profile.png";
import bikash from "../Media/web/profile.png";
import sobit from "../Media/web/sobit.png";

const About = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  // Mission, Vision, Values data
  const values = [
    {
      icon: faLightbulb,
      title: "Innovation",
      description:
        "Pushing creative boundaries with fresh, bold ideas that redefine digital experiences.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: faHeart,
      title: "Passion",
      description:
        "Every pixel we place, every line we code is driven by our love for exceptional design.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: faRocket,
      title: "Excellence",
      description:
        "We don't settle for good. We aim for extraordinary in everything we create.",
      color: "from-cyan-400 to-blue-500",
    },
  ];

  // Timeline data
  const timeline = [
    {
      year: "2022",
      title: "The Beginning",
      description: "Started as a passion project between two creative minds",
    },
    {
      year: "2023",
      title: "First Clients",
      description: "Delivered our first major branding project",
    },
    {
      year: "2024",
      title: "Team Growth",
      description: "Expanded services and welcomed new talent",
    },
    {
      year: "2025",
      title: "Going Global",
      description: "Serving clients across multiple countries",
    },
  ];

  // Team data
  const team = [
    {
      name: "Suyog Lakai",
      role: "Creative Director",
      image: profile,
      skills: ["Photoshop", "Illustrator", "Canva", "Figma", "After Effects"],
      description:
        "A talented graphic designer with a keen eye for detail and a passion for creativity. Transforms ideas into visually stunning designs.",
      social: { linkedin: "#", instagram: "#" },
    },
    {
      name: "Bikash Bhandari",
      role: "Lead Developer",
      image: bikash,
      skills: [
        "React.js",
        "Tailwind CSS",
        "JavaScript",
        "Framer Motion",
        "Node.js",
      ],
      description:
        "A skilled web developer renowned for creating engaging and user-friendly websites that blend functionality with aesthetic appeal.",
      social: { linkedin: "#", instagram: "#" },
    },

    {
      name: "Sobit Tamang",
      role: "Business Development Manager",
      image: sobit,
      accent: "from-violet-500 to-fuchsia-500",
      skills: [
        "Client Relations",
        "Sales Strategy",
        "Lead Generation",
        "Negotiation",
        "Market Research",
      ],
      description:
        "Builds long-term client partnerships and growth opportunities through strategic planning, communication, and market-focused execution.",
      social: { linkedin: "#", instagram: "#" },
    },
  ];

  return (
    <section
      id="about"
      className="relative py-12 md:py-24 lg:py-32 overflow-hidden bg-dark-primary"
    >
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
          className="text-center mb-10 md:mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-neon-cyan text-sm font-medium mb-4">
            About Our Agency
          </span>
          <h2 className="font-space text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            About <span className="text-gradient">Subik Digital Hub</span>
          </h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto">
            We're a results-driven digital marketing and web development agency
            based in Kathmandu, Nepal. From SEO and social media marketing to
            website development and Google Ads management — we help businesses
            across Kathmandu, Lalitpur, Bhaktapur, and Pokhara grow their online
            presence.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-16 items-center mb-16 md:mb-32"
        >
          <motion.div variants={fadeInUp} className="order-2 lg:order-1">
            <h3 className="font-space text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">
              Born from <span className="text-gradient-pink">Passion</span>,
              <br />
              Driven by <span className="text-gradient">Results</span>
            </h3>
            <div className="space-y-6 text-white/70 leading-relaxed text-lg font-inter">
              <p>
                In the heart of Kathmandu, two young digital marketing
                professionals dared to dream big. What started as late-night
                brainstorming sessions evolved into Subik Digital Hub — Nepal's
                fastest-growing digital agency that combines creativity with
                data-driven strategy.
              </p>
              <p>
                As a leading digital marketing company in Nepal, we believe that
                great results come from a perfect blend of innovative design,
                technical SEO expertise, and strategic social media marketing.
                Every project is an opportunity to help businesses in Nepal rank
                higher, grow faster, and convert more customers.
              </p>
            </div>

            {/* Quick Stats (Removed Countries, Balanced 2-column) */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {[
                {
                  icon: faAward,
                  value: "50+",
                  label: "Projects Completed",
                  color: "neon-cyan",
                },
                {
                  icon: faUsers,
                  value: "30+",
                  label: "Happy Clients",
                  color: "neon-purple",
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="relative group overflow-hidden glass-card p-6 border border-white/5 hover:border-white/20 transition-all duration-500"
                  whileHover={{
                    y: -5,
                    backgroundColor: "rgba(255,255,255,0.03)",
                  }}
                >
                  <div
                    className={`absolute top-0 left-0 w-1 h-full bg-${stat.color} opacity-40`}
                  />
                  <FontAwesomeIcon
                    icon={stat.icon}
                    className={`text-${stat.color} text-2xl mb-4 group-hover:scale-110 transition-transform`}
                  />
                  <div className="font-space font-black text-3xl text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase font-bold tracking-widest text-white/40">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* More Interactive & Interesting Visual */}
          <motion.div
            variants={fadeInUp}
            className="order-1 lg:order-2 relative group"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto flex items-center justify-center">
              {/* Pulsating Glow Backdrops */}
              <motion.div
                className="absolute inset-0 bg-neon-cyan/5 rounded-full blur-[100px]"
                animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-20 bg-neon-purple/5 rounded-full blur-[80px]"
                animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
                transition={{ duration: 6, repeat: Infinity, delay: 1 }}
              />

              {/* Dynamic Rotating Rings */}
              {[
                {
                  size: "inset-0",
                  duration: 25,
                  color: "border-neon-cyan/20",
                  reverse: false,
                },
                {
                  size: "inset-12",
                  duration: 18,
                  color: "border-neon-purple/20",
                  reverse: true,
                },
                {
                  size: "inset-24",
                  duration: 30,
                  color: "border-neon-blue/20",
                  reverse: false,
                },
              ].map((ring, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${ring.size} rounded-full border-2 border-dashed ${ring.color}`}
                  animate={{ rotate: ring.reverse ? -360 : 360 }}
                  transition={{
                    duration: ring.duration,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}

              {/* Center Interactive Hub */}
              <motion.div
                className="relative z-20 glass-card p-12 rounded-[40px] text-center border-white/10 shadow-2xl backdrop-blur-2xl cursor-pointer"
                whileHover={{
                  rotateY: 15,
                  rotateX: -15,
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,255,255,0.1)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                style={{ perspective: 1000 }}
              >
                <div className="absolute -inset-[1px] rounded-[40px] bg-gradient-to-br from-neon-cyan/20 via-transparent to-neon-purple/20 pointer-events-none" />
                <div className="font-space text-6xl font-black text-gradient mb-3 tracking-tighter">
                  SDH
                </div>
                <div className="text-white/40 text-[10px] uppercase font-bold tracking-[0.3em]">
                  The Digital Hub <br /> Since 2022
                </div>

                {/* Micro-glow for center hub */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-neon-cyan/50 blur-md rounded-full" />
              </motion.div>

              {/* Floating Orbiting Icons (Interactive Hover Reaction) */}
              {[
                {
                  icon: faCode,
                  pos: "-top-5 left-1/4",
                  color: "text-neon-cyan",
                  delay: 0,
                },
                {
                  icon: faPalette,
                  pos: "-bottom-5 right-1/4",
                  color: "text-neon-purple",
                  delay: 1,
                },
                {
                  icon: faRocket,
                  pos: "top-1/4 -left-5",
                  color: "text-neon-blue",
                  delay: 2,
                },
                {
                  icon: faLightbulb,
                  pos: "bottom-1/4 -right-5",
                  color: "text-neon-teal",
                  delay: 3,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${item.pos} glass w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 shadow-lg z-30 transition-shadow duration-300`}
                  animate={{
                    y: [0, -12, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: item.delay * 0.7,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    scale: 1.2,
                    borderColor: "rgba(0,255,255,0.4)",
                    boxShadow: "0 0 20px rgba(0,255,255,0.2)",
                    rotate: 0,
                    y: -15,
                  }}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className={`${item.color} text-xl`}
                  />
                  {/* Small orbit glow */}
                  <div
                    className={`absolute -inset-1 rounded-2xl opacity-10 blur-sm bg-gradient-to-br ${item.color === "text-neon-cyan" ? "from-neon-cyan" : item.color === "text-neon-purple" ? "from-neon-purple" : "from-neon-blue"}`}
                  />
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
          className="grid md:grid-cols-3 gap-6 mb-12 md:mb-24"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={fadeInUp}
              className="glass-card p-8 group hover:border-neon-cyan/30 transition-all duration-500"
              whileHover={{ y: -10 }}
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <FontAwesomeIcon
                  icon={value.icon}
                  className="text-white text-xl"
                />
              </div>
              <h4 className="font-space font-bold text-xl text-white mb-3">
                {value.title}
              </h4>
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
          className="mb-16 md:mb-32"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full glass text-neon-cyan text-[10px] font-bold uppercase tracking-widest mb-4">
              Evolution of SDH
            </span>
            <h3 className="font-space text-4xl md:text-5xl font-black text-white">
              Our <span className="text-gradient">Journey</span>
            </h3>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10" />
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  variants={fadeInUp}
                  className="relative group"
                >
                  <div
                    className={`md:flex items-center ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="md:w-1/2">
                      <div
                        className={`p-8 rounded-lg border border-white/10 bg-dark-primary/50 backdrop-blur-sm transition-all duration-300 group-hover:border-neon-cyan/50 group-hover:bg-dark-primary/80 ${
                          index % 2 === 0 ? "md:ml-10" : "md:mr-10"
                        }`}
                      >
                        <h4 className="font-space font-bold text-white text-xl mb-2">
                          {item.title}
                        </h4>
                        <p className="text-white/60 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-24 h-24 rounded-full border-2 border-dashed border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-neon-cyan/50 group-hover:scale-110 group-hover:rotate-90">
                      <div className="w-20 h-20 rounded-full bg-dark-primary flex items-center justify-center">
                        <div className="font-space font-black text-2xl text-neon-cyan">
                          {item.year}
                        </div>
                      </div>
                    </div>
                  </div>
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
          className="relative"
        >
          {/* Section Heading */}
          <motion.div variants={fadeInUp} className="text-center mb-20">
            <span className="inline-block px-4 py-2 rounded-full glass text-neon-purple text-[10px] font-bold uppercase tracking-widest mb-4">
              Expertise In Every Layer
            </span>
            <h3 className="font-space text-4xl md:text-5xl font-black text-white">
              Meet the <span className="text-gradient">Creative Minds</span>
            </h3>
            <p className="text-white/40 mt-4 max-w-2xl mx-auto text-sm font-medium">
              We're a collective of performance marketers, design obsessives,
              and full-stack developers dedicated to your success.
            </p>
          </motion.div>

          {/* Unified Team Grid (Balanced 3-column layout) */}
          <div className="grid lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                className="glass-card p-10 relative group text-center flex flex-col items-center"
                whileHover={{ y: -15 }}
              >
                {/* Avatar with Dual Neon Glow */}
                <div className="relative mb-8">
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple opacity-30 blur-md group-hover:opacity-70 transition-opacity duration-500" />
                  <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-neon-cyan transition-colors">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Member Info */}
                <h4 className="font-space font-black text-2xl text-white tracking-tight mb-2">
                  {member.name}
                </h4>
                <p className="text-neon-cyan font-bold text-xs uppercase tracking-widest mb-5">
                  {member.role}
                </p>
                <p className="text-white/50 text-[13px] leading-relaxed mb-8 flex-1">
                  {member.description}
                </p>

                {/* Skills Chips */}
                <div className="flex flex-wrap justify-center gap-2">
                  {member.skills.slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg text-[10px] font-bold bg-white/5 text-white/70 border border-white/5 group-hover:border-neon-cyan/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
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
