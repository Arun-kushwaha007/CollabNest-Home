import React from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  ShieldCheck,
  Timer,
  LayoutGrid,
  Layers,
  Globe,
} from 'lucide-react';
import { fadeIn } from '../utils/motion';
import GlareHover from '../animations/GlareHover';

const featureCards = [
  {
    icon: Brain,
    title: 'AI-Assisted Prioritization',
    desc: 'Automatically rank tasks based on urgency, deadlines, and team activity.',
    badge: 'AI',
  },
  {
    icon: ShieldCheck,
    title: 'Role-Based Permissions',
    desc: 'Grant fine-grained access to different parts of your organization workspace.',
  },
  {
    icon: Timer,
    title: 'Smart Deadlines',
    desc: 'Set reminders and get nudges for upcoming due tasks without manual tracking.',
  },
  {
    icon: LayoutGrid,
    title: 'Kanban View',
    desc: 'Switch between list, board, or calendar views seamlessly.',
  },
  {
    icon: Layers,
    title: 'Subtask Nesting',
    desc: 'Break down larger tasks into actionable subtasks and track independently.',
  },
  {
    icon: Globe,
    title: 'Global Team Sync',
    desc: 'Real-time timezone-aware updates for distributed teams.',
  },
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
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
    </div>

    <div className="max-w-6xl mx-auto text-center relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6"
        style={{ color: 'var(--foreground)' }}
      >
        What Makes{' '}
        <span 
          className="relative inline-block"
          style={{ color: 'var(--primary)' }}
        >
          CollabNest
          <div 
            className="absolute -bottom-2 left-0 w-full h-1 rounded-full"
            style={{ backgroundColor: 'var(--primary)', opacity: 0.3 }}
          />
        </span>{' '}
        Unique?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-2xl mx-auto mb-16 text-lg sm:text-xl leading-relaxed"
        style={{ color: 'var(--muted-foreground)' }}
      >
        Built for real teams, real deadlines, and real collaboration. Scalable for startups to enterprises.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {featureCards.map(({ icon: Icon, title, desc, badge }, i) => (
          <motion.div key={i} variants={fadeIn('up')}>
            <GlareHover
              glareColor="var(--primary)"
              glareOpacity={0.2}
              glareAngle={-20}
              glareSize={220}
              transitionDuration={700}
              playOnce={false}
            >
              <div
                className="feature-card rounded-2xl p-6 shadow-md transition-all duration-300 h-full flex flex-col justify-between text-left backdrop-blur-sm border group cursor-pointer"
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
                      className="icon-container w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                      style={{ 
                        backgroundColor: 'var(--secondary)',
                        border: '1px solid var(--border)'
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
                        className="feature-icon transition-all duration-300"
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
                        className="badge text-xs font-medium px-3 py-1 rounded-full transition-all duration-300 group-hover:scale-105"
                        style={{
                          backgroundColor: 'var(--secondary)',
                          color: 'var(--primary)',
                          border: '1px solid var(--border)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--primary)';
                          e.currentTarget.style.color = 'var(--primary-foreground)';
                          e.currentTarget.style.borderColor = 'var(--primary)';
                          e.currentTarget.style.transform = 'scale(1.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--secondary)';
                          e.currentTarget.style.color = 'var(--primary)';
                          e.currentTarget.style.borderColor = 'var(--border)';
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      >
                        {badge}
                      </span>
                    )}
                  </div>

                  <h3 
                    className="feature-title text-lg font-semibold mb-3 transition-all duration-300 group-hover:text-primary"
                    style={{ color: 'var(--foreground)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--primary)';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--foreground)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    className="feature-description text-sm leading-relaxed transition-all duration-300"
                    style={{ color: 'var(--muted-foreground)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--foreground)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--muted-foreground)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {desc}
                  </p>
                </div>

                {/* Animated border effect */}
                <div 
                  className="animated-border absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `linear-gradient(45deg, var(--primary), var(--secondary), var(--primary))`,
                    backgroundSize: '200% 200%',
                    animation: 'gradient-shift 3s ease infinite',
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'exclude',
                    padding: '2px',
                  }}
                />
              </div>
            </GlareHover>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action with Enhanced Hover */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-16"
      >
        <a
          href="https://collabnest-dashboard.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button inline-flex items-center px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 relative overflow-hidden group"
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
          {/* Animated background overlay */}
          <span 
            className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300"
            style={{
              background: `linear-gradient(45deg, var(--secondary), var(--primary), var(--secondary))`,
              backgroundSize: '200% 200%',
              animation: 'gradient-shift 2s ease infinite',
            }}
          />
          <span className="relative z-10">Try All Features →</span>
        </a>
      </motion.div>
    </div>

    {/* Add CSS for animations */}
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
        background: linear-gradient(
          90deg,
          transparent,
          var(--primary)20,
          transparent
        );
        transition: left 0.6s ease;
      }
      
      .feature-card:hover::before {
        left: 100%;
      }
    `}</style>
  </section>
);

export default FeatureGrid;