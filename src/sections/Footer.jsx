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
      className="relative py-10 px-6 text-sm transition-colors duration-500"
      style={{
        background: 'linear-gradient(to top right, var(--background), var(--card), var(--background))',
        color: 'var(--muted-foreground)',
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
        {/* Left: Copyright */}
        <div className="text-center md:text-left">
          © {new Date().getFullYear()}{' '}
          <span style={{ color: 'var(--foreground)', fontWeight: 600 }}>
            CollabNest
          </span>{' '}
          . All rights reserved.
        </div>

        {/* Right: Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-6 sm:gap-4">
          <a
            href="#features"
            className="transition-colors duration-300"
            style={{ color: 'var(--muted-foreground)' }}
            onMouseEnter={(e) => (e.target.style.color = 'var(--primary)')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--muted-foreground)')}
          >
            Features
          </a>
          <a
            href="#contact"
            className="transition-colors duration-300"
            style={{ color: 'var(--muted-foreground)' }}
            onMouseEnter={(e) => (e.target.style.color = 'var(--primary)')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--muted-foreground)')}
          >
            Contact
          </a>
          <a
            href="https://collabnest-dashboard.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300"
            style={{ color: 'var(--muted-foreground)' }}
            onMouseEnter={(e) => (e.target.style.color = 'var(--primary)')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--muted-foreground)')}
          >
            Dashboard
          </a>

          {/* Button to toggle profile card */}
          <button
            onClick={toggleCard}
            className="px-4 py-2 rounded-full font-semibold shadow-md transition-transform duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(to right, var(--primary), #ff66cc)',
              color: 'var(--primary-foreground)',
            }}
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
