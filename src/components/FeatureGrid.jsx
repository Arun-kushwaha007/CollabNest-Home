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

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const FeatureGrid = () => (
  <section
    id="feature-grid"
    className="relative py-24 px-6 bg-gradient-to-b from-gray-100 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-500"
  >
    <div className="max-w-7xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4"
      >
        What Makes <span className="text-orange-400">CollabNest</span> Unique?
      </motion.h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-16">
        Built for real teams, real deadlines, and real collaboration. Scalable for startups to enterprises.
      </p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
      >
        {featureCards.map(({ icon: Icon, title, desc, badge }, i) => (
          <motion.div
            key={i}
            variants={fadeIn('up')}
            className="group relative bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm hover:shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-[1.025]"
          >
            {/* Animated Icon */}
            <motion.div
              whileHover={{ scale: 1.2, rotate: 4 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-12 h-12 flex items-center justify-center bg-orange-100 dark:bg-orange-400/10 rounded-xl mb-4"
            >
              <Icon className="text-orange-500 dark:text-orange-400" size={24} />
            </motion.div>

            {/* Badge (optional) */}
            {badge && (
              <span className="absolute top-4 right-4 bg-orange-100 text-orange-600 text-xs font-medium px-2 py-0.5 rounded-full dark:bg-orange-500/10 dark:text-orange-300">
                {badge}
              </span>
            )}

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{desc}</p>

            {/* Soft glow hover */}
            <div className="absolute -inset-1 rounded-3xl bg-orange-400 opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default FeatureGrid;
