import React, { useEffect, useRef } from 'react';

const useReveal = (ref) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    const els = ref.current?.querySelectorAll('.reveal');
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [ref]);
};

const advantages = [
  {
    icon: '⚡',
    title: 'Fast Execution',
    desc: 'Idea to live website in as few as 5 days. Speed is our superpower — without cutting corners.',
  },
  {
    icon: '🔧',
    title: 'All-in-One Service',
    desc: 'Design + Development + Content under one roof. One contact. Zero vendor confusion.',
  },
  {
    icon: '💰',
    title: 'Truly Affordable',
    desc: 'Professional output priced for Nepali startups. No agency markup games.',
  },
  {
    icon: '🔥',
    title: 'Youth-Driven Energy',
    desc: 'A young team that lives modern design and digital trends every single day.',
  },
  {
    icon: '📊',
    title: 'Real Track Record',
    desc: '7 clients, 5 projects, 10,000+ active users — all since September 2024.',
  },
  {
    icon: '🤝',
    title: 'Post-Delivery Support',
    desc: 'We don\'t disappear after launch. Support is built into every package.',
  },
];

const WhyUs = () => {
  const sectionRef = useRef(null);
  useReveal(sectionRef);

  return (
    <section id="why-us" className="section-padding" style={{ background: 'var(--bg-midnight)' }} ref={sectionRef}>
      <div className="container-xl">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="reveal">
            <span className="eyebrow" style={{ color: 'var(--accent-cyan)' }}>
              <span className="section-marker" style={{ background: 'var(--accent-blue)' }} />
              The Subik Advantage
            </span>
          </div>
          <h2 className="font-header font-bold text-4xl md:text-5xl reveal reveal-delay-1 mt-4" style={{ color: 'var(--text-main)' }}>
            Why Clients Choose Us<br />
            <span style={{ color: 'var(--accent-green)' }}>(and Keep Coming Back)</span>
          </h2>
        </div>

        {/* 2×3 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, i) => (
            <div
              key={adv.title}
              className={`glass-panel p-8 reveal reveal-delay-${(i % 3) + 1}`}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5"
                style={{ background: 'rgba(54, 211, 153, 0.08)', border: '1px solid rgba(54, 211, 153, 0.15)' }}
              >
                {adv.icon}
              </div>
              <h3 className="font-header font-bold text-lg mb-3" style={{ color: 'var(--text-main)' }}>
                {adv.title}
              </h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
                {adv.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
