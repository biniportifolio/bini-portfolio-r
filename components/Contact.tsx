import React from 'react';
import { motion, Variants } from 'framer-motion';
import { UpworkIcon } from './icons/IconComponents';

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const Contact: React.FC = () => {
  return (
    <motion.section 
      id="contact" 
      className="py-20 bg-primary dark:bg-[#0A0A14]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div variants={itemVariants} className="bg-secondary dark:bg-[#11111F] rounded-2xl p-8 md:p-12 shadow-2xl border border-border-default dark:border-[#11111F]">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary dark:text-white mb-6">
                Need a reliable editor & animator?
            </h2>
            <p className="text-lg md:text-xl text-text-secondary dark:text-[#94A3B8] leading-relaxed mb-8 max-w-2xl mx-auto">
                I create scroll-stopping motion graphics, 2D/3D animation, and clean edits with fast turnaround and clear communication.
            </p>
            
            <motion.div 
                variants={itemVariants} 
                className="flex flex-col items-center gap-6"
            >
                <a 
                    href="https://www.upwork.com/freelancers/binyamgobezie" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center p-0.5 rounded-full font-bold text-white transition-transform duration-300 hover:scale-105" 
                    data-cursor-variant="link"
                >
                    <span className="absolute inset-0 bg-[#14a800] rounded-full blur-[2px] opacity-70 group-hover:opacity-100 transition-opacity"></span>
                    <span className="relative flex items-center gap-3 px-8 py-4 bg-[#14a800] rounded-full text-lg shadow-lg">
                         <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                            <UpworkIcon className="w-4 h-4" />
                         </div>
                        Hire Me on Upwork
                    </span>
                </a>
                
                <p className="text-sm font-medium text-text-secondary dark:text-[#64748B] bg-primary/50 dark:bg-black/20 px-4 py-2 rounded-full border border-border-default dark:border-[#334155]/50">
                    Hire me securely through Upwork — quick start, milestone-based, and professional delivery.
                </p>
                
                <div className="mt-4 flex items-center gap-2 text-[#14a800] font-semibold text-sm">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#14a800] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#14a800]"></span>
                    </span>
                    Available for new projects this week
                </div>
            </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;