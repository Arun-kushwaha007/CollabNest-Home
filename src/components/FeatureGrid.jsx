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
      background: 'linear-gradient(to bottom, var(--background), var(--card), var(--background))',
      color: 'var(--foreground)',
    }}
  >
    <div className="max-w-6xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold mb-4"
        style={{ color: 'var(--foreground)' }}
      >
        What Makes <span style={{ color: 'var(--primary)' }}>CollabNest</span> Unique?
      </motion.h2>
      <p
        className="max-w-2xl mx-auto mb-16 text-base sm:text-lg"
        style={{ color: 'var(--muted-foreground)' }}
      >
        Built for real teams, real deadlines, and real collaboration. Scalable for startups to enterprises.
      </p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {featureCards.map(({ icon: Icon, title, desc, badge }, i) => (
          <motion.div key={i} variants={fadeIn('up')}>
            <GlareHover
              glareColor="var(--foreground)"
              glareOpacity={0.15}
              glareAngle={-20}
              glareSize={220}
              transitionDuration={700}
              playOnce={false}
            >
              <div
                className="rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between text-left"
                style={{
                  backgroundColor: 'var(--card)',
                  color: 'var(--card-foreground)',
                  border: '1px solid var(--border)',
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-11 h-11 flex items-center justify-center rounded-lg"
                      style={{ backgroundColor: 'rgba(255, 102, 102, 0.1)' }} // fallback: --primary with opacity
                    >
                      <Icon style={{ color: 'var(--primary)' }} size={22} />
                    </div>
                    {badge && (
                      <span
                        className="text-xs font-medium px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: 'rgba(255, 102, 102, 0.1)',
                          color: 'var(--primary)',
                        }}
                      >
                        {badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold mb-2">{title}</h3>
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
    </div>
  </section>
);

export default FeatureGrid;
