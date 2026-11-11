import { useState } from 'react';
import { Link } from 'react-router';

/** Cedi formatting per DESIGN.md: "GH₵450.00", no space, Space Grotesk via .num */
export const gh = (n: number) => `GH₵${n.toFixed(2)}`;
const Num = ({ children }: { children: React.ReactNode }) => <span className="num">{children}</span>;
const Head = ({ kicker, title, sub }: { kicker?: string; title: string; sub?: string }) => (
  <div className="head">{kicker && <span className="kicker">{kicker}</span>}<h2>{title}</h2>{sub && <p>{sub}</p>}</div>);

export const Header = () => (
  <header className="bar"><div className="wrap bar-in">
    <a className="logo" href="#top">Highway Fitterman<small>Roadside &amp; Mechanics</small></a>
    <nav>{['How it works', 'Services', 'For mechanics', 'Safety'].map((l) => <a key={l} href="#top">{l}</a>)}</nav>
    <div className="bar-cta"><button className="btn sos">SOS Dispatch</button><Link className="btn ghost" to="/login">Sign in / Register</Link></div>
  </div></header>);

const SERVICES: [string, string][] = [['Dead battery', 'Jump start or replace'], ['Flat tyre', 'Change or repair'], ['Engine trouble', 'Diagnose on site'], ['Tow needed', 'Flatbed or hook']];
const CHIPS = ['Near Circle Interchange', 'Spintex Road Shell', 'Kasoa Toll Booth'];

export function Hero() {
  const [tab, setTab] = useState<'road' | 'shop'>('road'); const [svc, setSvc] = useState(0); const [loc, setLoc] = useState('');
  return (
    <section className="wrap hero" id="top">
      <div>
        <span className="pill ok">Accra · Tema · Kumasi live corridors</span>
        <h1>Ghana's most trusted mechanic &amp; roadside network.</h1>
        <p className="lead">Verified mobile mechanics and certified workshops at your fingertips across Accra, Tema and Kumasi. Transparent Cedi quotes, escrow protection and MoMo payments.</p>
        <ul className="stats">{[['1,400+', 'Verified mechanics'], ['GH₵0', 'Extortion, fixed rates'], ['~20 min', 'Average response']].map(([a, b]) => <li key={b}><Num>{a}</Num><span>{b}</span></li>)}</ul>
      </div>
      <div className="card lift">
        <div className="tabs">{([['road', 'Immediate roadside'], ['shop', 'Book workshop']] as const).map(([k, l]) => <button key={k} className={tab === k ? 'on' : ''} onClick={() => setTab(k)}>{l}</button>)}</div>
        <label>Current vehicle location<input value={loc} onChange={(e) => setLoc(e.target.value)} placeholder="Search a landmark or road" /></label>
        <div className="chips">{CHIPS.map((c) => <button key={c} className="chip" onClick={() => setLoc(c)}>{c}</button>)}</div>
        <span className="lbl">{tab === 'road' ? 'Select emergency issue' : 'Select service'}</span>
        <div className="grid2">{SERVICES.map(([t, s], i) => <button key={t} className={'opt' + (svc === i ? ' on' : '')} onClick={() => setSvc(i)}><b>{t}</b><small>{s}</small></button>)}</div>
        <div className="est"><span>Official benchmark rate</span><Num>GH₵70 - 90</Num></div>
        <button className="btn sos wide">{tab === 'road' ? 'Dispatch nearest mobile van' : 'Find a workshop slot'}</button>
      </div>
    </section>);
}

export const TrustStrip = () => (
  <section className="strip"><div className="wrap strip-in">{['Escrow guarantee', '14-day warranty', 'Certified artisans', 'Abossey Okai OEM parts'].map((t) => <span key={t}>{t}</span>)}</div></section>);

const FEATURES = [
  ['GPS & GhanaPost dispatch', 'Share your live pin or GhanaPost code. The nearest verified mechanic is matched and tracked to you.'],
  ['Itemised & versioned quotes', 'Every labour and parts line is shown before work starts. Revised quotes need your approval again.'],
  ['Escrow fair-price protection', 'Your payment is held until you confirm the job is done. Disputes are reviewed by our team.'],
  ['Instant MoMo & GhIPSS', 'Pay by MTN MoMo, Telecel Cash or bank transfer, and get a digital receipt in seconds.'],
];
export const Features = () => (
  <section className="wrap sect"><Head kicker="Built for Ghanaian roads" title="Engineering trust into every Ghana Cedi spent." sub="Traditional roadside breakdowns in Ghana usually mean arbitrary prices, no proof of work and no recourse. Highway Fitterman changes that." />
    <div className="grid4">{FEATURES.map(([t, d]) => <article className="card" key={t}><h3>{t}</h3><p>{d}</p></article>)}</div></section>);

const STEPS = [['Request in 60s', 'Drop your pin, pick the problem, send. No account form while you are stranded.'], ['Auto-match or browse', 'We offer the job to the nearest verified mechanics, or you can browse and choose.'], ['Digital quote & approval', 'Review the itemised quote on your phone and approve before any paid work.'], ['Drive away protected', 'Confirm the fix, pay safely and keep a 14-day warranty on the repair.']];
export const Steps = () => (
  <section className="band"><div className="wrap sect"><Head title="How Highway Fitterman clears your breakdown in 4 steps" sub="From pinning your location on the Accra–Kumasi highway to driving away with a warranty." />
    <ol className="grid4 steps">{STEPS.map(([t, d], i) => <li key={t} className={'card' + (i === 3 ? ' active' : '')}><span className="step num">0{i + 1}</span><h3>{t}</h3><p>{d}</p></li>)}</ol></div></section>);

