import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full px-6 py-4 flex justify-between items-center bg-white dark:bg-gray-900 shadow-md fixed z-50"
    >
      <h1 className="text-2xl font-bold text-primary dark:text-white">CollabNest</h1>
      <div className="flex gap-4 items-center">
        <a href="#features" className="text-sm text-gray-700 dark:text-gray-300 hover:text-accent">Features</a>
        <a href="#contact" className="text-sm text-gray-700 dark:text-gray-300 hover:text-accent">Contact</a>
        <a 
          href="https://collabnest-dashboard.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-accent text-white px-4 py-2 rounded-lg text-sm hover:bg-opacity-90"
        >
          Get Started
        </a>
        <button 
          onClick={toggleTheme} 
          className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition"
        >
          {theme === 'dark' 
            ? <Sun size={18} className="text-yellow-400" /> 
            : <Moon size={18} className="text-gray-800" />
          }
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;