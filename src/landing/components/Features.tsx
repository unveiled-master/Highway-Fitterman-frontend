import { SectionHead } from '../../components/SectionHead';
import { FEATURES } from '../../data/landing';

export const Features = () => (
  <section className="wrap sect"><SectionHead kicker="Built for Ghanaian roads" title="Engineering trust into every Ghana Cedi spent." sub="Traditional roadside breakdowns in Ghana usually mean arbitrary prices, no proof of work and no recourse. Highway Fitterman changes that." />
    <div className="grid4">{FEATURES.map(([t, d]) => <article className="card" key={t}><h3>{t}</h3><p>{d}</p></article>)}</div></section>);
