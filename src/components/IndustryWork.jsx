import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { INDUSTRIES_DATA } from '../data/contentData';

export default function IndustryWork({ onRequestQuote }) {
  const [hoveredId, setHoveredId] = useState('healthcare');

  return (
    <div className="space-y-12">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-dark-border">
        <div>
          <span className="text-xs font-mono text-brand-red uppercase tracking-widest flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red shadow-[0_0_8px_#FF2638]" />
            INDUSTRIES & WORK
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            AI Built Around <br className="hidden sm:inline" />
            <span className="text-secondary-text font-normal">Real Business Needs.</span>
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-secondary-text max-w-sm">
          Tailored AI automation designed for operational models across core industries.
        </p>
      </div>

      {/* Interactive Editorial Row Layout */}
      <div className="space-y-4">
        {INDUSTRIES_DATA.map((ind) => {
          const isSelected = hoveredId === ind.id;
          return (
            <motion.div
              key={ind.id}
              onMouseEnter={() => setHoveredId(ind.id)}
              onClick={() => setHoveredId(ind.id)}
              className={`p-6 sm:p-8 rounded-2xl transition-all duration-300 cursor-pointer border ${
                isSelected
                  ? 'bg-dark-card border-brand-red shadow-red-glow'
                  : 'bg-dark-surface border-dark-border hover:border-brand-red/40 hover:bg-dark-hover'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red shadow-[0_0_8px_#FF2638]" />
                    <h3 className="text-2xl font-display font-bold text-white">
                      {ind.title}
                    </h3>
                  </div>
                  <p className="text-xs font-mono text-secondary-text pl-4">
                    {ind.tagline}
                  </p>
                </div>

                <div className="flex items-center gap-3 self-end md:self-center">
                  <span className="text-xs font-mono text-secondary-text">
                    {isSelected ? 'ACTIVE VIEW' : 'EXPLORE USE CASES'}
                  </span>
                  <ArrowUpRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-brand-red translate-x-0.5 -translate-y-0.5' : 'text-secondary-text'
                    }`}
                  />
                </div>
              </div>

              {/* Revealed Details */}
              <AnimatePresence>
                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 pt-6 border-t border-dark-border space-y-4"
                  >
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {ind.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                      {ind.useCases.map((uc, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-xl bg-dark-surface border border-dark-border text-xs font-medium text-white flex items-center gap-2"
                        >
                          <Check className="w-3.5 h-3.5 text-brand-red shrink-0" />
                          <span>{uc}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
