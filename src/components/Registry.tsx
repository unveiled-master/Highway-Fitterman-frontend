import { Icon } from './Icon';

/** Registry card: shown inline on mobile, inside the side panel on desktop. */
export const Registry = ({ className = '' }: { className?: string }) => (
  <div className={'reg ' + className}><span className="ico"><Icon n="shield" size={26} /></span>
    <div><b>Artisan Registry Active</b><small>2,410+ roadside units on stand-by</small></div>
    <span className="faces"><b>KM</b><b>PA</b><b>+9</b></span></div>);
