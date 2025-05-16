
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/i18n';

const Hero = () => {
  const { translations } = useLanguage();
  
  return (
    <div className="relative bg-gradient-to-br from-ion-blue via-ion-dark to-ion-blue overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI3NjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIxMDAlIiB5MT0iMTAwJSIgeDI9IjAlIiB5Mj0iMCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9Ii4wNSIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTAgMGg3MjB2NzYwSDB6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcyMCkiLz48L3N2Zz4=')] opacity-20"></div>
      <div className="absolute inset-0 bg-grid-white/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 md:pr-8 animate-fade-up">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-1 border border-white/20 mb-6">
              <span className="text-white font-medium text-sm">ION DATA • {translations.hero.innovationTag}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading leading-tight mb-6">
              {translations.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              {translations.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-ion-teal hover:bg-ion-accent text-white transition-colors text-lg font-semibold px-8 py-6">
                {translations.hero.cta}
              </Button>
              <Button variant="outline" className="bg-black border-black text-ion-teal hover:bg-black/80 transition-colors text-lg font-semibold px-8 py-6">
                {translations.hero.exploreCta}
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-ion-teal/20 blur-3xl rounded-full transform -translate-y-4 translate-x-4"></div>
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
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#F6F6F6" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,85.3C960,85,1056,107,1152,122.7C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
