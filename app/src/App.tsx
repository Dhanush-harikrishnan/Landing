import { useEffect } from 'react';

import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import BentoSection from './sections/BentoSection';
import RealWorldSection from './sections/RealWorldSection';
import InvoicingSection from './sections/InvoicingSection';
import InventorySection from './sections/InventorySection';
import CRMSection from './sections/CRMSection';
import ClosingSection from './sections/ClosingSection';

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
        <HeroSection />
        <BentoSection />
        <RealWorldSection />
        <InvoicingSection />
        <InventorySection />
        <CRMSection />
        <ClosingSection />
      </main>
    </div>
  );
}

export default App;
