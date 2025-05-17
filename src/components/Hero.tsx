
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/i18n';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
  const { translations } = useLanguage();
  
  return (
    <div className="relative overflow-hidden">
      {/* Fondo de imagen */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/0c024a01-417f-4ec5-8109-df7168ac9291.png" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Overlay para mejorar legibilidad del texto */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>
      
      {/* Contenido del Hero */}
      <div className="absolute inset-0 bg-grid-white/10 z-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-30">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 md:pr-8 animate-fade-up">
            <div className="inline-block bg-black/70 backdrop-blur-sm rounded-full px-4 py-1 border border-ion-teal/20 mb-6">
              <span className="text-white font-medium text-sm">ION DATA • {translations.hero.innovationTag}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading leading-tight mb-6">
              {translations.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              {translations.hero.subtitle}
            </p>
            
            {/* Testimonios rápidos con avatares para humanizar */}
            <div className="flex items-center mb-8">
              <div className="flex -space-x-2 overflow-hidden mr-4">
                <Avatar className="border-2 border-white w-10 h-10">
                  <AvatarImage src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" />
                  <AvatarFallback>CG</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-white w-10 h-10">
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-white w-10 h-10">
                  <AvatarImage src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" />
                  <AvatarFallback>MR</AvatarFallback>
                </Avatar>
              </div>
              <p className="text-white/90 text-sm font-medium">
                <span className="text-ion-teal">+1,500</span> ejecutivos confían en nosotros
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-black hover:bg-black/80 text-ion-teal transition-colors text-lg font-semibold px-8 py-6">
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
              <div className="relative bg-black/60 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-2xl">
                {/* Imagen de personas usando el servicio */}
               
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="text-4xl font-bold text-white mb-2">85%</div>
                    <div className="text-white/80 font-medium">{translations.stats.timeSaved}</div>
                  </div>
                  <div className="bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="text-4xl font-bold text-white mb-2">3x</div>
                    <div className="text-white/80 font-medium">{translations.stats.strategicPlanning}</div>
                  </div>
                  <div className="bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="text-4xl font-bold text-white mb-2">40%</div>
                    <div className="text-white/80 font-medium">{translations.stats.decisionFatigue}</div>
                  </div>
                  <div className="bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="text-4xl font-bold text-white mb-2">60%</div>
                    <div className="text-white/80 font-medium">{translations.stats.infoProcessing}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Gradiente inferior */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#F6F6F6" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,85.3C960,85,1056,107,1152,122.7C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
