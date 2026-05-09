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

const steps = [
  {
    num: '01',
    title: 'Client Inquiry',
    desc: 'You reach out. We respond within 24 hours, always.',
  },
  {
    num: '02',
    title: 'Requirement Discussion',
    desc: 'A short call to understand your goals, audience, and timeline.',
  },
  {
    num: '03',
    title: 'Planning & Design',
    desc: 'Wireframes and a project plan — approved by you before anything is built.',
  },
  {
    num: '04',
    title: 'Development Phase',
    desc: 'We build fast. Weekly check-ins so you\'re never in the dark.',
  },
  {
    num: '05',
    title: 'Testing & Revisions',
    desc: 'Two full rounds of revisions included. We don\'t stop until it\'s right.',
  },
  {
    num: '06',
    title: 'Final Delivery',
    desc: 'Launched, deployed, and handed over with documentation.',
  },
  {
    num: '07',
    title: 'Post-Delivery Support',
    desc: 'Questions, tweaks, updates — every package includes ongoing support.',
  },
];

const Process = () => {
  const sectionRef = useRef(null);
  useReveal(sectionRef);

  return (
    <section id="process" className="section-padding" style={{ background: 'var(--bg-midnight)' }} ref={sectionRef}>
      <div className="container-xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal">
            <span className="eyebrow" style={{ color: 'var(--accent-cyan)' }}>
              <span className="section-marker" style={{ background: 'var(--accent-blue)' }} />
              How We Work
            </span>
          </div>
          <h2 className="font-header font-bold text-4xl md:text-5xl reveal reveal-delay-1 mt-4" style={{ color: 'var(--text-main)' }}>
            From Idea to Live —<br />
            <span style={{ color: 'var(--accent-green)' }}>In Days, Not Months.</span>
          </h2>
        </div>

        {/* Desktop: horizontal step row */}
        <div className="hidden lg:flex items-start gap-0 reveal reveal-delay-2">
          {steps.map((step, i) => (
            <div key={step.num} className="flex-1 relative group">
              {/* Connector line between steps */}
              {i < steps.length - 1 && (
                <div
                  className="absolute top-5 left-1/2 w-full h-[2px]"
                  style={{ background: 'linear-gradient(90deg, var(--accent-blue), rgba(37, 99, 235, 0.2))', zIndex: 0 }}
                />
              )}

              <div className="flex flex-col items-center text-center px-3 relative z-10">
                {/* Number circle */}
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-header font-bold text-sm mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: i === 0 ? 'var(--accent-green)' : 'var(--bg-midnight)',
                    color: i === 0 ? '#0B0E23' : '#FFFFFF',
                    border: i === 0 ? '2px solid var(--accent-green)' : '2px solid var(--accent-blue)',
                    boxShadow: i === 0 ? '0 0 20px rgba(54, 211, 153, 0.4)' : 'none',
                  }}
                >
                  {step.num}
                </div>
                <h3
                  className="font-header font-bold text-sm mb-2 text-white"
                >
                  {step.title}
                </h3>
                <p className="font-body text-xs leading-relaxed text-white/60">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: vertical list */}
        <div className="flex flex-col gap-0 lg:hidden mt-8">
          {steps.map((step, i) => (
            <div key={step.num} className={`flex gap-5 reveal reveal-delay-${Math.min(i + 1, 6)}`}>
              {/* Left: number + vertical line */}
              <div className="flex flex-col items-center">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-header font-bold text-xs flex-shrink-0"
                  style={{
                    background: i === 0 ? 'var(--accent-green)' : 'transparent',
                    color: i === 0 ? '#0B0E23' : '#FFFFFF',
                    border: `2px solid ${i === 0 ? 'var(--accent-green)' : 'var(--accent-blue)'}`,
                  }}
                >
                  {step.num}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-[2px] flex-1 min-h-[40px]" style={{ background: 'rgba(37, 99, 235, 0.3)', marginTop: '4px', marginBottom: '4px' }} />
                )}
              </div>

              {/* Right: content */}
              <div className="pb-8 pt-1.5">
                <h3 className="font-header font-bold text-base mb-1 text-white">
                  {step.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-white/60">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 reveal reveal-delay-3">
          <a
            href="https://wa.me/9779828940955?text=Hi%20Subik%2C%20I%27d%20like%20to%20discuss%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta"
          >
            Start the Process →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
