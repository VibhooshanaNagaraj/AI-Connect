import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BENEFITS_DATA } from '../data/contentData';

export default function WhyAiConnect() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <div className="space-y-12">
      {/* Editorial Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-mono text-brand-red uppercase tracking-widest flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-red shadow-[0_0_8px_#FF2638]" />
          WHY AI CONNECT
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
          Less Manual Work. <br />
          <span className="text-secondary-text font-normal">More Intelligent Growth.</span>
        </h2>
      </div>

      {/* Editorial Grid with Focus Dimming Interaction */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {BENEFITS_DATA.map((benefit, idx) => {
          const isHovered = hoveredIdx === idx;
          const isAnyHovered = hoveredIdx !== null;
          const isDimmed = isAnyHovered && !isHovered;

          return (
            <motion.div
              key={benefit.title}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`p-7 rounded-2xl bg-dark-surface border transition-all duration-300 group flex flex-col justify-between cursor-pointer ${
                isHovered
                  ? 'border-brand-red shadow-red-glow bg-dark-hover opacity-100 scale-[1.02]'
                  : isDimmed
                  ? 'border-dark-border opacity-50'
                  : 'border-dark-border opacity-100'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className={`text-xs font-mono font-bold transition-colors ${isHovered ? 'text-brand-red' : 'text-secondary-muted'}`}>
                    {benefit.number}
                  </span>
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      isHovered ? 'bg-brand-red shadow-[0_0_8px_#FF2638] scale-125' : 'bg-dark-border'
                    }`}
                  />
                </div>

                <h3 className={`text-lg font-display font-bold mb-2 transition-colors ${isHovered ? 'text-white' : 'text-slate-200'}`}>
                  {benefit.title}
                </h3>

                <p className="text-xs text-secondary-text leading-relaxed font-normal">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
