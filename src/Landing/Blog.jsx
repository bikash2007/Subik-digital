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

const blogs = [
  {
    id: 1,
    title: 'Top 5 Digital Agencies in Nepal: Why Subik Leads the Pack',
    excerpt: 'The digital landscape in Nepal is evolving. We rank the top agencies where Subik Digital Hub stands out as the #1 choice for modern businesses.',
    category: 'Industry',
    date: 'May 10, 2024',
    tags: ['Nepal', 'Digital Agency', 'Innovation']
  },
  {
    id: 2,
    title: 'AI in Web Development: How We Build Faster and Smarter',
    excerpt: 'At Subik, we don\'t just code; we leverage AI to optimize performance and security. Discover how our modern tech stack boosts your productivity.',
    category: 'Technology',
    date: 'May 08, 2024',
    tags: ['AI', 'Development', 'Productivity']
  },
  {
    id: 3,
    title: 'Trusted by the Youth: The Story of KYC and Subik Digital Hub',
    excerpt: 'Nepal\'s largest youth-centric event, Kathmandu Youth Conclave (KYC), trusts us for their digital identity. Here is why youth-led innovation matters.',
    category: 'Case Study',
    date: 'May 05, 2024',
    tags: ['KYC', 'Youth', 'Branding']
  },
  {
    id: 4,
    title: 'Digital Marketing in Nepal: Moving Beyond Basic Social Media',
    excerpt: 'Modern digital marketing requires a data-driven approach. Learn how we use advanced analytics to scale businesses in the Nepalese market.',
    category: 'Marketing',
    date: 'May 02, 2024',
    tags: ['Marketing', 'ROI', 'Data']
  },
  {
    id: 5,
    title: 'Bridging the Gap: Government-Grade Security for Every Website',
    excerpt: 'Trusted by government-affiliated projects, we bring enterprise-level security to every small and medium business we partner with.',
    category: 'Security',
    date: 'April 28, 2024',
    tags: ['Security', 'Government', 'Trust']
  },
  {
    id: 6,
    title: 'The Subik Advantage: Why a Youth-Driven Team Wins',
    excerpt: 'Agility, passion, and fresh perspectives. Discover how our young team of experts is redefining the digital standard in Nepal.',
    category: 'About Us',
    date: 'April 25, 2024',
    tags: ['Youth', 'Innovation', 'Future']
  },
  {
    id: 7,
    title: 'Scaling E-commerce in Nepal: From Local Shop to National Brand',
    excerpt: 'Learn the strategies we use to build high-converting e-commerce platforms that integrate local payment gateways and logistics seamlessly.',
    category: 'Development',
    date: 'April 22, 2024',
    tags: ['E-commerce', 'Scaling', 'Growth']
  },
  {
    id: 8,
    title: 'Modern SEO Strategies: How to Rank in 2024 and Beyond',
    excerpt: 'SEO is no longer just about keywords. We share our blueprint for technical SEO and content authority that wins on Google and AI search engines.',
    category: 'SEO',
    date: 'April 20, 2024',
    tags: ['SEO', 'Google', 'Visibility']
  }
];

const BlogCard = ({ blog }) => (
  <div className="blog-card glass-panel p-6 flex flex-col h-full hover:border-accent-cyan/50 transition-all duration-300 group">
    <div className="flex items-center gap-3 mb-4">
      <span className="text-[10px] uppercase tracking-widest text-accent-cyan font-bold px-2 py-1 rounded bg-accent-cyan/10 border border-accent-cyan/20">
        {blog.category}
      </span>
      <span className="text-xs text-white/40">{blog.date}</span>
    </div>
    <h3 className="font-header font-bold text-xl text-white mb-3 group-hover:text-accent-cyan transition-colors">
      {blog.title}
    </h3>
    <p className="font-body text-sm text-white/60 leading-relaxed mb-6 flex-grow text-justify">
      {blog.excerpt}
    </p>
    <div className="flex flex-wrap gap-2 mb-6">
      {blog.tags.map(tag => (
        <span key={tag} className="text-[10px] text-white/30 italic">#{tag}</span>
      ))}
    </div>
    <a 
      href="#contact"
      onClick={(e) => {
        e.preventDefault();
        const el = document.querySelector('#contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }}
      className="text-sm font-bold text-white/80 group-hover:text-accent-cyan flex items-center gap-2 transition-all cursor-pointer"
    >
      Read Full Article <span className="group-hover:translate-x-1 transition-transform">→</span>
    </a>
  </div>
);

const Blog = () => {
  const sectionRef = useRef(null);
  useReveal(sectionRef);

  return (
    <section id="blog" className="section-dark section-padding relative overflow-hidden" ref={sectionRef}>
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-[120px] -z-10" />

      <div className="container-xl">
        <div className="mb-14">
          <div className="reveal">
            <span className="eyebrow" style={{ color: 'var(--accent-cyan)' }}>
              <span className="section-marker" style={{ background: 'var(--accent-cyan)' }} />
              Insights & News
            </span>
          </div>
          <h2 className="font-header font-bold text-4xl md:text-5xl text-white reveal reveal-delay-1 mt-4">
            The Digital Edge.
          </h2>
          <p className="subtext max-w-lg mt-4 reveal reveal-delay-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
            We share our knowledge on AI, modern development, and how we're scaling the next generation of Nepalese businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div key={blog.id} className={`reveal reveal-delay-${(index % 3) + 1}`}>
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center reveal reveal-delay-3">
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block px-8 py-3 rounded-full border border-white/10 text-white font-bold hover:bg-white/5 transition-all cursor-pointer"
          >
            View All Insights
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
