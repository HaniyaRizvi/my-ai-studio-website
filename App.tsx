import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { PricingSection } from './components/PricingSection';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ChatbotWidget } from './components/ChatbotWidget';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Website Development');

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
  };

  const handleOpenInquiry = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedService(serviceTitle);
    }
    const elem = document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Fixed Navigation Bar */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. 3D Animated Hero Section */}
        <Hero onOpenInquiry={handleOpenInquiry} />

        {/* 2. Services Section (8 Cards) */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 3. Portfolio & Live Inspiration Examples (5 projects) */}
        <PortfolioSection />

        {/* 4. Work Process (6 Steps) */}
        <ProcessSection />

        {/* 5. Pricing Section (4 USD Plans: $150, $250, $25, $100) */}
        <PricingSection onSelectPlan={handleSelectService} />

        {/* 6. About Section (Values & Company Overview) */}
        <AboutSection />

        {/* 7. FAQs */}
        <FaqSection />

        {/* 8. Contact Section with WhatsApp Integration */}
        <ContactSection initialService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Interactive Elements */}
      <FloatingWhatsApp />
      <ChatbotWidget />
    </div>
  );
}
