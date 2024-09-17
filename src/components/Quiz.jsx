// src/Quiz.js
import React, { useState } from 'react';

const questions = [
  {
    questionText: 'What is the capital of France?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false },
    ],
  },
  {
    questionText: 'Who is the CEO of Tesla?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: true },
      { answerText: 'Bill Gates', isCorrect: false },
      { answerText: 'Mark Zuckerberg', isCorrect: false },
    ],
  },
  {
    questionText: 'which  planet in the solar system is known as the RED PLANET ?',
    answerOptions: [
      { answerText: 'Venus', isCorrect: false },
      { answerText: 'Earth', isCorrect: false },
      { answerText: 'Mars', isCorrect: true },
      { answerText: 'Jupiter', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the Capital of Japan ?',
    answerOptions: [
      { answerText: 'Beijing', isCorrect: false },
      { answerText: 'Tokyo', isCorrect: true },
      { answerText: 'Seoul', isCorrect: false },
      { answerText: 'Bangkok', isCorrect: false },
    ],
  },
  {
    questionText: 'which  is the longest river in the world',
    answerOptions: [
      { answerText: 'Amazon', isCorrect: false },
      { answerText: 'Mississippi', isCorrect: false },
      { answerText: 'Nile', isCorrect: true },
      { answerText: 'Yangtze', isCorrect: false },
    ],
  },
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setSelectedAnswer(isCorrect);
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
      setSelectedAnswer(null);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section ">
            <span >{questions[currentQuestionIndex].questionText}</span>
          </div>
          <div className="answer-section">
            {questions[currentQuestionIndex].answerOptions.map((answerOption, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                className={selectedAnswer !== null ? (answerOption.isCorrect ? 'correct' : 'incorrect') : ''}
                disabled={selectedAnswer !== null}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
          {selectedAnswer !== null && (
            <button onClick={handleNextQuestion} className="next-button">
              Next
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Quiz;