const PRICES: [string, string, number][] = [['Emergency jump start & alternator check', 'Mobile mechanic, on-site', 95], ['On-site brake pad replacement (pair)', 'Certified artisan, parts included', 340], ['Overheat diagnosis & coolant flush', 'Workshop or mobile', 210]];
export const Pricing = () => (
  <section className="wrap sect split"><div><span className="pill warn">Fair price benchmark</span><h2>No roadside extortion. Fixed benchmark rates.</h2>
    <p className="lead">Every job is quoted against a published benchmark, so you can see when a price is out of line before you agree to it.</p></div>
    <div className="card"><span className="lbl">Common roadside price comparison</span>
      {PRICES.map(([t, s, p]) => <div className="row" key={t}><div><b>{t}</b><small>{s}</small></div><Num>{gh(p)}</Num></div>)}</div></section>);

const PROS = [['Kwame Mensah', 'Mobile mechanic', 'Toyota, Hyundai · diagnostics', '4.9 (238 jobs)', 70], ['Precision Auto Works', 'Workshop', 'Mercedes, BMW · Spintex Road', '4.8 (412 jobs)', 120], ['Koh Owusu', 'Mobile mechanic', 'Auto electrics · key programming', '4.7 (176 jobs)', 90]] as const;
export const Artisans = () => (
  <section className="wrap sect"><Head title="Spotlight: top rated artisans" />
    <div className="grid3">{PROS.map(([n, t, s, r, p]) => <article className="card" key={n}>
      <div className="avatar">{n[0]}</div><h3>{n}</h3>
      <div className="tags"><span className={'pill ' + (t === 'Workshop' ? 'slate' : 'warn')}>{t}</span><span className="pill ok">Verified artisan</span></div>
      <p>{s}</p><small>★ {r}</small>
      <div className="row"><span>From <Num>{gh(p)}</Num></span><button className="btn dark">Request</button></div></article>)}</div></section>);

const QUOTES = [['The quote was on my phone before he touched the car. No haggling at the roadside.', 'Dr. Anthony Boateng', 'Airport Hills, Accra'], ['Alternator died on the Kumasi highway. Help arrived fast and the price matched the benchmark.', 'Maria Ahua', 'Kumasi'], ['I pay by MoMo and keep the receipt for my fleet records. Warranty claim took one call.', 'Emmanuel Asare', 'Logistics manager, Tema']];
export const Testimonials = () => (
  <section className="band"><div className="wrap sect"><Head title="Stories from drivers on the road" />
    <div className="grid3">{QUOTES.map(([q, n, r]) => <figure className="card" key={n}><blockquote>{q}</blockquote><figcaption><b>{n}</b><small>{r}</small></figcaption></figure>)}</div></div></section>);

export const JoinCta = () => (
  <section className="wrap"><div className="join"><div><span className="pill warn">For technicians</span><h2>Are you an automotive technician or workshop owner in Ghana?</h2>
    <p>Get verified customer requests across your operating corridor, weekly payouts and dispute protection.</p>
    <div className="tags">{['Weekly MoMo payouts', 'Free SMS job alerts', 'Verified customers only'].map((t) => <span key={t} className="pill dim">{t}</span>)}</div></div>
    <div className="join-btns"><button className="btn sos">Join the Artisan Guild</button><button className="btn ghost light">Workshop portal</button></div></div></section>);

const CORRIDORS = ['N1 Highway (Madina – Tema Motorway)', 'N4 Corridor (Achimota – Nsawam)', 'Kumasi Ring Road & Suame Magazine'];
export const Coverage = () => (
  <section className="wrap sect split"><div><Head title="Active response corridors across Ghana" sub="Our dispatch network concentrates mechanics where breakdowns happen most, with a 20-minute target on major corridors." />
    {CORRIDORS.map((c) => <div className="row" key={c}><b>{c}</b><span className="pill ok">Live</span></div>)}</div>
    <div className="map" role="img" aria-label="Map placeholder: live coverage across Accra"><span className="pill warn">Map goes here</span></div></section>);

export const Footer = () => (
  <footer className="foot"><div className="wrap foot-in"><div><a className="logo light" href="#top">Highway Fitterman</a><p>Emergency roadside and workshop marketplace for Ghanaian drivers.</p>
    <p><b>24/7 roadside emergency line</b><br /><Num>+233 (0) 302 999 444</Num></p></div>
    {[['Coverage', ['Greater Accra & Tema', 'Kumasi & Ashanti', 'Takoradi / Western']], ['Network', ['Certified artisans', 'Pricing benchmarks', 'Workshop portal']], ['Payments', ['MTN Mobile Money', 'Telecel Cash', 'GhIPSS bank transfer']]].map(([h, l]) => <div key={h as string}><b>{h as string}</b><ul>{(l as string[]).map((x) => <li key={x}>{x}</li>)}</ul></div>)}</div>
    <div className="wrap legal">© 2026 Highway Fitterman</div></footer>);
