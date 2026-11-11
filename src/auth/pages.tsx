import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { Icon, Registry, Shell } from './ui';

const Phone = ({ id, value, onChange }: { id: string; value: string; onChange: (v: string) => void }) => (
  <div className="inp"><span className="cc"><i className="flag" />+233</span>
    <input id={id} inputMode="tel" autoComplete="tel-national" placeholder="24 123 4567" value={value} onChange={(e) => onChange(e.target.value.replace(/[^\d ]/g, ''))} /></div>);
const digits = (s: string) => s.replace(/\D/g, '').length;

export function Login() {
  const nav = useNavigate(); const [role, setRole] = useState<'driver' | 'artisan'>('driver'); const [phone, setPhone] = useState(''); const [more, setMore] = useState(false);
  const ok = digits(phone) >= 9;
  return (
    <Shell title="Roadside help is one code away." points={['Verified mechanics on stand-by across Greater Accra', 'Fair escrow quotes in GH₵', 'Instant MoMo payments and a 14-day repair warranty']}>
      <div className="seg" role="tablist">{([['driver', 'Driver / Owner', 'car'], ['artisan', 'Artisan / Shop', 'briefcase']] as const).map(([k, l, i]) =>
        <button key={k} role="tab" aria-selected={role === k} className={role === k ? 'on' : ''} onClick={() => setRole(k)}><Icon n={i} />{l}</button>)}</div>
      <div><span className="pill warn">{role === 'driver' ? 'Driver quick dispatch access' : 'Artisan portal access'}</span>
        <h1 className="ah">Welcome back</h1><p className="sub">Sign in to access rapid roadside dispatch, verified mechanics, or your artisan portal.</p></div>
      <Registry className="m-only" />
      <div className="field"><label htmlFor="ph">Ghana mobile number</label><Phone id="ph" value={phone} onChange={setPhone} />
        <p className="hint"><Icon n="chat" size={18} />We'll send an instant 6-digit SMS / WhatsApp verification code.</p></div>
      <div className="note"><Icon n="pin" /><b>Auto-detected region</b><span className="pill slate push">Greater Accra</span></div>
      <button className="cta" disabled={!ok} onClick={() => nav('/verify', { state: { phone: '+233 ' + phone.trim() } })}><span className="row-i"><Icon n="chat" />Continue with SMS / WhatsApp OTP</span><Icon n="arrow" /></button>
      <button className="alt"><i className="fp"><Icon n="finger" /></i>Use Face ID / Fingerprint</button>
      <div className="alt-box"><button className="alt-h" aria-expanded={more} onClick={() => setMore(!more)}><span className="row-i"><Icon n="sliders" />Other sign in methods</span><Icon n="chevron" /></button>
        {more && <ul className="more"><li><a href="#email">Email and password</a></li><li><a href="#staff">Staff access</a></li></ul>}</div>
      <div className="note"><span className="lockc"><Icon n="lock" /></span>Protected by 256-bit bank-grade encryption &amp; GhIPSS protocols. No password memorisation required.</div>
      <p className="foot-note">New to Highway Fitterman? <Link to="/signup">Create Account</Link></p>
    </Shell>);
}

const TYPES = [
  ['owner', 'Vehicle Owner', 'Private drivers, taxi, ride-hailing & fleets', 'Get emergency roadside breakdown dispatch in <20 mins, fair escrow quotes in GH₵, and 14-day repair warranty across Accra & beyond.', 'car', 'Create Driver Account & Add Vehicle'],
  ['mechanic', 'Independent Mechanic', 'Roving mobile vans, artisans & auto electricians', 'Receive high-paying breakdown dispatch pings within 5km, weekly Friday MoMo payouts, free OBD2 scan tools, and zero price haggling.', 'briefcase', 'Create Mechanic Account'],
  ['workshop', 'Workshop / Garage Owner', 'Physical bays, alignment centers & spray shops', 'Manage bays, assign jobs to apprentice & master techs, quote corporate fleets, and accept verified MoMo & card payouts directly.', 'garage', 'Create Workshop Account'],
] as const;
const AREAS = ['Osu', 'East Legon', 'Madina', 'Spintex', 'Tema', 'Kasoa', 'Achimota', 'Dansoman', 'Adenta'];

