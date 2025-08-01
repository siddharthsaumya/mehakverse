import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  const today = new Date();
  const isBirthday =
    today.getDate() === 2 && today.getMonth() === 7;

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="heading">
          {isBirthday ? '🎂 Happy Birthday, Mehak! 💖' : 'Hellooo, Mehak! 💖'}
        </h1>
        <p className="subtext">
          {isBirthday
            ? 'Today is all about you. So is this website. 😘'
            : 'Curated with love, laughter, and lots of code — just for you, Mehak. ⭐'}
        </p>
      </div>

      <div className="nav-grid">
        <Link to="/timeline" className="nav-tile">📷 Galley</Link>
        <Link to="/love-reasons" className="nav-tile">⁉️ 24 Reasons Why</Link>
        <Link to="/letter" className="nav-tile">💌 Letter</Link>
        <Link to="/songs" className="nav-tile">🎶 Song for you</Link>
        <Link to="/quiz" className="nav-tile">🧠 Quiz Time</Link>
        <Link to="/countdown" className="nav-tile">⏳ Time Counter</Link>
      </div>

      <div className="footer-note">
        <p>
          This is just a tiny corner of the internet… but in here, it's all about you. (little about us too 😜)
          <br />
          Love you always — Siddharth 💘
        </p>
      </div>
    </div>
  );
}

export default Home;
