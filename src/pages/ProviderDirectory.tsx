import { useMemo, useState } from 'react';
import { Icon } from '../components/Icon';
import { ProviderCard } from '../components/ProviderCard';
import { AREA_FILTERS, BRANDS, PROVIDERS } from '../data/providers';
import { AppLayout } from '../layout/AppLayout';
import s from './styles/ProviderDirectory.module.css';

type Kind = 'all' | 'mobile' | 'workshop';
const TABS: [Kind, string][] = [['all', 'All'], ['mobile', 'Mobile'], ['workshop', 'Workshops']];

export function ProviderDirectory() {
  const [q, setQ] = useState(''); const [area, setArea] = useState(AREA_FILTERS[0]); const [kind, setKind] = useState<Kind>('all'); const [brands, setBrands] = useState<string[]>([]);
  const matched = useMemo(() => PROVIDERS.filter((p) => {
    const text = [p.name, p.role, p.location, ...p.tags].join(' ').toLowerCase();
    return (!q || text.includes(q.toLowerCase())) && (area === AREA_FILTERS[0] || p.areas.includes(area)) && (!brands.length || brands.some((b) => p.brands.includes(b)));
  }), [q, area, brands]);
  const shown = matched.filter((p) => kind === 'all' || p.kind === kind);
  const count = (k: Kind) => matched.filter((p) => k === 'all' || p.kind === k).length;
  const toggle = (b: string) => setBrands(brands.includes(b) ? brands.filter((x) => x !== b) : [...brands, b]);
  const clear = () => { setQ(''); setArea(AREA_FILTERS[0]); setKind('all'); setBrands([]); };

  return (
    <AppLayout>
      <div className={s.page}>
        <section className={s.filters} aria-label="Filters">
          <div className={s.head}><h1><Icon n="nav" size={22} />Accra &amp; Greater Metros</h1><span className={s.count}>{PROVIDERS.length} active technicians</span></div>
          <p className={s.intro}>Find certified Ghanaian mechanics &amp; workshops ready for rapid dispatch or bay booking.</p>
          <div className={s.search}><Icon n="search" /><input type="search" aria-label="Search providers" placeholder="Search by name, fault, or landmark" value={q} onChange={(e) => setQ(e.target.value)} /></div>
          <div className={s.chips} role="group" aria-label="Area">{AREA_FILTERS.map((a) => <button key={a} className={s.chip} aria-pressed={area === a} onClick={() => setArea(a)}>{a}</button>)}</div>
          <div className={s.tabs} role="tablist">{TABS.map(([k, l]) => <button key={k} role="tab" aria-selected={kind === k} className={s.tab} onClick={() => setKind(k)}>{l} ({count(k)})</button>)}</div>
          <div className={s.brandHead}><span>Car brand expertise</span><span className={s.hint}>Tap to match</span></div>
          <div className={s.chips} role="group" aria-label="Car brand">{BRANDS.map((b) => <button key={b} className={s.chip} aria-pressed={brands.includes(b)} onClick={() => toggle(b)}><Icon n="shield" size={16} />{b}</button>)}</div>
        </section>
        <section className={s.cards} aria-live="polite">
          {shown.map((p) => <ProviderCard key={p.id} p={p} />)}
          {!shown.length && <div className={s.empty}><b>No providers match these filters.</b><button className={s.clear} onClick={clear}>Clear filters</button></div>}
          <aside className={s.guarantee}><span className={s.gIcon}><Icon n="shield" size={26} /></span><div><b>Highway Fitterman Fair Pricing &amp; Repair Guarantee</b><p>All labor &amp; verified parts are backed by a Highway Fitterman 14-day warranty. All invoices are issued in Ghana Cedi (GH₵) with instant MTN MoMo, Telecel Cash, and secure card escrow support.</p></div></aside>
        </section>
      </div>
    </AppLayout>);
}
