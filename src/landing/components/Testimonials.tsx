import { SectionHead } from '../../components/SectionHead';
import { QUOTES } from '../../data/landing';

export const Testimonials = () => (
  <section className="band"><div className="wrap sect"><SectionHead title="Stories from drivers on the road" />
    <div className="grid3">{QUOTES.map(([q, n, r]) => <figure className="card" key={n}><blockquote>{q}</blockquote><figcaption><b>{n}</b><small>{r}</small></figcaption></figure>)}</div></div></section>);
