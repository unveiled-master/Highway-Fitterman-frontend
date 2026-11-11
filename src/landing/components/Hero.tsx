import { useState } from 'react';
import { Num } from '../../components/Num';
import { SERVICES, CHIPS } from '../../data/landing';

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
