import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import CustomCursor from './components/CustomCursor';
import SplashScreen from './components/SplashScreen';
import BehindTheScenes from './components/BehindTheScenes';
import GearAndSetup from './components/GearAndSetup';
import ReferralBanner from './components/ReferralBanner';
import UpworkProfile from './components/UpworkProfile';
import StickyUpworkCTA from './components/StickyUpworkCTA';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'auto';
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Add smooth scroll for all anchor links
  useEffect(() => {
    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      
      const targetElement = document.querySelector(href);
      if (targetElement) {
        event.preventDefault();
        
        const header = document.querySelector('header');
        // Add 1rem (16px) of padding to the header's height for a nice visual offset
        const headerOffset = header ? header.offsetHeight + 16 : 80; 
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);


  return (
    <div className="bg-primary dark:bg-[#0A0A14] min-h-screen relative isolate pb-24 md:pb-0 font-sans selection:bg-accent-start/30 selection:text-white">
      {/* Film Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay">
        <div className="absolute inset-0 bg-noise animate-noise"></div>
      </div>

      <AnimatePresence>
        {isLoading && <SplashScreen />}
      </AnimatePresence>
      <CustomCursor />
      <StickyUpworkCTA />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <BehindTheScenes />
        <GearAndSetup />
        <ReferralBanner />
        <Testimonials />
        <UpworkProfile />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;