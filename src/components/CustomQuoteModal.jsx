import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import Button from './Button';

export default function CustomQuoteModal({ isOpen, onClose }) {
  const [selectedScope, setSelectedScope] = useState(['AI Strategy', 'AI Automation']);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');

  const scopeOptions = [
    'AI Strategy & Roadmap',
    'AI Automation Workflows',
    'Voice & Chat Agents',
    'CRM & Database Sync',
    'AI Partnership & Support'
  ];

  const toggleScope = (option) => {
    if (selectedScope.includes(option)) {
      setSelectedScope(selectedScope.filter((s) => s !== option));
    } else {
      setSelectedScope([...selectedScope, option]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-xl bg-dark-card rounded-3xl p-8 sm:p-10 border border-dark-border shadow-2xl overflow-hidden"
        >
          {/* Red Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-deep-red/30 rounded-full blur-3xl pointer-events-none" />

          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-dark-surface text-secondary-text hover:text-white flex items-center justify-center hover:bg-dark-hover border border-dark-border transition-colors z-20"
          >
            <X className="w-4 h-4" />
          </button>

          {submitted ? (
            <div className="text-center py-12 space-y-4 relative z-10">
              <div className="w-16 h-16 rounded-full bg-brand-red text-white flex items-center justify-center mx-auto shadow-red-glow">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">
                Quote Request Submitted!
              </h3>
              <p className="text-xs sm:text-sm text-secondary-text max-w-sm mx-auto">
                We have received your requirements. Our strategic AI team will send a tailored roadmap to <span className="font-semibold text-white">{email}</span> within 24 hours.
              </p>
            </div>
          ) : (
            <div className="space-y-6 relative z-10">
              <div>
                <span className="text-xs font-mono text-brand-red uppercase tracking-widest flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red shadow-[0_0_8px_#FF2638]" />
                  CUSTOM BLUEPRINT SCOPE
                </span>
                <h3 className="text-2xl font-display font-bold text-white">
                  Get a Custom Solution Quote
                </h3>
                <p className="text-xs text-secondary-text mt-1">
                  Select your key areas of interest to receive a structured scope proposal.
                </p>
              </div>

              {/* Scope selectors */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-white font-semibold">
                  Required System Capabilities:
                </label>
                <div className="flex flex-wrap gap-2">
                  {scopeOptions.map((opt) => {
                    const isChecked = selectedScope.includes(opt);
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => toggleScope(opt)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-all ${
                          isChecked
                            ? 'bg-brand-red text-white border-brand-red shadow-red-glow font-bold'
                            : 'bg-dark-surface text-secondary-text border-dark-border hover:border-brand-red/50 hover:text-white'
                        }`}
                      >
                        {isChecked ? '✓ ' : '+ '}
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-[11px] font-mono text-secondary-text block mb-1">Work Email</label>
                  <input
                    required
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-dark-surface border border-dark-border text-xs text-white placeholder-secondary-muted focus:outline-none focus:border-brand-red"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono text-secondary-text block mb-1">Workflow Goals / Requirements (Optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe the repetitive work or tools you want to connect..."
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-dark-surface border border-dark-border text-xs text-white placeholder-secondary-muted focus:outline-none focus:border-brand-red resize-none"
                  />
                </div>

                <div className="pt-2">
                  <Button type="submit" variant="primary" size="md" className="w-full">
                    Submit Proposal Request
                  </Button>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
