import type { Project } from '../types';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioModal from './PortfolioModal';
import { CompareArrowsIcon } from './icons/IconComponents';

const portfolioData: Project[] = [
  { id: 1, type: 'standard', title: 'YouTube Channel Intro', description: 'Dynamic 3D intro animation for a popular tech channel.', thumbnailUrl: 'https://drive.google.com/uc?id=1X9k9dE-r0-sP_gI_h-U_yT_r_E_w_Q-lKj', tools: ['Blender', 'After Effects'], videoUrl: 'https://www.youtube.com/embed/6_p_wQu0Nts', category: '3D Animation' },
  { id: 2, type: 'standard', title: 'TikTok Dance VFX', description: 'Viral dance video enhanced with scroll-stopping visual effects.', thumbnailUrl: 'https://drive.google.com/uc?id=1P0b1A_s-D_c_V-fG_h_J-k_L-m_N-o_Pq', tools: ['After Effects', 'Premiere Pro'], videoUrl: 'https://www.youtube.com/embed/6_p_wQu0Nts', category: 'Short Form Videos' },
  { 
    id: 3, 
    type: 'standard', 
    title: 'Corporate Explainer Video', 
    description: 'Clean 2D motion graphics video explaining a complex service.', 
    thumbnailUrl: 'https://drive.google.com/uc?id=1_R_e_W-q_T_y_U-i_O_p_A-s_D-f_G-hJ', 
    tools: ['After Effects'], 
    videoUrl: 'https://www.youtube.com/embed/6_p_wQu0Nts', 
    category: '2D Animation',
    caseStudy: {
      problem: "A B2B SaaS company struggled to explain their complex software's value proposition on their website. Potential customers were dropping off, confused by text-heavy pages.",
      solution: "I developed a 90-second 2D animated explainer video. Using clean visuals, branded characters, and kinetic typography, we distilled the core features into an engaging and easy-to-understand narrative. The story followed a relatable customer persona overcoming common pain points with the software.",
      result: "The video, placed prominently on the homepage, became a cornerstone of their marketing. It directly addressed user confusion and provided a clear, concise overview of the product's benefits, leading to better engagement and more qualified leads.",
      keyMetrics: [
        { label: 'Increase in Demo Sign-ups', value: '+35%' },
        { label: 'Reduction in Bounce Rate', value: '-20%' },
        { label: 'Average Time on Page', value: '+70%' },
      ]
    }
  },
  { 
    id: 4, 
    type: 'before-after', 
    title: 'Wedding Highlight Film', 
    description: 'Cinematic editing and color grading to create a warm, emotional tone for a wedding highlight film.', 
    beforeImageUrl: 'https://drive.google.com/uc?id=1-kL_j_I-h_G_f-E_d_C-b_A-z_Y_x-Wv', 
    afterImageUrl: 'https://drive.google.com/uc?id=1-u_T-s_R_q-P_o_N-m_L-k_J_i_H-gF', 
    tools: ['Premiere Pro', 'DaVinci Resolve'], 
    videoUrl: 'https://www.youtube.com/embed/6_p_wQu0Nts', 
    category: 'Motion Graphics',
    caseStudy: {
      problem: "A client provided raw, unedited footage from their wedding day. The clips were shot on different cameras, with inconsistent lighting and flat color profiles. The challenge was to transform this disparate footage into a cohesive, cinematic, and emotionally resonant story.",
      solution: "My process involved meticulous log-and-sync of all footage, followed by crafting a narrative that highlighted the day's most emotional moments. I performed advanced color correction and grading to establish a warm, romantic visual tone. Sound design, including music selection and audio sweetening, was crucial in elevating the film's emotional impact.",
      result: "The final highlight film was delivered as a cherished cinematic keepsake. The 'before-and-after' comparison starkly demonstrates the transformative power of professional editing and color grading, turning raw footage into a polished, storytelling-driven piece.",
    }
  },
  { id: 5, type: 'standard', title: 'Character Animation Short', description: 'A short story brought to life with expressive 2D character animation.', thumbnailUrl: 'https://drive.google.com/uc?id=1-eD_c_B_a-Z_y_X-w_V_u-T_s_R_q-PoN', tools: ['After Effects', 'AI Tools'], videoUrl: 'https://www.youtube.com/embed/6_p_wQu0Nts', category: '2D Animation' },
  { id: 6, type: 'standard', title: 'Social Media Ad Campaign', description: 'A series of short, punchy video ads for a new product launch.', thumbnailUrl: 'https://drive.google.com/uc?id=1-m_L-k_J-i_H_g_F-e_D_c-B_a_Z_y-Xw', tools: ['Premiere Pro', 'After Effects'], videoUrl: 'https://www.youtube.com/embed/6_p_wQu0Nts', category: 'Short Form Videos' },
  { id: 7, type: 'standard', title: 'Documentary Style YouTube Video', description: 'Editing and color grading for a mini-documentary about travel.', thumbnailUrl: 'https://drive.google.com/uc?id=1-m_L-k_J-i_H_g_F-e_D_c-B_a_Z_y-Xw', tools: ['Premiere Pro', 'DaVinci Resolve'], videoUrl: 'https://www.youtube.com/embed/6_p_wQu0Nts', category: 'YouTube Videos' },
  { 
    id: 8, 
    type: 'standard', 
    title: 'Photo Book Promo', 
    description: 'Animated promotional video designed to drive pre-sales for a photo book launch.', 
    thumbnailUrl: 'https://img.youtube.com/vi/t6cAV1_ipF8/maxresdefault.jpg', 
    tools: ['After Effects', 'Motion Graphics'], 
    videoUrl: 'https://www.youtube.com/embed/t6cAV1_ipF8', 
    category: 'Motion Graphics' 
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }
};

