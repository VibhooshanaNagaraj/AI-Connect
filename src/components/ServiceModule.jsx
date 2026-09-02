import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Compass, Users, Cpu } from 'lucide-react';

const iconsMap = {
  "01": Compass,
  "02": Users,
  "03": Cpu
};

export default function ServiceModule({ service, onSelect }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = iconsMap[service.id] || Cpu;

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className={`relative rounded-2xl p-8 md:p-10 transition-all duration-500 overflow-hidden cursor-pointer ${
        isHovered
          ? 'bg-surface-hover border-brand-purple/40 shadow-[0_20px_50px_-15px_rgba(139,92,246,0.2)]'
          : 'bg-surface-card border-surface-border'
      } border`}
      onClick={() => onSelect && onSelect(service)}
    >
      {/* Background Animated Connection Line on Hover */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-purple to-brand-red transition-all duration-700 ${
          isHovered ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        } origin-left`}
      />

      {/* Subtle Purple Watermark / Gradient */}
      <div
        className={`absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-brand-purple/10 blur-3xl transition-opacity duration-500 pointer-events-none ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-start gap-6 flex-1">
          {/* Number & Icon Badge */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-mono font-bold text-brand-purple-light tracking-wider">
              {service.id}
            </span>
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                isHovered
                  ? 'bg-brand-purple text-white border-brand-purple-light shadow-[0_0_15px_rgba(139,92,246,0.5)]'
                  : 'bg-surface border-surface-border text-slate-400'
              }`}
            >
              <Icon className="w-6 h-6" />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-3 flex-1">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 border border-slate-800 px-2.5 py-0.5 rounded-full bg-surface">
                {service.badge}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight leading-snug">
              {service.title}
            </h3>

            <p
              className={`text-sm md:text-base transition-colors duration-300 leading-relaxed max-w-2xl ${
                isHovered ? 'text-slate-200' : 'text-slate-400'
              }`}
            >
              {service.description}
            </p>

            {/* Sub-points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3">
              {service.points.map((pt, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-purple shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Link */}
        <div className="shrink-0 self-end md:self-center">
          <div
            className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 px-5 py-2.5 rounded-full border ${
              isHovered
                ? 'bg-brand-purple text-white border-brand-purple-light shadow-md shadow-brand-purple/30'
                : 'bg-surface border-surface-border text-slate-300 hover:text-white'
            }`}
          >
            <span>Learn More</span>
            <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
