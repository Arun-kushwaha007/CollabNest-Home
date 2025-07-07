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
      className="relative py-24 px-6 min-h-screen flex items-center transition-colors duration-500"
      style={{
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Optional Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="absolute top-6 right-6 z-10 p-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
        style={{
          backgroundColor: 'var(--card)',
          color: 'var(--foreground)',
          border: '1px solid var(--border)',
        }}
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
        {/* Left Content */}
        <div className="text-left lg:w-1/2">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight"
            style={{ color: 'var(--foreground)' }}
          >
            Built for{' '}
            <span 
              className="relative inline-block"
              style={{ color: 'var(--primary)' }}
            >
              Seamless Teamwork
              <div 
                className="absolute -bottom-2 left-0 w-full h-1 rounded-full"
                style={{ backgroundColor: 'var(--primary)', opacity: 0.3 }}
              />
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl max-w-xl leading-relaxed mb-8"
            style={{ color: 'var(--muted-foreground)' }}
          >
            Everything your team needs to move faster and smarter — beautifully wrapped in one powerful platform designed for modern workflows.
          </motion.p>
          
          {/* CTA Button */}
          <motion.a
            href="https://collabnest-dashboard.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: 'var(--primary)',
              color: 'var(--primary-foreground)',
            }}
          >
            Try CollabNest →
          </motion.a>
        </div>

        {/* Right: CardSwap Carousel */}
        <div className="lg:w-1/2 w-full" style={{ height: '500px', position: 'relative' }}>
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={true}
          >
            {features.map(({ icon: Icon, title, description }, index) => (
              <Card
                key={index}
                className="max-w-sm mx-auto p-8 rounded-2xl shadow-lg border transition-all duration-300 hover:shadow-xl"
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
                    className="flex items-center justify-center w-16 h-16 rounded-full mb-6 border-2 transition-all duration-300 hover:scale-110"
                    style={{
                      backgroundColor: 'var(--secondary)',
                      borderColor: 'var(--primary)',
                    }}
                  >
                    <Icon 
                      size={32} 
                      style={{ color: 'var(--primary)' }}
                    />
                  </div>
                  
                  {/* Title */}
                  <h3 
                    className="text-xl font-bold mb-3"
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
    </section>
  );
};

export default Features;