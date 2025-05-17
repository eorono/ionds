
import React from 'react';
import { useLanguage } from '@/i18n';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const { translations } = useLanguage();

  const testimonials = [
    {
      quote: "ION Data's AI solutions transformed how I manage my time. I've reclaimed at least 15 hours weekly for strategic initiatives rather than operational tasks.",
      author: "Sarah Johnson",
      title: "CEO, TechVision Solutions",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "The personalized AI dashboard they built for my team has streamlined our workflow and helped us focus on what truly matters. The ROI has been undeniable.",
      author: "Michael Rodriguez",
      title: "Founder, Innovate Partners",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "ION Data didn't just provide AI tools—they delivered a transformation in how our executive team operates, making us more efficient and strategic.",
      author: "Elena Chen",
      title: "COO, Global Ventures",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  // Personas que usan la plataforma
  const users = [
    {
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      name: "CP"
    },
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      name: "JD"
    },
    {
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      name: "MR"
    },
    {
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      name: "AT"
    },
    {
      image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      name: "RK"
    },
    {
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      name: "LM"
    },
  ];

  return (
    <div className="bg-ion-blue py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-4">
            {translations.testimonials.title}
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {translations.testimonials.subtitle}
          </p>
          
          {/* Grupo de personas que usan la plataforma */}
          <div className="mt-8 flex flex-col items-center">
            <div className="flex flex-wrap justify-center -space-x-4 mb-4">
              {users.map((user, i) => (
                <Avatar key={i} className="border-2 border-white w-12 h-12">
                  <AvatarImage src={user.image} />
                  <AvatarFallback>{user.name}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <p className="text-white/90 text-sm">
              Más de <span className="text-ion-teal font-bold">1,500+</span> ejecutivos ya confían en nosotros
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-white/10 backdrop-blur-sm border-white/10 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="mb-6">
                  <svg className="h-10 w-10 text-ion-teal/80" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-white/90 mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 border-2 border-ion-teal mr-4">
                    <AvatarImage src={testimonial.image} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.author}</h4>
                    <p className="text-white/70 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Imagen de equipo trabajando con la plataforma */}
        <div className="mt-16 rounded-xl overflow-hidden shadow-xl animate-fade-up">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80" 
            alt="Equipo trabajando con ION DATA" 
            className="w-full h-auto object-cover"
          />
          <div className="bg-black/60 backdrop-blur-sm p-6 text-center">
            <p className="text-white text-lg font-medium">
              Nuestros clientes aprovechan el poder de los datos con soluciones inteligentes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
