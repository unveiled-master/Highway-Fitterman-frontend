import { Artisans } from './components/Artisans';
import { Coverage } from './components/Coverage';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { JoinCta } from './components/JoinCta';
import { Pricing } from './components/Pricing';
import { Steps } from './components/Steps';
import { Testimonials } from './components/Testimonials';
import { TrustStrip } from './components/TrustStrip';
import './styles/landing.css';

export default function Landing() {
  return (<><Header /><main><Hero /><TrustStrip /><Features /><Steps /><Pricing /><Artisans /><Testimonials /><JoinCta /><Coverage /></main><Footer /></>);
}
