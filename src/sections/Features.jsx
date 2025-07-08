import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Bolt, Users, CheckCircle, Database, Sun, Moon } from 'lucide-react';
import { fadeIn } from '../utils/motion';
import CardSwap, { Card } from '../animations/CardSwap';

const features = [
  {
    icon: Bolt,
    title: 'Real-time Collaboration',
    description: 'Instant task updates across all team members using Socket.IO and Redis caching.',
  },
  {
    icon: Users,
    title: 'Org-based Task Management',
    description: 'Isolate and manage tasks by organization, with role-based access and smart filtering.',
  },
  {
    icon: CheckCircle,
    title: 'Smart Subtasks & Labels',
    description: 'Break down complex workflows into subtasks with tag and priority-based filtering.',
  },
  {
    icon: Database,
    title: 'Powered by Mongo & Redis',
    description: 'Blazing fast backend performance with MongoDB for persistence and Redis for cache.',
  },
];

const Features = () => {
  // Default to dark mode
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true; // Default to dark
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <section
      id="features"
      className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center transition-colors duration-500"
      style={{
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)',
          backgroundSize: '40px 40px sm:60px 60px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Mobile: Stack content vertically, Desktop: Side by side */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 sm:gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 tracking-tight leading-tight"
              style={{ color: 'var(--foreground)' }}
            >
              Built for{' '}
              <span 
                className="relative inline-block"
                style={{ color: 'var(--primary)' }}
              >
                Seamless Teamwork
                <div 
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 rounded-full"
                  style={{ backgroundColor: 'var(--primary)', opacity: 0.3 }}
                />
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed mb-6 sm:mb-8"
              style={{ color: 'var(--muted-foreground)' }}
            >
              Everything your team needs to move faster and smarter — beautifully wrapped in one powerful platform designed for modern workflows.
            </motion.p>
            
            {/* CTA Button */}
            <motion.a
              href="https://collabnest-iota.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                backgroundColor: 'var(--primary)',
                color: 'var(--primary-foreground)',
              }}
            >
              Try CollabNest →
            </motion.a>
          </div>

          {/* Cards Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            {/* Mobile: Static Grid */}
            <div className="block lg:hidden w-full max-w-md mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map(({ icon: Icon, title, description }, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="p-4 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
                    style={{
                      backgroundColor: 'var(--card)',
                      color: 'var(--card-foreground)',
                      border: '1px solid var(--border)',
                    }}
                    whileHover={{ y: -8 }}
                  >
                    <div className="flex flex-col items-center text-center">
                      {/* Icon Container */}
                      <div 
                        className="flex items-center justify-center w-10 h-10 rounded-full mb-3 border-2 transition-all duration-300 hover:scale-110"
                        style={{
                          backgroundColor: 'var(--secondary)',
                          borderColor: 'var(--primary)',
                        }}
                      >
                        <Icon 
                          size={18}
                          style={{ color: 'var(--primary)' }}
                        />
                      </div>
                      
                      {/* Title */}
                      <h3 
                        className="text-sm font-bold mb-2"
                        style={{ color: 'var(--foreground)' }}
                      >
                        {title}
                      </h3>
                      
                      {/* Description */}
                      <p 
                        className="text-xs leading-relaxed"
                        style={{ color: 'var(--muted-foreground)' }}
                      >
                        {description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Desktop: CardSwap */}
            <div className="hidden lg:block">
              <div 
                className="relative w-full max-w-md mx-[10vw]"
                style={{ 
                  height: '350px',
                }}
              >
                <CardSwap
                  cardDistance={30}
                  verticalDistance={40}
                  delay={4000}
                  pauseOnHover={true}
                >
                  {features.map(({ icon: Icon, title, description }, index) => (
                    <Card
                      key={index}
                      className="w-full p-6 rounded-2xl shadow-lg border transition-all duration-300 hover:shadow-xl"
                      style={{
                        backgroundColor: 'var(--card)',
                        color: 'var(--card-foreground)',
                        border: '1px solid var(--border)',
                      }}
                    >
                      <motion.div
                        variants={fadeIn('up')}
                        className="flex flex-col items-center text-center"
                      >
                        {/* Icon Container */}
                        <div 
                          className="flex items-center justify-center w-14 h-14 rounded-full mb-4 border-2 transition-all duration-300 hover:scale-110"
                          style={{
                            backgroundColor: 'var(--secondary)',
                            borderColor: 'var(--primary)',
                          }}
                        >
                          <Icon 
                            size={24}
                            style={{ color: 'var(--primary)' }}
                          />
                        </div>
                        
                        {/* Title */}
                        <h3 
                          className="text-lg font-bold mb-3"
                          style={{ color: 'var(--foreground)' }}
                        >
                          {title}
                        </h3>
                        
                        {/* Description */}
                        <p 
                          className="text-sm leading-relaxed"
                          style={{ color: 'var(--muted-foreground)' }}
                        >
                          {description}
                        </p>
                      </motion.div>
                    </Card>
                  ))}
                </CardSwap>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;