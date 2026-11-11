import { Link } from 'react-router';

export const Header = () => (
  <header className="bar"><div className="wrap bar-in">
    <a className="logo" href="#top">Highway Fitterman<small>Roadside &amp; Mechanics</small></a>
    <nav>{['How it works', 'Services', 'For mechanics', 'Safety'].map((l) => <a key={l} href="#top">{l}</a>)}</nav>
    <div className="bar-cta"><button className="btn sos">SOS Dispatch</button><Link className="btn ghost" to="/login">Sign in / Register</Link></div>
  </div></header>);
