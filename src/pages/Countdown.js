import React, { useEffect, useState } from 'react';
import '../styles/Countdown.css';

function Countdown() {
  const dateBorn = new Date("2001-07-30T00:00:00");
  const dateMet = new Date("2023-11-29T10:30:00");
  const dateTalk = new Date("2024-01-13T23:00:00");
  const dateLove = new Date("2024-06-04T21:00:00");

const calculateElapsedTime = (startDate) => {
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const timeDiff = now - new Date(
    now.getFullYear() - years,
    now.getMonth() - months,
    now.getDate() - days,
    startDate.getHours(),
    startDate.getMinutes(),
    startDate.getSeconds()
  );

  const seconds = Math.floor((timeDiff / 1000) % 60);
  const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
  const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);

  return { years, months, days, hours, minutes, seconds };
};

  const [bornTime, setBornTime] = useState(calculateElapsedTime(dateBorn));
  const [metTime, setMetTime] = useState(calculateElapsedTime(dateMet));
  const [talkTime, setTalkTime] = useState(calculateElapsedTime(dateTalk));
  const [loveTime, setLoveTime] = useState(calculateElapsedTime(dateLove));

  useEffect(() => {
    const timer = setInterval(() => {
      setBornTime(calculateElapsedTime(dateBorn));
      setMetTime(calculateElapsedTime(dateMet));
      setTalkTime(calculateElapsedTime(dateTalk));
      setLoveTime(calculateElapsedTime(dateLove));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const renderTimer = (title, timeData) => (
    <div className="section">
      <h2>{title}</h2>
      <div className="timer">
        {Object.entries(timeData).map(([unit, value]) => (
          <div className="time-box" key={unit}>
            <span>{value}</span>
            <label>{unit}</label>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="countdown-container">
      <h1>🕰️ Every Moment We've Lived Together</h1>
      <p className="subtitle">Because time spent with you is the only time that matters.</p>

      {renderTimer("🎂 Since You Were Born", bornTime)}
      {renderTimer("🧿 Since We First Met", metTime)}
      {renderTimer("💬 Since We Started Talking", talkTime)}
      {renderTimer("💖 Since We Fell in Love", loveTime)}
    </div>
  );
}

export default Countdown;
