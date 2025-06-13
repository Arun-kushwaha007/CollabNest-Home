import React from 'react';
import { motion } from 'framer-motion';
import HeroCanvas from '../canvas/HeroCanvas';

const Hero = () => {
  return (
    <section
  id="hero"
  className="relative w-full h-screen overflow-hidden bg-white dark:bg-black transition-colors duration-500"
>
  <div className="absolute inset-0 z-0">
    <HeroCanvas />
  </div>
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
     <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-extrabold leading-tight text-primary dark:text-white"
        >
          Team Productivity, <span className="text-accent">Reimagined</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-6 text-base md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl"
        >
          Collaborate, manage, and deliver tasks in real-time — beautifully and efficiently.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a
            href="https://collabnest-dashboard.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-accent text-white rounded-full text-lg font-semibold shadow-md hover:shadow-lg hover:bg-opacity-50 hover:bg-gray-800 transition-all"
          >
            Get Started
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-accent text-accent rounded-full text-lg font-semibold hover:bg-accent hover:text-white transition-all"
          >
            Contact Us
          </a>
        </motion.div>
  </div>
</section>
  );
};

export default Hero;
