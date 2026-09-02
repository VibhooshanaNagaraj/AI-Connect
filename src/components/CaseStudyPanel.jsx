import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, ShieldCheck, Zap } from 'lucide-react';

export default function CaseStudyPanel({ caseStudy, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="relative rounded-3xl bg-surface-card border border-surface-border p-8 md:p-12 overflow-hidden glass-panel-hover"
    >
      {/* Editorial Background Accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-radial-gradient from-brand-purple/15 to-transparent blur-3xl opacity-60 pointer-events-none" />

      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
        {/* Left Editorial Text Block */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/30 text-xs font-mono font-semibold text-brand-purple-light uppercase tracking-wider">
              {caseStudy.industry}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              <Clock className="w-3.5 h-3.5" />
              <span>{caseStudy.timeSaved}</span>
            </div>
          </div>

          <h3 className="text-2xl md:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
            {caseStudy.title}
          </h3>

          <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-1">
                Operational Context & Challenge
              </h4>
              <p className="text-slate-300">{caseStudy.context}</p>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-brand-purple-light mb-1">
                AI CONNECT Solution Architecture
              </h4>
              <p className="text-slate-200">{caseStudy.solution}</p>
            </div>
          </div>
        </div>

        {/* Right Business Impact Metric Block */}
        <div className="lg:col-span-5 bg-surface/80 border border-surface-border rounded-2xl p-6 md:p-8 space-y-4 backdrop-blur-sm">
          <div className="flex items-center justify-between border-b border-surface-border pb-4">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Verified Business Impact
            </span>
            <ShieldCheck className="w-4 h-4 text-brand-purple-light" />
          </div>

          <div className="space-y-3">
            {caseStudy.impacts.map((impact, i) => (
              <div key={i} className="flex items-start gap-3 text-sm font-medium text-white">
                <div className="w-5 h-5 rounded-full bg-brand-purple/20 border border-brand-purple/40 flex items-center justify-center shrink-0 mt-0.5">
                  <Zap className="w-3 h-3 text-brand-purple-light" />
                </div>
                <span>{impact}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
