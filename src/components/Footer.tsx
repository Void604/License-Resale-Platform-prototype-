import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, LayoutDashboard } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          <div>
            <div className="flex items-center gap-2 text-white mb-4">
              <LayoutDashboard className="h-7 w-7 text-primary-400" />
              <span className="text-xl font-bold">SoftSell</span>
            </div>
            <p className="mb-6 text-gray-400 max-w-xs">
              The leading marketplace for buying and selling pre-owned software licenses. Save money or recover value from unused licenses.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="#how-it-works" className="hover:text-primary-400 transition-colors">How It Works</a></li>
              <li><a href="#why-choose-us" className="hover:text-primary-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#testimonials" className="hover:text-primary-400 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-primary-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Software Catalog</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Pricing Guide</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary-400 flex-shrink-0 mt-0.5" />
                <span>123 Tech Plaza, Suite 400<br />New Delhi,India</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary-400 flex-shrink-0" />
                <span>+91 1234567890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary-400 flex-shrink-0" />
                <span>info@softsell.example</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} SoftSell Inc. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-4">
            <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;