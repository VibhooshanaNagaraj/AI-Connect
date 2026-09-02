import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Check } from 'lucide-react';
import Button from './Button';

export default function BookCallModal({ isOpen, onClose }) {
  const [selectedDate, setSelectedDate] = useState('Tomorrow, 3:00 PM');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    goal: 'AI Automation Workflow'
  });

  const availableSlots = [
    'Tomorrow, 11:00 AM',
    'Tomorrow, 3:00 PM',
    'Thursday, 2:00 PM',
    'Friday, 10:30 AM'
  ];

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
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-deep-red/30 rounded-full blur-3xl pointer-events-none" />

          {/* Close button */}
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
                Strategy Call Scheduled!
              </h3>
              <p className="text-xs sm:text-sm text-secondary-text max-w-sm mx-auto">
                Thank you {formData.name || 'there'}. We have reserved <span className="font-semibold text-white">{selectedDate}</span> for your AI Connect consultation.
              </p>
            </div>
          ) : (
            <div className="space-y-6 relative z-10">
              <div>
                <span className="text-xs font-mono text-brand-red uppercase tracking-widest flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red shadow-[0_0_8px_#FF2638]" />
                  AI STRATEGY SESSION
                </span>
                <h3 className="text-2xl font-display font-bold text-white">
                  Book a Consultation Call
                </h3>
                <p className="text-xs text-secondary-text mt-1">
                  Discuss your business workflows directly with our AI architects.
                </p>
              </div>

              {/* Time slot picker */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-white flex items-center gap-1.5 font-semibold">
                  <Calendar className="w-3.5 h-3.5 text-brand-red" />
                  Select Preferred Time Slot:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {availableSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedDate(slot)}
                      className={`p-2.5 rounded-xl text-xs font-medium border text-left flex items-center gap-2 transition-all ${
                        selectedDate === slot
                          ? 'bg-brand-red text-white border-brand-red shadow-red-glow font-bold'
                          : 'bg-dark-surface text-secondary-text border-dark-border hover:border-brand-red/50 hover:text-white'
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{slot}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-mono text-secondary-text block mb-1">Your Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-dark-surface border border-dark-border text-xs text-white placeholder-secondary-muted focus:outline-none focus:border-brand-red"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-secondary-text block mb-1">Work Email</label>
                    <input
                      required
                      type="email"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-dark-surface border border-dark-border text-xs text-white placeholder-secondary-muted focus:outline-none focus:border-brand-red"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-mono text-secondary-text block mb-1">Company / Organization</label>
                  <input
                    type="text"
                    placeholder="Acme Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-dark-surface border border-dark-border text-xs text-white placeholder-secondary-muted focus:outline-none focus:border-brand-red"
                  />
                </div>

                <div className="pt-2">
                  <Button type="submit" variant="primary" size="md" className="w-full">
                    Confirm Strategy Session
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
