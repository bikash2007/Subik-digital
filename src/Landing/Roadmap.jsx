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

const phases = [
  {
    label: 'NOW',
    title: 'Foundation',
    items: [
      '7 clients & 5 projects',
      'Live portfolio',
      'Service packages defined',
    ],
    isNow: true,
  },
  {
    label: '6 MONTHS',
    title: 'Scale Nepal',
    items: [
      'Case study library',
      'Client referral program',
      'Internship team of 5',
    ],
    isNow: false,
  },
  {
    label: '1 YEAR',
    title: 'Premium Tier',
    items: [
      'NPR 100K+ projects',
      'Dedicated design studio',
      'Structured sales pipeline',
    ],
    isNow: false,
  },
  {
    label: '2 YEARS',
    title: 'Global Reach',
    items: [
      'International clients',
      'Full-service digital agency',
      '100+ clients served',
    ],
    isNow: false,
  },
];

const Roadmap = () => {
  const sectionRef = useRef(null);
  useReveal(sectionRef);

  return (
    <section id="roadmap" className="section-padding" style={{ background: 'var(--bg-midnight)' }} ref={sectionRef}>
      <div className="container-xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal">
            <span className="eyebrow" style={{ color: 'var(--accent-cyan)' }}>
              <span className="section-marker" style={{ background: 'var(--accent-blue)' }} />
              Where We're Going
            </span>
          </div>
          <h2 className="font-header font-bold text-4xl md:text-5xl reveal reveal-delay-1 mt-4" style={{ color: 'var(--text-main)' }}>
            From Kathmandu to the World.
          </h2>
        </div>

        {/* Horizontal timeline */}
        <div className="relative reveal reveal-delay-2">
          {/* Connecting line */}
          <div
            className="absolute top-5 left-0 right-0 hidden lg:block"
            style={{ height: '2px', background: 'linear-gradient(90deg, var(--accent-green), var(--accent-cyan), rgba(37,99,235,0.3), rgba(37,99,235,0.1))', zIndex: 0 }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {phases.map((phase, i) => (
              <div
                key={phase.label}
                className={`relative z-10 flex flex-col ${phase.isNow ? 'phase-now' : ''}`}
              >
                {/* Phase dot + label */}
                <div className="flex items-center gap-3 mb-5 lg:flex-col lg:items-start lg:gap-2">
                  <div
                    className={`phase-dot w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-header font-bold text-xs transition-all duration-300`}
                    style={{
                      background: phase.isNow ? 'var(--accent-green)' : 'var(--bg-midnight)',
                      color: phase.isNow ? '#0B0E23' : '#FFFFFF',
                      border: phase.isNow ? 'none' : '2px solid var(--accent-blue)',
                      boxShadow: phase.isNow ? '0 0 20px rgba(54, 211, 153, 0.4)' : 'none',
                    }}
                  >
                    {phase.isNow ? '●' : i + 1}
                  </div>
                  <div>
                    <p
                      className="font-body text-xs font-bold uppercase tracking-widest"
                      style={{ color: phase.isNow ? 'var(--accent-green)' : 'rgba(255,255,255,0.5)', letterSpacing: '0.12em' }}
                    >
                      {phase.label}
                    </p>
                    <h3 className="font-header font-bold text-lg" style={{ color: 'var(--text-main)' }}>
                      {phase.title}
                    </h3>
                  </div>
                </div>

                {/* Items */}
                <ul className="flex flex-col gap-2.5">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span
                        style={{
                          color: phase.isNow ? 'var(--accent-green)' : 'var(--accent-blue)',
                          fontSize: '0.65rem',
                          marginTop: '3px',
                          flexShrink: 0,
                        }}
                      >
                        ✦
                      </span>
                      <span className="font-body text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
