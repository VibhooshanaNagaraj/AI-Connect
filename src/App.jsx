import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import BookCallModal from './components/BookCallModal';
import CustomQuoteModal from './components/CustomQuoteModal';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const renderPage = () => {
    switch (activeTab) {
      case 'about':
        return <AboutPage setActiveTab={setActiveTab} onOpenBookModal={() => setIsBookModalOpen(true)} />;
      case 'services':
        return <ServicesPage setActiveTab={setActiveTab} onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />;
      case 'pricing':
        return <PricingPage setActiveTab={setActiveTab} onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />;
      case 'contact':
        return <ContactPage onOpenBookModal={() => setIsBookModalOpen(true)} />;
      case 'home':
      default:
        return (
          <HomePage
            setActiveTab={setActiveTab}
            onOpenBookModal={() => setIsBookModalOpen(true)}
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-dark text-white flex flex-col font-sans selection:bg-brand-red selection:text-white relative">
      {/* Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenBookModal={() => setIsBookModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* Global Interactive AI Chatbot */}
      <Chatbot
        onNavigate={(tab) => setActiveTab(tab)}
        onOpenBookModal={() => setIsBookModalOpen(true)}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      {/* Modals */}
      <BookCallModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
      />
      <CustomQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
