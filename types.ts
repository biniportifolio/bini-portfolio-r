import React from 'react';

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tools: string[];
  category: string;
  type: 'standard' | 'before-after';
  // For 'standard' projects
  thumbnailUrl?: string;
  videoUrl?: string;
  // For 'before-after' projects
  beforeImageUrl?: string;
  afterImageUrl?: string;
  // For Case Studies
  caseStudy?: {
    problem: string;
    solution: string;
    result: string;
    keyMetrics?: { label: string; value: string; }[];
  }
}

// FIX: Add and export the InProgressProject interface.
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
