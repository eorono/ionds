
import React from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, Code, Cog } from 'lucide-react';
import { useLanguage } from '@/i18n';

const Services = () => {
  const { translations } = useLanguage();
  
  const services = [
    {
      key: 'training',
      icon: <BookOpen className="h-10 w-10 text-white" />,
      color: "bg-gradient-to-br from-blue-500 to-blue-700"
    },
    {
      key: 'custom',
      icon: <Code className="h-10 w-10 text-white" />,
      color: "bg-gradient-to-br from-ion-teal to-ion-blue",
      featured: true
    },
    {
      key: 'fullService',
      icon: <Cog className="h-10 w-10 text-white" />,
      color: "bg-gradient-to-br from-ion-dark to-ion-blue"
    }
  ];

  return (
    <div className="py-20" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-ion-blue font-heading mb-4">
            {translations.services.title}
          </h2>
          <p className="text-xl text-ion-dark/80 max-w-3xl mx-auto">
            {translations.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const serviceTranslation = translations.services[service.key as keyof typeof translations.services];
            return (
              <div 
                key={index} 
                className={`rounded-xl overflow-hidden shadow-lg transition-transform hover:translate-y-[-5px] animate-fade-up ${service.featured ? 'ring-4 ring-ion-teal/20 md:transform md:scale-105' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${service.color} p-6`}>
                  <div className="mb-4 bg-white/10 backdrop-blur-sm rounded-full p-3 inline-block">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-heading">{serviceTranslation.title}</h3>
                  <p className="text-white/90 mb-4">{serviceTranslation.description}</p>
                </div>
                <div className="bg-white p-6">
                  <div className="mb-6">
                    <h4 className="font-semibold text-ion-blue mb-3">{serviceTranslation.includes}</h4>
                    <ul className="space-y-2">
                      {serviceTranslation.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <svg className="h-5 w-5 text-ion-teal mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-ion-dark/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full bg-ion-blue hover:bg-ion-teal transition-colors text-white">
                    {serviceTranslation.cta}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
