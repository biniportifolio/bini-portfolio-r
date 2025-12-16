import React from 'react';
import { motion } from 'framer-motion';
import { UpworkIcon } from './icons/IconComponents';

const StickyUpworkCTA: React.FC = () => {
  return (
    <>
      {/* Desktop Top Bar (Sticky below header) */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="hidden md:flex fixed top-16 left-0 right-0 z-40 bg-secondary/95 dark:bg-[#11111F]/95 backdrop-blur-md border-b border-border-default dark:border-[#11111F] shadow-sm py-3 justify-center items-center gap-6 px-6"
      >
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
            <span className="font-bold text-text-primary dark:text-white text-sm md:text-base">Need a reliable editor & animator?</span>
            <span className="hidden lg:inline text-sm text-text-secondary dark:text-[#94A3B8]">|</span>
            <span className="text-xs md:text-sm text-text-secondary dark:text-[#94A3B8]">Fast turnaround • Clear communication • Milestone-based</span>
        </div>
        <a 
          href="https://www.upwork.com/freelancers/binyamgobezie" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#14a800] hover:bg-[#14a800]/90 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg text-sm"
        >
          <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
             <UpworkIcon className="w-3.5 h-3.5" />
          </div>
          Hire Me on Upwork
        </a>
      </motion.div>

      {/* Mobile Bottom Bar */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-[100] bg-secondary dark:bg-[#11111F] border-t border-border-default dark:border-[#11111F] shadow-[0_-4px_10px_rgba(0,0,0,0.15)] p-4 pb-8"
      >
        <div className="flex flex-col gap-3">
             <p className="text-center text-sm font-semibold text-text-primary dark:text-white">Need a reliable editor & animator?</p>
             <a 
              href="https://www.upwork.com/freelancers/binyamgobezie" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-[#14a800] hover:bg-[#14a800]/90 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
            >
              <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                <UpworkIcon className="w-3.5 h-3.5" />
              </div>
              Hire Me on Upwork
            </a>
        </div>
      </motion.div>
    </>
  );
};

export default StickyUpworkCTA;