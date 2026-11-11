import { BrowserRouter, Route, Routes } from 'react-router';
import Landing from './landing/Landing';
import { ArtisanVerification } from './pages/ArtisanVerification';
import { Login } from './pages/Login';
import { ProviderDirectory } from './pages/ProviderDirectory';
import { Signup } from './pages/Signup';
import { Verify } from './pages/Verify';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/providers" element={<ProviderDirectory />} />
        <Route path="/artisan/verify" element={<ArtisanVerification />} />
      </Routes>
    </BrowserRouter>
  );
}
