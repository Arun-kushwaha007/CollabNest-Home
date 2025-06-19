import React, { useState } from 'react';
import { motion } from 'framer-motion';

import ProfileCard from '../animations/ProfileCard';
const Footer = () => {
  const [showCard, setShowCard] = useState(false);

  const toggleCard = () => {
    setShowCard((prev) => !prev);
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative bg-gradient-to-tr from-gray-900 via-gray-950 to-black py-10 px-6 text-gray-400"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 text-sm">
        {/* Left: Copyright */}
        <div className="text-center md:text-left">
          © {new Date().getFullYear()}{' '}
          <span className="text-white font-semibold tracking-wide">CollabNest</span>. All rights reserved.
        </div>

        {/* Right: Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-6 sm:gap-4">
          <a href="#features" className="hover:text-orange-400 transition-colors duration-300">
            Features
          </a>
          <a href="#contact" className="hover:text-orange-400 transition-colors duration-300">
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

          {/* Button instead of link */}
          <button
            onClick={toggleCard}
            className="bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
          >
            Created by Arun
          </button>
        </div>
      </div>

      {/* Profile Card */}
      {showCard && (
        <div className="absolute bottom-28 right-6 z-50">
          <ProfileCard
            name="Arun Kushwaha"
            title="Full Stack & DevOps Engineer"
            handle="arunk.codes"
            status="Online"
            contactText="Contact Me"
            avatarUrl="../assets/avatar.png" 
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => console.log('Contact clicked')}
          />
        </div>
      )}
    </motion.footer>
  );
};

export default Footer;
