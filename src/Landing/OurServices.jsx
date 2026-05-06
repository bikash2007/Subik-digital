import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPalette, faVideo } from '@fortawesome/free-solid-svg-icons';

const useReveal = (ref) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.15 }
    );
    const els = ref.current?.querySelectorAll('.reveal');
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [ref]);
};

const services = [
  {
    icon: <FontAwesomeIcon icon={faCode} />,
    title: 'Web Development',
    description: 'From landing pages to full-stack apps — fast, responsive, SEO-ready, and built to convert.',
    includes: [
      'Landing page & full-stack web app development',
      'eCommerce website development',
      'Responsive, mobile-first design',
      'SEO-optimized & performance-tuned',
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    tagType: 'teal',
    id: 'service-web',
  },
  {
    icon: <FontAwesomeIcon icon={faPalette} />,
    title: 'Graphic Design',
    description: 'Logo design, brand identity systems, social media graphics — everything that makes you look unforgettable.',
    includes: [
      'Logo design & complete brand identity systems',
      'Social media graphics (Instagram, Facebook)',
      'Brand consistency kits',
    ],
    tags: ['Adobe Illustrator', 'Photoshop', 'Canva'],
    tagType: 'teal',
    id: 'service-design',
  },
  {
    icon: <FontAwesomeIcon icon={faVideo} />,
    title: 'Content & Media',
    description: 'Monthly social media posts, Reels, and video editing — consistent content that builds your audience.',
    includes: [
      '12–20 social media posts per month',
      'Video editing — Reels & promotional content',
      'Content planning & strategy',
    ],
    tags: ['Adobe Premiere Pro', 'CapCut'],
    tagType: 'teal',
    id: 'service-content',
  },
];

const OurServices = () => {
  const sectionRef = useRef(null);
  useReveal(sectionRef);

  return (
    <section id="services" className="section-padding" style={{ background: 'var(--bg-midnight)' }} ref={sectionRef}>
      <div className="container-xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal">
            <span className="eyebrow" style={{ color: 'var(--accent-cyan)' }}>
              <span className="section-marker" style={{ background: 'var(--accent-cyan)' }} />
              What We Do
            </span>
          </div>
          <h2 className="font-header font-bold text-4xl md:text-5xl text-white reveal reveal-delay-1 mt-4">
            One Agency. Three Powerhouses.
          </h2>
          <p className="subtext max-w-lg mx-auto mt-4 reveal reveal-delay-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Design, development, and content — all under one roof. No juggling multiple vendors.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, i) => (
            <div
              id={service.id}
              key={service.title}
              className={`glass-panel tech-card p-10 reveal reveal-delay-${i + 1} group relative overflow-hidden`}
              style={{
                borderLeft: 'none',
              }}
            >
              {/* Subtle animated background glow inside the card */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-blue/20 rounded-full blur-3xl group-hover:bg-accent-green/20 transition-colors duration-700 pointer-events-none" />

              {/* Icon */}
              <div
                className="blob-shape w-16 h-16 flex items-center justify-center text-2xl mb-8 relative z-10 text-white"
                style={{ background: 'linear-gradient(135deg, rgba(54, 211, 153, 0.2), rgba(37, 99, 235, 0.2))', border: '1px solid rgba(54, 211, 153, 0.4)' }}
              >
                {service.icon}
              </div>

              {/* Title & Description */}
              <h3 className="font-header font-bold text-2xl mb-4 text-white relative z-10">
                {service.title}
              </h3>
              <p className="font-body text-sm leading-relaxed mb-6 text-white/70">
                {service.description}
              </p>

              {/* Includes List */}
              <ul className="flex flex-col gap-2.5 mb-6">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span style={{ color: 'var(--accent-green)', marginTop: '2px', flexShrink: 0, fontSize: '0.75rem' }}>✦</span>
                    <span className="font-body text-sm text-white/80">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 rounded bg-accent-blue/20 text-accent-cyan text-xs font-medium border border-accent-blue/30">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 reveal reveal-delay-4">
          <a
            href="https://wa.me/9779828940955?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange"
            style={{ background: 'var(--accent-green)', borderColor: 'var(--accent-green)', boxShadow: '0 0 10px rgba(54, 211, 153, 0.3)' }}
          >
            Discuss Your Project →
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
