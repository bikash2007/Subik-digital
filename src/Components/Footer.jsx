import React from 'react';
import logo from '../Media/logo.png';

const Footer = () => {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  const serviceLinks = [
    'Web Development',
    'Graphic Design',
    'Content & Media',
    'eCommerce',
    'Brand Identity',
  ];

  const contactInfo = [
    { icon: '✉', text: 'subik.info@gmail.com', href: 'mailto:subik.info@gmail.com' },
    { icon: '📞', text: '+977-9828940955', href: 'tel:+9779828940955' },
    { icon: '📍', text: 'Maitidevi, Kathmandu, Nepal', href: null },
    { icon: '📸', text: '@subik.info', href: 'https://instagram.com/subik.info' },
    { icon: '🔗', text: 'Subik Digital Hub', href: 'https://www.linkedin.com/company/103771862' },
  ];

  return (
    <footer
      id="footer"
      style={{ background: 'var(--bg-midnight)', borderTop: '1px solid var(--accent-blue)' }}
    >
      <div className="container-xl px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }} className="flex items-center gap-3 mb-5">
              <img
                src={logo}
                alt="Subik Digital Hub"
                className="w-10 h-10 rounded-full object-cover"
                style={{ filter: 'brightness(0) invert(1)', opacity: 0.9 }}
              />
              <div>
                <p className="font-header font-bold text-base text-white leading-none">SUBIK</p>
                <p className="font-body text-[10px] tracking-[0.15em] uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>Digital Hub</p>
              </div>
            </a>
            <p className="font-body text-sm italic mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
              "Where Creativity Meets the Future"
            </p>
            <p className="font-body text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
              © 2024–2025 Subik Digital Hub.<br />All rights reserved.
            </p>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="font-header font-bold text-sm text-white mb-5 uppercase tracking-widest">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="font-body text-sm transition-colors"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent-cyan)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <h4 className="font-header font-bold text-sm text-white mb-5 uppercase tracking-widest">Services</h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); scrollTo('#services'); }}
                    className="font-body text-sm transition-colors"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent-cyan)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="font-header font-bold text-sm text-white mb-5 uppercase tracking-widest">Contact</h4>
            <ul className="flex flex-col gap-3">
              {contactInfo.map((item, i) =>
                item.href ? (
                  <li key={i}>
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="font-body text-sm flex items-center gap-2 transition-colors"
                      style={{ color: 'rgba(255,255,255,0.6)' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent-cyan)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
                    >
                      <span style={{ fontSize: '0.8rem', flexShrink: 0 }}>{item.icon}</span>
                      <span>{item.text}</span>
                    </a>
                  </li>
                ) : (
                  <li key={i} className="font-body text-sm flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    <span style={{ fontSize: '0.8rem', flexShrink: 0 }}>{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
        >
          <p className="font-body text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Su (Suyog) + Bik (Bikash) = "Success &amp; Growth" in Nepali · Founded September 2024
          </p>
          <a
            href="https://wa.me/9779828940955?text=Hi%20Subik%20Digital%20Hub%2C%20I%27d%20like%20to%20start%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta text-xs py-2 px-5"
          >
            Start a Project →
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
