import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Threads from '../animations/Threads';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="relative py-24 px-6 sm:px-10 overflow-hidden min-h-screen flex items-center transition-colors duration-500"
      style={{
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
      }}
    >
      {/* Background Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
          <Threads
            amplitude={1}
            distance={0}
            enableMouseInteraction={true}
          />
        </div>
        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6"
            style={{ color: 'var(--foreground)' }}
          >
            Get in{' '}
            <span 
              className="relative inline-block"
              style={{ color: 'var(--primary)' }}
            >
              Touch
              <div 
                className="absolute -bottom-2 left-0 w-full h-1 rounded-full"
                style={{ backgroundColor: 'var(--primary)', opacity: 0.3 }}
              />
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'var(--muted-foreground)' }}
          >
            Have questions, ideas, or partnership proposals? We'd love to hear from you and make something amazing together.
          </motion.p>
        </div>

        {/* Form Container */}
        <div 
          className="backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border"
          style={{ 
            backgroundColor: 'var(--card)',
            borderColor: 'var(--border)',
            boxShadow: 'var(--shadow-2xl)'
          }}
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-12"
            >
              <div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
                style={{ backgroundColor: 'var(--primary)', opacity: 0.1 }}
              >
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                Thank You!
              </h3>
              <p style={{ color: 'var(--muted-foreground)' }}>
                We'll get back to you soon.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              action="https://formspree.io/f/xvgrandy"
              method="POST"
              onSubmit={() => setSubmitted(true)}
              className="space-y-8"
            >
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-6 py-4 rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 border"
                    style={{
                      backgroundColor: 'var(--accent)',
                      color: 'var(--foreground)',
                      border: '1px solid var(--border)',
                      '--tw-ring-color': 'var(--primary)',
                    }}
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-6 py-4 rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 border"
                    style={{
                      backgroundColor: 'var(--accent)',
                      color: 'var(--foreground)',
                      border: '1px solid var(--border)',
                      '--tw-ring-color': 'var(--primary)',
                    }}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Your Message"
                  required
                  className="w-full px-6 py-4 rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 resize-none border"
                  style={{
                    backgroundColor: 'var(--accent)',
                    color: 'var(--foreground)',
                    border: '1px solid var(--border)',
                    '--tw-ring-color': 'var(--primary)',
                  }}
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  style={{
                    backgroundColor: 'var(--primary)',
                    color: 'var(--primary-foreground)',
                    boxShadow: 'var(--shadow-lg)',
                  }}
                >
                  Send Message
                </button>
              </div>
            </motion.form>
          )}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center gap-8 text-sm" style={{ color: 'var(--muted-foreground)' }}>
            <div className="flex items-center gap-2">
              <span style={{ color: 'var(--primary)' }}>✉️</span>
              <span>arunsk1310@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              {/* <span style={{ color: 'var(--primary)' }}>📞</span> */}
              {/* <span>+1 (555) 123-4567</span> */}
            </div>
            <div className="flex items-center gap-2">
              <span style={{ color: 'var(--primary)' }}>📍</span>
              <span>NIT Hamirpur, HP</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;