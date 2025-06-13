import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6 text-gray-900 dark:text-white"
        >
          Get in Touch
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10">
          Have questions, feedback, or want to collaborate? Drop us a message!
        </p>

        {submitted ? (
          <div className="text-green-600 dark:text-green-400 text-lg font-semibold">Thank you! We'll get back to you soon.</div>
        ) : (
          <form
            action="https://formspree.io/f/xvgrandy"  
            method="POST"
            onSubmit={() => setSubmitted(true)}
            className="grid gap-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 border dark:border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-accent bg-white dark:bg-gray-800 text-gray-900 dark:text-white dark:placeholder-gray-400 transition-colors duration-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 border dark:border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-accent bg-white dark:bg-gray-800 text-gray-900 dark:text-white dark:placeholder-gray-400 transition-colors duration-300"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 border dark:border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-accent resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white dark:placeholder-gray-400 transition-colors duration-300"
            />
            <button
              type="submit"
              className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
