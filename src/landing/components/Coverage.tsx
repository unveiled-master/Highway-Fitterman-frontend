import { SectionHead } from '../../components/SectionHead';
import { CORRIDORS } from '../../data/landing';

export const Coverage = () => (
  <section className="wrap sect split"><div><SectionHead title="Active response corridors across Ghana" sub="Our dispatch network concentrates mechanics where breakdowns happen most, with a 20-minute target on major corridors." />
    {CORRIDORS.map((c) => <div className="row" key={c}><b>{c}</b><span className="pill ok">Live</span></div>)}</div>
    <div className="map" role="img" aria-label="Map placeholder: live coverage across Accra"><span className="pill warn">Map goes here</span></div></section>);
