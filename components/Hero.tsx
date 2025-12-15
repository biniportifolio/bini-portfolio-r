import React from 'react';
import { ArrowDownTrayIcon } from './icons/IconComponents';

const Hero: React.FC = () => {
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
        {/* Using a placeholder video - replace with your showreel */}
        <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <h1 
          className="text-4xl md:text-7xl font-extrabold text-white tracking-tight animate-fade-in-up"
        >
          Binyam G.
        </h1>
        <h2 
          className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-accent-start to-accent-end bg-clip-text text-transparent mt-4 animate-fade-in-up"
          style={{ animationDelay: '200ms' }}
        >
          Animator & Video Editor
        </h2>
        <p 
          className="mt-6 max-w-2xl mx-auto text-lg text-slate-300 dark:text-[#94A3B8] animate-fade-in-up"
          style={{ animationDelay: '400ms' }}
        >
          Bringing your vision to life with captivating motion graphics, VFX, and cinematic editing.
        </p>
        <div 
          className="mt-8 flex flex-wrap gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: '600ms' }}
        >
          <a href="#portfolio" className="relative inline-flex items-center justify-center p-0.5 rounded-full font-bold text-white group" data-cursor-variant="link">
             <span className="absolute inset-0 bg-gradient-to-r from-accent-start to-accent-end rounded-full"></span>
             <span className="relative px-8 py-3 bg-black/50 backdrop-blur-sm rounded-full transition-all ease-in duration-200 group-hover:bg-opacity-0">
                View My Work
             </span>
          </a>
          <a href="#contact" className="bg-transparent text-white font-bold py-3 px-8 rounded-full border-2 border-white/50 hover:border-white transition-all duration-300 transform hover:scale-105" data-cursor-variant="link">
            Get in Touch
          </a>
          <a 
            href="/Binyam_G_Resume.pdf" 
            download 
            className="bg-transparent text-white font-bold py-3 px-8 rounded-full border-2 border-white/50 hover:border-white transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2" 
            data-cursor-variant="link"
          >
            <ArrowDownTrayIcon className="w-5 h-5" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;