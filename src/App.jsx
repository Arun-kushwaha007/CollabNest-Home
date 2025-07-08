import React, { useEffect, useLayoutEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

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

// Main App content separated for ScrollSmoother re-initialization
const AppContent = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Only apply ScrollSmoother to the home page
    if (location.pathname === "/") {
      const smoother = ScrollSmoother.create({
        smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
        effects: true, // looks for data-speed and data-lag attributes on elements
        smoothTouch: 0.1, // much shorter smoothing time on touch devices
      });
      return () => {
        // Kill the ScrollSmoother instance when the component unmounts or path changes
        if (smoother) {
          smoother.kill();
        }
      };
    } else {
      // Ensure normal scrolling for other pages
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
       if (ScrollSmoother.get()) {
        ScrollSmoother.get().kill();
      }
    }
  }, [location.pathname]); // Re-run effect if path changes

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const location = useLocation(); // We need location here to conditionally apply classes for overflow

  useEffect(() => {
    // Add/remove a class to body/html for global overflow control when ScrollSmoother is active
    if (location.pathname === "/") {
      document.body.classList.add("gsap-scrollsmoother-active");
      document.documentElement.classList.add("gsap-scrollsmoother-active");
    } else {
      document.body.classList.remove("gsap-scrollsmoother-active");
      document.documentElement.classList.remove("gsap-scrollsmoother-active");
       // Ensure overflow is reset for non-smoother pages
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    // Cleanup on component unmount or if App itself unmounts (though unlikely for root App)
    return () => {
      document.body.classList.remove("gsap-scrollsmoother-active");
      document.documentElement.classList.remove("gsap-scrollsmoother-active");
    };
  }, [location.pathname]);

  return (
    // The main div's overflow-x-hidden might be redundant if #smooth-wrapper handles all overflow.
    // It's kept for now as a fallback or if some content is outside the wrapper.
    <div className="bg-white"> {/* Removed overflow-x-hidden here, will be handled by CSS or wrapper */}
      <Navbar /> {/* Navbar is outside smooth-wrapper as per GSAP docs for fixed elements */}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <AppContent />
          <Footer /> {/* Footer can be part of the scrollable content */}
        </div>
      </div>
    </div>
  );
}

// Wrap App with Router to use useLocation hook in App
const RoutedApp = () => (
  <Router>
    <App />
  </Router>
);

export default RoutedApp;