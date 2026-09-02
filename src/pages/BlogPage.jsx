import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { BLOG_POSTS } from '../data/contentData';
import { ArrowRight, Calendar, Clock, Tag, X, BookOpen } from 'lucide-react';

export default function BlogPage({ selectedArticle, setSelectedArticle }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'AI Strategy', 'Automation', 'Technology', 'Business'];

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    if (activeCategory === 'All') return true;
    return post.category.toLowerCase() === activeCategory.toLowerCase();
  });

  return (
    <div className="pt-28 md:pt-36 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-card border border-surface-border text-xs font-mono text-brand-purple-light">
          <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
          <span>INSIGHTS & STRATEGY</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
          AI CONNECT Editorial Publications
        </h1>
        <p className="text-lg text-slate-300">
          Stay informed with the latest AI strategy insights, workflow automation guides, and market perspectives from our team.
        </p>
      </div>

      {/* Featured Article Card */}
      <motion.div
        whileHover={{ y: -4 }}
        onClick={() => setSelectedArticle(featuredPost)}
        className="rounded-3xl bg-surface-card border border-surface-border p-8 md:p-12 cursor-pointer hover:border-brand-purple/50 transition-all duration-300 shadow-2xl relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6">
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <span className="px-3 py-1 rounded-full bg-brand-purple/20 border border-brand-purple/40 text-brand-purple-light font-bold">
              FEATURED ARTICLE
            </span>
            <span className="text-slate-400 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {featuredPost.date}
            </span>
            <span className="text-slate-400 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {featuredPost.readTime}
            </span>
          </div>

          <h2 className="text-2xl md:text-4xl font-display font-extrabold text-white group-hover:text-brand-purple-light transition-colors leading-tight">
            {featuredPost.title}
          </h2>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl">
            {featuredPost.excerpt}
          </p>

          <div className="pt-2 inline-flex items-center gap-2 text-sm font-semibold text-brand-purple-light group-hover:translate-x-1 transition-transform">
            <span>Read Featured Article</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </motion.div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 border-b border-surface-border pb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              activeCategory === cat
                ? 'bg-brand-purple text-white shadow-md shadow-brand-purple/20'
                : 'bg-surface-card border border-surface-border text-slate-400 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <motion.div
            key={post.slug}
            whileHover={{ y: -6 }}
            onClick={() => setSelectedArticle(post)}
            className="p-6 rounded-2xl bg-surface-card border border-surface-border hover:border-brand-purple/40 transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="text-brand-purple-light font-bold uppercase">{post.category}</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-lg font-display font-bold text-white leading-snug hover:text-brand-purple-light transition-colors">
                {post.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
            </div>

            <div className="pt-6 flex items-center justify-between text-xs font-semibold text-brand-purple-light">
              <span>Read Article</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Full Article Reading Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-surface-card border border-surface-border rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto p-8 md:p-12 space-y-6 shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-surface border border-surface-border text-slate-400 hover:text-white flex items-center justify-center transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs font-mono text-brand-purple-light">
                  <Tag className="w-3.5 h-3.5" />
                  <span>{selectedArticle.category}</span>
                  <span>•</span>
                  <span>{selectedArticle.date}</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-display font-extrabold text-white leading-tight">
                  {selectedArticle.title}
                </h2>
              </div>

              <div className="text-sm md:text-base text-slate-300 leading-relaxed space-y-4 pt-4 border-t border-surface-border">
                <p className="font-semibold text-slate-200">{selectedArticle.excerpt}</p>
                <div className="whitespace-pre-line text-slate-300">
                  {selectedArticle.content || "Full article body content published by AI CONNECT."}
                </div>
              </div>

              <div className="pt-6 border-t border-surface-border flex justify-end">
                <Button onClick={() => setSelectedArticle(null)} variant="secondary">
                  Close Article
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
