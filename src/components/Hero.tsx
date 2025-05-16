
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/i18n';

const Hero = () => {
  const { translations } = useLanguage();
  
  return (
    <div className="relative bg-gradient-to-br from-ion-blue to-ion-teal">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI3NjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIxMDAlIiB5MT0iMTAwJSIgeDI9IjAlIiB5Mj0iMCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9Ii4wNSIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTAgMGg3MjB2NzYwSDB6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcyMCkiLz48L3N2Zz4=')] opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 md:pr-8 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading leading-tight mb-6">
              {translations.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              {translations.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-white text-ion-blue hover:bg-ion-light transition-colors text-lg font-semibold px-8 py-6">
                {translations.hero.cta}
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 transition-colors text-lg font-semibold px-8 py-6">
                {translations.hero.exploreCta}
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-ion-accent/20 blur-3xl rounded-full transform -translate-y-4 translate-x-4"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="text-4xl font-bold text-white mb-2">85%</div>
                    <div className="text-white/80 font-medium">{translations.stats.timeSaved}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="text-4xl font-bold text-white mb-2">3x</div>
                    <div className="text-white/80 font-medium">{translations.stats.strategicPlanning}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="text-4xl font-bold text-white mb-2">40%</div>
                    <div className="text-white/80 font-medium">{translations.stats.decisionFatigue}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="text-4xl font-bold text-white mb-2">60%</div>
                    <div className="text-white/80 font-medium">{translations.stats.infoProcessing}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
