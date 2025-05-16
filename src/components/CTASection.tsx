
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/i18n';

const CTASection = () => {
  const { translations } = useLanguage();

  return (
    <div className="py-20 bg-ion-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-ion-blue to-ion-dark rounded-2xl overflow-hidden shadow-xl">
          <div className="px-6 py-12 md:p-12 md:flex md:items-center md:justify-between">
            <div className="md:max-w-2xl md:mr-8 mb-8 md:mb-0 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-4">
                {translations.cta.title}
              </h2>
              <p className="text-xl text-white/90 mb-8">
                {translations.cta.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="bg-ion-teal text-white hover:bg-ion-accent transition-colors text-lg font-semibold px-8 py-6">
                  {translations.cta.primaryCta}
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 transition-colors text-lg font-semibold px-8 py-6">
                  {translations.cta.secondaryCta}
                </Button>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-fade-in">
              <div className="text-center mb-4">
                <h3 className="text-white font-semibold text-xl mb-1">{translations.cta.startToday}</h3>
                <p className="text-white/80">{translations.cta.noRisk}</p>
              </div>
              <ul className="space-y-3 mb-6">
                {translations.cta.benefits.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-ion-teal mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <span className="inline-block bg-ion-teal/20 rounded-full px-3 py-1 text-sm font-semibold text-white mb-2">
                  {translations.cta.limited}
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
