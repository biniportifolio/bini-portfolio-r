import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Types & Data ---

interface VideoCategory {
  id: string;
  title: string;
  description: string;
  videos: string[]; // YouTube Video IDs
  thumbnailUrl: string; // Used for the category card background
}

const CATEGORIES: VideoCategory[] = [
  {
    id: 'animation',
    title: '2D & 3D Animation',
    description: 'Original 2D and 3D animated pieces',
    thumbnailUrl: 'https://img.youtube.com/vi/v0nIWyyJ474/maxresdefault.jpg',
    videos: [
      'v0nIWyyJ474',
      'uzOJmte3o4A',
      'Pc2_CKS80Ys',
      '_-n0LBXa3Mg',
      '6_VRlYoMOiU',
      'fiugVDA6fMk'
    ]
  },
  {
    id: 'motion-graphics',
    title: 'Motion Graphics',
    description: 'Animated graphics, kinetic text, and VFX',
    thumbnailUrl: 'https://img.youtube.com/vi/5N-YLMOKeS0/maxresdefault.jpg',
    videos: [
      '5N-YLMOKeS0',
      'RYfA-iLcRpY',
      't6cAV1_ipF8'
    ]
  },
  {
    id: 'faceless',
    title: 'YouTube Faceless',
    description: 'Projects for faceless YouTube channels',
    thumbnailUrl: 'https://img.youtube.com/vi/qeMPYrA2YN4/maxresdefault.jpg',
    videos: [
      '_-n0LBXa3Mg',
      'qeMPYrA2YN4'
    ]
  },
  {
    id: 'reels',
    title: 'Short Reels',
    description: 'Short-format content tailored for social media',
    thumbnailUrl: 'https://img.youtube.com/vi/sfkuOJa5bqY/maxresdefault.jpg',
    videos: [
      'sfkuOJa5bqY'
    ]
  }
];

// --- Components ---

const BackArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

const VideoSlide: React.FC<{ 
  videoId: string; 
  index: number; 
  total: number; 
  categoryTitle: string; 
}> = ({ videoId, index, total, categoryTitle }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const iframe = iframeRef.current;
          if (!iframe) return;

          if (entry.isIntersecting) {
            // Play video
            iframe.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
          } else {
            // Pause video
            iframe.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
          }
        });
      },
      { threshold: 0.7 } // Trigger when 70% visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-screen snap-start relative flex items-center justify-center bg-black overflow-hidden shrink-0"
    >
      <iframe
        ref={iframeRef}
        className="w-full h-full pointer-events-none md:pointer-events-auto"
        src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=0&mute=1&controls=1&rel=0&modestbranding=1&loop=1&playlist=${videoId}`}
        title={`Video ${index + 1}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ pointerEvents: 'all' }} // Ensure controls work if user wants to unmute
      ></iframe>
      
      {/* Overlay Info */}
      <div className="absolute bottom-8 left-0 right-0 p-6 pointer-events-none bg-gradient-to-t from-black/80 to-transparent">
        <div className="max-w-7xl mx-auto">
           <span className="inline-block px-3 py-1 mb-2 text-xs font-bold uppercase tracking-wider text-white bg-accent-start rounded-full">
              {categoryTitle}
           </span>
           <p className="text-white/80 text-sm font-medium">
             Video {index + 1} of {total}
           </p>
        </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<VideoCategory | null>(null);

  // Lock body scroll when viewer is open
  useEffect(() => {
    if (activeCategory) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [activeCategory]);

  const handleCategoryClick = (category: VideoCategory) => {
    setActiveCategory(category);
  };

  const closeViewer = () => {
    setActiveCategory(null);
  };

  return (
    <section id="portfolio" className="relative min-h-screen bg-primary dark:bg-[#0A0A14] py-20">
      
      {/* --- Home View: Category Grid --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-text-primary dark:text-white mb-4">Selected Works</h2>
          <p className="text-text-secondary dark:text-[#94A3B8] max-w-2xl mx-auto">
            Explore my portfolio by category. Click a section below to enter the viewing experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {CATEGORIES.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => handleCategoryClick(category)}
              className="group relative aspect-video md:aspect-[16/9] lg:aspect-[2/1] overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              data-cursor-variant="project"
            >
              {/* Background Image */}
              <img 
                src={category.thumbnailUrl} 
                alt={category.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="text-3xl font-bold text-white mb-2 transform group-hover:scale-105 transition-transform duration-300">
                  {category.title}
                </h3>
                <p className="text-white/80 text-sm max-w-sm opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                  {category.description}
                </p>
                
                <div className="mt-6 px-6 py-2 border border-white/30 rounded-full text-white text-sm font-semibold backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-all duration-300">
                  View {category.videos.length} Videos
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- Detail View: Full Screen Video Feed --- */}
      <AnimatePresence>
        {activeCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-black flex flex-col"
          >
            {/* Header / Back Button */}
            <div className="absolute top-0 left-0 w-full z-10 p-4 md:p-6 bg-gradient-to-b from-black/90 to-transparent flex items-center justify-between pointer-events-none">
                <button 
                  onClick={closeViewer}
                  className="pointer-events-auto flex items-center gap-2 text-white hover:text-accent-start transition-colors px-4 py-2 rounded-full bg-black/20 backdrop-blur-md border border-white/10 hover:border-accent-start/50 group"
                  data-cursor-variant="link"
                >
                  <div className="group-hover:-translate-x-1 transition-transform duration-300">
                    <BackArrowIcon />
                  </div>
                  <span className="font-semibold tracking-wide">Back to Categories</span>
                </button>
            </div>

            {/* Vertical Scroll Feed */}
            <div className="flex-1 w-full h-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">
              {activeCategory.videos.map((videoId, index) => (
                <VideoSlide 
                  key={`${activeCategory.id}-${videoId}`}
                  videoId={videoId}
                  index={index}
                  total={activeCategory.videos.length}
                  categoryTitle={activeCategory.title}
                />
              ))}
            </div>

            {/* Scroll Indicator (if more than 1 video) */}
            {activeCategory.videos.length > 1 && (
                <div className="absolute bottom-6 right-6 z-10 hidden md:flex flex-col gap-2">
                     <div className="w-1 h-12 rounded-full bg-white/20 overflow-hidden relative">
                         <motion.div 
                            className="absolute top-0 left-0 w-full bg-accent-start rounded-full"
                            animate={{ height: ['0%', '100%', '0%'], top: ['0%', '0%', '100%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                         />
                     </div>
                </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </section>
  );
};

export default Portfolio;