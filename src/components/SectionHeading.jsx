import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  center = false,
  className = '',
}) {
  return (
    <div className={`mb-12 md:mb-16 ${center ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-surface-card border border-surface-border text-brand-purple-light mb-4 shadow-sm ${center ? 'mx-auto' : ''}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
          <span>{badge}</span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.15]"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-base md:text-lg text-slate-400 font-normal leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
