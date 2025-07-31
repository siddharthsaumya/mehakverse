import  { useState } from 'react';
import '../styles/PasswordGate.css';

function PasswordGate({ onSubmit }) {
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    onSubmit(password);
  };

 return (
    <div className="gate-container">
      <div className="gate-box">
        <h1 className="gate-title">🔒 Welcome to MehakVerse</h1>
        <p className="gate-subtitle">Enter the secret paasword to unlock your surprise 💌</p>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            className="gate-input"
            placeholder="Enter password..."
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit" className="gate-button">Unlock 💖</button>
        </form>
      </div>
    </div>
  );
}

export default PasswordGate;
