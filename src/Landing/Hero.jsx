import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

/* ─── count-up hook ─────────────────────────────────────────── */
const useCountUp = (target, duration = 2000, active = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const isPlus = String(target).includes('+');
    const isK    = String(target).includes('K');
    const isPct  = String(target).includes('%');
    let num = parseFloat(String(target).replace(/[^0-9.]/g, ''));
    if (isK) num *= 1000;
    let current = 0;
    const step  = num / (duration / 16);
    const timer = setInterval(() => {
      current += step;
      if (current >= num) { current = num; clearInterval(timer); }
      let d = Math.floor(current);
      if (isK)       d = (d / 1000).toFixed(0) + 'K+';
      else if (isPlus) d = d + '+';
      else if (isPct)  d = d + '%';
      setCount(d);
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
};

/* ─── stat item ─────────────────────────────────────────────── */
const StatItem = ({ value, label, delay, active }) => {
  const count = useCountUp(value, 2000, active);
  return (
    <motion.div
      className="text-left"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 + delay, duration: 0.5 }}
    >
      <div className="stat-number">{count || '0'}</div>
      <div className="stat-label">{label}</div>
    </motion.div>
  );
};

/* ─── glassmorphism card data ───────────────────────────────── */
const CARDS = [
  {
    id: 'card-website',
    icon: '🚀',
    title: 'Website in 7 Days',
    subtitle: 'Fast delivery, zero fluff',
    tags: ['React', 'Next.js', 'SEO'],
    metric: { value: '5+', label: 'sites launched' },
    accent: 'rgba(0, 212, 255, 0.18)',
    border: 'rgba(0, 212, 255, 0.35)',
    glow: 'rgba(0, 212, 255, 0.12)',
    delay: 0,
  },
  {
    id: 'card-brand',
    icon: '✦',
    title: 'Brand Identity',
    subtitle: 'Logos, UI kits & content',
    tags: ['Figma', 'Motion', 'Social'],
    metric: { value: '100%', label: 'client satisfaction' },
    accent: 'rgba(54, 211, 153, 0.18)',
    border: 'rgba(54, 211, 153, 0.35)',
    glow: 'rgba(54, 211, 153, 0.10)',
    delay: 0.18,
  },
];

