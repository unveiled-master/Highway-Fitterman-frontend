import { Icon } from './Icon';
import s from './Stepper.module.css';

type Step = { readonly label: string; readonly state: 'done' | 'active' | 'todo' };

/** Horizontal progress tracker: done (green check), active (amber), upcoming (grey). */
export function Stepper({ steps }: { steps: readonly Step[] }) {
  return (
    <ol className={s.steps} aria-label="Progress">
      {steps.map((st) => (
        <li key={st.label} className={`${s.step} ${s[st.state]}`} aria-current={st.state === 'active' ? 'step' : undefined}>
          <span className={s.dot}>{st.state === 'done' && <Icon n="check" size={16} />}{st.state === 'active' && <Icon n="shield" size={16} />}</span>
          <span className={s.label}>{st.label}</span>
        </li>))}
    </ol>);
}
