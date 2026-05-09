import React, { useEffect, useRef } from 'react';
import edtechImg from '../Media/projects/edtech.png';
import kycImg from '../Media/projects/kyc.webp';
import kycLearningImg from '../Media/projects/kyclearning.webp';
import fplImg from '../Media/projects/fpl.webp';
import bssImg from '../Media/projects/bss.webp';
import btsImg from '../Media/projects/bts.webp';

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

const projects = [
  {
    id: 'proj-kyc',
    title: 'Kathmandu Youth Conclave',
    type: 'Web Development + Branding',
    description: 'Website, registration system, and brand identity for Kathmandu\'s premier youth leadership event.',
    tags: ['React.js', 'Event Platform', 'Brand Identity'],
    url: 'https://kathmanduyouthconclave.com',
    image: kycImg,
    status: null,
    span: 'col-span-1',
  },
  {
    id: 'proj-kyc-learning',
    title: 'KYC Learning Center',
    type: 'Web Development',
    description: 'A clean, professional website for a growing learning center — built to inform, enroll, and inspire.',
    tags: ['Full-Stack', 'Educational', 'CMS'],
    url: 'https://kyclearningcenter.edu.np',
    image: kycLearningImg,
    status: null,
    span: 'col-span-1',
  },
  {
    id: 'proj-fantasy',
    title: 'Fantasy Preparation League',
    type: 'Logo Design + Web Development',
    description: 'Logo, visual identity, and complete website for a competitive preparation platform.',
    tags: ['Branding', 'Logo', 'Web App'],
    url: 'https://fantasyprepleague.com',
    image: fplImg,
    status: null,
    span: 'col-span-1',
  },
  {
    id: 'proj-edtech',
    title: 'EdTech Platform',
    type: 'Full-Stack Web Application',
    description: 'A complete EdTech platform featuring quizzes, live leaderboards, and performance analytics. 10,000+ active users and scaling.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Analytics'],
    url: null,
    image: edtechImg,
    status: '⭐ Featured · Active & Scaling',
    metric: '10,000+ Active Users',
    span: 'md:col-span-2',
    featured: true,
  },
  {
    id: 'proj-secondary',
    title: 'Budhanilkantha Secondary School',
    type: 'Web Development',
    description: 'Full institutional website for one of Kathmandu\'s established secondary schools.',
    tags: ['Institutional', 'Full-Stack'],
    url: null,
    image: bssImg,
    status: '🚧 In Development',
    span: 'col-span-1',
  },
  {
    id: 'proj-technical',
    title: 'Budhanilkantha Technical School',
    type: 'Web Development',
    description: 'Website for a technical institution focused on vocational and skills training.',
    tags: ['Institutional', 'Web Design'],
    url: null,
    image: btsImg,
    status: '🚧 In Development',
    span: 'col-span-1',
  },
];

const PortfolioCard = ({ project }) => (
  <div id={project.id} className={`portfolio-card glass-panel overflow-hidden relative group ${project.span}`} style={{ minHeight: project.featured ? '340px' : '260px', padding: 0 }}>
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      style={{ minHeight: 'inherit' }}
    />

    {/* Status / Metric Badge */}
    {project.featured && project.metric && (
      <div
        className="absolute top-5 left-5 z-10 px-4 py-2 rounded-full font-header font-bold text-white text-sm"
        style={{ background: 'rgba(54, 211, 153, 0.9)', backdropFilter: 'blur(8px)' }}
      >
        {project.metric}
      </div>
    )}
    {project.status && !project.featured && (
      <div
        className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full font-body font-600 text-white text-xs"
        style={{ background: 'rgba(11, 14, 35, 0.7)', backdropFilter: 'blur(8px)', border: '1px solid var(--accent-blue)' }}
      >
        {project.status}
      </div>
    )}
    {project.featured && project.status && (
      <div
        className="absolute top-5 right-5 z-10 px-3 py-1 rounded-full font-body font-600 text-xs"
        style={{ background: 'rgba(37, 99, 235, 0.85)', color: '#fff', backdropFilter: 'blur(8px)' }}
      >
        {project.status}
      </div>
    )}

    {/* Hover Overlay */}
    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(to top, rgba(11, 14, 35, 0.95) 0%, rgba(11, 14, 35, 0.4) 60%, transparent 100%)' }}>
      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-1 rounded bg-accent-blue/20 text-accent-cyan text-xs font-medium border border-accent-blue/30">{tag}</span>
          ))}
        </div>
        <p className="font-body text-xs text-white/50 uppercase tracking-widest mb-1">{project.type}</p>
        <h3 className="font-header font-bold text-xl text-white mb-2">{project.title}</h3>
        <p className="font-body text-sm text-white/80 leading-relaxed mb-4">{project.description}</p>
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body font-bold text-sm text-accent-green hover:text-accent-cyan transition-colors"
          >
            View Live →
          </a>
        ) : (
          <span className="font-body text-sm text-white/40 italic">
            {project.status?.includes('Development') ? 'Launching soon' : 'Platform active'}
          </span>
        )}
      </div>
    </div>
  </div>
);

const Portfolio = () => {
  const sectionRef = useRef(null);
  useReveal(sectionRef);

  return (
    <section id="portfolio" className="section-dark section-padding" ref={sectionRef}>
      <div className="container-xl">
        {/* Header */}
        <div className="mb-14">
          <div className="reveal">
            <span className="eyebrow" style={{ color: 'var(--accent-cyan)' }}>
              <span className="section-marker" style={{ background: 'var(--accent-cyan)' }} />
              Selected Work
            </span>
          </div>
          <h2 className="font-header font-bold text-4xl md:text-5xl text-white reveal reveal-delay-1 mt-4">Projects That Perform.</h2>
          <p className="subtext max-w-lg mt-4 reveal reveal-delay-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
            From event platforms to EdTech tools — every project we ship is live, used, and built to last.
          </p>
        </div>

        {/* Grid — top row: 3 small cards */}
        <div className="reveal reveal-delay-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {projects.slice(0, 3).map(p => <PortfolioCard key={p.id} project={p} />)}
          </div>

          {/* Featured EdTech card — full width */}
          <div className="mb-4">
            <PortfolioCard project={projects[3]} />
          </div>

          {/* Bottom row: 2 school cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.slice(4).map(p => <PortfolioCard key={p.id} project={p} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
