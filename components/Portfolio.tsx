import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../types';

// --- DATA SOURCE ---
const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Character Animation Series',
    description: 'A series of 2D animated shorts focusing on expressive character acting.',
    videoId: 'v0nIWyyJ474',
    tools: ['After Effects', 'Illustrator'],
    role: '2D Animator',
    result: '150k+ Views on Social',
    category: 'animation',
    thumbnailUrl: 'https://img.youtube.com/vi/v0nIWyyJ474/maxresdefault.jpg'
  },
  {
    id: '2',
    title: 'Tech Product Explainer',
    description: 'High-energy kinetic typography and motion graphics for a SaaS launch.',
    videoId: '5N-YLMOKeS0',
    tools: ['After Effects', 'Figma'],
    role: 'Motion Designer',
    result: 'Increased Landing Page Conv.',
    category: 'motion-graphics',
    thumbnailUrl: 'https://img.youtube.com/vi/5N-YLMOKeS0/maxresdefault.jpg'
  },
  {
    id: '3',
    title: '3D Product Reveal',
    description: 'Cinematic 3D lighting and texturing for a luxury watch brand.',
    videoId: 'uzOJmte3o4A',
    tools: ['Blender', 'Davinci Resolve'],
    role: '3D Artist',
    result: 'Client Brand Awareness',
    category: 'animation',
    thumbnailUrl: 'https://img.youtube.com/vi/uzOJmte3o4A/maxresdefault.jpg'
  },
  {
    id: '4',
    title: 'Faceless YouTube Content',
    description: 'Engaging edits with stock footage and dynamic captions for retention.',
    videoId: 'qeMPYrA2YN4',
    tools: ['Premiere Pro', 'After Effects'],
    role: 'Video Editor',
    result: '50% Higher Retention',
    category: 'faceless',
    thumbnailUrl: 'https://img.youtube.com/vi/qeMPYrA2YN4/maxresdefault.jpg'
  },
  {
    id: '5',
    title: 'Viral Instagram Reel',
    description: 'Fast-paced editing style specifically designed for vertical mobile viewing.',
    videoId: 'sfkuOJa5bqY',
    tools: ['Premiere Pro', 'CapCut'],
    role: 'Editor',
    result: 'Viral Reach (500k+)',
    category: 'reels',
    thumbnailUrl: 'https://img.youtube.com/vi/sfkuOJa5bqY/maxresdefault.jpg'
  },
  {
    id: '6',
    title: 'Corporate Motion Graphics',
    description: 'Clean, professional internal communication video for enterprise.',
    videoId: 't6cAV1_ipF8',
    tools: ['After Effects'],
    role: 'Motion Designer',
    result: 'Internal Training Success',
    category: 'motion-graphics',
    thumbnailUrl: 'https://img.youtube.com/vi/t6cAV1_ipF8/maxresdefault.jpg'
  }
];

const CATEGORIES = [
    { id: 'animation', label: '2D & 3D Animation', image: 'https://img.youtube.com/vi/v0nIWyyJ474/maxresdefault.jpg' },
    { id: 'motion-graphics', label: 'Motion Graphics', image: 'https://img.youtube.com/vi/5N-YLMOKeS0/maxresdefault.jpg' },
    { id: 'faceless', label: 'YouTube Faceless', image: 'https://img.youtube.com/vi/qeMPYrA2YN4/maxresdefault.jpg' },
    { id: 'reels', label: 'Short Reels', image: 'https://img.youtube.com/vi/sfkuOJa5bqY/maxresdefault.jpg' }
];

// --- SUB COMPONENTS ---

