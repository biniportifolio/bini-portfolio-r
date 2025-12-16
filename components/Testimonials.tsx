import type { Testimonial } from '../types';
import React from 'react';
import { motion, Variants } from 'framer-motion';

const testimonialsData: Testimonial[] = [
    { 
        id: 1, 
        quote: "perfect! thanks :)", 
        author: 'Tanya Mulyar', 
        company: '' 
    },
    { 
        id: 2, 
        quote: "I worked with Binyam on two different 2D animation projects and was very satisfied with the results. He is highly skilled technically and showed great patience in handling all the changes and adjustments we made throughout the projects. I look forward to working with him again in the future.", 
        author: 'Susovan Karan', 
        company: '' 
    },
    { 
        id: 3, 
        quote: "Binyam was very professional throughout the project. The images he created for the video were stunning and of high quality. He communicated clearly about the milestones and kept me updated at every stage, which made the process smooth and collaborative.", 
        author: 'Poo Darya', 
        company: '' 
    },
    { 
        id: 4, 
        quote: "great work, very quick and what i needed, thank you!", 
        author: 'Ben Reynolds', 
        company: '' 
    },
    { 
        id: 5, 
        quote: "I had the pleasure of collaborating with Binyam on a project, where he brought the story to life through his impressive 3D animation skills. His work was outstanding, and I greatly appreciated his responsiveness and quick turnaround. I would not hesitate to work with him again for any future projects.", 
        author: 'Susovan Karan', 
        company: '' 
    },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <motion.div 
        variants={itemVariants} 
        className="h-full"
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
    >
        <div className="bg-primary dark:bg-[#0A0A14] p-8 rounded-2xl h-full relative overflow-hidden shadow-sm hover:shadow-glow-md transition-shadow duration-300 border border-border-default dark:border-[#11111F]">
             {/* Quote Icon Background */}
            <svg className="absolute top-4 right-6 w-16 h-16 text-accent-start/10 transform rotate-12" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.333 8h-2.667v-2.667h2.667v2.667zM12 5.333h-5.333v5.333h5.333v-5.333zM9.333 24h-2.667v-2.667h2.667v2.667zM12 21.333h-5.333v5.333h5.333v-5.333zM25.333 8h-2.667v-2.667h2.667v2.667zM28 5.333h-5.333v5.333h5.333v-5.333zM25.333 24h-2.667v-2.667h2.667v2.667zM28 21.333h-5.333v5.333h5.333v-5.333z" />
                <path d="M21.333 8h-2.667v-2.667h2.667v2.667zM24 5.333h-5.333v5.333h5.333v-5.333zM21.333 24h-2.667v-2.667h2.667v2.667zM24 21.333h-5.333v5.333h5.333v-5.333z" />
            </svg>
            
            <div className="relative z-10 flex flex-col h-full">
                <div className="flex-grow">
                    <motion.p 
                        className="text-text-secondary dark:text-[#94A3B8] text-lg leading-relaxed font-medium"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        "{testimonial.quote}"
                    </motion.p>
                </div>
                <div className="mt-6 pt-6 border-t border-border-default dark:border-gray-800">
                    <motion.p 
                        className="font-bold text-text-primary dark:text-[#F1F5F9] text-lg"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        {testimonial.author}
                    </motion.p>
                </div>
            </div>
        </div>
    </motion.div>
);

const Testimonials: React.FC = () => {
    return (
        <motion.section 
            id="testimonials" 
            className="py-24 bg-secondary dark:bg-[#11111F]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    {/* Animated Title */}
                    <div className="overflow-hidden mb-4">
                        <motion.h2 
                            className="text-4xl font-bold text-text-primary dark:text-white inline-block"
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            Client Testimonials
                        </motion.h2>
                    </div>
                    <motion.p 
                        className="text-text-secondary dark:text-[#94A3B8] max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        What people say about working with me.
                    </motion.p>
                </div>

                <motion.div 
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                >
                    {testimonialsData.map(testimonial => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}

export default Testimonials;