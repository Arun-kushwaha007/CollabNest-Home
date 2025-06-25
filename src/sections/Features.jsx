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
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
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
     className="relative py-24 px-6 bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-black dark:via-zinc-950 dark:to-[#121212] transition-colors duration-500"
   >
   
      {/* Theme Toggle Button */}
      {/* <button
        onClick={toggleTheme}
        className="absolute top-6 right-6 z-10 p-2 rounded-full bg-[color:var(--card)] text-[color:var(--foreground)] shadow-md border border-[color:var(--border)] hover:scale-105 transition-transform"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button> */}

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="text-left lg:w-1/2">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-[color:var(--foreground)]"
          >
            Built for <span className="text-[color:var(--primary)]">Seamless Teamwork</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-[color:var(--muted-foreground)] max-w-xl"
          >
            Everything your team needs to move faster and smarter — beautifully wrapped in one powerful platform.
          </motion.p>
        </div>

        {/* Right: CardSwap Carousel */}
        <div className="lg:w-1/2 w-full" style={{ height: '500px', position: 'relative' }}>
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
          >
            {features.map(({ icon: Icon, title, description }, index) => (
              <Card
                key={index}
                className="
                  bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100
                  dark:from-zinc-950 dark:via-[#121212] dark:to-zinc-950
                  text-[color:var(--card-foreground)] p-8 rounded-2xl shadow-lg border border-[color:var(--border)] max-w-sm mx-auto
                "
              >
                <motion.div
                  variants={fadeIn('up')}
                  className="flex flex-col items-center"
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-500/10 mb-5">
                    <Icon className="text-[color:var(--primary)]" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-[color:var(--muted-foreground)] leading-relaxed">{description}</p>
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
