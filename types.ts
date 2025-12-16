import React from 'react';

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface KeyMetric {
  label: string;
  value: string;
}

export interface CaseStudy {
  problem: string;
  solution: string;
  result: string;
  keyMetrics?: KeyMetric[];
}

export interface Project {
  id: string;
  title: string;
  description: string; // The "Brief"
  videoId: string; // YouTube ID
  videoUrl?: string; // Optional full URL
  tools: string[];
  role: string; // Editor, Animator, etc.
  result: string; // "Increased retention by 20%"
  category: 'animation' | 'motion-graphics' | 'faceless' | 'reels' | 'all';
  thumbnailUrl: string;
  
  // Extended properties for modal details
  type?: 'video' | 'before-after';
  beforeImageUrl?: string;
  afterImageUrl?: string;
  caseStudy?: CaseStudy;
}

export interface InProgressProject {
  id: number;
  title: string;
  description: string;
  previewUrl: string;
  tools: string[];
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  company: string;
}

export interface QuoteBreakdownItem {
  item: string;
  cost: string;
}

export interface Quote {
  estimatedCostRange: string;
  breakdown: QuoteBreakdownItem[];
  timelineEstimate: string;
  assumptions: string;
}