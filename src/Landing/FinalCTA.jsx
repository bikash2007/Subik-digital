import React, { useEffect, useRef } from 'react';

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

const FinalCTA = () => {
  const sectionRef = useRef(null);
  useReveal(sectionRef);

  return (
    <section
      id="contact"
      className="section-padding grain-overlay relative overflow-hidden"
      style={{ background: 'var(--bg-midnight)' }}
      ref={sectionRef}
    >
      {/* Cyan glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(0, 212, 255, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-10 container-xl text-center">
        {/* Eyebrow */}
        <div className="reveal mb-6">
          <span className="eyebrow justify-center" style={{ color: 'var(--accent-cyan)' }}>
            <span className="section-marker" style={{ background: 'var(--accent-cyan)' }} />
            Let's Build Together
          </span>
        </div>

        {/* Headline */}
        <h2
          className="font-header font-bold text-5xl md:text-6xl lg:text-7xl text-white reveal reveal-delay-1 mb-6"
          style={{ maxWidth: '720px', margin: '0 auto 1.5rem' }}
        >
          Let's Build Something<br />
          <span className="text-subik-gradient">Amazing Together.</span>
        </h2>

        {/* Subtext */}
        <p
          className="subtext max-w-2xl mx-auto reveal reveal-delay-2 mb-12"
          style={{ color: 'rgba(250,250,248,0.55)' }}
        >
          Tell us about your project. We'll respond within 24 hours with a plan, a timeline,
          and a price — no vague quotes, no surprises.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal reveal-delay-3 mb-12">
          <a
            id="cta-whatsapp"
            href="https://wa.me/9779828940955?text=Hi%20Subik%20Digital%20Hub%2C%20I%27d%20like%20to%20start%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta text-base px-8 py-4"
          >
            Message us on WhatsApp →
          </a>
          <a
            id="cta-email"
            href="mailto:subik.info@gmail.com"
            className="btn-outline-light text-base px-8 py-4"
            style={{ borderColor: 'var(--accent-blue)', color: 'var(--text-main)' }}
          >
            Send an Email
          </a>
        </div>

        {/* Contact Info Strip */}
        <div
          className="reveal reveal-delay-4 flex flex-wrap items-center justify-center gap-6 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)', color: 'rgba(250,250,248,0.45)' }}
        >
          {[
            { icon: '📧', text: 'subik.info@gmail.com', href: 'mailto:subik.info@gmail.com' },
            { icon: '📞', text: '+977-9828940955', href: 'tel:+9779828940955' },
            { icon: '📞', text: '+977-9745384280', href: 'tel:+9779745384280' },
            { icon: '📍', text: 'Maitidevi, Kathmandu', href: null },
            { icon: '📸', text: '@subik.info', href: 'https://instagram.com/subik.info' },
          ].map((item, i) =>
            item.href ? (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="font-body text-sm flex items-center gap-2 hover:text-white transition-colors"
              >
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </a>
            ) : (
              <span key={i} className="font-body text-sm flex items-center gap-2">
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
