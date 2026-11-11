import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Icon } from '../components/Icon';
import { Registry } from '../components/Registry';
import { digitCount, PhoneField } from '../components/forms/PhoneField';
import { AuthLayout } from '../layout/AuthLayout';

export function Login() {
  const nav = useNavigate(); const [role, setRole] = useState<'driver' | 'artisan'>('driver'); const [phone, setPhone] = useState(''); const [more, setMore] = useState(false);
  const ok = digitCount(phone) >= 9;
  return (
    <AuthLayout title="Roadside help is one code away." points={['Verified mechanics on stand-by across Greater Accra', 'Fair escrow quotes in GH₵', 'Instant MoMo payments and a 14-day repair warranty']}>
      <div className="seg" role="tablist">{([['driver', 'Driver / Owner', 'car'], ['artisan', 'Artisan / Shop', 'briefcase']] as const).map(([k, l, i]) =>
        <button key={k} role="tab" aria-selected={role === k} className={role === k ? 'on' : ''} onClick={() => setRole(k)}><Icon n={i} />{l}</button>)}</div>
      <div><span className="pill warn">{role === 'driver' ? 'Driver quick dispatch access' : 'Artisan portal access'}</span>
        <h1 className="ah">Welcome back</h1><p className="sub">Sign in to access rapid roadside dispatch, verified mechanics, or your artisan portal.</p></div>
      <Registry className="m-only" />
      <div className="field"><label htmlFor="ph">Ghana mobile number</label><PhoneField id="ph" value={phone} onChange={setPhone} />
        <p className="hint"><Icon n="chat" size={18} />We'll send an instant 6-digit SMS / WhatsApp verification code.</p></div>
      <div className="note"><Icon n="pin" /><b>Auto-detected region</b><span className="pill slate push">Greater Accra</span></div>
      <button className="cta" disabled={!ok} onClick={() => nav('/verify', { state: { phone: '+233 ' + phone.trim() } })}><span className="row-i"><Icon n="chat" />Continue with SMS / WhatsApp OTP</span><Icon n="arrow" /></button>
      <button className="alt"><i className="fp"><Icon n="finger" /></i>Use Face ID / Fingerprint</button>
      <div className="alt-box"><button className="alt-h" aria-expanded={more} onClick={() => setMore(!more)}><span className="row-i"><Icon n="sliders" />Other sign in methods</span><Icon n="chevron" /></button>
        {more && <ul className="more"><li><a href="#email">Email and password</a></li><li><a href="#staff">Staff access</a></li></ul>}</div>
      <div className="note"><span className="lockc"><Icon n="lock" /></span>Protected by 256-bit bank-grade encryption &amp; GhIPSS protocols. No password memorisation required.</div>
      <p className="foot-note">New to Highway Fitterman? <Link to="/signup">Create Account</Link></p>
    </AuthLayout>);
}
