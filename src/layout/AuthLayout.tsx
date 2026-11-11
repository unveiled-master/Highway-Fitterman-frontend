import type { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router';
import { Icon } from '../components/Icon';
import { Registry } from '../components/Registry';
import '../styles/auth.css';

/**
 * Responsive auth frame. Mobile: top bar + single column (as designed).
 * Desktop (>=1024px): navy brand panel on the left, the same form centred on the right.
 */
export function AuthLayout({ children, title, points, wide = false }: { children: ReactNode; title: string; points: string[]; wide?: boolean }) {
  const nav = useNavigate();
  return (
    <div className="auth">
      <aside className="aside">
        <Link to="/" className="alogo light">Highway <span>Fitterman</span></Link>
        <span className="pill ok">Verified roadside network</span>
        <h2>{title}</h2>
        <ul>{points.map((p) => <li key={p}><Icon n="check" size={18} />{p}</li>)}</ul>
        <Registry />
      </aside>
      <div className="pane">
        <header className="abar">
          <button className="icon-btn" onClick={() => nav(-1)} aria-label="Go back"><Icon n="back" /></button>
          <Link to="/" className="alogo">Highway <span>Fitterman</span></Link><span className="loc">Accra, GH</span><span className="sp" />
          <a className="help" href="#help">Help</a><span className="me" aria-hidden="true"><Icon n="user" /></span>
        </header>
        <main className={'amain' + (wide ? ' wide' : '')}>{children}</main>
      </div>
    </div>);
}
