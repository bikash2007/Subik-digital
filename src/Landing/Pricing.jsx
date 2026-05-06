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

const packages = [
  {
    id: 'pkg-starter',
    badge: '5–7 Days',
    badgeColor: '#1A7A6E',
    name: 'Starter Launch',
    tagline: 'Get online fast.',
    price: 'NPR 15,000 – 20,000',
    includes: [
      '1–5 page website',
      'Mobile responsive design',
      'Basic branding',
      'Contact form + WhatsApp',
    ],
    cta: 'Get Started →',
    featured: false,
  },
  {
    id: 'pkg-growth',
    badge: 'Most Popular',
    badgeColor: '#C8572A',
    name: 'Growth Business',
    tagline: 'The complete solution.',
    price: 'NPR 25,000 – 45,000',
    includes: [
      '5–10 page dynamic website',
      'Custom UI/UX design',
      'CMS / Admin panel',
      'SEO + branding kit',
      '1 month post-delivery support',
    ],
    cta: 'Start This Package →',
    featured: true,
  },
  {
    id: 'pkg-premium',
    badge: 'Enterprise',
    badgeColor: '#1A7A6E',
    name: 'Premium Brand',
    tagline: 'World-class, Nepal-priced.',
    price: 'NPR 50,000 – 100,000+',
    includes: [
      'Full custom web app',
      'GSAP + Framer Motion animations',
      'Complete branding system',
      'Analytics integration',
      '2–3 months support',
    ],
    cta: 'Let\'s Talk →',
    featured: false,
  },
  {
    id: 'pkg-content',
    badge: 'Recurring',
    badgeColor: '#1A7A6E',
    name: 'Monthly Content',
    tagline: 'Stay consistently visible.',
    price: 'NPR 8,000 – 20,000/mo',
    includes: [
      '12–20 social posts/month',
      'Video & Reel editing',
      'Monthly content planning',
      'Brand consistency',
    ],
    cta: 'Start Monthly Plan →',
    featured: false,
  },
];

const Pricing = () => {
  const sectionRef = useRef(null);
  useReveal(sectionRef);

  return (
    <section id="pricing" className="section-dark section-padding" ref={sectionRef}>
      <div className="container-xl">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="reveal">
            <span className="eyebrow" style={{ color: 'var(--accent-cyan)' }}>
              <span className="section-marker" style={{ background: 'var(--accent-cyan)' }} />
              Transparent Pricing
            </span>
          </div>
          <h2 className="font-header font-bold text-4xl md:text-5xl text-white reveal reveal-delay-1 mt-4">
            Packages Built for Every Stage of Growth.
          </h2>
          <p className="subtext max-w-lg mx-auto mt-4 reveal reveal-delay-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
            No hidden fees. No vague quotes. Real prices for real Nepali businesses.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {packages.map((pkg, i) => (
            <div
              key={pkg.id}
              id={pkg.id}
              className={`pricing-card glass-panel ${pkg.featured ? 'featured' : ''} reveal reveal-delay-${i + 1} flex flex-col`}
              style={pkg.featured ? { transform: 'translateY(-8px)', borderColor: 'var(--accent-green)', boxShadow: '0 0 30px rgba(54, 211, 153, 0.15)' } : {}}
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-6">
                <span
                  className="font-header font-bold text-xs px-3 py-1 rounded-full"
                  style={{
                    background: pkg.featured ? 'rgba(54, 211, 153, 0.15)' : 'rgba(37, 99, 235, 0.15)',
                    color: pkg.featured ? 'var(--accent-green)' : 'var(--accent-cyan)',
                    border: `1px solid ${pkg.featured ? 'rgba(54, 211, 153, 0.3)' : 'rgba(37, 99, 235, 0.3)'}`,
                  }}
                >
                  {pkg.badge}
                </span>
                {pkg.featured && (
                  <span className="text-accent-green text-sm">⭐</span>
                )}
              </div>

              {/* Name & Tagline */}
              <h3 className="font-header font-bold text-xl text-white mb-1">{pkg.name}</h3>
              <p className="font-body text-sm mb-5" style={{ color: 'rgba(255,255,255,0.6)' }}>{pkg.tagline}</p>

              {/* Price */}
              <div
                className="font-header font-bold text-lg mb-6 pb-6"
                style={{
                  color: pkg.featured ? 'var(--accent-green)' : 'rgba(255,255,255,0.9)',
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                {pkg.price}
              </div>

              {/* Includes */}
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span style={{ color: '#C8572A', flexShrink: 0, fontSize: '0.75rem', marginTop: '2px' }}>✦</span>
                    <span className="font-body text-sm" style={{ color: 'rgba(250,250,248,0.6)' }}>{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={`https://wa.me/9779828940955?text=Hi%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(pkg.name)}%20package`}
                target="_blank"
                rel="noopener noreferrer"
                className={pkg.featured ? 'btn-orange text-center justify-center' : 'btn-outline-light text-center justify-center text-sm py-3'}
                style={pkg.featured ? { background: 'var(--accent-green)', borderColor: 'var(--accent-green)', boxShadow: '0 0 10px rgba(54, 211, 153, 0.3)' } : { borderColor: 'var(--accent-blue)', color: 'var(--text-main)' }}
              >
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Custom recommendation note */}
        <p
          className="text-center font-body text-sm italic reveal reveal-delay-5"
          style={{ color: 'rgba(255,255,255,0.5)' }}
        >
          Not sure which package fits?{' '}
          <a
            href="https://wa.me/9779828940955?text=Hi%2C%20can%20you%20help%20me%20choose%20the%20right%20package%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-accent-cyan transition-colors"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            Message us — we'll recommend the right one for your budget.
          </a>
        </p>
      </div>
    </section>
  );
};

export default Pricing;
