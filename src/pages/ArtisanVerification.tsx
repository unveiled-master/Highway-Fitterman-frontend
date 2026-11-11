import { useState } from 'react';
import { FileField } from '../components/forms/FileField';
import { digitCount, PhoneField } from '../components/forms/PhoneField';
import { Icon } from '../components/Icon';
import { Stepper } from '../components/Stepper';
import { EXPERIENCE, LANDMARKS, NETWORKS, TRADES, VERIFY_STEPS } from '../data/artisanVerification';
import { AuthLayout } from '../layout/AuthLayout';
import s from './styles/ArtisanVerification.module.css';

const KEY = 'artisanVerificationDraft';
const EMPTY = { pin: '', trade: '', guild: '', years: '', base: '', radius: 10, rapid: false, network: 'mtn', wallet: '' };
type Form = typeof EMPTY;
const load = (): Form => { try { return { ...EMPTY, ...JSON.parse(localStorage.getItem(KEY) || '{}') }; } catch { return EMPTY; } };

export function ArtisanVerification() {
  const [f, setF] = useState<Form>(load); const [card, setCard] = useState<File | null>(null); const [cert, setCert] = useState<File | null>(null);
  const [msg, setMsg] = useState('');
  const set = (p: Partial<Form>) => { setF({ ...f, ...p }); setMsg(''); };
  const pinOk = /^GHA-\d{9}-\d$/.test(f.pin);
  const ready = pinOk && !!card && !!f.trade && f.base.trim().length > 2 && digitCount(f.wallet) >= 9;
  const saveDraft = () => { localStorage.setItem(KEY, JSON.stringify(f)); setMsg('Draft saved on this device. Files must be chosen again.'); };
  const submit = () => { localStorage.setItem(KEY, JSON.stringify(f)); setMsg('Details saved on this device. Sending them to Highway Fitterman for review will be connected to the server next.'); };

  return (
    <AuthLayout wide title="Get verified. Get dispatched." points={['Verified artisans receive priority roadside jobs', 'Weekly Friday MoMo payouts', 'A fair-pricing pledge protects you and your customers']}>
      <Stepper steps={VERIFY_STEPS} />
      <div><span className="pill warn">Stage 2 of 3: Regulatory check</span><h1 className="ah">Artisan Verification</h1><p className="sub">Verify your credentials to receive roadside emergency dispatches and guaranteed weekly Friday MoMo payouts.</p></div>
      <div className={s.banner}><span className={s.bIcon}><Icon n="trend" size={26} /></span><div><small>Verified provider earnings</small><b className="num">GH₵3,800 - GH₵7,200 / month</b><p>Average weekly take-home with transparent work orders and zero extortion disputes across Greater Accra.</p></div></div>

      <section className={s.sec}><h2 className={s.secH}><Icon n="doc" />1. National Identity<span className={`pill slate ${s.tagR}`}>NIA Live</span></h2>
        <div className="field"><label htmlFor="pin">Ghana Card PIN</label>
          <div className="inp"><input id="pin" placeholder="GHA-724910294-8" value={f.pin} onChange={(e) => set({ pin: e.target.value.toUpperCase() })} aria-invalid={!!f.pin && !pinOk} />{pinOk && <Icon n="check" size={20} />}</div>
          <p className="hint"><Icon n="lock" size={18} />Checked against the National Identification Authority. Format: GHA-123456789-0</p></div>
        <FileField id="cardscan" label="Ghana Card document scan (front and back)" accept="image/*,application/pdf" file={card} onFile={setCard} />
      </section>

      <section className={s.sec}><h2 className={s.secH}><Icon n="wrench" />2. Trade Guild &amp; Craft<span className={`pill slate ${s.tagR}`}>Skill check</span></h2>
        <div role="radiogroup" aria-label="Primary trade specialisation" className={s.trades}>{TRADES.map(([k, t, d, ic]) =>
          <label key={k} className={`${s.trade} ${f.trade === k ? s.on : ''}`}><input type="radio" name="trade" checked={f.trade === k} onChange={() => set({ trade: k })} /><Icon n={ic} /><b>{t}</b><small>{d}</small></label>)}</div>
        <div className="field"><label htmlFor="guild">Artisan association / guild registry</label><div className="inp"><input id="guild" placeholder="Ghana National Association of Garages" value={f.guild} onChange={(e) => set({ guild: e.target.value })} /></div></div>
        <div className={s.two}>
          <div className="field"><label htmlFor="yrs">Field experience</label><div className="inp"><select id="yrs" value={f.years} onChange={(e) => set({ years: e.target.value })}><option value="">Select</option>{EXPERIENCE.map((y) => <option key={y}>{y}</option>)}</select></div></div>
          <FileField id="cert" label="Guild ID / certificate" accept="image/*,application/pdf" file={cert} onFile={setCert} />
        </div>
      </section>

      <section className={s.sec}><h2 className={s.secH}><Icon n="pin" />3. Service Hub &amp; Range<span className={`pill warn ${s.tagR}`}>GPS geofenced</span></h2>
        <div className="field"><label htmlFor="base">Primary dispatch base</label><div className="inp"><Icon n="garage" /><input id="base" placeholder="Spintex Light Industrial Area &amp; Motorway" value={f.base} onChange={(e) => set({ base: e.target.value })} /></div>
          <div className={s.lm}>{LANDMARKS.map((l) => <button type="button" key={l} className={s.chip} onClick={() => set({ base: l })}>{l}</button>)}</div></div>
        <div className="field"><label htmlFor="rad">Maximum rapid response radius<b className={`num ${s.km}`}>{f.radius} km</b></label>
          <input id="rad" className={s.range} type="range" min={5} max={25} value={f.radius} onChange={(e) => set({ radius: Number(e.target.value) })} />
          <div className={s.scale}><span>5 km (Local streets)</span><span>15 km (Sub-metro)</span><span>25 km (Greater Accra)</span></div></div>
        <div className={s.toggleRow}><span className={s.van}><Icon n="van" size={22} /></span><span><b>Equipped mobile rapid unit</b><small>Carrying a mobile hydraulic jack, an OBD-II scanner and jump-start gear</small></span>
          <button type="button" role="switch" aria-checked={f.rapid} aria-label="Equipped mobile rapid unit" className={s.switch} onClick={() => set({ rapid: !f.rapid })} /></div>
      </section>

      <section className={s.sec}><h2 className={s.secH}><Icon n="wallet" />4. MoMo Friday Payout<span className={`pill warn ${s.tagR}`}>Auto 17:00 GMT</span></h2>
        <div role="radiogroup" aria-label="Mobile money network" className={s.nets}>{NETWORKS.map(([k, n, d]) =>
          <label key={k} className={`${s.net} ${f.network === k ? s.on : ''}`}><input type="radio" name="net" checked={f.network === k} onChange={() => set({ network: k })} /><b>{n}</b><small>{d}</small></label>)}</div>
        <div className="field"><label htmlFor="wal">Registered MoMo wallet number</label><PhoneField id="wal" value={f.wallet} onChange={(v) => set({ wallet: v })} /></div>
        <div className="note"><Icon n="shield" size={20} />The wallet owner's name must match your Ghana Card identity.</div>
      </section>

      <div className="note"><Icon n="check" size={22} /><span><b>Highway Fitterman Fair Pricing &amp; Integrity Pledge</b><br />Dispatched artisans agree to standard spare parts markup thresholds and polite road etiquette.</span></div>
      <button className="cta" disabled={!ready} onClick={submit}><span className="row-i"><Icon n="shield" />Submit verification for approval</span></button>
      <button className="alt" onClick={saveDraft}><Icon n="doc" />Save draft &amp; continue later</button>
      {msg && <p role="status" className="sub">{msg}</p>}
    </AuthLayout>);
}
