import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import {
  UserPlus,
  Users,
  ClipboardList,
  BarChart2,
} from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Create an Organization',
    desc: 'Kickstart your workspace by creating a dedicated org for your team.',
  },
  {
    icon: Users,
    title: 'Invite Team Members',
    desc: 'Send invites and collaborate instantly — no setup needed.',
  },
  {
    icon: ClipboardList,
    title: 'Assign and Track Tasks',
    desc: 'Use Kanban boards and lists to keep everything organized.',
  },
  {
    icon: BarChart2,
    title: 'Monitor Progress',
    desc: 'Track updates in real-time using powerful dashboards.',
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

const Workflow = () => (
  <section
    id="workflow"
    className="py-24 px-6 bg-gradient-to-b from-gray-100 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
  >
    <div className="max-w-7xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white"
      >
        How <span className="text-orange-400">CollabNest</span> Works
      </motion.h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-16">
        From idea to execution — CollabNest simplifies your project lifecycle.
      </p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {steps.map(({ icon: Icon, title, desc }, index) => (
          <motion.div
            key={index}
            variants={fadeIn('up')}
            className="group relative bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-sm hover:shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-[1.025] transition-all"
          >
            {/* Icon with motion */}
            <motion.div
              whileHover={{ scale: 1.2, rotate: 4 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-12 h-12 flex items-center justify-center bg-orange-100 dark:bg-orange-400/10 rounded-xl mb-4"
            >
              <Icon className="text-orange-500 dark:text-orange-400" size={24} />
            </motion.div>

            {/* Optional step label */}
            {/* <span className="absolute top-4 right-4 text-xs text-orange-600 bg-orange-100 dark:bg-orange-500/10 px-2 py-0.5 rounded-full font-medium">
              Step {index + 1}
            </span> */}

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              {title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Workflow;
