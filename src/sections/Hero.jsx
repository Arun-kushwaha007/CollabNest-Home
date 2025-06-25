import React from 'react';
import { motion } from 'framer-motion';
import Beams from '../animations/Beams';
import TextPressure from '../animations/TextPressue';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
    >
      {/* Beams Background */}
      <div className="absolute inset-0 z-0">
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Beams
            beamWidth={2}
            beamHeight={15}
            beamNumber={12}
            lightColor="var(--foreground)"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(var(--background-rgb), 0.8), transparent)',
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent"
        >
          <TextPressure
              text="Rethink_Teamwork"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#ffffff"
              strokeColor="#000000"
              minFontSize={200}
            />
          
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 text-base sm:text-lg md:text-2xl max-w-2xl"
          style={{ color: 'var(--muted-foreground)' }}
        >
          The new standard for collaborative productivity — sleek, fast, and delightful to use.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <a
            href="https://collabnest-dashboard.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300"
            style={{
              backgroundColor: 'var(--foreground)',
              color: 'var(--background)',
            }}
          >
            Get Started
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border-2 rounded-full font-semibold transition-all duration-300"
            style={{
              borderColor: 'var(--foreground)',
              color: 'var(--foreground)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--foreground)';
              e.currentTarget.style.color = 'var(--background)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--foreground)';
            }}
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
