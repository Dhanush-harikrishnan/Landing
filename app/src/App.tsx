import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import BentoSection from './sections/BentoSection';
import RealWorldSection from './sections/RealWorldSection';
import InvoicingSection from './sections/InvoicingSection';
import InventorySection from './sections/InventorySection';
import CRMSection from './sections/CRMSection';
import ClosingSection from './sections/ClosingSection';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import RefundPolicy from './pages/RefundPolicy';
import Security from './pages/Security';

function HomePage() {
  return (
    <>
      <HeroSection />
      <BentoSection />
      <RealWorldSection />
      <InvoicingSection />
      <InventorySection />
      <CRMSection />
      <ClosingSection />
    </>
  );
}

function App() {
  // Preload critical resources
  useEffect(() => {
    // Preload hero background image
    const img = new Image();
    img.src = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80';
  }, []);

  return (
    <div className="relative bg-dark min-h-screen">
      {/* Noise overlay - static */}
      <div className="noise-overlay" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content - using relative positioning with proper spacing */}
      <main className="relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/refunds" element={<RefundPolicy />} />
          <Route path="/security" element={<Security />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
