import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Twitter, Github, Linkedin } from 'lucide-react'; // icons

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    let currentCount = localStorage.getItem('visitorCount');
    if (currentCount) {
      currentCount = parseInt(currentCount, 10) + 1;
    } else {
      currentCount = 1;
    }
    localStorage.setItem('visitorCount', currentCount);
    setVisitorCount(currentCount);
  }, []);

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
      <div className="max-w-6xl mx-auto flex flex-col gap-6 md:gap-4">
        {/* Top: Main Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
          
            <span style={{ color: 'var(--foreground)', fontWeight: 600 }}>
              CollabNest
            </span>
            <div className='pt-2'>

            The new standard for collaborative <br/> productivity — sleek, fast, and delightful to use.
            </div>
          </div>

          {/* Visitor Counter */}
          <div className="text-center md:text-center">
            <div className="text-center md:text-left">
                        © {new Date().getFullYear()}{' '}
                        <span style={{ color: 'var(--foreground)', fontWeight: 600 }}>
                          CollabNest
                        </span>{' '}
                        . All rights reserved.
                      </div>
            Visitors: {visitorCount}
          </div>

          {/* Navigation Links */}
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
          </div>
        </div>

        {/* Bottom: Connect Section */}
        <div className="flex justify-center md:justify-end gap-4 ">
          {/* Connect */}
          <a
            href="https://x.com/Arunkush00?s=08"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-[color:var(--accent)] transition-all duration-300"
            style={{ color: 'var(--muted-foreground)' }}
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://github.com/Arun-kushwaha007"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-[color:var(--accent)] transition-all duration-300"
            style={{ color: 'var(--muted-foreground)' }}
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/arun-kushwaha-394b5a340/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-[color:var(--accent)] transition-all duration-300"
            style={{ color: 'var(--muted-foreground)' }}
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
