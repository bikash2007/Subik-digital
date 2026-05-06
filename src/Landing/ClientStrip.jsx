import React from 'react';

const clients = [
  { name: 'Kathmandu Youth Conclave', logo: 'https://kathmanduyouthconclave.com/logo.png' },
  { name: 'KYC Learning Center', logo: 'https://kyclearningcenter.edu.np/assets/logo-CMnRGKnu.png' },
  { name: 'Fantasy Preparation League', logo: 'https://fantasyprepleague.com/logo.png' },
  { name: 'EdTech Platform', logo: null },
  { name: 'Budhanilkantha Secondary School', logo: null },
  { name: 'Budhanilkantha Technical School', logo: null },
];

// Duplicate for seamless infinite loop
const allClients = [...clients, ...clients];

const ClientStrip = () => {
  return (
    <section
      id="clients"
      className="py-12 overflow-hidden"
      style={{ background: 'var(--bg-midnight)', borderTop: '1px solid var(--accent-blue)', borderBottom: '1px solid var(--accent-blue)' }}
    >
      <div className="container-xl px-6 mb-6">
        <p
          className="font-body text-xs font-600 text-center tracking-widest uppercase"
          style={{ color: 'var(--accent-cyan)', letterSpacing: '0.14em' }}
        >
          Trusted by growing organizations across Nepal
        </p>
      </div>

      {/* Marquee track */}
      <div className="marquee-wrapper relative" style={{ maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' }}>
        <div className="marquee-track">
          {allClients.map((client, i) => (
            <div
              key={i}
              className="flex items-center gap-8 px-10 group"
              style={{ flexShrink: 0 }}
            >
              <div
                className="flex items-center gap-4 transition-all duration-300 cursor-default"
                style={{
                  filter: 'grayscale(100%)',
                  opacity: 0.5,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'grayscale(0%)';
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'grayscale(100%)';
                  e.currentTarget.style.opacity = '0.5';
                }}
              >
                {client.logo && (
                  <img src={client.logo} alt={client.name} className="h-10 w-auto object-contain" />
                )}
                <span
                  className="font-header font-700 text-base whitespace-nowrap"
                  style={{
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    letterSpacing: '0.02em',
                  }}
                >
                  {client.name}
                </span>
              </div>
              <span style={{ color: 'var(--accent-green)', opacity: 0.6, fontSize: '0.5rem' }}>✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientStrip;
