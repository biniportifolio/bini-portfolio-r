import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { UpworkIcon } from './icons/IconComponents';

const Hero: React.FC = () => {
  const name = "Binyam G.";
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Handle mouse move for spotlight effect
  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section 
      id="home" 
      className="h-screen flex items-center justify-center text-center bg-black relative overflow-hidden group"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Spotlight Effect on background */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.07),
              transparent 80%
            )
          `,
        }}
      />

      {/* Background Video */}
      <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
            poster="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44c?q=80&w=2070&auto=format&fit=crop"
          >
             {/* Using a high-quality abstract motion background that fits the portfolio theme */}
             <source src="https://assets.mixkit.co/videos/preview/mixkit-purple-and-blue-abstract-liquid-1184-large.mp4" type="video/mp4" />
          </video>
          {/* Grain/Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col items-center">
        
        {/* Staggered Letter Animation for Name */}
        <motion.div 
            className="flex justify-center flex-wrap overflow-hidden mb-2 mt-24"
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
                    className="text-5xl md:text-8xl lg:text-9xl font-extrabold text-white tracking-tighter inline-block drop-shadow-2xl"
                    variants={{
                        hidden: { y: 100, opacity: 0, rotateX: -90 },
                        visible: { 
                            y: 0, 
                            opacity: 1,
                            rotateX: 0,
                            transition: { type: "spring", damping: 12, stiffness: 100 } 
                        }
                    }}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.div>

        {/* Subtitle */}
        <div className="overflow-hidden mb-6">
             <motion.h2 
                className="text-xl md:text-3xl font-bold bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent inline-block tracking-wide"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Animator & Video Editor
            </motion.h2>
        </div>

        {/* Availability Badge */}
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="flex items-center gap-2 mb-8 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(20,168,0,0.2)] hover:bg-white/10 transition-colors cursor-default"
        >
            <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#14a800] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#14a800]"></span>
            </span>
            <span className="text-sm font-semibold text-slate-200 tracking-wide">
                Available for new projects this week
            </span>
        </motion.div>

        {/* Trust Row */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm md:text-base text-slate-400 font-medium mb-10"
        >
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent-start"></span> Fast Turnaround</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent-end"></span> Clear Communication</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#14a800]"></span> Milestone-based</span>
        </motion.div>
        
        {/* Buttons */}
        <motion.div 
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <a 
            href="https://www.upwork.com/freelancers/binyamgobezie" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center bg-[#14a800] hover:bg-[#14a800]/90 text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-upwork-glow hover:shadow-[0_0_30px_rgba(20,168,0,0.6)] group gap-3 text-base md:text-lg" 
            data-cursor-variant="link"
          >
             <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-[#14a800]">
                <UpworkIcon className="w-4 h-4" />
             </div>
             Hire Me on Upwork
          </a>
          
          <a href="#portfolio" className="relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden font-bold text-white transition-all duration-300 rounded-full group hover:bg-white/10 ring-1 ring-white/30 hover:ring-white/80" data-cursor-variant="link">
            <span className="relative flex items-center gap-2">
                View Portfolio
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;