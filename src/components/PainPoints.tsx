
import React from 'react';
import { Clock, AlertTriangle, Target, Zap, Lightbulb, Search, ChartPie } from 'lucide-react';
import { useLanguage } from '@/i18n';

type PainPointKey = 'timeScarcity' | 'aiFears' | 'personalization' | 'strategic' | 'knowledge' | 'vendor' | 'roi';

const PainPoints = () => {
  const { translations } = useLanguage();
  
  const painPointsIcons = {
    timeScarcity: <Clock className="h-10 w-10 text-ion-accent" />,
    aiFears: <AlertTriangle className="h-10 w-10 text-ion-accent" />,
    personalization: <Target className="h-10 w-10 text-ion-accent" />,
    strategic: <Zap className="h-10 w-10 text-ion-accent" />,
    knowledge: <Lightbulb className="h-10 w-10 text-ion-accent" />,
    vendor: <Search className="h-10 w-10 text-ion-accent" />,
    roi: <ChartPie className="h-10 w-10 text-ion-accent" />
  };
  
  const painPoints: Array<{ key: PainPointKey, icon: React.ReactNode }> = [
    { key: 'timeScarcity', icon: painPointsIcons.timeScarcity },
    { key: 'aiFears', icon: painPointsIcons.aiFears },
    { key: 'personalization', icon: painPointsIcons.personalization },
    { key: 'strategic', icon: painPointsIcons.strategic },
    { key: 'knowledge', icon: painPointsIcons.knowledge },
    { key: 'vendor', icon: painPointsIcons.vendor },
    { key: 'roi', icon: painPointsIcons.roi }
  ];

  return (
    <div className="bg-ion-light py-20" id="painpoints">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-ion-blue font-heading mb-4">
            {translations.painPoints.title}
          </h2>
          <p className="text-xl text-ion-dark/80 max-w-3xl mx-auto">
            {translations.painPoints.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((point, index) => {
            const painPoint = translations.painPoints[point.key];
            if (typeof painPoint === 'string') return null; // Skip if not an object
            
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start transition-transform hover:translate-y-[-5px] animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">{point.icon}</div>
                <h3 className="text-xl font-bold text-ion-blue mb-2">
                  {painPoint.title}
                </h3>
                <p className="text-ion-dark/70">
                  {painPoint.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PainPoints;
