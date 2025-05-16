
import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <div className="py-20 bg-ion-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-ion-blue to-ion-teal rounded-2xl overflow-hidden shadow-xl">
          <div className="px-6 py-12 md:p-12 md:flex md:items-center md:justify-between">
            <div className="md:max-w-2xl md:mr-8 mb-8 md:mb-0 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-4">
                Ready to Transform Your Executive Effectiveness?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Schedule your free AI strategy session today and discover how ION Data can help you reclaim your time and redefine what's possible for your business.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="bg-white text-ion-blue hover:bg-ion-light transition-colors text-lg font-semibold px-8 py-6">
                  Schedule Free Consultation
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 transition-colors text-lg font-semibold px-8 py-6">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-fade-in">
              <div className="text-center mb-4">
                <h3 className="text-white font-semibold text-xl mb-1">Get Started Today</h3>
                <p className="text-white/80">No risk, no obligation</p>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  "Personalized AI strategy assessment",
                  "Executive time-saving opportunities",
                  "Custom implementation roadmap",
                  "ROI projection analysis"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-white mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <span className="inline-block bg-ion-accent/20 rounded-full px-3 py-1 text-sm font-semibold text-white mb-2">
                  Limited Availability
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
