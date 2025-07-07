import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import FeatureGrid from "./components/FeatureGrid";
import Workflow from "./components/Workflow";
import AboutMe from "./sections/AboutMe";
import "./App.css";
import { AnimatePresence, motion } from 'framer-motion';

// Home Page Component
const HomePage = () => {
  return (
    <motion.div
      key="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Hero />
      <Features />
      <FeatureGrid />
      <Workflow />
      <Contact />
    </motion.div>
  );
};

// About Page Component
const AboutPage = () => {
  return (
    <motion.div
      key="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <AboutMe />
    </motion.div>
  );
};

function App() {
  return (
    <div className="bg-white overflow-x-hidden">
      <Router>
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </Router>
    </div>
  );
}

export default App;