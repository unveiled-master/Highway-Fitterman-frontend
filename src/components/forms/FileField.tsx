import { Icon } from '../Icon';
import s from './FileField.module.css';

/** File picker styled as a drop row. The file stays in the browser until an upload endpoint exists. */
export function FileField({ id, label, accept, file, onFile }: { id: string; label: string; accept: string; file: File | null; onFile: (f: File | null) => void }) {
  return (
    <div className={s.wrap}>
      <span className={s.cap}>{label}</span>
      <label className={s.drop} htmlFor={id}>
        <Icon n="doc" />
        <span className={s.name}><span className={s.sr}>{label}: </span>{file ? file.name : 'Choose a file'}{file && <small>{(file.size / 1048576).toFixed(1)} MB</small>}</span>
        {file && <Icon n="check" size={18} />}
        <input id={id} type="file" accept={accept} onChange={(e) => onFile(e.target.files?.[0] ?? null)} />
      </label>
    </div>);
}
