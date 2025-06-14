import React from 'react';
import { motion } from 'framer-motion';
import BgGradient from '../assets/gradient.svg'; 

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden bg-white dark:bg-black transition-colors duration-500"
    >
      {/* Background image */}
       <div className="absolute inset-0 z-0">
    <img
      src={BgGradient}
      alt="gradient background"
      className="w-full h-full object-cover "
    />
    <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent dark:from-black/80" />
  </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-4xl md:text-7xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent"
        >
          Rethink Teamwork.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 text-lg md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl"
        >
          The new standard for collaborative productivity — sleek, fast, and delightful to use.
        </motion.p>

        <motion.div
          className="mt-10 flex gap-4 flex-wrap justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <a
            href="https://collabnest-dashboard.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black hover:scale-105 hover:shadow-lg transition-all duration-300 rounded-full font-medium"
          >
            Get Started
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 rounded-full font-medium"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
