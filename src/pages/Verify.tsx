import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { Icon } from '../components/Icon';
import { AuthLayout } from '../layout/AuthLayout';

export function Verify() {
  const nav = useNavigate(); const phone: string = useLocation().state?.phone ?? '+233 24 819 9241';
  const [d, setD] = useState<string[]>(Array(6).fill('')); const [t, setT] = useState(40); const refs = useRef<(HTMLInputElement | null)[]>([]);
  useEffect(() => { if (!t) return; const id = setTimeout(() => setT(t - 1), 1000); return () => clearTimeout(id); }, [t]);
  const put = (i: number, v: string) => { let c = v.replace(/\D/g, ''); if (d[i] && c.length === 2) c = c[1]; if (!c) return; const n = [...d]; c.slice(0, 6 - i).split('').forEach((ch, k) => (n[i + k] = ch)); setD(n); refs.current[Math.min(i + c.length, 5)]?.focus(); };
  const del = (i: number) => { const n = [...d]; if (n[i]) n[i] = ''; else if (i > 0) { n[i - 1] = ''; refs.current[i - 1]?.focus(); } setD(n); };
  const push = (c: string) => { const i = d.findIndex((x) => !x); if (i >= 0) put(i, c); };
  const pop = () => { const i = d.map(Boolean).lastIndexOf(true); if (i >= 0) { const n = [...d]; n[i] = ''; setD(n); } };
  return (
    <AuthLayout title="Confirm it's you before we dispatch." points={['Codes expire after 5 minutes', 'Never share your code with a technician or tow operator', 'Your MoMo wallet links automatically']}>
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
    </AuthLayout>);
}
