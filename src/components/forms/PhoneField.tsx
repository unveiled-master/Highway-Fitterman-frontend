export const PhoneField = ({ id, value, onChange }: { id: string; value: string; onChange: (v: string) => void }) => (
  <div className="inp"><span className="cc"><i className="flag" />+233</span>
    <input id={id} inputMode="tel" autoComplete="tel-national" placeholder="24 123 4567" value={value} onChange={(e) => onChange(e.target.value.replace(/[^\d ]/g, ''))} /></div>);

export const digitCount = (s: string) => s.replace(/\D/g, '').length;
