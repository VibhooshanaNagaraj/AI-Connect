import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { COMPANY_INFO } from '../data/contentData';
import { Calendar, Clock, CheckCircle2, Sparkles, User, Mail, Building } from 'lucide-react';

export default function BookCallPage() {
  const [step, setStep] = useState(1);
  const [selectedGoal, setSelectedGoal] = useState('Workflow Automation');
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  const [selectedDate, setSelectedDate] = useState('Tomorrow');
  const [bookingInfo, setBookingInfo] = useState({
    name: '',
    email: '',
    company: '',
    notes: ''
  });
  const [confirmed, setConfirmed] = useState(false);

  const goals = [
    'Strategic AI Planning & Audit',
    'Automation Workflow Implementation',
    'AI Voice & Text Agent Deployment',
    'Enterprise AI Companion Partnership'
  ];

  const timeSlots = ['09:30 AM', '11:00 AM', '02:00 PM', '04:30 PM'];
  const dateSlots = ['Tomorrow', 'In 2 Days', 'Next Monday', 'Custom Date'];

  const handleBookSubmit = (e) => {
    e.preventDefault();
    if (!bookingInfo.email || !bookingInfo.name) return;
    setConfirmed(true);
  };

  return (
    <div className="pt-28 md:pt-36 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-card border border-surface-border text-xs font-mono text-brand-purple-light">
          <Sparkles className="w-3.5 h-3.5" />
          <span>FREE 30-MINUTE STRATEGY SESSION</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
          Let's Talk About What's Possible With AI.
        </h1>
        <p className="text-base md:text-lg text-slate-300">
          Book a 1-on-1 consultation with our founders. We'll analyze your current workflows and construct a personalized AI adoption roadmap with zero commitment.
        </p>
      </div>

      {/* Booking Container */}
      <div className="rounded-3xl bg-surface-card border border-surface-border p-8 md:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl pointer-events-none" />

        {confirmed ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12 space-y-6 max-w-xl mx-auto"
          >
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h2 className="text-3xl font-display font-bold text-white">
              Consultation Scheduled!
            </h2>

            <div className="p-6 rounded-2xl bg-surface border border-surface-border text-left space-y-3 text-xs font-mono text-slate-300">
              <div className="flex justify-between border-b border-surface-border pb-2">
                <span className="text-slate-400">SESSION GOAL:</span>
                <span className="text-white font-bold">{selectedGoal}</span>
              </div>
              <div className="flex justify-between border-b border-surface-border pb-2">
                <span className="text-slate-400">TIME SLOT:</span>
                <span className="text-brand-purple-light font-bold">{selectedDate} @ {selectedTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">CONFIRMATION SENT TO:</span>
                <span className="text-white font-bold">{bookingInfo.email}</span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              A calendar invitation with Google Meet / Zoom link has been dispatched to your email. We look forward to connecting!
            </p>

            <Button onClick={() => setConfirmed(false)} variant="secondary" size="md">
              Modify Booking
            </Button>
          </motion.div>
        ) : (
          <form onSubmit={handleBookSubmit} className="space-y-8">
            {/* Step 1: Objective selection */}
            <div className="space-y-4">
              <label className="text-xs font-mono uppercase tracking-widest text-brand-purple-light flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-brand-purple text-white flex items-center justify-center text-[10px] font-bold">1</span>
                <span>Select Your Primary Objective</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {goals.map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setSelectedGoal(g)}
                    className={`p-4 rounded-xl text-xs font-semibold text-left transition-all border ${
                      selectedGoal === g
                        ? 'bg-brand-purple/20 border-brand-purple text-white shadow-md'
                        : 'bg-surface border-surface-border text-slate-400 hover:text-white'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Time slot selection */}
            <div className="space-y-4">
              <label className="text-xs font-mono uppercase tracking-widest text-brand-purple-light flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-brand-purple text-white flex items-center justify-center text-[10px] font-bold">2</span>
                <span>Select Date & Preferred Time</span>
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {dateSlots.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setSelectedDate(d)}
                    className={`py-3 px-3 rounded-xl text-xs font-mono text-center transition-all border ${
                      selectedDate === d
                        ? 'bg-surface-hover border-brand-purple text-white font-bold'
                        : 'bg-surface border-surface-border text-slate-400'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {timeSlots.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setSelectedTime(t)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-mono text-center transition-all border ${
                      selectedTime === t
                        ? 'bg-brand-purple text-white border-brand-purple-light font-bold'
                        : 'bg-surface border-surface-border text-slate-400'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Contact Info */}
            <div className="space-y-4 pt-4 border-t border-surface-border">
              <label className="text-xs font-mono uppercase tracking-widest text-brand-purple-light flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-brand-purple text-white flex items-center justify-center text-[10px] font-bold">3</span>
                <span>Your Professional Details</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={bookingInfo.name}
                    onChange={(e) => setBookingInfo({ ...bookingInfo, name: e.target.value })}
                    className="w-full bg-surface border border-surface-border rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-purple/60"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Work Email *"
                    value={bookingInfo.email}
                    onChange={(e) => setBookingInfo({ ...bookingInfo, email: e.target.value })}
                    className="w-full bg-surface border border-surface-border rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-purple/60"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Company Name"
                    value={bookingInfo.company}
                    onChange={(e) => setBookingInfo({ ...bookingInfo, company: e.target.value })}
                    className="w-full bg-surface border border-surface-border rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-purple/60"
                  />
                </div>
              </div>
            </div>

            <Button type="submit" variant="primary" size="lg" className="w-full">
              Confirm Consultation Booking →
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
