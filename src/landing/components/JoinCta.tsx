export const JoinCta = () => (
  <section className="wrap"><div className="join"><div><span className="pill warn">For technicians</span><h2>Are you an automotive technician or workshop owner in Ghana?</h2>
    <p>Get verified customer requests across your operating corridor, weekly payouts and dispute protection.</p>
    <div className="tags">{['Weekly MoMo payouts', 'Free SMS job alerts', 'Verified customers only'].map((t) => <span key={t} className="pill dim">{t}</span>)}</div></div>
    <div className="join-btns"><button className="btn sos">Join the Artisan Guild</button><button className="btn ghost light">Workshop portal</button></div></div></section>);
