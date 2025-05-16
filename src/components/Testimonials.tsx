
import React from 'react';

const Testimonials = () => {
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

  return (
    <div className="bg-ion-blue py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-4">
            What Executives Say
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            CEOs and founders who have partnered with ION Data share their experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <svg className="h-10 w-10 text-ion-teal/80" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-white/90 mb-6 italic">{testimonial.quote}</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="h-12 w-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.author}</h4>
                  <p className="text-white/70 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
