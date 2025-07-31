import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import '../styles/SecretLetter.css';

const letterPages = "Hey Mehak 💖,\nSince the day we met, I’ve been nothing but a genuinely happy man. Honestly, I didn’t know what I was walking into — two random people, strangers at first… then slowly familiar faces, then friends, then two people who kinda liked each other, and eventually... just two people in love. 💞\nIt’s been one hell of a journey — a little chaotic, a little confusing, but completely real. 🌪️✨\nNot gonna lie — there was a time I genuinely thought you already had someone in your life. Then when we spoke more, I assumed maybe you liked someone else. And that first night out? I was so sure you liked that one short guy from the office (you know who I’m talking about 😏😂).\nBut even with all the doubts, overthinking, and assumptions — we happened. And it’s been kind of crazy... in the best way possible. 💫\nWe’re not perfect — neither you, nor me. But what we have is something that fits in its own quirky, messy, magical way. 🧩💫\nWe fight like cats and dogs, yes. 🐱🐶\nOur cultures are different, our personalities even more so.\nBut who would've thought litti and rogan josh could be a perfect combo, right? 🍛❤️\nYou’ve been nothing less than a blessing — and I truly mean it when I say that your birth feels like a gift to me, from the universe itself. 🎁🌌\n\nSo here’s to you 🥂\nTo your smile that resets my worst days 😌\nTo your fire that challenges me to be better 🔥\nAnd to your presence that feels like home 🏡💗\n\nHappy Birthday, Mehak. 🎉🎂\nI wish for you everything your heart desires — all your goals fulfilled, peace in your mind, fire in your soul, and joy that lasts. 🌈💫\n\nLet’s keep growing, exploring, learning, and living — side by side. 🚀🌍\nLet’s keep travelling, laughing, getting lost, fighting stupid fights, and still choosing each other every single time. ✈️🤣🧭💥❤️\n\nHere’s to more memories, more madness, and more of us. 🥳📸💕\n\nLots of love,\nSiddharth 💌"; 

function SecretLetter() {
  return (
    <div className="letter-container">
      <h1 className="letter-title">📜 A Letter Just for You 🎂</h1>
      <div className={`letter-paper`}>
        <p className="letter-content">
          {letterPages.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}
        </p>
      </div>
    </div>
  );
}

export default SecretLetter;