export function Signup() {
  const nav = useNavigate(); const [type, setType] = useState(0); const [f, setF] = useState({ name: '', phone: '', area: '', pin: '', ref: '', agree: false });
  const set = (p: Partial<typeof f>) => setF({ ...f, ...p }); const ok = f.name.trim().length > 1 && digits(f.phone) >= 9 && f.area && f.agree;
  return (
    <Shell wide title="Join Ghana's trusted repair & roadside network." points={['Choose how you want to use Highway Fitterman', 'All payments held in escrow until work is inspected', 'Instant MoMo payouts for artisans, every Friday']}>
      <div><span className="pill ok">Verified roadside network</span><h1 className="ah">Join Highway Fitterman</h1><p className="sub">Choose how you want to use Ghana's trusted automotive repair &amp; roadside network.</p></div>
      <fieldset className="types"><legend>Select account type</legend>{TYPES.map(([k, t, s, d, ic], i) =>
        <label key={k} className={'type' + (type === i ? ' on' : '')}><input type="radio" name="type" checked={type === i} onChange={() => setType(i)} />
          <span className="row-i top"><span className="ticon"><Icon n={ic} size={26} /></span><span><b>{t}</b>{i === 0 && <em className="pill warn">Popular</em>}<small>{s}</small></span><span className="tick">{type === i && <Icon n="check" size={16} />}</span></span>
          <span className="desc">{d}</span></label>)}</fieldset>
      <div className="note warn"><Icon n="shield" size={26} /><span><b>Bank of Ghana &amp; MoMo protected</b><br />All payments held in escrow until technician work is inspected.</span></div>
      <div className="cols">
        <div className="field"><label htmlFor="nm">Full name <small>As on Ghana Card</small></label><div className="inp"><input id="nm" autoComplete="name" placeholder="Kwame Mensah" value={f.name} onChange={(e) => set({ name: e.target.value })} /></div></div>
        <div className="field"><label htmlFor="sp">Ghana mobile number (MoMo ready)</label><Phone id="sp" value={f.phone} onChange={(v) => set({ phone: v })} /></div>
        <div className="field"><label htmlFor="ar">Residential locality</label><div className="inp"><select id="ar" value={f.area} onChange={(e) => set({ area: e.target.value })}><option value="">Select neighborhood</option>{AREAS.map((a) => <option key={a}>{a}</option>)}</select></div></div>
        <div className="field"><label htmlFor="gc">Ghana Card PIN <small>Optional · Instant Gold Badge</small></label><div className="inp"><input id="gc" placeholder="GHA-712345678-9" value={f.pin} onChange={(e) => set({ pin: e.target.value.toUpperCase() })} /></div></div>
        <div className="field full"><label htmlFor="rf">Referral or garage code <small>Optional</small></label><div className="inp"><input id="rf" placeholder="E.G. ACCRA50" value={f.ref} onChange={(e) => set({ ref: e.target.value.toUpperCase() })} /></div></div>
      </div>
      <label className="agree"><input type="checkbox" checked={f.agree} onChange={(e) => set({ agree: e.target.checked })} />I agree to Highway Fitterman's <a href="#charter">Fair-Pricing Charter</a>, Escrow Guarantee, and <a href="#terms">Terms of Service</a>.</label>
      <button className="cta" disabled={!ok} onClick={() => nav('/verify', { state: { phone: '+233 ' + f.phone.trim() } })}><span className="row-i"><Icon n="arrow" />{TYPES[type][5]}</span></button>
      <p className="foot-note">Already registered on Highway Fitterman? <Link to="/login">Log In</Link></p>
      <ul className="trust"><li>20m Accra response</li><li>Escrow warranted</li><li>MTN / Telecel MoMo</li></ul>
    </Shell>);
}

