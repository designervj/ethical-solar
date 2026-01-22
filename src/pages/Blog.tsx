import React from 'react';

import { ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';

const blogPosts = [
  {
    id: 1,
    title: "The Future of Solar Storage: What 2025 Holds",
    category: "Technology",
    date: "Mar 15, 2025",
    image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1974&auto=format&fit=crop",
    excerpt: "Battery technology is evolving rapidly. Here's how solid-state batteries might change home energy storage forever."
  },
  {
    id: 2,
    title: "Understanding NEM 3.0 in California",
    category: "Policy",
    date: "Feb 28, 2025",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1974&auto=format&fit=crop",
    excerpt: "Net Metering has changed. Learn how to maximize your savings under the new utility rules using load shifting."
  },
  {
    id: 3,
    title: "5 Maintenance Tips for Peak Solar Efficiency",
    category: "Guides",
    date: "Feb 10, 2025",
    image: "assets/img/img (5).jpg",
    excerpt: "Dirty panels can lose up to 25% efficiency. Here is our simple guide to keeping your system running perfectly."
  },
  {
    id: 4,
    title: "Ethical Sourcing in the Solar Supply Chain",
    category: "Company",
    date: "Jan 22, 2025",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Why we choose manufacturers who prioritize human rights and environmental stewardship in their production."
  },
  {
    id: 5,
    title: "Solar vs. Wind: What's Best for Your Property?",
    category: "Guides",
    date: "Jan 05, 2025",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=3264&auto=format&fit=crop",
    excerpt: "Comparing the two most popular renewable energy sources for residential and small commercial use."
  },
  {
    id: 6,
    title: "How Much Does a Solar Roof Really Increase Home Value?",
    category: "Finance",
    date: "Dec 18, 2024",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop",
    excerpt: "Recent real estate data shows a significant premium for homes with owned solar systems. Let's dive into the numbers."
  }
];

export const Blog: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader 
        title="Insights & News" 
        subtitle="Stay updated with the latest in renewable energy technology, policy, and company updates."
        backgroundImage="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop"
      />

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container-xl mx-auto py-20 px-4 sm:px-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-dark uppercase tracking-wide">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-400 text-xs mb-3">{post.date}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <a href="#" className="inline-flex items-center text-emerald-600 font-semibold text-sm hover:text-emerald-700">
                  Read Article <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
};