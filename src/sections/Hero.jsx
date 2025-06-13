import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold leading-tight text-primary"
      >
        Team Productivity, <span className="text-accent">Reimagined</span>.
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl"
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
          className="px-6 py-3 bg-accent text-white rounded-full text-lg font-semibold hover:bg-opacity-90 transition"
        >
          Get Started
        </a>
        <a 
          href="#contact"
          className="px-6 py-3 border-2 border-accent text-accent rounded-full text-lg font-semibold hover:bg-accent hover:text-white transition"
        >
          Contact Us
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
