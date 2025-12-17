import { Check } from "lucide-react";
import { useState, useEffect } from "react";

const images = [
  "/images/image.png",
  "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=80",
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
  "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&q=80",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[55vh] animate-fade-in-delay-1">
      {/* Left Panel - Hero Content */}
      <div className="lg:col-span-2 flex flex-col justify-center px-4 lg:px-8">
        <h2 className="font-helvetica font-black text-3xl lg:text-4xl text-ocean-blue leading-tight mb-4">
          Ihr professioneller Reinigungsservice
        </h2>

        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-warm-gold flex items-center justify-center flex-shrink-0">
              <Check size={14} className="text-ocean-blue" strokeWidth={3} />
            </div>
            <p className="font-helvetica text-base text-charcoal">
              Strahlende Sauberkeit für Zuhause & Büro
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-warm-gold flex items-center justify-center flex-shrink-0">
              <Check size={14} className="text-ocean-blue" strokeWidth={3} />
            </div>
            <p className="font-helvetica text-base text-charcoal">
              Gründlich, zuverlässig & fair preiswert
            </p>
          </div>
        </div>

        <button
          onClick={() => (window.location.href = "tel:0123456789")}
          className="bg-vibrant-red text-white font-helvetica font-semibold text-base px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl w-fit"
        >
          Jetzt unverbindliches Angebot anfordern!
        </button>
      </div>
      {/* Right Panel - Hero Image Slideshow */}
      <div className="lg:col-span-1 relative overflow-hidden rounded-2xl min-h-[300px]">
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-blue/40 via-transparent to-ocean-blue/60 z-10"></div>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Cleaning service ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{ objectPosition: 'center center' }}
          />
        ))}

        {/* Slideshow indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImage ? "bg-warm-gold w-6" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
