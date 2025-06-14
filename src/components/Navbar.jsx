import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import useDarkMode from '../hooks/useDarkMode';

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [theme, toggleTheme] = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollY = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollY) {
          setActiveSection(navLinks[i].href);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 z-50 w-full px-6 md:px-10 py-4 flex justify-between items-center backdrop-blur-lg bg-white/70 dark:bg-black/60 border-b border-gray-200 dark:border-white/10 shadow-sm"
    >
      {/* Logo */}
      <a
        href="/"
        className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent tracking-tight"
      >
        CollabNest
      </a>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            className={`text-sm font-medium transition duration-200 hover:text-orange-500 dark:hover:text-orange-400 ${
              activeSection === link.href ? 'text-orange-500 dark:text-orange-400 underline underline-offset-4' : 'text-gray-800 dark:text-gray-300'
            }`}
          >
            {link.label}
          </a>
        ))}

        <a
          href="https://collabnest-dashboard.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full bg-gradient-to-tr from-orange-500 to-pink-500 text-white text-sm font-medium shadow hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Get Started
        </a>

        <button
          onClick={toggleTheme}
          aria-label="Toggle Dark Mode"
          className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:scale-110 transition-all duration-300 ring-1 ring-transparent hover:ring-orange-400"
        >
          {theme === 'dark' ? (
            <Sun size={18} className="text-yellow-400" />
          ) : (
            <Moon size={18} className="text-gray-800" />
          )}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center gap-2">
        <button
          onClick={toggleTheme}
          aria-label="Toggle Dark Mode"
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:scale-110 transition-all duration-300 ring-1 ring-transparent hover:ring-orange-400"
        >
          {theme === 'dark' ? (
            <Sun size={18} className="text-yellow-400" />
          ) : (
            <Moon size={18} className="text-gray-800" />
          )}
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="p-2 rounded-full text-gray-800 dark:text-gray-200"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 px-6 py-4 shadow-md border-t border-gray-200 dark:border-white/10 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium transition duration-200 hover:text-orange-500 dark:hover:text-orange-400 ${
                    activeSection === link.href ? 'text-orange-500 dark:text-orange-400 underline underline-offset-4' : 'text-gray-800 dark:text-gray-300'
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <a
                href="https://collabnest-dashboard.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-gradient-to-tr from-orange-500 to-pink-500 text-white text-sm font-medium text-center shadow hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
