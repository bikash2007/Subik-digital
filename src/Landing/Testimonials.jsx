import React, { useEffect, useRef, useState } from 'react';

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

const testimonials = [
  {
    id: 'testimonial-kyc',
    quote: 'Subik delivered our event website faster than we expected, and it looked exactly the way we envisioned. The registration system worked flawlessly during our event with hundreds of attendees.',
    name: 'Event Organizer',
    org: 'Kathmandu Youth Conclave',
    initials: 'KYC',
  },
  {
    id: 'testimonial-learning',
    quote: 'We needed a website that would help parents and students trust our institution online. Subik understood that immediately. The design is professional and our inquiries have increased since going live.',
    name: 'Administrator',
    org: 'KYC Learning Center',
    initials: 'KLC',
  },
  {
    id: 'testimonial-fantasy',
    quote: 'The logo they designed became our entire brand identity. They nailed the energy we wanted to convey — the whole package, from design to website, was on time and within budget.',
    name: 'Founder',
    org: 'Fantasy Preparation League',
    initials: 'FPL',
  },
];

const Testimonials = () => {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(null);
  useReveal(sectionRef);

  return (
    <section id="testimonials" className="section-dark section-padding" ref={sectionRef}>
      <div className="container-xl">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="reveal">
            <span className="eyebrow" style={{ color: 'var(--accent-cyan)' }}>
              <span className="section-marker" style={{ background: 'var(--accent-cyan)' }} />
              What Clients Say
            </span>
          </div>
          <h2 className="font-header font-bold text-4xl md:text-5xl text-white reveal reveal-delay-1 mt-4">Real Words. Real Clients.</h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal reveal-delay-2">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              id={t.id}
              className="glass-panel p-8 flex flex-col"
              style={{ cursor: 'default' }}
            >
              {/* Large quote mark */}
              <div
                className="font-header font-black text-6xl leading-none mb-4"
                style={{ color: 'var(--accent-green)', opacity: 0.85, lineHeight: 1 }}
              >
                "
              </div>

              {/* Stars */}
              <div className="stars mb-4" style={{ color: 'var(--accent-cyan)' }}>★★★★★</div>

              {/* Quote */}
              <p
                className="font-body text-base leading-relaxed flex-1 mb-8"
                style={{ color: 'rgba(255,255,255,0.75)' }}
              >
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-header font-bold text-sm flex-shrink-0"
                  style={{ background: 'rgba(54, 211, 153, 0.15)', color: 'var(--accent-green)', border: '1px solid rgba(54, 211, 153, 0.3)' }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-header font-bold text-sm text-white">{t.name}</p>
                  <p className="font-body text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{t.org}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Link */}
        <p className="text-center mt-10 reveal reveal-delay-3">
          <a
            href="https://www.google.com/search?q=Subik+Digital+Hub+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm underline transition-colors"
            style={{ color: 'rgba(255,255,255,0.5)' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent-cyan)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
          >
            See our Google reviews →
          </a>
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
