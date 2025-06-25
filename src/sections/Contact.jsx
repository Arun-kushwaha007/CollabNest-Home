import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import Cubes from '../animations/Cubes';

import Threads from '../animations/Threads'; // Adjust the path if needed
const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="relative py-24 px-6 sm:px-10 overflow-hidden transition-colors duration-500"
      style={{
        background: 'linear-gradient(to bottom right, var(--background), var(--card))',
        color: 'var(--foreground)',
      }}
    >
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        {/* DotGrid Background */}
        <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
          
           <Threads
    amplitude={1}
    distance={0}
    enableMouseInteraction={true}
  />
        </div>

        {/* Cubes Overlay */}
        {/* <Cubes
          gridSize={8}
          maxAngle={60}
          radius={4}
          borderStyle="2px dashed var(--foreground)"
          faceColor="var(--card)"
          rippleColor="var(--primary)"
          rippleSpeed={1.5}
          autoAnimate={true}
          rippleOnClick={true}
        /> */}
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
          style={{ color: 'var(--foreground)' }}
        >
          Get in Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg mb-12"
          style={{ color: 'var(--muted-foreground)' }}
        >
          Have questions, ideas, or partnership proposals? We’d love to hear from you.
        </motion.p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-lg font-semibold px-6 py-4 rounded-xl shadow-md inline-block"
            style={{
              backgroundColor: 'var(--card)',
              color: 'var(--primary)',
            }}
          >
            ✅ Thank you! We’ll get back to you soon.
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            action="https://formspree.io/f/xvgrandy"
            method="POST"
            onSubmit={() => setSubmitted(true)}
            className="grid gap-6 text-left"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="flex-1 px-5 py-3 rounded-xl shadow-sm transition duration-300 focus:outline-none focus:ring-2"
                style={{
                  backgroundColor: 'var(--card)',
                  color: 'var(--foreground)',
                  border: '1px solid var(--border)',
                  '--tw-ring-color': 'var(--primary)',
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="flex-1 px-5 py-3 rounded-xl shadow-sm transition duration-300 focus:outline-none focus:ring-2"
                style={{
                  backgroundColor: 'var(--card)',
                  color: 'var(--foreground)',
                  border: '1px solid var(--border)',
                  '--tw-ring-color': 'var(--primary)',
                }}
              />
            </div>

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full px-5 py-3 rounded-xl shadow-sm resize-none transition duration-300 focus:outline-none focus:ring-2"
              style={{
                backgroundColor: 'var(--card)',
                color: 'var(--foreground)',
                border: '1px solid var(--border)',
                '--tw-ring-color': 'var(--primary)',
              }}
            />

            <button
              type="submit"
              className="mt-2 w-full sm:w-auto px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
              style={{
                backgroundColor: 'var(--primary)',
                color: 'var(--primary-foreground)',
              }}
            >
              Send Message
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default Contact;
