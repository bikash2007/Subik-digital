import React, { useEffect, useRef } from 'react';
import bikashImg from '../Media/team/bikash.png';
import suyogImg from '../Media/team/suyog.png';
import sobitImg from '../Media/team/sobit.png';

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

const teamMembers = [
  {
    id: 'team-bikash',
    name: 'Bikash Bhandari',
    role: 'Technical Director & Lead Developer',
    bio: 'Bikash handles all system architecture, frontend and backend development, and technical execution. He builds fast without cutting corners.',
    tags: ['React.js', 'Node.js', 'MongoDB'],
    superpower: 'Turns Figma files into live websites in 72 hours.',
    image: bikashImg,
    objectPosition: 'center 20%',
  },
  {
    id: 'team-suyog',
    name: 'Suyog Lakai',
    role: 'Creative Director & Graphic Designer',
    bio: 'Suyog leads all brand identity, visual design, and creative direction. Every logo, every UI — it starts with his eye for what works.',
    tags: ['Illustrator', 'Photoshop', 'Canva'],
    superpower: 'Makes logos that people actually remember.',
    image: suyogImg,
    objectPosition: 'center 15%',
  },
  {
    id: 'team-sobit',
    name: 'Sobit Gole Tamang',
    role: 'Business Development Manager',
    bio: 'Sobit leads client relationships, sales strategy, and business development — making sure nothing gets lost between what you need and what we build.',
    tags: ['Client Relations', 'Strategy', 'Partnerships'],
    superpower: 'Finds the right solution before you finish explaining the problem.',
    image: sobitImg,
    objectPosition: 'center 25%',
  },
];

const Team = () => {
  const sectionRef = useRef(null);
  useReveal(sectionRef);

  return (
    <section id="team" className="section-padding" style={{ background: 'var(--bg-midnight)' }} ref={sectionRef}>
      <div className="container-xl">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="reveal">
            <span className="eyebrow" style={{ color: 'var(--accent-cyan)' }}>
              <span className="section-marker" style={{ background: 'var(--accent-blue)' }} />
              The Team
            </span>
          </div>
          <h2 className="font-header font-bold text-4xl md:text-5xl reveal reveal-delay-1 mt-4" style={{ color: 'var(--text-main)' }}>
            The People Behind Subik.
          </h2>
          <p className="subtext-dark max-w-lg mx-auto mt-4 reveal reveal-delay-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
            A small, focused team with real skills and a genuine reason to care about your project.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {teamMembers.map((member, i) => (
            <div
              key={member.id}
              id={member.id}
              className={`glass-panel overflow-hidden reveal reveal-delay-${i + 1}`}
            >
              {/* Photo */}
              <div className="relative overflow-hidden" style={{ height: '260px', borderBottom: '1px solid var(--accent-blue)' }}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: member.objectPosition || 'center' }}
                />
                {/* Role overlay at bottom of image */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-5 py-3"
                  style={{ background: 'linear-gradient(to top, rgba(11,14,35,0.9) 0%, transparent 100%)' }}
                >
                  <p className="font-body text-xs font-semibold text-white/90 tracking-wide">{member.role}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="font-header font-bold text-xl mb-3" style={{ color: 'var(--text-main)' }}>
                  {member.name}
                </h3>
                <p className="font-body text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  {member.bio}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {member.tags.map(tag => (
                    <span key={tag} className="chip-teal">{tag}</span>
                  ))}
                </div>

                {/* Superpower */}
                <div
                  className="p-4 rounded-xl"
                  style={{ background: 'rgba(54, 211, 153, 0.08)', border: '1px solid rgba(54, 211, 153, 0.2)' }}
                >
                  <p className="font-body text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: 'var(--accent-green)' }}>
                    Superpower
                  </p>
                  <p className="font-body text-sm italic" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    "{member.superpower}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Strip */}
        <div
          className="reveal reveal-delay-4 rounded-2xl p-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center"
          style={{ background: 'rgba(11, 14, 35, 0.8)', border: '1px solid var(--accent-blue)' }}
        >
          {[
            { label: 'Founded', value: 'September 2024' },
            { label: 'Location', value: 'Maitidevi, Kathmandu' },
            { label: 'Team', value: '3 Founders + Growing' },
            { label: 'Status', value: 'Taking Projects ✦' },
          ].map((item) => (
            <div key={item.label}>
              <p className="font-body text-xs uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
                {item.label}
              </p>
              <p className="font-header font-bold text-sm text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
