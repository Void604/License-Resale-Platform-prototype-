import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      content: "SoftSell helped us recover nearly 70% of our investment in unused Adobe and Microsoft licenses when downsizing our team. The process was incredibly smooth, and payment was processed quickly.",
      author: "Sarah Johnson",
      role: "IT Director",
      company: "Meridian Technologies",
      rating: 5,
    },
    {
      id: 2,
      content: "As a startup, every dollar counts. When we switched our tech stack, SoftSell allowed us to recoup a significant portion of our AWS and development tool licenses. Their valuation was fair and transparent.",
      author: "Michael Chen",
      role: "CTO",
      company: "NexGen Solutions",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-heading">What Our Customers Say</h2>
          <p className="section-subheading">
            Don't just take our word for it. Hear from businesses who've successfully sold their licenses through SoftSell.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="testimonial-card group hover:border-primary-300 dark:hover:border-primary-700 animate-fade-in"
              style={{ animationDelay: `${(testimonial.id - 1) * 150}ms` }}
            >
              <div className="mb-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                ))}
              </div>
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-1 h-8 w-8 text-primary-200 dark:text-primary-800 opacity-50" />
                <p className="text-gray-700 dark:text-gray-300 relative z-10 pl-6">"{testimonial.content}"</p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;