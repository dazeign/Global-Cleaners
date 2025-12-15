import { Home, Building2, Sparkles, Droplets, Wind, Trash2 } from 'lucide-react';

const services = [
  { icon: Home, label: 'Wohnungs- & Hausreinigung' },
  { icon: Building2, label: 'Büro- & Gewerbereinigung' },
  { icon: Droplets, label: 'Fenster- & Glasreinigung' },
  { icon: Wind, label: 'Treppenhausreinigung' },
  { icon: Trash2, label: 'Bauendreinigung' },
  { icon: Sparkles, label: 'Sonderreinigungen' },
];

export default function ServicesGrid() {
  return (
    <div className="animate-fade-in-delay-2">
      <h3 className="font-helvetica font-bold text-lg text-ocean-blue mb-3">Unsere Leistungen</h3>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-gray-100"
          >
            <service.icon className="text-ocean-blue mb-1.5" size={22} strokeWidth={1.5} />
            <p className="font-helvetica text-xs font-medium text-charcoal leading-tight">{service.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
