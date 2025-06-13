import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-100 dark:bg-gray-900 py-8 px-6 mt-12"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left text-gray-700 dark:text-gray-300 text-sm">
          © {new Date().getFullYear()} <strong>CollabNest</strong>. All rights reserved.
        </div>
        <div className="flex gap-4 text-sm">
          <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-accent transition-colors duration-300">Features</a>
          <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-accent transition-colors duration-300">Contact</a>
          <a href="https://collabnest-dashboard.vercel.app" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-accent transition-colors duration-300">Dashboard</a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
