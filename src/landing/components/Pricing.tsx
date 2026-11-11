import { Num } from '../../components/Num';
import { gh } from '../../data/format';
import { PRICES } from '../../data/landing';

export const Pricing = () => (
  <section className="wrap sect split"><div><span className="pill warn">Fair price benchmark</span><h2>No roadside extortion. Fixed benchmark rates.</h2>
    <p className="lead">Every job is quoted against a published benchmark, so you can see when a price is out of line before you agree to it.</p></div>
    <div className="card"><span className="lbl">Common roadside price comparison</span>
      {PRICES.map(([t, s, p]) => <div className="row" key={t}><div><b>{t}</b><small>{s}</small></div><Num>{gh(p)}</Num></div>)}</div></section>);
