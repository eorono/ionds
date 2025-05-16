
import React from 'react';
import { Clock, AlertTriangle, Target, Zap, Lightbulb, Search, ChartPie } from 'lucide-react';

const PainPoints = () => {
  const painPoints = [
    {
      icon: <Clock className="h-10 w-10 text-ion-accent" />,
      title: "Time Scarcity",
      description: "Struggling to allocate time effectively between operational demands and strategic vision."
    },
    {
      icon: <AlertTriangle className="h-10 w-10 text-ion-accent" />,
      title: "AI Adoption Fears",
      description: "Uncertainty about implementing AI effectively without disrupting existing workflows."
    },
    {
      icon: <Target className="h-10 w-10 text-ion-accent" />,
      title: "Lack of Personalization",
      description: "Generic AI solutions that fail to address your company's unique challenges and goals."
    },
    {
      icon: <Zap className="h-10 w-10 text-ion-accent" />,
      title: "Strategic Disconnection",
      description: "Difficulty aligning AI implementations with long-term business objectives."
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-ion-accent" />,
      title: "Knowledge Gaps",
      description: "Limited understanding of AI capabilities and how to leverage them effectively."
    },
    {
      icon: <Search className="h-10 w-10 text-ion-accent" />,
      title: "Vendor Overwhelm",
      description: "Too many AI options and vendors, making it difficult to choose the right solutions."
    },
    {
      icon: <ChartPie className="h-10 w-10 text-ion-accent" />,
      title: "ROI Uncertainty",
      description: "Challenges in measuring and demonstrating the return on AI investments."
    }
  ];

  return (
    <div className="bg-ion-light py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-ion-blue font-heading mb-4">
            The Executive's AI Dilemma
          </h2>
          <p className="text-xl text-ion-dark/80 max-w-3xl mx-auto">
            As a CEO, your time is your most valuable asset. Yet these common challenges prevent you from fully leveraging AI to reclaim that time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start transition-transform hover:translate-y-[-5px] animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">{point.icon}</div>
              <h3 className="text-xl font-bold text-ion-blue mb-2">{point.title}</h3>
              <p className="text-ion-dark/70">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PainPoints;
