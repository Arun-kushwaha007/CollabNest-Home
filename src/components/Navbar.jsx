import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full px-6 py-4 flex justify-between items-center shadow-md bg-white fixed z-50"
    >
      <div className="text-2xl font-bold text-primary">CollabNest</div>
      <div className="hidden md:flex gap-8 text-sm font-medium">
        <a href="#features" className="hover:text-accent">Features</a>
        <a href="#contact" className="hover:text-accent">Contact</a>
      </div>
      <a 
        href="https://collabnest-dashboard.vercel.app" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hidden md:inline-block px-4 py-2 bg-accent text-white rounded-lg hover:bg-opacity-80 transition"
      >
        Get Started
      </a>
    </motion.nav>
  );
};

export default Navbar;
