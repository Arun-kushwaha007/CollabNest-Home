import React from 'react';
import { motion } from 'framer-motion';
import HeroCanvas from '../canvas/HeroCanvas';

const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-[100vh] overflow-hidden">
      <HeroCanvas />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight text-primary dark:text-white"
        >
          Team Productivity, <span className="text-accent">Reimagined</span>.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl"
        >
          Collaborate, manage, and deliver tasks in real-time with lightning-fast updates and a beautiful interface.
        </motion.p>

        <motion.div 
          className="mt-10 flex gap-4 flex-wrap justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <a 
            href="https://collabnest-dashboard.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-accent text-white rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors duration-300"
          >
            Get Started
          </a>
          <a 
            href="#contact"
            className="px-6 py-3 border-2 border-accent text-accent rounded-full text-lg font-semibold hover:bg-accent hover:text-white transition-all duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;