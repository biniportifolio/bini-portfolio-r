import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import type { Project } from '../types';
import BeforeAfterSlider from './BeforeAfterSlider';
import { PuzzlePieceIcon, LightBulbIcon, TrophyIcon, TwitterIcon, FacebookIcon, ShareLinkedInIcon } from './icons/IconComponents';

interface PortfolioModalProps {
  project: Project;
  onClose: () => void;
}

const PreviewContent: React.FC<{ project: Project }> = ({ project }) => {
    // Construct video URL from videoUrl OR videoId
    const videoUrl = project.videoUrl || (project.videoId ? `https://www.youtube.com/embed/${project.videoId}` : '');
    
    const videoUrlWithAutoplay = videoUrl
        ? `${videoUrl}${videoUrl.includes('?') ? '&' : '?'}autoplay=1&rel=0&modestbranding=1`
        : '';
    
    // Social Sharing URLs
    const pageUrl = 'https://binyamg.com'; // Using a canonical URL for sharing
    const shareText = `Check out this project "${project.title}" from Binyam G.'s portfolio!`;
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(shareText)}`;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
    const linkedInUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(pageUrl)}&title=${encodeURIComponent(project.title)}&summary=${encodeURIComponent(project.description)}`;

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="mb-6 bg-primary dark:bg-[#0A0A14] rounded-md">
                {project.type === 'before-after' && project.beforeImageUrl && project.afterImageUrl ? (
                    <BeforeAfterSlider before={project.beforeImageUrl} after={project.afterImageUrl} />
                ) : videoUrl ? (
                <div className="aspect-video">
                    <iframe
                    src={videoUrlWithAutoplay}
                    title={project.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-md"
                    ></iframe>
                </div>
                ) : (
                <img src={project.thumbnailUrl || project.afterImageUrl} alt={project.title} className="w-full h-full object-cover rounded-md" />
                )}
            </div>

            <div>
                <p className="text-lg text-text-secondary dark:text-[#94A3B8] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-3 items-center">
                    <span className="font-semibold text-text-primary dark:text-[#F1F5F9]">Tools Used:</span>
                    {project.tools.map(tool => (
                        <span key={tool} className="bg-primary dark:bg-[#0A0A14] text-text-secondary dark:text-[#94A3B8] font-medium py-1 px-3 rounded-full shadow-sm">{tool}</span>
                    ))}
                </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border-default dark:border-gray-700">
                <h4 className="font-semibold text-text-primary dark:text-[#F1F5F9] mb-3">Share this project</h4>
                <div className="flex items-center gap-4">
                    <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1DA1F2] transition-colors" data-cursor-variant="link" aria-label="Share on Twitter">
                        <TwitterIcon className="w-6 h-6" />
                    </a>
                    <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1877F2] transition-colors" data-cursor-variant="link" aria-label="Share on Facebook">
                        <FacebookIcon className="w-6 h-6" />
                    </a>
                    <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0A66C2] transition-colors" data-cursor-variant="link" aria-label="Share on LinkedIn">
                        <ShareLinkedInIcon className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

const CaseStudyContent: React.FC<{ caseStudy: Project['caseStudy'] }> = ({ caseStudy }) => {
    if (!caseStudy) return null;

    const sectionVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };
    
    const iconVariants: Variants = {
        hidden: { scale: 0.5, opacity: 0, rotate: -30 },
        visible: { scale: 1, opacity: 1, rotate: 0, transition: { duration: 0.4, ease: 'easeOut', delay: 0.2 } },
    };

    return (
        <motion.div 
            className="space-y-8"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
            <motion.div variants={sectionVariants}>
                <h3 className="text-xl font-bold text-text-primary dark:text-white mb-3 flex items-center gap-3">
                    <motion.span variants={iconVariants} className="bg-accent-start/10 p-2 rounded-md text-accent-start inline-block"><PuzzlePieceIcon /></motion.span>
                    The Problem
                </h3>
                <p className="text-text-secondary dark:text-[#94A3B8] leading-relaxed">{caseStudy.problem}</p>
            </motion.div>
            
            <motion.div variants={sectionVariants}>
                <h3 className="text-xl font-bold text-text-primary dark:text-white mb-3 flex items-center gap-3">
                    <motion.span variants={iconVariants} className="bg-accent-start/10 p-2 rounded-md text-accent-start inline-block"><LightBulbIcon /></motion.span>
                    The Solution
                </h3>
                <p className="text-text-secondary dark:text-[#94A3B8] leading-relaxed">{caseStudy.solution}</p>
            </motion.div>

            <motion.div variants={sectionVariants}>
                <h3 className="text-xl font-bold text-text-primary dark:text-white mb-3 flex items-center gap-3">
                    <motion.span variants={iconVariants} className="bg-accent-start/10 p-2 rounded-md text-accent-start inline-block"><TrophyIcon /></motion.span>
                    The Result
                </h3>
                <p className="text-text-secondary dark:text-[#94A3B8] leading-relaxed mb-4">{caseStudy.result}</p>
                {caseStudy.keyMetrics && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                        {caseStudy.keyMetrics.map(metric => (
                            <motion.div 
                                key={metric.label} 
                                className="bg-primary dark:bg-[#0A0A14] p-4 rounded-lg border border-border-default dark:border-gray-700 transition-all duration-300 hover:border-accent-start/50 hover:shadow-lg"
                                whileHover={{ y: -5, scale: 1.03 }}
                            >
                                <p className="text-2xl font-bold bg-gradient-to-r from-accent-start to-accent-end bg-clip-text text-transparent">{metric.value}</p>
                                <p className="text-sm text-text-secondary dark:text-[#94A3B8]">{metric.label}</p>
                            </motion.div>
                        ))}
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
};

const PortfolioModal: React.FC<PortfolioModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'caseStudy'>('preview');
  
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const TabButton: React.FC<{
    label: string;
    isActive: boolean;
    onClick: () => void;
  }> = ({ label, isActive, onClick }) => (
    <button
      onClick={onClick}
      className={`relative px-4 py-2 font-semibold transition-colors duration-300 ${
        isActive ? 'text-accent-start' : 'text-text-secondary dark:text-gray-400 hover:text-text-primary dark:hover:text-white'
      }`}
    >
      {label}
      {isActive && <motion.div layoutId="active-tab-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-start rounded-t-full" />}
    </button>
  );

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-title"
    >
      <div 
        className="bg-secondary dark:bg-[#11111F] rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between p-4 border-b border-border-default dark:border-gray-700 flex-shrink-0">
          <h2 id="project-title" className="text-2xl font-bold text-text-primary dark:text-white">{project.title}</h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-text-primary dark:hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </header>

        <div className="flex-grow overflow-y-auto p-6">
            {project.caseStudy ? (
                <>
                    <div className="flex border-b border-border-default dark:border-gray-700 mb-6">
                        <TabButton label="Preview" isActive={activeTab === 'preview'} onClick={() => setActiveTab('preview')} />
                        <TabButton label="Case Study" isActive={activeTab === 'caseStudy'} onClick={() => setActiveTab('caseStudy')} />
                    </div>
                    <AnimatePresence mode="wait">
                        {activeTab === 'preview' ? (
                            <PreviewContent key="preview" project={project} />
                        ) : (
                            <CaseStudyContent key="case-study" caseStudy={project.caseStudy} />
                        )}
                    </AnimatePresence>
                </>
            ) : (
                <PreviewContent project={project} />
            )}
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up { animation: slide-up 0.4s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default PortfolioModal;