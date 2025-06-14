import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HeroCanvas from '../canvas/HeroCanvas';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="relative py-24 px-6 sm:px-10 bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-black dark:via-gray-900 dark:to-gray-950 overflow-hidden transition-colors duration-500"
    >
      {/* Background Canvas */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <HeroCanvas />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
        >
          Get in Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-600 dark:text-gray-300 mb-12"
        >
          Have questions, ideas, or partnership proposals? We’d love to hear from you.
        </motion.p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-orange-500 text-lg font-semibold"
          >
            Thank you! We'll get back to you soon.
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
                className="flex-1 px-5 py-3 rounded-xl border dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-orange-400 transition duration-300"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="flex-1 px-5 py-3 rounded-xl border dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-orange-400 transition duration-300"
              />
            </div>
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full px-5 py-3 rounded-xl border dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-orange-400 resize-none transition duration-300"
            />
            <button
              type="submit"
              className="mt-2 w-full sm:w-auto px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
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
