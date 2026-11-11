import { SectionHead } from '../../components/SectionHead';
import { STEPS } from '../../data/landing';

export const Steps = () => (
  <section className="band"><div className="wrap sect"><SectionHead title="How Highway Fitterman clears your breakdown in 4 steps" sub="From pinning your location on the Accra–Kumasi highway to driving away with a warranty." />
    <ol className="grid4 steps">{STEPS.map(([t, d], i) => <li key={t} className={'card' + (i === 3 ? ' active' : '')}><span className="step num">0{i + 1}</span><h3>{t}</h3><p>{d}</p></li>)}</ol></div></section>);