/* ─── hero component ────────────────────────────────────────── */
const Hero = () => {
  const statsRef  = useRef(null);
  const [statsOn, setStatsOn] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStatsOn(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  const stats = [
    { value: '7+',   label: 'Clients Served'     },
    { value: '5+',   label: 'Projects Delivered'  },
    { value: '10K+', label: 'Platform Users'      },
    { value: '100%', label: 'Satisfaction'        },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden grain-overlay"
      style={{ background: '#0B0F1A' }}
    >
      {/* ── ambient glows ─────────────────────────────────── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-15%', right: '-10%',
          width: 700, height: 700,
          background: 'radial-gradient(ellipse, rgba(0,212,255,0.13) 0%, transparent 65%)',
          filter: 'blur(48px)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-10%', left: '-8%',
          width: 600, height: 600,
          background: 'radial-gradient(ellipse, rgba(54,211,153,0.12) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }}
      />
      {/* subtle blue mid-right accent */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '30%', right: '18%',
          width: 320, height: 320,
          background: 'radial-gradient(ellipse, rgba(37,99,235,0.14) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      {/* ── dot grid ──────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* ── content grid ──────────────────────────────────── */}
      <div className="relative z-10 container-xl section-padding pt-28 md:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">

          {/* ── LEFT — copy ─────────────────────────────── */}
          <div>
            {/* eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <span
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-5 px-4 py-2 rounded-full"
                style={{
                  color: 'var(--accent-cyan)',
                  background: 'rgba(0,212,255,0.08)',
                  border: '1px solid rgba(0,212,255,0.22)',
                }}
              >
                <span style={{ fontSize: '0.9rem' }}>⚡</span>
                Nepal's Youth-Driven Digital Agency
              </span>
            </motion.div>

            {/* headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="font-poppins font-bold text-white mb-6"
              style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4rem)', lineHeight: 1.08 }}
            >
              We Build Digital<br />
              Experiences That<br />
              <span
                className="text-subik-gradient"
                style={{ display: 'inline-block' }}
              >
                Drive Real Growth.
              </span>
            </motion.h1>

            {/* subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.22 }}
              className="subtext max-w-md mb-10"
            >
              Websites, branding, and content solutions for startups,
              local businesses, and institutions ready to grow online.
            </motion.p>

            {/* feature pills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {[
                { icon: '⚡', text: 'Fast Delivery', sub: '5–7 Days' },
                { icon: '</>', text: 'Modern Tech',  sub: 'Scalable & Secure' },
                { icon: '🎧', text: 'Ongoing Support', sub: "We've got you" },
              ].map(p => (
                <div
                  key={p.text}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.09)',
                  }}
                >
                  <span className="text-base">{p.icon}</span>
                  <div>
                    <p className="text-white text-xs font-semibold leading-tight">{p.text}</p>
                    <p className="text-white/40 text-[11px]">{p.sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              {/* Primary */}
              <motion.a
                id="hero-cta-primary"
                href="https://wa.me/9779828940955?text=Hi%20Subik%20Digital%20Hub%2C%20I%27d%20like%20to%20get%20my%20website%20in%207%20days"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white cursor-pointer no-underline"
                style={{
                  background: 'linear-gradient(135deg, #00D4FF 0%, #2563EB 100%)',
                  boxShadow: '0 0 28px rgba(0,212,255,0.35)',
                  border: 'none',
                  transition: 'box-shadow 0.3s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 40px rgba(0,212,255,0.55)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 28px rgba(0,212,255,0.35)'}
              >
                Get Your Website in 7 Days →
              </motion.a>

              {/* Secondary */}
              <motion.a
                id="hero-cta-work"
                href="#portfolio"
                onClick={e => {
                  e.preventDefault();
                  document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm cursor-pointer no-underline"
                style={{
                  color: 'rgba(255,255,255,0.85)',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  transition: 'background 0.3s ease, border-color 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)';
                }}
              >
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.12)', fontSize: '0.65rem' }}
                >
                  ▶
                </span>
                View Our Work
              </motion.a>
            </motion.div>

            {/* trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                {['#00D4FF','#36D399','#2563EB','#8B5CF6'].map((c, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] font-bold text-white"
                    style={{ borderColor: '#0B0F1A', background: c, zIndex: 4 - i }}
                  >
                    {['KM','SS','BK','RD'][i]}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-white text-xs font-semibold">Trusted by 7+ clients</p>
                <p className="text-white/40 text-[11px]">10K+ users · 100% satisfaction</p>
              </div>
            </motion.div>

            {/* stats strip */}
            <div
              ref={statsRef}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 mt-8 border-t"
              style={{ borderColor: 'rgba(255,255,255,0.08)' }}
            >
              {stats.map((s, i) => (
                <StatItem
                  key={s.label}
                  value={s.value}
                  label={s.label}
                  delay={i * 0.08}
                  active={statsOn}
                />
              ))}
            </div>
          </div>

          {/* ── RIGHT — glassmorphism cards ──────────────── */}
          <div className="relative flex flex-col gap-5 lg:pl-8">
            {CARDS.map((card, i) => (
              <motion.div
                key={card.id}
                id={card.id}
                initial={{ opacity: 0, y: 40, x: 20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.75, delay: 0.45 + i * 0.18, ease: 'easeOut' }}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 5 + i * 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 1.2,
                  }}
                  className="rounded-2xl p-6"
                  style={{
                    background: `linear-gradient(135deg, ${card.accent} 0%, rgba(11,15,26,0.85) 100%)`,
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: `1px solid ${card.border}`,
                    boxShadow: `0 8px 40px ${card.glow}, 0 1px 0 rgba(255,255,255,0.06) inset`,
                  }}
                >
                  {/* card header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span
                        className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                        style={{ background: card.accent, border: `1px solid ${card.border}` }}
                      >
                        {card.icon}
                      </span>
                      <div>
                        <p className="text-white font-semibold text-sm leading-tight">{card.title}</p>
                        <p className="text-white/50 text-xs mt-0.5">{card.subtitle}</p>
                      </div>
                    </div>
                    {/* live dot */}
                    <span className="flex items-center gap-1.5 text-[11px] text-white/50">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{
                          background: card.border,
                          boxShadow: `0 0 6px ${card.border}`,
                          animation: 'pulse 2s ease-in-out infinite',
                        }}
                      />
                      Active
                    </span>
                  </div>

                  {/* divider */}
                  <div
                    className="w-full h-px mb-4"
                    style={{ background: `linear-gradient(90deg, ${card.border}, transparent)` }}
                  />

                  {/* tags row */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {card.tags.map(t => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-[11px] font-semibold"
                        style={{
                          color: card.border,
                          background: card.accent,
                          border: `1px solid ${card.border}`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* metric footer */}
                  <div
                    className="flex items-center justify-between pt-4 border-t"
                    style={{ borderColor: 'rgba(255,255,255,0.07)' }}
                  >
                    <div>
                      <p
                        className="font-bold text-2xl leading-none"
                        style={{ color: card.border }}
                      >
                        {card.metric.value}
                      </p>
                      <p className="text-white/40 text-xs mt-1">{card.metric.label}</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-xs font-semibold px-4 py-2 rounded-lg cursor-pointer"
                      style={{
                        color: '#0B0F1A',
                        background: card.border,
                        border: 'none',
                      }}
                    >
                      Learn more →
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* decorative ring behind cards */}
            <div
              className="absolute -z-10 rounded-full pointer-events-none"
              style={{
                width: 340, height: 340,
                top: '50%', left: '50%',
                transform: 'translate(-50%,-50%)',
                background: 'radial-gradient(ellipse, rgba(0,212,255,0.06) 0%, transparent 70%)',
                border: '1px solid rgba(0,212,255,0.07)',
              }}
            />
          </div>
        </div>
      </div>

      {/* ── scroll cue ────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-white/25 uppercase tracking-[0.18em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="w-4 h-7 rounded-full border flex justify-center pt-1.5"
          style={{ borderColor: 'rgba(255,255,255,0.2)' }}
        >
          <div
            className="w-1 h-1 rounded-full"
            style={{ background: 'var(--accent-cyan)' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
