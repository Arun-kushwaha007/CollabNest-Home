import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-tr from-gray-900 via-gray-950 to-black py-10 px-6 mt-0.5 text-gray-400"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 text-sm">
        
        {/* Left section: copyright */}
        <div className="text-center md:text-left">
          © {new Date().getFullYear()}{' '}
          <span className="text-white font-semibold tracking-wide">CollabNest</span>. All rights reserved.
        </div>

        {/* Right section: links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-4">
          <a
            href="#features"
            className="hover:text-orange-400 transition-colors duration-300"
          >
            Features
          </a>
          <a
            href="#contact"
            className="hover:text-orange-400 transition-colors duration-300"
          >
            Contact
          </a>
          <a
            href="https://collabnest-dashboard.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition-colors duration-300"
          >
            Dashboard
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