const ProjectCard: React.FC<{ project: Project; onProjectClick: (project: Project) => void }> = ({ project, onProjectClick }) => (
    <motion.div 
        layout
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="group relative overflow-hidden rounded-lg bg-secondary dark:bg-[#11111F] shadow-lg cursor-pointer aspect-[3/2] border border-transparent hover:border-accent-start/50 transition-colors"
        onClick={() => onProjectClick(project)}
        data-cursor-variant="project"
    >
        <img 
            src={project.type === 'before-after' ? project.afterImageUrl : project.thumbnailUrl} 
            alt={project.title} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent dark:from-[#0A0A14]/90 dark:via-[#0A0A14]/60 transition-opacity duration-500"></div>
        
        {project.type === 'before-after' && (
          <div className="absolute top-3 right-3 flex items-center gap-2 bg-black/50 backdrop-blur-sm text-white text-xs font-bold py-1 px-3 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
            <CompareArrowsIcon />
            <span>Compare</span>
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="flex justify-between items-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out delay-200">
                <h3 className="text-xl font-bold">
                    {project.title}
                </h3>
                {project.caseStudy && (
                    <span className="text-xs bg-white/20 backdrop-blur-sm text-white py-1 px-2 rounded-full font-semibold">Case Study</span>
                )}
            </div>
            <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out delay-300">
                <p className="text-sm text-slate-300 dark:text-[#94A3B8] mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                    {project.tools.map(tool => (
                        <span key={tool} className="text-xs bg-gradient-to-r from-accent-start/80 to-accent-end/80 text-white py-1 px-2 rounded-full">{tool}</span>
                    ))}
                </div>
            </div>
        </div>
    </motion.div>
);


const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', '2D Animation', '3D Animation', 'YouTube Videos', 'Short Form Videos', 'Motion Graphics'];

  const filteredProjects = activeFilter === 'All'
    ? portfolioData
    : portfolioData.filter(p => p.category === activeFilter);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <motion.section 
        id="portfolio" 
        className="py-20 bg-primary dark:bg-[#0A0A14]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center text-text-primary dark:text-white mb-12">My Portfolio</motion.h2>
        
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
            {filters.map(filter => (
                <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 text-sm md:text-base border-2 ${
                        activeFilter === filter
                            ? 'bg-gradient-to-r from-accent-start to-accent-end text-white border-transparent shadow-glow-md'
                            : 'bg-transparent border-border-default dark:border-[#11111F] text-text-secondary dark:text-[#94A3B8] hover:border-accent-start/50 hover:text-text-primary dark:hover:text-white'
                    }`}
                    data-cursor-variant="link"
                >
                    {filter}
                </button>
            ))}
        </motion.div>

        <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
            <AnimatePresence>
              {filteredProjects.map(project => (
                  <ProjectCard key={project.id} project={project} onProjectClick={handleProjectClick} />
              ))}
            </AnimatePresence>
        </motion.div>
      </div>
      {selectedProject && <PortfolioModal project={selectedProject} onClose={handleCloseModal} />}
    </motion.section>
  );
};

export default Portfolio;