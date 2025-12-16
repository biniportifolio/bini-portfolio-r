import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownTrayIcon, UpworkIcon } from './icons/IconComponents';

const Hero: React.FC = () => {
  const name = "Binyam G.";

  return (
    <section id="home" className="h-screen flex items-center justify-center text-center bg-black relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        poster="https://drive.google.com/uc?id=1o5z2b-4hJ2V-5F-b_1z0L_hG_f_dC-bA"
      >
        <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Staggered Letter Animation for Name */}
        <motion.div 
            className="flex justify-center flex-wrap overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: { 
                    opacity: 1, 
                    transition: { staggerChildren: 0.08, delayChildren: 0.2 } 
                }
            }}
        >
            {name.split("").map((char, index) => (
                <motion.span 
                    key={index} 
                    className="text-5xl md:text-8xl font-extrabold text-white tracking-tight inline-block"
                    variants={{
                        hidden: { y: 100, opacity: 0 },
                        visible: { 
                            y: 0, 
                            opacity: 1, 
                            transition: { type: "spring", damping: 12, stiffness: 100 } 
                        }
                    }}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.div>

        {/* Masked Slide Up for Title */}
        <div className="overflow-hidden mt-4 pb-2">
             <motion.h2 
                className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-accent-start to-accent-end bg-clip-text text-transparent inline-block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Animator & Video Editor
            </motion.h2>
        </div>

        <motion.p 
          className="mt-6 max-w-2xl mx-auto text-lg text-slate-300 dark:text-[#94A3B8]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Bringing your vision to life with captivating motion graphics, VFX, and cinematic editing.
        </motion.p>
        
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.5 }}
            className="mt-4 flex items-center justify-center gap-2 text-[#14a800] font-semibold text-sm bg-black/40 backdrop-blur-sm py-1 px-3 rounded-full border border-[#14a800]/30 inline-flex mx-auto"
        >
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#14a800] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#14a800]"></span>
            </span>
            Available for new projects this week
        </motion.div>

        <motion.div 
          className="mt-8 flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <a 
            href="https://www.upwork.com/freelancers/binyamgobezie" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center bg-[#14a800] hover:bg-[#14a800]/90 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg group gap-2" 
            data-cursor-variant="link"
          >
             <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                <UpworkIcon className="w-3.5 h-3.5" />
             </div>
             Hire Me on Upwork
          </a>
          
          <a href="#portfolio" className="bg-transparent text-white font-bold py-3 px-8 rounded-full border-2 border-white/50 hover:border-white transition-all duration-300 transform hover:scale-105" data-cursor-variant="link">
            View My Work
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;