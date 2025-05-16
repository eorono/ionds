
import React from 'react';
import { Lightbulb, Shield, Award, UserPlus } from 'lucide-react';
import { useLanguage } from '@/i18n';

const Values = () => {
  const { translations } = useLanguage();

  const valuesIcons = {
    innovation: <Lightbulb className="h-8 w-8 text-ion-teal" />,
    excellence: <Award className="h-8 w-8 text-ion-teal" />,
    integrity: <Shield className="h-8 w-8 text-ion-teal" />,
    empowerment: <UserPlus className="h-8 w-8 text-ion-teal" />
  };

  const values = [
    { key: 'innovation', icon: valuesIcons.innovation },
    { key: 'excellence', icon: valuesIcons.excellence },
    { key: 'integrity', icon: valuesIcons.integrity },
    { key: 'empowerment', icon: valuesIcons.empowerment }
  ];

  return (
    <div className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-ion-blue font-heading mb-4">
            {translations.values.title}
          </h2>
          <p className="text-xl text-ion-dark/80 max-w-3xl mx-auto">
            {translations.values.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const valueTranslation = translations.values[value.key as keyof typeof translations.values];
            return (
              <div 
                key={index} 
                className="border border-gray-200 rounded-xl p-6 text-center transition-all hover:border-ion-teal hover:shadow-md animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center bg-ion-light h-16 w-16 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-ion-blue mb-2 font-heading">{valueTranslation.title}</h3>
                <p className="text-ion-dark/70">{valueTranslation.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Values;
