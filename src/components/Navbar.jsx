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
      className="fixed top-0 z-50 w-full px-6 md:px-10 py-4 flex justify-between items-center backdrop-blur-sm bg-white/70 dark:bg-black/60 shadow-sm border-b border-gray-200 dark:border-white/10"
    >
      {/* Logo or Title */}
      <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent tracking-tight">
        CollabNest
      </h1>

      {/* Nav + Actions */}
      <div className="flex items-center gap-3 md:gap-6">
        <a
          href="#features"
          className="text-sm md:text-base text-gray-700 dark:text-gray-300 hover:text-accent transition duration-200 hover:underline underline-offset-4"
        >
          Features
        </a>

        <a
          href="#contact"
          className="text-sm md:text-base text-gray-700 dark:text-gray-300 hover:text-accent transition duration-200 hover:underline underline-offset-4"
        >
          Contact
        </a>

        <a 
          href="https://collabnest-dashboard.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full text-sm md:text-base font-medium hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Get Started
        </a>

        {/* Theme Toggle */}
        <button 
          onClick={toggleTheme} 
          className="ml-2 p-2 rounded-full bg-gray-100 dark:bg-gray-800 transition-all duration-300 hover:scale-110 focus:outline-none ring-1 ring-transparent hover:ring-accent"
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
