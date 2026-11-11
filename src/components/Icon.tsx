const P: Record<string, string> = {
  search: 'M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.3-4.3', star: 'M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z',
  wrench: 'M14.7 6.3a4 4 0 005 5L10 21a2.1 2.1 0 01-3-3z', van: 'M2 7h12v9H2zM14 10h4l3 3v3h-7M6 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z',
  bolt: 'M13 3L5 14h6l-1 7 8-11h-6z', nav: 'M12 3l9 9-9 9-9-9zM8 12h6M12 9l3 3-3 3', calendar: 'M4 6h16v14H4zM4 10h16M8 3v4M16 3v4',
  trend: 'M3 17l6-6 4 4 8-8M15 7h6v6', doc: 'M6 3h9l4 4v14H6zM14 3v5h5', snow: 'M12 3v18M4 7.5l16 9M20 7.5l-16 9', circle: 'M12 21a9 9 0 100-18 9 9 0 000 18zM12 15a3 3 0 100-6 3 3 0 000 6z',
  arrow: 'M5 12h14M13 6l6 6-6 6', back: 'M19 12H5M11 6l-6 6 6 6', shield: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z',
  check: 'M5 12l4 4 10-10', chat: 'M4 5h16v11H9l-5 4z', lock: 'M6 11h12v9H6zM8 11V8a4 4 0 018 0v3', user: 'M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c0-4 3.6-6 8-6s8 2 8 6',
  clock: 'M12 21a9 9 0 100-18 9 9 0 000 18zM12 7v5l3 2', edit: 'M4 20l4-1 11-11-3-3L5 16z', chevron: 'M6 9l6 6 6-6',
  car: 'M5 16v-5l2-5h10l2 5v5M3 16h18M7 16v3M17 16v3', briefcase: 'M4 8h16v11H4zM9 8V5h6v3', garage: 'M3 10l9-6 9 6v10H3zM7 20v-6h10v6',
  pin: 'M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11zM12 12a2 2 0 100-4 2 2 0 000 4z', finger: 'M12 4a6 6 0 00-6 6v3M9 18c1-2 1-4 1-8a2 2 0 014 0c0 4 0 6-1.5 9M18 12v1a8 8 0 01-2 5',
  sliders: 'M4 6h10M18 6h2M4 12h2M10 12h10M4 18h12M20 18h0', refresh: 'M20 12a8 8 0 11-3-6M20 4v5h-5', back2: 'M9 5h11v14H9l-6-7zM12 9l5 6M17 9l-5 6',
  phone: 'M7 3h10v18H7zM11 18h2', wallet: 'M3 7h16v12H3zM3 7l12-3v3M15 13h2', voice: 'M5 4l4 1 1 4-2 2a12 12 0 005 5l2-2 4 1 1 4c-9 1-17-7-15-15z',
};
export const Icon = ({ n, size = 20 }: { n: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={P[n]} /></svg>);
