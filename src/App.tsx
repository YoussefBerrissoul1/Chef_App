import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import SocialMedia from './components/SocialMedia';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans" dir="rtl">
      <Header />
      <Hero />
      <Gallery />
      <SocialMedia />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;