import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0A0A1F]">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute inset-0 bg-gradient-radial from-primary-900/20 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-900/30 via-transparent to-secondary-900/20"></div>
        <div className="absolute -top-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-primary-500/5 blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-[30%] -left-[10%] w-[60%] h-[60%] rounded-full bg-secondary-500/5 blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
              Transform Unused Software
            </span>
            <br />
            <span className="text-white">into Instant Cash</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 md:mb-10 leading-relaxed">
            Get up to 80% of the original value for your unused enterprise software licenses. 
            Fast, secure, and hassle-free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="btn btn-primary text-base px-8 py-4 rounded-xl flex items-center gap-2 group animate-glow"
            >
              Get Your Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#how-it-works" 
              className="btn btn-outline text-base px-8 py-4 rounded-xl"
            >
              How It Works
            </a>
          </div>
          
          {/* Trust badges */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            {[
              { value: '₹100Cr+', label: 'Paid to Customers' },
              { value: '98%', label: 'Satisfaction Rate' },
              { value: '3,500+', label: 'Successful Transactions' },
              { value: '24h', label: 'Average Processing Time' },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-6 rounded-2xl bg-gray-900/30 backdrop-blur-sm border border-gray-800/30"
              >
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;