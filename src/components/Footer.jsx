import React from 'react';
import Logo from './Logo';
import { COMPANY_INFO } from '../data/contentData';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer({ setActiveTab }) {
  const currentYear = new Date().getFullYear();

  const handleNav = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-charcoal text-white pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <button onClick={() => handleNav('home')} className="focus:outline-none text-left">
              <Logo size="lg" dark />
            </button>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              AI CONNECT helps businesses understand, implement, and continuously improve AI automation.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-md bg-charcoal-light border border-charcoal-muted text-xs font-mono text-slate-300 hover:text-white hover:border-brand-red transition-all"
              >
                LinkedIn
              </a>
              <a
                href={COMPANY_INFO.socials.discord}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-md bg-charcoal-light border border-charcoal-muted text-xs font-mono text-slate-300 hover:text-white hover:border-brand-red transition-all"
              >
                Discord
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-brand-red font-semibold">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {['Home', 'About', 'Services', 'Process', 'Work', 'Pricing', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNav(item.toLowerCase())}
                    className="hover:text-white transition-colors text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-brand-red font-semibold">
              CAPABILITIES
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors text-left">
                  01 AI Strategy
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors text-left">
                  02 AI Partnership
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors text-left">
                  03 AI Automation
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-brand-red font-semibold">
              GET IN TOUCH
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-red" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-red" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-red" />
                <span>{COMPANY_INFO.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-charcoal-muted pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 font-mono">
          <p>© {currentYear} AI CONNECT. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Security & Governance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
