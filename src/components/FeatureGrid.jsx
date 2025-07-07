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
    id="feature-grid"
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
                className="rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between text-left backdrop-blur-sm border hover:border-opacity-50"
                style={{
                  backgroundColor: 'var(--card)',
                  color: 'var(--card-foreground)',
                  border: '1px solid var(--border)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 hover:scale-110"
                      style={{ 
                        backgroundColor: 'var(--secondary)',
                        border: '1px solid var(--border)'
                      }}
                    >
                      <Icon style={{ color: 'var(--primary)' }} size={24} />
                    </div>
                    {badge && (
                      <span
                        className="text-xs font-medium px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: 'var(--secondary)',
                          color: 'var(--primary)',
                          border: '1px solid var(--border)',
                        }}
                      >
                        {badge}
                      </span>
                    )}
                  </div>

                  <h3 
                    className="text-lg font-semibold mb-3"
                    style={{ color: 'var(--foreground)' }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            </GlareHover>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
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
          className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          style={{
            backgroundColor: 'var(--primary)',
            color: 'var(--primary-foreground)',
            boxShadow: '0 4px 20px rgba(255, 123, 0, 0.3)',
          }}
        >
          Try All Features →
        </a>
      </motion.div>
    </div>
  </section>
);

export default FeatureGrid;