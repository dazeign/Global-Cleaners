import Header from './Header';
import HeroSection from './HeroSection';
import ServicesGrid from './ServicesGrid';
import TrustSignals from './TrustSignals';
import ContactCard from './ContactCard';

function Home() {
  return (
    <div className="w-screen bg-warm-white font-helvetica relative">
      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}>
      </div>
      
      {/* Header - 15% */}
      <Header />
      
      {/* Main Content Container */}
      <div className="h-full pt-16 pb-4 px-6 flex flex-col max-w-[1600px] mx-auto">
        {/* Hero Section - 60% */}
        <div className="flex-[0.55] flex items-center">
          <HeroSection />
        </div>
        
        {/* Bottom Section - 25% */}
        <div className="flex-[0.3] grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Services Grid - 35% */}
          <div className="lg:col-span-4">
            <ServicesGrid />
          </div>
          
          {/* Trust Signals - 30% */}
          <div className="lg:col-span-4 flex items-center">
            <TrustSignals />
          </div>
          
          {/* Contact Card - 35% */}
          <div className="lg:col-span-4">
            <ContactCard />
          </div>
        </div>
        
        {/* Footer Tagline */}
        <div className="mt-auto pt-3 text-center animate-fade-in-delay-3">
          <p className="font-helvetica text-xs text-gray-500">
            Sauberkeit, die überzeugt – Wir machen's blitzblank!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
