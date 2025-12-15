import { Check } from 'lucide-react';

const trustPoints = [
  'Professionelle & geschulte Reinigungskräfte',
  'Faire Preise & transparente Angebote',
  'Flexible Termine, auch kurzfristig',
  'Hochwertige, umweltfreundliche Reinigungsmittel',
  '100% Zufriedenheitsgarantie',
];

export default function TrustSignals() {
  return (
    <div className="animate-fade-in-delay-2">
      <h3 className="font-helvetica font-bold text-lg text-ocean-blue mb-3">Warum Sie uns wählen</h3>
      <div className="space-y-2">
        {trustPoints.map((point, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-warm-gold flex items-center justify-center flex-shrink-0 shadow-sm">
              <Check size={12} className="text-ocean-blue" strokeWidth={3} />
            </div>
            <p className="font-helvetica text-xs text-charcoal leading-tight">{point}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
