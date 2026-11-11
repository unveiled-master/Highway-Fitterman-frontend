import { Num } from '../../components/Num';
import { SectionHead } from '../../components/SectionHead';
import { gh } from '../../data/format';
import { PROS } from '../../data/landing';

export const Artisans = () => (
  <section className="wrap sect"><SectionHead title="Spotlight: top rated artisans" />
    <div className="grid3">{PROS.map(([n, t, s, r, p]) => <article className="card" key={n}>
      <div className="avatar">{n[0]}</div><h3>{n}</h3>
      <div className="tags"><span className={'pill ' + (t === 'Workshop' ? 'slate' : 'warn')}>{t}</span><span className="pill ok">Verified artisan</span></div>
      <p>{s}</p><small>★ {r}</small>
      <div className="row"><span>From <Num>{gh(p)}</Num></span><button className="btn dark">Request</button></div></article>)}</div></section>);
