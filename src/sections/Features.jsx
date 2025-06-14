import React from 'react';
import { motion } from 'framer-motion';
import { Bolt, Users, CheckCircle, Database } from 'lucide-react';
import { fadeIn } from '../utils/motion';

const features = [
  {
    icon: Bolt,
    title: 'Real-time Collaboration',
    description: 'Instant task updates across all team members using Socket.IO and Redis caching.',
  },
  {
    icon: Users,
    title: 'Org-based Task Management',
    description: 'Isolate and manage tasks by organization, with role-based access and smart filtering.',
  },
  {
    icon: CheckCircle,
    title: 'Smart Subtasks & Labels',
    description: 'Break down complex workflows into subtasks with tag and priority-based filtering.',
  },
  {
    icon: Database,
    title: 'Powered by Mongo & Redis',
    description: 'Blazing fast backend performance with MongoDB for persistence and Redis for cache.',
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

const Features = () => {
  return (
    <section
      id="features"
      className="relative py-24 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-black dark:via-gray-900 dark:to-gray-950 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-gray-900 dark:text-white"
        >
          Built for <span className="text-orange-400">Seamless Teamwork</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto"
        >
          Everything your team needs to move faster and smarter — beautifully wrapped in one powerful platform.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {features.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up')}
              className="relative bg-white dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700 p-6 rounded-3xl shadow-md hover:shadow-orange-300/40 hover:scale-105 transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ scale: 1.25, rotate: 4 }}
                transition={{ type: 'spring', stiffness: 400 }}
                className="flex items-center justify-center w-14 h-14 mx-auto rounded-full bg-orange-100 dark:bg-orange-500/20 mb-5"
              >
                <Icon className="text-orange-500 dark:text-orange-400" size={28} />
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                {title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {description}
              </p>
              {/* Glow on hover */}
              <div className="absolute -inset-1 rounded-3xl bg-orange-400 opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
