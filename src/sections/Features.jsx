import React from 'react';
import { motion } from 'framer-motion';
import { Bolt, Users, CheckCircle, Database } from 'lucide-react';
import { fadeIn } from '../utils/motion';

const features = [
  {
    icon: <Bolt size={36} className="text-orange-500" />,
    title: "Real-time Collaboration",
    description: "Instant task updates across all team members using Socket.IO and Redis caching.",
  },
  {
    icon: <Users size={36} className="text-orange-500" />,
    title: "Org-based Task Management",
    description: "Isolate and manage tasks by organization, with role-based access and smart filtering.",
  },
  {
    icon: <CheckCircle size={36} className="text-orange-500" />,
    title: "Smart Subtasks & Labels",
    description: "Break down complex workflows into subtasks with tag and priority-based filtering.",
  },
  {
    icon: <Database size={36} className="text-orange-500" />,
    title: "Powered by Mongo & Redis",
    description: "Blazing fast backend performance with MongoDB for persistence and Redis for cache.",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="relative py-24 px-6 bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-black dark:via-gray-900 dark:to-gray-950 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white"
        >
          Built for Seamless Teamwork
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto"
        >
          Everything your team needs to move faster and smarter — beautifully wrapped in one powerful platform.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feat, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up')}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-orange-300/40 transition-transform duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-500/20 mx-auto mb-5">
                {feat.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {feat.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
