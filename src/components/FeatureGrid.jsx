import React from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  ShieldCheck,
  LayoutGrid,
  Users,
  Bell,
  Globe,
  Database,
  Layers,
  MessageSquare
} from 'lucide-react';
import { fadeIn } from '../utils/motion';

const featureCards = [
  {
    icon: Zap,
    title: 'Real-Time Collaboration',
    desc: 'Ultra-low latency infrastructure with conflict resolution and live document editing across all team members.',
    badge: 'Live',
    span: 'col-span-2 row-span-1',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Security',
    desc: 'OAuth 2.0, JWT tokens, and role-based access control ensure your data stays protected.',
    span: 'col-span-1 row-span-1',
  },
  {
    icon: LayoutGrid,
    title: 'Multi-View Management',
    desc: 'Switch between Kanban boards, calendar views, and timeline visualizations to match your workflow.',
    span: 'col-span-1 row-span-2',
  },
  {
    icon: Users,
    title: 'Team Organization',
    desc: 'Multi-tenant workspaces with hierarchical team structures and granular permission controls.',
    span: 'col-span-1 row-span-1',
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    desc: 'Multi-channel delivery via push, email, and in-app alerts based on your preferences.',
    span: 'col-span-2 row-span-1',
  },
  {
    icon: Globe,
    title: 'Global Team Sync',
    desc: 'Time zone-aware scheduling and distributed team coordination with conflict-free collaboration.',
    span: 'col-span-1 row-span-1',
  },
  {
    icon: Database,
    title: 'High-Performance Backend',
    desc: 'MongoDB for persistence and Redis for caching deliver fast query performance.',
    span: 'col-span-1 row-span-1',
  },
  {
    icon: Layers,
    title: 'Task Hierarchy',
    desc: 'Create project structures with nested subtasks, dependencies, and custom workflows.',
    span: 'col-span-1 row-span-1',
  },
  {
    icon: MessageSquare,
    title: 'Integrated Communication',
    desc: 'Built-in messaging and collaborative tools for seamless team interaction.',
    badge: 'Beta',
    span: 'col-span-1 row-span-1',
  }
];

const FeatureGrid = () => (
  <section
    id="features"
    className="relative py-24 px-4 sm:px-8 transition-colors duration-500"
    style={{
      backgroundColor: 'var(--background)',
      color: 'var(--foreground)',
    }}
  >
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-5">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0),
            radial-gradient(circle at 20px 20px, var(--secondary) 0.5px, transparent 0)
          `,
          backgroundSize: '40px 40px, 60px 60px',
        }}
      />
    </div>

    <div className="max-w-7xl mx-auto text-center relative z-10">
      {/* Simplified Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6"
          style={{ color: 'var(--foreground)' }}
        >
          Everything You Need for{' '}
          <span
            className="relative inline-block"
            style={{ color: 'var(--primary)' }}
          >
            Team Success
            <div
              className="absolute -bottom-2 left-0 w-full h-1 rounded-full"
              style={{ backgroundColor: 'var(--primary)', opacity: 0.3 }}
            />
          </span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-3xl mx-auto mb-8 text-lg sm:text-xl leading-relaxed"
          style={{ color: 'var(--muted-foreground)' }}
        >
          A comprehensive platform designed to streamline workflows, enhance collaboration, and boost productivity for teams of all sizes.
        </motion.p>
      </motion.div>

      {/* Bento Grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 auto-rows-[minmax(220px,_1fr)] gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {featureCards.map(({ icon: Icon, title, desc, badge, span }, i) => (
          <motion.div
            key={i}
            variants={fadeIn('up', 0.1 * i)}
            className={`feature-card relative ${span} flex flex-col justify-between rounded-2xl p-6 shadow-md transition-all duration-300 cursor-pointer border backdrop-blur-sm group`}
            style={{
              backgroundColor: 'var(--card)',
              color: 'var(--card-foreground)',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-md)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
              e.currentTarget.style.boxShadow = 'var(--shadow-2xl)';
              e.currentTarget.style.borderColor = 'var(--primary)';
              e.currentTarget.style.backgroundColor = 'var(--accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.backgroundColor = 'var(--card)';
            }}
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                  style={{
                    backgroundColor: 'var(--secondary)',
                    border: '1px solid var(--border)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--primary)';
                    e.currentTarget.style.borderColor = 'var(--primary)';
                    e.currentTarget.style.transform = 'scale(1.15) rotate(12deg)';
                    e.currentTarget.style.boxShadow = `0 8px 25px var(--primary)40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--secondary)';
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Icon
                    className="transition-all duration-300"
                    style={{ color: 'var(--primary)' }}
                    size={24}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--primary-foreground)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--primary)';
                    }}
                  />
                </div>
                {badge && (
                  <span
                    className="text-xs font-medium px-3 py-1 rounded-full transition-all duration-300 group-hover:scale-105"
                    style={{
                      backgroundColor: badge === 'Live' ? '#10B981' : 
                                     badge === 'Beta' ? '#F59E0B' : 'var(--secondary)',
                      color: badge === 'Live' || badge === 'Beta' ? 'white' : 'var(--primary)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    {badge}
                  </span>
                )}
              </div>

              <h3
                className="text-lg font-semibold mb-3 transition-all duration-300 group-hover:text-primary"
                style={{ color: 'var(--foreground)' }}
              >
                {title}
              </h3>
              
              <p
                className="text-sm leading-relaxed transition-all duration-300"
                style={{ color: 'var(--muted-foreground)' }}
              >
                {desc}
              </p>
            </div>

            {/* Animated border effect */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background: `linear-gradient(45deg, var(--primary), var(--secondary), var(--primary))`,
                backgroundSize: '200% 200%',
                animation: 'gradient-shift 3s ease infinite',
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude',
                padding: '2px',
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-20 text-center"
      >
        <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
          Ready to Get Started?
        </h3>
        <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
          Join teams using CollabNest to streamline their workflows and boost productivity.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://collabnest-iota.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 relative overflow-hidden group"
            style={{
              backgroundColor: 'var(--primary)',
              color: 'var(--primary-foreground)',
              boxShadow: 'var(--shadow-lg)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
              e.currentTarget.style.boxShadow = 'var(--shadow-2xl)';
              e.currentTarget.style.filter = 'brightness(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              e.currentTarget.style.filter = 'brightness(1)';
            }}
          >
            <span className="relative z-10">Try CollabNest →</span>
          </a>
          
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border"
            style={{
              backgroundColor: 'transparent',
              color: 'var(--primary)',
              border: '2px solid var(--primary)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary)';
              e.currentTarget.style.color = 'var(--primary-foreground)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--primary)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Learn More
          </a>
        </div>
      </motion.div>
    </div>

    <style jsx>{`
      @keyframes gradient-shift {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      .feature-card {
        position: relative;
        overflow: hidden;
      }
      .feature-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, var(--primary)20, transparent);
        transition: left 0.6s ease;
      }
      .feature-card:hover::before {
        left: 100%;
      }
    `}</style>
  </section>
);

export default FeatureGrid;