import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import Button from './Button';

export default function PricingCard({ plan, onSelect }) {
  const { name, subtitle, price, priceDetail, recommended, features, ctaText } = plan;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className={`relative rounded-3xl p-8 md:p-10 flex flex-col justify-between transition-all duration-300 ${
        recommended
          ? 'bg-surface-hover border-2 border-brand-purple/60 shadow-[0_20px_50px_-15px_rgba(139,92,246,0.25)]'
          : 'bg-surface-card border border-surface-border hover:border-slate-700'
      }`}
    >
      {/* Recommended Tag */}
      {recommended && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-brand-purple to-brand-purple-deep text-white text-[11px] font-mono font-bold tracking-widest uppercase shadow-lg shadow-brand-purple/30 flex items-center gap-1.5 border border-purple-400/30">
          <Sparkles className="w-3 h-3 text-yellow-300" />
          <span>RECOMMENDED PARTNERSHIP</span>
        </div>
      )}

      <div>
        {/* Header */}
        <div className="mb-6 space-y-2">
          <h3 className="text-2xl font-display font-extrabold text-white">{name}</h3>
          <p className="text-xs md:text-sm text-slate-400 leading-relaxed">{subtitle}</p>
        </div>

        {/* Price display */}
        <div className="mb-8 p-4 rounded-2xl bg-surface border border-surface-border">
          <div className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">
            {price}
          </div>
          <p className="text-xs font-mono text-brand-purple-light mt-1">{priceDetail}</p>
        </div>

        {/* Feature List */}
        <div className="space-y-3.5 mb-8">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-400">
            What's included:
          </p>
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
              <div className="w-4 h-4 rounded-full bg-brand-purple/20 border border-brand-purple/40 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-2.5 h-2.5 text-brand-purple-light" />
              </div>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action CTA */}
      <Button
        onClick={onSelect}
        variant={recommended ? 'primary' : 'secondary'}
        size="lg"
        className="w-full"
      >
        {ctaText}
      </Button>
    </motion.div>
  );
}
