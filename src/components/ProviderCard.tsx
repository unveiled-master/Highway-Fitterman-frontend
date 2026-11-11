import { gh } from '../data/format';
import type { Provider } from '../data/providers';
import { Icon } from './Icon';
import { Num } from './Num';
import s from './ProviderCard.module.css';

export function ProviderCard({ p }: { p: Provider }) {
  const { status } = p;
  return (
    <article className={s.card}>
      <div className={s.top}>
        <div className={s.avatar} aria-hidden="true">{p.initials}</div>
        <div className={s.id}>
          <h3>{p.name}</h3><span className={s.sub}>{p.role}</span>
          <span className={s.rating}><Icon n="star" size={16} /><b className="num">{p.rating.toFixed(1)}</b><small>({p.reviews})</small></span>
        </div>
        <span className={`${s.badge} ${p.badge.tone === 'green' ? s.green : s.slate}`}>{p.badge.label}</span>
      </div>
      <div className={s.loc}><Icon n="pin" size={18} /><span>{p.location}</span>{p.openNote && <em className={s.open}>{p.openNote}</em>}</div>
      <ul className={s.tags}>{p.tags.map((t, i) => { const van = i === 0 && p.kind === 'mobile'; return <li key={t} className={van ? s.van : ''}>{van && <Icon n="van" size={14} />}{t}</li>; })}</ul>
      <div className={s.priceBox}>
        <div><span className={s.lbl}>{p.priceLabel}</span><div><Num><span className={s.price}>{gh(p.price)}</span></Num><small>{p.priceNote}</small></div></div>
        <span className={`${s.status} ${status.tone === 'green' ? s.statusGreen : s.statusAmber}`}>{status.icon && <Icon n={status.icon} size={16} />}<b>{status.label}</b>{status.sub && <small>{status.sub}</small>}</span>
      </div>
      <div className={s.actions}>
        <button className={s.primary}><Icon n={p.cta.icon} />{p.cta.label}</button>
        <button className={s.secondary} aria-label={p.aside === 'call' ? `Call ${p.name}` : `Directions to ${p.name}`}><Icon n={p.aside === 'call' ? 'voice' : 'nav'} /></button>
      </div>
    </article>);
}
