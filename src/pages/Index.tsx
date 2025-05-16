
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Values from '@/components/Values';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PainPoints />
      <Services />
      <Values />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
