import React, { useState } from 'react';
import quizQuestions from '../data/quizQuestions';
import '../styles/QuizGame.css';

function QuizGame() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (option) => {
    setSelected(option);
  };

  const handleNext = () => {
    if (selected === quizQuestions[currentQ].answer) {
      setScore(score + 1);
    }

    setSelected(null);

    if (currentQ + 1 < quizQuestions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">💘 Quiz Time</h1>

      {showResult ? (
        <div className="result-box">
          <h2>Your Score: {score} / {quizQuestions.length}</h2>
          <p>{score === quizQuestions.length ? "PERFECT COUPLE ALERT! 🥰" :( score > (quizQuestions.length/3)-1 && score <= (quizQuestions.length/2) + 1? "Still adorable! 💖" : "I have punishment for you! 😈")}</p>
        </div>
      ) : (
        <div className="question-card">
          <h3 className="question-text">{quizQuestions[currentQ].question}</h3>
          <div className="options-grid">
            {quizQuestions[currentQ].options.map((option, idx) => (
              <button
                key={idx}
                className={`option-btn ${selected === option ? 'selected' : ''}`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            className="next-btn"
            onClick={handleNext}
            disabled={selected === null}
          >
            {currentQ === quizQuestions.length - 1 ? "Finish" : "Next →"}
          </button>
        </div>
      )}
    </div>
  );
}

export default QuizGame;