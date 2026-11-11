export type Provider = {
  id: string; name: string; role: string; initials: string; rating: number; reviews: string;
  kind: 'mobile' | 'workshop'; badge: { label: string; tone: 'green' | 'slate' };
  areas: string[]; location: string; openNote?: string; tags: string[]; brands: string[];
  priceLabel: string; price: number; priceNote: string;
  status: { label: string; sub?: string; icon?: string; tone: 'amber' | 'green' };
  cta: { label: string; icon: string }; aside: 'call' | 'directions';
};

export const AREA_FILTERS = ['All Accra', 'Osu', 'East Legon', 'Spintex', 'Tema', 'Madina'];
export const BRANDS = ['Toyota', 'Hyundai', 'Mercedes-Benz', 'Nissan'];

// Sample data from the design. Replace with GET /providers once the API exposes a listing endpoint.
export const PROVIDERS: Provider[] = [
  { id: 'p1', name: 'Kwame Mensah', role: 'Mobile Auto Tech • Grade A', initials: 'KM', rating: 4.9, reviews: '128 jobs completed', kind: 'mobile', badge: { label: 'GH Certified', tone: 'green' },
    areas: ['Osu'], location: 'Osu & Airport Residential · within 3.2 km', tags: ['Mobile Van', 'Diagnostic Scan', 'Brake Systems', 'Battery/Alternator'], brands: ['Toyota', 'Hyundai'],
    priceLabel: 'Verified rate', price: 60, priceNote: 'inspection · GH₵75.00/hr', status: { label: '~25 mins ETA', icon: 'van', tone: 'amber' }, cta: { label: 'Select Mechanic', icon: 'wrench' }, aside: 'call' },
  { id: 'p2', name: 'Precision Auto Works', role: 'State-of-Art Certified Center', initials: 'PA', rating: 4.8, reviews: '342 verified reviews', kind: 'workshop', badge: { label: 'Physical Garage', tone: 'slate' },
    areas: ['Spintex'], location: 'Spintex Light Industrial Area', openNote: '2 bays open today', tags: ['Full Engine Overhaul', 'AC Regas & Chill', 'Body & Suspension'], brands: ['Mercedes-Benz', 'Hyundai'],
    priceLabel: 'Starting price', price: 100, priceNote: 'full diagnostic scan', status: { label: 'Instant Bay Pass', sub: 'Drive-in or Tow', tone: 'green' }, cta: { label: 'Book Appointment', icon: 'calendar' }, aside: 'directions' },
  { id: 'p3', name: 'Kofi Owusu', role: 'Master Auto Electrician • ECU Lead', initials: 'KO', rating: 5.0, reviews: '89 perfect ratings', kind: 'mobile', badge: { label: 'National Guild', tone: 'green' },
    areas: ['East Legon'], location: 'East Legon / Adjiringanor Corridor', tags: ['Mobile Specialist', 'ECU & Wiring Diagnostics', 'Alternator Rewiring', 'Key Fob / Immobilizer'], brands: ['Toyota', 'Nissan', 'Mercedes-Benz'],
    priceLabel: 'Standard call-out', price: 80, priceNote: 'includes electrical test', status: { label: 'Available Now', icon: 'bolt', tone: 'amber' }, cta: { label: 'Request Electrician', icon: 'bolt' }, aside: 'call' },
];
