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
      className="py-24 px-6 transition-colors duration-500"
      style={{
        background: 'linear-gradient(to bottom, var(--background), var(--card), var(--background))',
        color: 'var(--foreground)',
      }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold mb-4"
          style={{ color: 'var(--foreground)' }}
        >
          How <span style={{ color: 'var(--primary)' }}>CollabNest</span> Works
        </motion.h2>
        <p
          className="max-w-xl mx-auto mb-16 text-base sm:text-lg"
          style={{ color: 'var(--muted-foreground)' }}
        >
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
            <Step key={index} >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl p-8 max-w-md mx-auto shadow-md text-center transition-colors duration-500 bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100
                                 dark:from-[#0d0d0d] dark:via-[#2c2c2c] dark:to-[#050505]
                                text-[color:var(--card-foreground)] border border-[color:var(--border)] "
                style={{
                  backgroundColor: 'var(--card)',
                  color: 'var(--foreground)',
                  border: '1px solid var(--border)',
                }}
              >
                <div
                  className="flex items-center justify-center w-14 h-14 rounded-xl mx-auto mb-6 "
                  style={{ backgroundColor: 'rgba(255, 102, 102, 0.1)' }} // fallback: --primary with opacity
                >
                  <Icon style={{ color: 'var(--primary)' }} size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                  {desc}
                </p>
              </motion.div>
            </Step>
          ))}
        </Stepper>
      </div>
    </section>
  );
};

export default Workflow;
