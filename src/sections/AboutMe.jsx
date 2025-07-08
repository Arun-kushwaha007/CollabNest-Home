import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Cloud, 
  Zap, 
  Award, 
  ExternalLink, 
  Mail, 
  Linkedin, 
  Twitter, 
  Instagram,
  Github,
  GraduationCap,
  MapPin,
  Calendar,
  Target
} from 'lucide-react';
import avatarImage from '../assets/avatar.png'
import Arun from '../assets/arun1.png'; 

const AboutMe = () => {
  const stats = [
    { label: 'Years Experience', value: '3+', icon: Calendar },
    { label: 'Projects Completed', value: '15+', icon: Code },
    { label: 'Technologies', value: '20+', icon: Zap },
    { label: 'Hackathons', value: '5+', icon: Award },
  ];

  const highlights = [
    {
      title: 'AI-based FIR Analyzer',
      description: 'Hackathon Finalist - NLP-powered legal document analysis system',
      tech: ['React', 'Node.js', 'Python', 'Docker', 'AWS'],
      status: 'Production',
      link: 'https://github.com/Arun-kushwaha007/RJPOLICE_HACK_991_The-Crusade_4'
    },
    {
      title: 'CollabNest',
      description: 'Modern team collaboration platform with real-time features',
      tech: ['MERN', 'Socket.io', 'Redis', 'AI'],
      status: 'Beta',
      link: 'https://collab-nest-home.vercel.app/'
    },
    {
      title: 'TerraSearch',
      description: 'Advanced drone-based rescue system with sensor integration',
      tech: ['Embedded C', 'Lidar', 'GPR', 'Hardware'],
      status: 'Development',
      link: 'https://github.com/Arun-kushwaha007/TerraSearch'
    }
  ];

  const socialLinks = [
    { 
      icon: ExternalLink, 
      label: 'Portfolio', 
      href: 'https://portfolio-arun-qdkm.vercel.app/',
      color: 'var(--primary)'
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/arun-kushwaha-394b5a340/',
      color: '#0A66C2'
    },
    { 
      icon: Mail, 
      label: 'Email', 
      href: 'mailto:arunsk1310@gmail.com',
      color: '#D14836'
    },
    { 
      icon: Github, 
      label: 'GitHub', 
      href: 'https://github.com/Arun-kushwaha007',
      color: '#333'
    },
    { 
      icon: Twitter, 
      label: 'Twitter', 
      href: 'https://x.com/Arunkush00?s=08',
      color: '#1DA1F2'
    },
    { 
      icon: Instagram, 
      label: 'Instagram', 
      href: 'https://www.instagram.com/_arun_kush.007/',
      color: '#E4405F'
    }
  ];

  const techStack = [
    'JavaScript', 'TypeScript', 'Python', 'React', 'Node.js', 
    'Docker', 'Kubernetes', 'AWS', 'MongoDB', 'PostgreSQL'
  ];

  return (
    <section
      id="about"
      className="relative py-24 px-6 sm:px-10 overflow-hidden min-h-screen transition-colors duration-500"
      style={{
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <div 
              className="w-32 h-32 mx-auto rounded-full border-4 overflow-hidden"
              style={{ borderColor: 'var(--primary)' }}
            >
              <img 
                src={Arun}
                alt="Arun Kushwaha"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            Hello, I'm{' '}
            <span 
              className="relative inline-block"
              style={{ color: 'var(--primary)' }}
            >
              Arun Kushwaha
              <div 
                className="absolute -bottom-2 left-0 w-full h-1 rounded-full"
                style={{ backgroundColor: 'var(--primary)', opacity: 0.3 }}
              />
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl sm:text-2xl mb-6 font-medium"
            style={{ color: 'var(--muted-foreground)' }}
          >
            Full-Stack Developer | DevOps Engineer | Drone Tech Innovator
          </motion.p>

          {/* Education & Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <div 
              className="flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ backgroundColor: 'var(--accent)', color: 'var(--primary)' }}
            >
              <GraduationCap size={16} />
              <span className="text-sm font-medium">ECE, NIT Hamirpur</span>
            </div>
            <div 
              className="flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ backgroundColor: 'var(--accent)', color: 'var(--primary)' }}
            >
              <MapPin size={16} />
              <span className="text-sm font-medium">NIT Hamirpur, HP</span>
            </div>
            <div 
              className="flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}
            >
              <Target size={16} />
              <span className="text-sm font-medium">Available for Opportunities</span>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {socialLinks.map(({ icon: Icon, label, href, color }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full transition-all duration-300 hover:scale-110"
                style={{ 
                  backgroundColor: 'var(--accent)',
                  color: 'var(--muted-foreground)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = color;
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'var(--accent)';
                  e.target.style.color = 'var(--muted-foreground)';
                }}
                title={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
      >
        {stats.map(({ label, value, icon: Icon }, index) => (
          <div
            key={index}
            className="text-center p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: 'var(--card)',
              borderColor: 'var(--border)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <div 
              className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center"
              style={{ 
                backgroundColor: 'var(--accent)',  // Changed to accent color
                border: '2px solid var(--primary)'  // Added border for better visibility
              }}
            >
              <Icon 
                size={24} 
                style={{ color: 'var(--primary)' }} 
              />
            </div>
            <div className="text-2xl font-bold mb-2" style={{ color: 'var(--primary)' }}>
              {value}
            </div>
            <div className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
              {label}
            </div>
          </div>
        ))}
      </motion.div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
              🎯 About Me
            </h3>
            <div className="space-y-4 text-lg leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              <p>
                As a <strong style={{ color: 'var(--primary)' }}>final year B.Tech student</strong> at NIT Hamirpur, 
                I specialize in Electronics and Communication Engineering with deep expertise in 
                <strong style={{ color: 'var(--primary)' }}> full-stack development</strong> and 
                <strong style={{ color: 'var(--primary)' }}> emerging technologies</strong>.
              </p>
              <p>
                I'm <strong style={{ color: 'var(--primary)' }}>exploring 2025 new grad opportunities</strong> in 
                Full-Stack Development, DevOps, and Emerging Tech. My technical expertise encompasses 
                <strong style={{ color: 'var(--primary)' }}> MERN stack</strong>, 
                <strong style={{ color: 'var(--primary)' }}> cloud technologies</strong>, and 
                <strong style={{ color: 'var(--primary)' }}> drone technology</strong>.
              </p>
              <p>
                I excel at building <strong style={{ color: 'var(--primary)' }}>innovative solutions</strong> that 
                create meaningful impact, from AI-powered applications to advanced drone-based rescue systems.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--foreground)' }}>
                💻 Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor: 'var(--secondary)',
                      color: 'var(--primary)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Featured Projects */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
              🚀 Featured Projects
            </h3>
            <div className="space-y-4">
              {highlights.map((project, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: 'var(--card)',
                    borderColor: 'var(--border)',
                    boxShadow: 'var(--shadow-md)',
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold" style={{ color: 'var(--foreground)' }}>
                      {project.title}
                    </h4>
                    <span
                      className="px-2 py-1 rounded text-xs font-medium"
                      style={{
                        backgroundColor: project.status === 'Production' ? 'var(--primary)' : 
                                       project.status === 'Beta' ? '#FFA500' : '#9CA3AF',
                        color: 'white',
                      }}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm mb-3" style={{ color: 'var(--muted-foreground)' }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 rounded text-xs"
                        style={{
                          backgroundColor: 'var(--secondary)',
                          color: 'var(--primary)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                    style={{ color: 'var(--primary)' }}
                  >
                    View Project <ExternalLink size={14} />
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            🎉 Ready to Build Something Amazing Together?
          </h3>
          <p className="text-lg mb-8" style={{ color: 'var(--muted-foreground)' }}>
            Excited to collaborate on innovative projects and create meaningful solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:arunsk1310@gmail.com"
              className="px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: 'var(--primary)',
                color: 'var(--primary-foreground)',
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              Connect With Me
            </a>
            <a
              href="https://portfolio-arun-qdkm.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
              style={{
                borderColor: 'var(--border)',
                color: 'var(--foreground)',
                backgroundColor: 'transparent',
              }}
            >
              View Portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;