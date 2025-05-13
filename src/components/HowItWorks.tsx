import React from 'react';
import { Upload, DollarSign, CreditCard } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: 'Upload License',
      description: 'Submit your unused software license details through our secure portal. We accept most major enterprise software.',
      icon: <Upload className="h-10 w-10 text-primary-600 dark:text-primary-400" />,
    },
    {
      id: 2,
      title: 'Get Valuation',
      description: 'Our experts will assess your license and provide a competitive quote within 24 hours based on current market demand.',
      icon: <DollarSign className="h-10 w-10 text-primary-600 dark:text-primary-400" />,
    },
    {
      id: 3,
      title: 'Get Paid',
      description: 'Accept our offer and receive payment via your preferred method - bank transfer, PayPal, or cryptocurrency.',
      icon: <CreditCard className="h-10 w-10 text-primary-600 dark:text-primary-400" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-heading">How It Works</h2>
          <p className="section-subheading">
            Our streamlined process makes selling your unused software licenses quick and easy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.id}
              className="feature-card flex flex-col items-center text-center group animate-fade-in"
              style={{ animationDelay: `${(step.id - 1) * 150}ms` }}
            >
              <div className="mb-6 p-4 rounded-full bg-primary-100 dark:bg-primary-900/30 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
              <div className="mt-6 text-lg font-semibold text-primary-600 dark:text-primary-400">
                Step {step.id}
              </div>
            </div>
          ))}
        </div>

        {/* Connection lines between steps (visible on desktop) */}
        <div className="hidden md:block relative max-w-5xl mx-auto">
          <div className="absolute top-1/3 left-1/4 w-1/4 h-0.5 bg-primary-200 dark:bg-primary-700"></div>
          <div className="absolute top-1/3 right-1/4 w-1/4 h-0.5 bg-primary-200 dark:bg-primary-700"></div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;