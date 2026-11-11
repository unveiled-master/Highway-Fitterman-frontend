export const SectionHead = ({ kicker, title, sub }: { kicker?: string; title: string; sub?: string }) => (
  <div className="head">{kicker && <span className="kicker">{kicker}</span>}<h2>{title}</h2>{sub && <p>{sub}</p>}</div>);