export function Verify() {
  const nav = useNavigate(); const phone: string = useLocation().state?.phone ?? '+233 24 819 9241';
  const [d, setD] = useState<string[]>(Array(6).fill('')); const [t, setT] = useState(40); const refs = useRef<(HTMLInputElement | null)[]>([]);
  useEffect(() => { if (!t) return; const id = setTimeout(() => setT(t - 1), 1000); return () => clearTimeout(id); }, [t]);
  const put = (i: number, v: string) => { let c = v.replace(/\D/g, ''); if (d[i] && c.length === 2) c = c[1]; if (!c) return; const n = [...d]; c.slice(0, 6 - i).split('').forEach((ch, k) => (n[i + k] = ch)); setD(n); refs.current[Math.min(i + c.length, 5)]?.focus(); };
  const del = (i: number) => { const n = [...d]; if (n[i]) n[i] = ''; else if (i > 0) { n[i - 1] = ''; refs.current[i - 1]?.focus(); } setD(n); };
  const push = (c: string) => { const i = d.findIndex((x) => !x); if (i >= 0) put(i, c); };
  const pop = () => { const i = d.map(Boolean).lastIndexOf(true); if (i >= 0) { const n = [...d]; n[i] = ''; setD(n); } };
  return (
    <Shell title="Confirm it's you before we dispatch." points={['Codes expire after 5 minutes', 'Never share your code with a technician or tow operator', 'Your MoMo wallet links automatically']}>
      <div className="center"><span className="badge"><Icon n="shield" size={30} /></span><span className="pill warn">MoMo</span>
        <h1 className="ah">Enter Verification Code</h1><p className="sub">We sent a 6-digit security code to <b>{phone}</b> via SMS &amp; WhatsApp.</p>
        <Link className="edit" to="/login"><Icon n="edit" size={16} />Edit Number</Link></div>
      <div className="card otpbox">
        <div className="otp" role="group" aria-label="6-digit code">{d.map((v, i) => <input key={i} ref={(el) => { refs.current[i] = el; }} inputMode="numeric" autoComplete={i === 0 ? 'one-time-code' : 'off'} aria-label={`Digit ${i + 1}`} value={v}
          onChange={(e) => put(i, e.target.value)} onKeyDown={(e) => { if (e.key === 'Backspace') { e.preventDefault(); del(i); } }} />)}</div>
        <p className="resend"><Icon n="clock" size={18} />{t ? <>Resend code in <b className="num">00:{String(t).padStart(2, '0')}s</b></> : <button className="linkb" onClick={() => setT(40)}>Resend code</button>}</p>
        <div className="alts"><button className="linkb"><Icon n="chat" size={18} />WhatsApp code</button><button className="linkb dark"><Icon n="voice" size={18} />Voice Call</button></div>
      </div>
      <div className="note warn"><span className="lockc dark"><Icon n="wallet" /></span><span><b>MTN MoMo Match Detected</b> <em className="pill warn">Ready</em><br />Your verified Mobile Money wallet will be linked instantly for secure 1-tap roadside repair escrow dispatch.</span></div>
      <div className="note"><span className="lockc"><Icon n="lock" /></span><span><b>Highway Fitterman Secure Lockout:</b> Never disclose this 6-digit pin to any technician, roadside mechanic, or tow operator.</span></div>
      <button className="cta" disabled={!d.every(Boolean)} onClick={() => nav('/')}><span className="row-i">Verify &amp; Enter Highway Fitterman</span><Icon n="arrow" /></button>
      <div className="keys" aria-label="Number pad">{['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((k) => <button key={k} onClick={() => push(k)}>{k}</button>)}
        <button aria-label="Resend code" onClick={() => setT(40)}><Icon n="refresh" /></button><button onClick={() => push('0')}>0</button><button aria-label="Delete" onClick={pop}><Icon n="back2" /></button></div>
    </Shell>);
}
