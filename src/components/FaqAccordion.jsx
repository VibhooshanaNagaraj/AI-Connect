import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQS_DATA } from '../data/contentData';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-12">
      {/* Editorial Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-mono text-brand-red uppercase tracking-widest flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-red shadow-[0_0_8px_#FF2638]" />
          FREQUENTLY ASKED QUESTIONS
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
          Clear Answers <br />
          <span className="text-secondary-text font-normal">To Key Questions.</span>
        </h2>
      </div>

      {/* Accordion List */}
      <div className="space-y-4 max-w-4xl">
        {FAQS_DATA.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'bg-dark-card border-brand-red shadow-red-glow'
                  : 'bg-dark-surface border-dark-border hover:border-brand-red/40 hover:bg-dark-hover'
              }`}
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="text-base sm:text-lg font-display font-bold text-white leading-snug">
                  {faq.question}
                </span>

                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                    isOpen
                      ? 'bg-brand-red text-white border-white shadow-[0_0_8px_#FF2638]'
                      : 'bg-dark-surface border-dark-border text-secondary-text'
                  }`}
                >
                  {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-6 pb-6 text-xs sm:text-sm text-secondary-text leading-relaxed border-t border-dark-border pt-4 font-normal">
                      {faq.answer}
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
