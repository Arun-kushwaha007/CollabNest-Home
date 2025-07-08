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
    desc: 'Kickstart your workspace by creating a dedicated org for your team with powerful management tools.',
  },
  {
    icon: Users,
    title: 'Invite Team Members',
    desc: 'Send invites and collaborate instantly — no setup needed. Scale your team effortlessly.',
  },
  {
    icon: ClipboardList,
    title: 'Assign and Track Tasks',
    desc: 'Use Kanban boards and lists to keep everything organized with real-time updates.',
  },
  {
    icon: BarChart2,
    title: 'Monitor Progress',
    desc: 'Track updates in real-time using powerful dashboards and analytics.',
  },
];

const Workflow = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <section
      id="workflow"
      className="relative py-24 px-6 transition-colors duration-500 overflow-hidden"
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

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6"
          style={{ color: 'var(--foreground)' }}
        >
          How{' '}
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
          Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-2xl mx-auto mb-16 text-lg sm:text-xl leading-relaxed"
          style={{ color: 'var(--muted-foreground)' }}
        >
          From idea to execution — CollabNest simplifies your project lifecycle with intelligent workflows.
        </motion.p>

        {/* Stepper Container - Updated to use your color palette */}
        <div 
          className="backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border"
          style={{ 
            backgroundColor: 'var(--card)',
            borderColor: 'var(--border)',
            boxShadow: 'var(--shadow-2xl)'
          }}
        >
          <Stepper
            initialStep={currentStep}
            onStepChange={(step) => setCurrentStep(step)}
            backButtonText="Previous"
            nextButtonText="Next"
          >
            {steps.map(({ icon: Icon, title, desc }, index) => (
              <Step key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl p-8 max-w-md mx-auto text-center shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--accent)',
                    color: 'var(--accent-foreground)',
                    border: '1px solid var(--border)',
                    boxShadow: 'var(--shadow-md)'
                  }}
                >
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full mb-4"
                    style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}
                  >
                    <span className="text-sm font-bold">{index + 1}</span>
                  </div>

                  {/* Icon Container */}
                  <div
                    className="flex items-center justify-center w-16 h-16 rounded-full mx-auto mb-6 border-2 transition-all duration-300 hover:scale-110"
                    style={{ 
                      backgroundColor: 'var(--secondary)',
                      borderColor: 'var(--primary)',
                    }}
                  >
                    <Icon style={{ color: 'var(--primary)' }} size={32} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--foreground)' }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                    {desc}
                  </p>
                </motion.div>
              </Step>
            ))}
          </Stepper>
        </div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 flex justify-center space-x-2"
        >
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index + 1 === currentStep ? 'scale-125' : 'hover:scale-110'
              }`}
              style={{
                backgroundColor: index + 1 === currentStep ? 'var(--primary)' : 'var(--muted)',
              }}
            />
          ))}
        </motion.div>

        {/* Call to Action - Updated shadow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16"
        >
          <a
            href="https://collabnest-iota.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              backgroundColor: 'var(--primary)',
              color: 'var(--primary-foreground)',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            Start Your Workflow →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Workflow;