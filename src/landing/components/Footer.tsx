import { Num } from '../../components/Num';

export const Footer = () => (
  <footer className="foot"><div className="wrap foot-in"><div><a className="logo light" href="#top">Highway Fitterman</a><p>Emergency roadside and workshop marketplace for Ghanaian drivers.</p>
    <p><b>24/7 roadside emergency line</b><br /><Num>+233 (0) 302 999 444</Num></p></div>
    {[['Coverage', ['Greater Accra & Tema', 'Kumasi & Ashanti', 'Takoradi / Western']], ['Network', ['Certified artisans', 'Pricing benchmarks', 'Workshop portal']], ['Payments', ['MTN Mobile Money', 'Telecel Cash', 'GhIPSS bank transfer']]].map(([h, l]) => <div key={h as string}><b>{h as string}</b><ul>{(l as string[]).map((x) => <li key={x}>{x}</li>)}</ul></div>)}</div>
    <div className="wrap legal">© 2026 Highway Fitterman</div></footer>);
