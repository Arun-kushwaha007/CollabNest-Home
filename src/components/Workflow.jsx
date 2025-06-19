import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Stepper, { Step } from '../animations/Stepper';

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

const Workflow = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <section
      id="workflow"
      className="py-24 px-6 bg-gradient-to-b from-gray-100 via-white to-gray-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950"
    >
      <div className="max-w-5xl mx-auto text-center">
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

        <Stepper
          initialStep={currentStep}
          onStepChange={(step) => setCurrentStep(step)}
          onFinalStepCompleted={() => console.log('All steps completed!')}
          backButtonText="Previous"
          nextButtonText="Next"
        >
          {steps.map(({ icon: Icon, title, desc }, index) => (
            <Step key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 max-w-md mx-auto shadow-md text-center"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-orange-100 dark:bg-orange-400/10 mx-auto mb-6">
                  <Icon className="text-orange-500 dark:text-orange-400" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            </Step>
          ))}
        </Stepper>
      </div>
    </section>
  );
};

export default Workflow;
