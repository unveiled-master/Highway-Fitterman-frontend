import type { ReactNode } from 'react';
import { Link, NavLink } from 'react-router';
import { Icon } from '../components/Icon';
import s from './AppLayout.module.css';

// `to: null` = screen not built yet (shown disabled).
const NAV = [{ label: 'Request', icon: 'wrench', to: '/' }, { label: 'Providers', icon: 'garage', to: '/providers' }, { label: 'Active', icon: 'doc', to: null }, { label: 'Profile', icon: 'car', to: null }] as const;

/** Signed-in app frame: top bar everywhere; the nav is a bottom tab bar on mobile and sits in the top bar from 1024px. */
export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className={s.root}>
      <header className={s.bar}><div className={s.barIn}>
        <Link to="/" className={s.brand}><span className={s.logo}>Highway <span>Fitterman</span></span><span className={s.tag}>Accra, GH</span></Link>
        <nav className={s.nav} aria-label="Main">{NAV.map((n) => n.to
          ? <NavLink key={n.label} to={n.to} end className={({ isActive }) => (isActive ? `${s.item} ${s.on}` : s.item)}><Icon n={n.icon} />{n.label}</NavLink>
          : <button key={n.label} className={s.item} disabled title="Coming soon"><Icon n={n.icon} />{n.label}</button>)}</nav>
        <span className={s.sp} /><Link to="/" className={s.sos} aria-label="SOS roadside dispatch">SOS</Link><span className={s.me} aria-hidden="true"><Icon n="user" /></span>
      </div></header>
      <main className={s.main}>{children}</main>
    </div>);
}
