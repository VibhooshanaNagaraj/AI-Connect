import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';

export default function Navbar({ activeTab, setActiveTab, onOpenBookModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Process', id: 'process' },
    { name: 'Work', id: 'work' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08070A]/90 backdrop-blur-md border-b border-dark-border py-3.5 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="focus:outline-none text-left"
        >
          <Logo size="md" />
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-dark-surface/80 px-2.5 py-1.5 rounded-full border border-dark-border backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 flex items-center gap-1.5 ${
                  isActive
                    ? 'text-white font-bold'
                    : 'text-secondary-text hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavDot"
                    className="w-1.5 h-1.5 rounded-full bg-brand-red shadow-[0_0_8px_#FF2638] inline-block"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span>{link.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Button
            onClick={() => {
              if (onOpenBookModal) onOpenBookModal();
              else handleNavClick('contact');
            }}
            variant="primary"
            size="sm"
          >
            Book a Call
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-xl bg-dark-surface border border-dark-border text-white flex items-center justify-center focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-dark-surface border-b border-dark-border px-6 py-6 space-y-4 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-between ${
                    activeTab === link.id
                      ? 'bg-dark-hover text-white border-l-2 border-brand-red'
                      : 'text-secondary-text hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  {activeTab === link.id && <span className="w-1.5 h-1.5 rounded-full bg-brand-red shadow-[0_0_6px_#FF2638]" />}
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-dark-border">
              <Button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenBookModal) onOpenBookModal();
                }}
                variant="primary"
                size="md"
                className="w-full"
              >
                Book a Call
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
