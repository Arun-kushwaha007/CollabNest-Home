import React from 'react';
import { motion } from 'framer-motion';
import { Bolt, Users, CheckCircle, Database } from 'lucide-react';
import { fadeIn } from '../utils/motion';

const features = [
  {
    icon: <Bolt size={32} className="text-accent" />,
    title: "Real-time Collaboration",
    description: "Instant task updates across all team members using Socket.IO and Redis caching.",
  },
  {
    icon: <Users size={32} className="text-accent" />,
    title: "Org-based Task Management",
    description: "Isolate and manage tasks by organization, with role-based access and smart filtering.",
  },
  {
    icon: <CheckCircle size={32} className="text-accent" />,
    title: "Smart Subtasks & Labels",
    description: "Break down complex workflows into subtasks with tag and priority-based filtering.",
  },
  {
    icon: <Database size={32} className="text-accent" />,
    title: "Powered by Mongo & Redis",
    description: "Blazing fast backend performance with MongoDB for persistence and Redis for cache.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 text-gray-900 dark:text-white"
        >
          Built for Seamless Teamwork
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 dark:text-gray-300 mb-12"
        >
          Everything your team needs to move faster and smarter, in one powerful platform.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up')}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-md hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="inline-block mb-4">{feat.icon}</div> {/* Ensure icon is centered using inline-block and text-center on parent */}
              <div className="text-left"> {/* Wrapper for left-aligning text */}
                <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">{feat.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{feat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;