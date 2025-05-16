
import React from 'react';
import { Lightbulb, Shield, Award, UserPlus } from 'lucide-react';

const Values = () => {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-ion-teal" />,
      title: "Innovation",
      description: "We constantly explore and implement cutting-edge AI solutions that create transformative outcomes for executives."
    },
    {
      icon: <Award className="h-8 w-8 text-ion-teal" />,
      title: "Excellence",
      description: "We deliver consistently outstanding results through rigorous standards and a commitment to executive-grade quality."
    },
    {
      icon: <Shield className="h-8 w-8 text-ion-teal" />,
      title: "Integrity",
      description: "We operate with complete transparency, maintaining the highest ethical standards in all our recommendations and implementations."
    },
    {
      icon: <UserPlus className="h-8 w-8 text-ion-teal" />,
      title: "Empowerment",
      description: "We don't just provide AI tools—we enable leaders to master them, creating lasting transformation for themselves and their organizations."
    }
  ];

  return (
    <div className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-ion-blue font-heading mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-ion-dark/80 max-w-3xl mx-auto">
            The principles that guide our mission to empower executives through AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-xl p-6 text-center transition-all hover:border-ion-teal hover:shadow-md animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center bg-ion-light h-16 w-16 rounded-full mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-ion-blue mb-2 font-heading">{value.title}</h3>
              <p className="text-ion-dark/70">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Values;
