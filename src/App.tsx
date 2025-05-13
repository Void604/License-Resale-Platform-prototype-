import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <ThemeProvider>
      <div className="relative flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <HowItWorks />
          <WhyChooseUs />
          <Testimonials />
          <ContactForm />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;