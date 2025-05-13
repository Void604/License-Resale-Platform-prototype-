import React from 'react';
import { ShieldCheck, Clock, IndianRupee, Award } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      id: 1,
      title: 'Best Market Value',
      description: 'We offer up to 80% of original price for in-demand licenses, with instant quotes in INR.',
      icon: <IndianRupee className="h-6 w-6 text-primary-400" />,
    },
    {
      id: 2,
      title: 'Secure Transactions',
      description: 'Bank-level encryption and RBI-compliant escrow system to protect your data and payment.',
      icon: <ShieldCheck className="h-6 w-6 text-primary-400" />,
    },
    {
      id: 3,
      title: 'Fast Processing',
      description: 'Get valuations within 24 hours and payment within 3 business days via NEFT/IMPS.',
      icon: <Clock className="h-6 w-6 text-primary-400" />,
    },
    {
      id: 4,
      title: 'Compliance Guaranteed',
      description: 'Full compliance with Indian IT laws and international licensing regulations.',
      icon: <Award className="h-6 w-6 text-primary-400" />,
    },
  ];

  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-heading">Why Choose SoftSell</h2>
          <p className="section-subheading">
            We've helped thousands of Indian businesses recover value from their unused software licenses.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <div 
              key={reason.id} 
              className="feature-card group animate-fade-in"
              style={{ animationDelay: `${(reason.id - 1) * 150}ms` }}
            >
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-full bg-primary-900/30 group-hover:bg-primary-800/30 transition-colors">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {reason.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;