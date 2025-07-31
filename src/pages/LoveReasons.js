import React from 'react';
import loveReasons from '../data/loveReasons';
import '../styles/LoveReasons.css';

function LoveReasons() {
  return (
    <div className="love-reasons-container">
      <h1 className="love-reasons-title">💖 24 Reasons Why I Love You</h1>
      <div className="love-reasons-list">
        {loveReasons.map((reason, index) => (
          <div key={index} className="reason-card">
            <div className="reason-emoji">{reason.emoji}</div>
            <div className="reason-text">{reason.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoveReasons;
