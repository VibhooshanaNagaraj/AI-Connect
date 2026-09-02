import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { COMPANY_INFO } from '../data/contentData';
import { Mail, Phone, MapPin, CheckCircle2, MessageSquare } from 'lucide-react';

export default function ContactPage({ onOpenBookModal }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.firstName) return;
    setSubmitted(true);
  };

  return (
    <div className="pt-28 md:pt-36 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-surface border border-dark-border text-xs font-mono text-secondary-text">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-red shadow-[0_0_8px_#FF2638]" />
          <span>GET IN TOUCH</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
          Let's Connect.
        </h1>
        <p className="text-base sm:text-lg text-secondary-text">
          Have questions or need custom AI solutions? Fill out the form below and our strategy team will reach out within 24 hours.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Direct Contact Info */}
        <div className="lg:col-span-5 space-y-8">
          <div className="p-8 rounded-3xl bg-dark-card border border-dark-border space-y-6 shadow-2xl">
            <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-brand-red" />
              <span>Contact Information</span>
            </h3>

            <div className="space-y-5 text-xs sm:text-sm text-secondary-text">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-deep-red/60 border border-brand-red/30 flex items-center justify-center text-brand-red shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-secondary-muted font-mono uppercase">Email Support</div>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-white font-semibold hover:text-brand-red transition-colors"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-deep-red/60 border border-brand-red/30 flex items-center justify-center text-brand-red shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-secondary-muted font-mono uppercase">Phone Advisory</div>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="text-white font-semibold hover:text-brand-red transition-colors"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-deep-red/60 border border-brand-red/30 flex items-center justify-center text-brand-red shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-secondary-muted font-mono uppercase">Headquarters</div>
                  <span className="text-white font-semibold">
                    {COMPANY_INFO.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-dark-card border border-dark-border space-y-3 text-xs text-secondary-text shadow-2xl">
            <div className="font-mono text-brand-red font-bold">24-HOUR GUARANTEED RESPONSE</div>
            <p className="leading-relaxed">
              Every inquiry is reviewed directly by our founding team. We analyze your company requirements to respond with concrete options.
            </p>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-8 md:p-12 rounded-3xl bg-dark-card border border-dark-border shadow-2xl relative">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-brand-red text-white flex items-center justify-center mx-auto shadow-red-glow">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white">
                  Message Delivered Successfully
                </h3>
                <p className="text-secondary-text text-sm max-w-md mx-auto">
                  Thank you for reaching out to AI CONNECT. One of our senior strategy leaders will get in touch with you at <span className="text-white font-mono">{formData.email}</span> within 24 hours.
                </p>
                <div className="pt-4">
                  <Button onClick={() => setSubmitted(false)} variant="secondary" size="sm">
                    Send Another Message
                  </Button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-display font-bold text-white">
                  Send AI CONNECT a Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-secondary-text">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="Jane"
                      className="w-full bg-dark-surface border border-dark-border rounded-xl px-4 py-3 text-sm text-white placeholder-secondary-muted focus:outline-none focus:border-brand-red"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-secondary-text">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Doe"
                      className="w-full bg-dark-surface border border-dark-border rounded-xl px-4 py-3 text-sm text-white placeholder-secondary-muted focus:outline-none focus:border-brand-red"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-secondary-text">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full bg-dark-surface border border-dark-border rounded-xl px-4 py-3 text-sm text-white placeholder-secondary-muted focus:outline-none focus:border-brand-red"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-secondary-text">
                      Company Name / Website
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Corp"
                      className="w-full bg-dark-surface border border-dark-border rounded-xl px-4 py-3 text-sm text-white placeholder-secondary-muted focus:outline-none focus:border-brand-red"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase text-secondary-text">
                    How Can We Help Your Business? *
                  </label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your current operational bottlenecks, workflows you want to automate, or AI goals..."
                    className="w-full bg-dark-surface border border-dark-border rounded-xl px-4 py-3 text-sm text-white placeholder-secondary-muted focus:outline-none focus:border-brand-red resize-none"
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
