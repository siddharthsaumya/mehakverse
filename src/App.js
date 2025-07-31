import  { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cookies from 'js-cookie';
import { getKeyValue } from './Apis/KeyVault';
import PasswordGate from './components/PasswordGate';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import LoveReasons from './pages/LoveReasons';
import SecretLetter from './pages/SecretLetter';
import SongsPlayer from './pages/SongsPlayer';
import QuizGame from './pages/QuizGame';
import Countdown from './pages/Countdown';

function App() {
  const [hasCookie, setHasCookie] = useState(false);
  const [realPassword, setRealPassword] = useState(null);
  const [authError, setAuthError] = useState(false); // 👈 NEW
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const existingCookie = Cookies.get('auth_pass');
    if (existingCookie) {
      setHasCookie(true);
      setLoading(false);
    } else {
      getKeyValue('Password')
        .then((data) => {
          setRealPassword(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Error fetching password from KeyVault:', err);
          alert('Something went wrong. Please try again later.');
          setLoading(false);
        });
    }
  }, []);

  const handlePasswordSubmit = (inputPassword) => {
    if (inputPassword === realPassword) {
      Cookies.set('auth_pass', inputPassword, { expires: 1 });
      setAuthError(false); // 👈 reset error
      setHasCookie(true);
    } else {
      setAuthError(true); // 👈 show error on PasswordGate
    }
  };

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #ffe4ec, #fff0f5)',
        fontFamily: 'Georgia, serif',
        fontSize: '1.2rem',
        color: '#c2185b'
      }}>
        Loading your magical experience... ✨
      </div>
    );
  }

  return (
    <Router>
      {!hasCookie ? (
        <PasswordGate onSubmit={handlePasswordSubmit} authError={authError} />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/love-reasons" element={<LoveReasons />} />
          <Route path="/letter" element={<SecretLetter />} />
          <Route path="/songs" element={<SongsPlayer />} />
          <Route path="/quiz" element={<QuizGame />} />
          <Route path="/countdown" element={<Countdown />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