// 1. YouTube Facade (Performance)
const YouTubeEmbed: React.FC<{ videoId: string; title: string }> = ({ videoId, title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="relative aspect-video bg-black rounded-lg overflow-hidden group">
            {!isLoaded ? (
                <button 
                    onClick={() => setIsLoaded(true)}
                    className="absolute inset-0 w-full h-full block group"
                    aria-label={`Play ${title}`}
                >
                    <img 
                        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
                        alt={title} 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                            <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                        </div>
                    </div>
                </button>
            ) : (
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                    title={title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            )}
        </div>
    );
};

// 2. Project Card (Detailed)
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <motion.div 
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-secondary dark:bg-[#11111F] rounded-xl overflow-hidden shadow-lg border border-border-default dark:border-white/5 hover:border-accent-start/30 transition-all"
    >
        {/* Video Area */}
        <YouTubeEmbed videoId={project.videoId} title={project.title} />
        
        {/* Details */}
        <div className="p-6">
            <h3 className="text-xl font-bold text-text-primary dark:text-white mb-2">{project.title}</h3>
            <p className="text-sm text-text-secondary dark:text-[#94A3B8] mb-4 line-clamp-2">{project.description}</p>
            
            {/* Metadata Grid */}
            <div className="grid grid-cols-2 gap-4 text-xs mb-4">
                <div>
                    <span className="block text-accent-start font-semibold mb-1">Role</span>
                    <span className="text-text-primary dark:text-slate-300">{project.role}</span>
                </div>
                 <div>
                    <span className="block text-accent-start font-semibold mb-1">Outcome</span>
                    <span className="text-text-primary dark:text-slate-300">{project.result}</span>
                </div>
            </div>

            {/* Tools Chips */}
            <div className="flex flex-wrap gap-2">
                {project.tools.map(tool => (
                    <span key={tool} className="px-2 py-1 bg-primary dark:bg-[#0A0A14] text-text-secondary dark:text-gray-400 text-[10px] uppercase tracking-wider font-bold rounded-md border border-border-default dark:border-white/10">
                        {tool}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);

// --- MAIN COMPONENT ---
const Portfolio: React.FC = () => {
    const [view, setView] = useState<'categories' | 'grid'>('categories');
    const [activeFilter, setActiveFilter] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState('');

    // Handle Category Click
    const handleCategoryClick = (categoryId: string) => {
        setActiveFilter(categoryId);
        setView('grid');
        // Smooth scroll to top of grid
        setTimeout(() => {
             const gridTop = document.getElementById('portfolio-grid-anchor');
             if(gridTop) gridTop.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    // Filter Logic
    const filteredProjects = useMemo(() => {
        return PROJECTS.filter(p => {
            const matchesCategory = activeFilter === 'all' || p.category === activeFilter;
            const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                  p.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeFilter, searchQuery]);

    return (
        <section id="portfolio" className="py-20 bg-primary dark:bg-[#0A0A14] min-h-screen relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center mb-12">
                     <h2 className="text-4xl md:text-5xl font-bold text-text-primary dark:text-white mb-4">
                        Selected Works
                    </h2>
                    <p className="text-text-secondary dark:text-[#94A3B8] max-w-2xl mx-auto">
                        Explore projects by category or search for specific styles.
                    </p>
                </div>

                {/* VIEW 1: CATEGORY SELECTION */}
                {view === 'categories' && (
                    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                        {CATEGORIES.map((cat, idx) => (
                            <motion.div
                                key={cat.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                onClick={() => handleCategoryClick(cat.id)}
                                className="group relative aspect-[16/9] rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all"
                                data-cursor-variant="project"
                            >
                                <img src={cat.image} alt={cat.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight group-hover:-translate-y-2 transition-transform duration-300">{cat.label}</h3>
                                </div>
                                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                    <span className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm">View Projects &rarr;</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* VIEW 2: FILTERABLE GRID */}
                {view === 'grid' && (
                    <div id="portfolio-grid-anchor" className="animate-fade-in-up">
                        {/* Controls */}
                        <div className="sticky top-20 z-30 bg-primary/95 dark:bg-[#0A0A14]/95 backdrop-blur-md py-4 mb-8 border-b border-border-default dark:border-white/10">
                            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                                <button 
                                    onClick={() => setView('categories')}
                                    className="text-sm font-semibold text-text-secondary hover:text-accent-start flex items-center gap-2 self-start md:self-auto"
                                >
                                    &larr; Back to Categories
                                </button>
                                
                                {/* Filters */}
                                <div className="flex flex-wrap gap-2 justify-center">
                                    <button 
                                        onClick={() => setActiveFilter('all')}
                                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${activeFilter === 'all' ? 'bg-accent-start text-white' : 'bg-secondary dark:bg-white/5 text-text-secondary hover:bg-accent-start/20'}`}
                                    >
                                        All
                                    </button>
                                    {CATEGORIES.map(cat => (
                                        <button 
                                            key={cat.id}
                                            onClick={() => setActiveFilter(cat.id)}
                                            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${activeFilter === cat.id ? 'bg-accent-start text-white' : 'bg-secondary dark:bg-white/5 text-text-secondary hover:bg-accent-start/20'}`}
                                        >
                                            {cat.label}
                                        </button>
                                    ))}
                                </div>

                                {/* Search */}
                                <div className="relative w-full md:w-auto">
                                    <input 
                                        type="text" 
                                        placeholder="Search title..." 
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full md:w-64 pl-10 pr-4 py-2 rounded-full bg-secondary dark:bg-white/5 border border-transparent focus:border-accent-start focus:ring-1 focus:ring-accent-start outline-none text-sm"
                                    />
                                    <svg className="absolute left-3.5 top-2.5 w-4 h-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </div>
                            </div>
                        </div>

                        {/* Results */}
                        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <AnimatePresence>
                                {filteredProjects.length > 0 ? (
                                    filteredProjects.map(project => (
                                        <ProjectCard key={project.id} project={project} />
                                    ))
                                ) : (
                                    <div className="col-span-full text-center py-20 text-text-secondary">
                                        No projects found matching your criteria.
                                    </div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Portfolio;