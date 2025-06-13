import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import "./App.css"; // Ensure you have this file for global styles
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  return (
    <div className="bg-white overflow-x-hidden">
        <AnimatePresence>
      <motion.div
        key="landing"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Navbar />
        <Hero />
        <Features />
        <Contact />
        <Footer />
      </motion.div>
    </AnimatePresence>
    </div>
  );
}

export default App;
