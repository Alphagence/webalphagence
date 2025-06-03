
import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import ImmersiveHeroSection from "@/components/ImmersiveHeroSection";
import WebsiteBenefitsSection from "@/components/WebsiteBenefitsSection";
import DigitalEssentialsSection from "@/components/DigitalEssentialsSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import ComparisonSection from "@/components/ComparisonSection";
import FaqSection from "@/components/FaqSection";
import StatsSection from "@/components/StatsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import { initAllAnimations } from "@/utils/scrollAnimation";

const Index = () => {
  useEffect(() => {
    // Initialize all scroll animations
    initAllAnimations();
    
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Add page reveal animation
    document.body.classList.add('page-loaded');
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <ImmersiveHeroSection />
      <div className="bg-black">
        <WebsiteBenefitsSection />
        <DigitalEssentialsSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ServicesSection />
        <ProcessSection />
        <PricingSection />
        <ComparisonSection />
        <StatsSection />
        <FaqSection />
        <CtaSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
