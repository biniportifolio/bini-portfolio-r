import React, { useState } from 'react';
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
  const [isAvailable, setIsAvailable] = useState(true);

  return (
    <motion.section 
      id="contact" 
      className="py-20 bg-primary dark:bg-[#0A0A14] relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
            
            {/* Info & CTA */}
            <motion.div variants={itemVariants} className="mb-8 flex flex-col items-center">
                <h2 className="text-4xl md:text-5xl font-bold text-text-primary dark:text-white mb-6">
                    Let's Create Something Amazing
                </h2>
                <p className="text-lg text-text-secondary dark:text-[#94A3B8] leading-relaxed mb-8 max-w-2xl">
                    Whether you need a full video production, a quick edit, or a complex 3D animation, I'm ready to bring your vision to life.
                </p>
                
                {/* Availability Toggle (Visual) */}
                <div className="flex items-center gap-3 mb-8 bg-secondary dark:bg-white/5 p-3 rounded-lg w-fit">
                    <span className="relative flex h-3 w-3">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isAvailable ? 'bg-[#14a800]' : 'bg-red-500'}`}></span>
                        <span className={`relative inline-flex rounded-full h-3 w-3 ${isAvailable ? 'bg-[#14a800]' : 'bg-red-500'}`}></span>
                    </span>
                    <span className="text-sm font-semibold text-text-primary dark:text-white">
                        {isAvailable ? 'Available for new projects this week' : 'Currently Booked'}
                    </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                        href="https://www.upwork.com/freelancers/binyamgobezie" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-[#14a800] hover:bg-[#14a800]/90 text-white font-bold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-[#14a800]/30 text-lg"
                    >
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-[#14a800]">
                            <UpworkIcon className="w-4 h-4" />
                        </div>
                        Hire Me on Upwork
                    </a>
                </div>
            </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default Contact;