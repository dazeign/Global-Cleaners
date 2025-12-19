import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactCard() {
  return (
    <div className="animate-fade-in-delay-2">
      <div className="bg-white rounded-xl p-4 border-2 border-warm-gold shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-gold/5 to-transparent pointer-events-none"></div>
        
        <h3 className="font-helvetica font-bold text-lg text-ocean-blue mb-3 relative z-10">
          Kontakt
        </h3>
        
        <div className="space-y-2.5 relative z-10">
          <a 
            href="tel:01638075088"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-ocean-blue flex items-center justify-center group-hover:bg-warm-gold transition-colors duration-200">
              <Phone size={14} className="text-white group-hover:text-ocean-blue" />
            </div>
            <div>
              <p className="font-helvetica text-[10px] text-gray-500">Telefon</p>
              <p className="font-helvetica font-semibold text-sm text-ocean-blue group-hover:text-warm-gold transition-colors">
                0163 8075088
              </p>
            </div>
          </a>
          
          <a 
            href="mailto:info@globalcleaners.de"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-ocean-blue flex items-center justify-center group-hover:bg-warm-gold transition-colors duration-200">
              <Mail size={14} className="text-white group-hover:text-ocean-blue" />
            </div>
            <div>
              <p className="font-helvetica text-[10px] text-gray-500">E-Mail</p>
              <p className="font-helvetica font-semibold text-sm text-ocean-blue group-hover:text-warm-gold transition-colors">
                info@globalcleaners.de
              </p>
            </div>
          </a>
          
          <a 
            href="https://www.globalcleaners.de"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-ocean-blue flex items-center justify-center group-hover:bg-warm-gold transition-colors duration-200">
              <svg className="w-[14px] h-[14px] text-white group-hover:text-ocean-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <div>
              <p className="font-helvetica text-[10px] text-gray-500">Website</p>
              <p className="font-helvetica font-semibold text-sm text-ocean-blue group-hover:text-warm-gold transition-colors">
                www.globalcleaners.de
              </p>
            </div>
          </a>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-ocean-blue flex items-center justify-center">
              <MapPin size={14} className="text-white" />
            </div>
            <div>
              <p className="font-helvetica text-[10px] text-gray-500">Servicegebiet</p>
              <p className="font-helvetica font-semibold text-sm text-ocean-blue">
                Deutschland
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
