import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Icon } from '../components/Icon';
import { digitCount, PhoneField } from '../components/forms/PhoneField';
import { ACCOUNT_TYPES, AREAS } from '../data/accountTypes';
import { AuthLayout } from '../layout/AuthLayout';

export function Signup() {
  const nav = useNavigate(); const [type, setType] = useState(0); const [f, setF] = useState({ name: '', phone: '', area: '', pin: '', ref: '', agree: false });
  const set = (p: Partial<typeof f>) => setF({ ...f, ...p }); const ok = f.name.trim().length > 1 && digitCount(f.phone) >= 9 && f.area && f.agree;
  return (
    <AuthLayout wide title="Join Ghana's trusted repair & roadside network." points={['Choose how you want to use Highway Fitterman', 'All payments held in escrow until work is inspected', 'Instant MoMo payouts for artisans, every Friday']}>
      <div><span className="pill ok">Verified roadside network</span><h1 className="ah">Join Highway Fitterman</h1><p className="sub">Choose how you want to use Ghana's trusted automotive repair &amp; roadside network.</p></div>
      <fieldset className="types"><legend>Select account type</legend>{ACCOUNT_TYPES.map(([k, t, s, d, ic], i) =>
        <label key={k} className={'type' + (type === i ? ' on' : '')}><input type="radio" name="type" checked={type === i} onChange={() => setType(i)} />
          <span className="row-i top"><span className="ticon"><Icon n={ic} size={26} /></span><span><b>{t}</b>{i === 0 && <em className="pill warn">Popular</em>}<small>{s}</small></span><span className="tick">{type === i && <Icon n="check" size={16} />}</span></span>
          <span className="desc">{d}</span></label>)}</fieldset>
      <div className="note warn"><Icon n="shield" size={26} /><span><b>Bank of Ghana &amp; MoMo protected</b><br />All payments held in escrow until technician work is inspected.</span></div>
      <div className="cols">
        <div className="field"><label htmlFor="nm">Full name <small>As on Ghana Card</small></label><div className="inp"><input id="nm" autoComplete="name" placeholder="Kwame Mensah" value={f.name} onChange={(e) => set({ name: e.target.value })} /></div></div>
        <div className="field"><label htmlFor="sp">Ghana mobile number (MoMo ready)</label><PhoneField id="sp" value={f.phone} onChange={(v) => set({ phone: v })} /></div>
        <div className="field"><label htmlFor="ar">Residential locality</label><div className="inp"><select id="ar" value={f.area} onChange={(e) => set({ area: e.target.value })}><option value="">Select neighborhood</option>{AREAS.map((a) => <option key={a}>{a}</option>)}</select></div></div>
        <div className="field"><label htmlFor="gc">Ghana Card PIN <small>Optional · Instant Gold Badge</small></label><div className="inp"><input id="gc" placeholder="GHA-712345678-9" value={f.pin} onChange={(e) => set({ pin: e.target.value.toUpperCase() })} /></div></div>
        <div className="field full"><label htmlFor="rf">Referral or garage code <small>Optional</small></label><div className="inp"><input id="rf" placeholder="E.G. ACCRA50" value={f.ref} onChange={(e) => set({ ref: e.target.value.toUpperCase() })} /></div></div>
      </div>
      <label className="agree"><input type="checkbox" checked={f.agree} onChange={(e) => set({ agree: e.target.checked })} />I agree to Highway Fitterman's <a href="#charter">Fair-Pricing Charter</a>, Escrow Guarantee, and <a href="#terms">Terms of Service</a>.</label>
      <button className="cta" disabled={!ok} onClick={() => nav('/verify', { state: { phone: '+233 ' + f.phone.trim() } })}><span className="row-i"><Icon n="arrow" />{ACCOUNT_TYPES[type][5]}</span></button>
      <p className="foot-note">Already registered on Highway Fitterman? <Link to="/login">Log In</Link></p>
      <ul className="trust"><li>20m Accra response</li><li>Escrow warranted</li><li>MTN / Telecel MoMo</li></ul>
    </AuthLayout>);
}
