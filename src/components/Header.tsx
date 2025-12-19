import { Phone, Mail } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ocean-blue text-white px-6 py-3 animate-fade-in">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-warm-gold rounded-full flex items-center justify-center font-helvetica font-bold text-ocean-blue text-lg">
            G
          </div>
          <h1 className="font-helvetica font-black text-base sm:text-xl">Global Cleaners</h1>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href="tel:01638075088"
            className="flex items-center gap-1 sm:gap-1.5 hover:text-warm-gold transition-colors duration-200"
          >
            <Phone size={16} className="flex-shrink-0" />
            <span className="font-helvetica font-medium text-xs sm:text-sm whitespace-nowrap">
              0163 8075088
            </span>
          </a>
          <a
            href="mailto:info@globalcleaners.de"
            className="flex items-center gap-1 sm:gap-1.5 hover:text-warm-gold transition-colors duration-200"
          >
            <Mail size={16} className="flex-shrink-0" />
            <span className="font-helvetica font-medium text-xs sm:text-sm hidden sm:inline">
              info@globalcleaners.de
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
