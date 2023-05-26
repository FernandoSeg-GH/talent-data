import React, { useEffect, useState } from 'react';
import Steps from './Steps';
import QuestionCard_ENG from './QuestionCard_ENG';

type Question = {
  category: string;
  id: number;
  text: string;
};


type Answer = {
  [questionId: string]: string;
};

export default function Questions_ENG({
  questions,
  onAnswerChange,
  onRandomizeAnswers,
  onCalculatePoints,
  answers,
  selectedLanguage,
}: {
  questions: Question[];
  onAnswerChange: (questionId: number, value: string) => void;
  onRandomizeAnswers: () => void;
  onCalculatePoints: () => void;
  answers: Answer;
  selectedLanguage: number;
}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);

  useEffect(() => {
    if (Object.keys(answers).length === questions.length) {
      setAllQuestionsAnswered(true);
    }
  }, [answers, questions]);

  const handleAnswerChange = (value: string) => {
    onAnswerChange(questions[currentQuestionIndex].id, value);
  };

  const handleClickNext = () => {
    onCalculatePoints();

    if (answers[questions[currentQuestionIndex].id]) {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setIsComplete(true);
      }
    } else {
      alert("Please select an answer before moving to the next question.");
    }
  };

  const handlePrevClick = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setIsComplete(false);
    setAllQuestionsAnswered(false);
    onRandomizeAnswers();
  };

  return (
    <div className="shadow-lg p-8 rounded-lg text-gray-900 w-full mt-20 flex flex-col items-center justify-center ">
      <div className="text-gray-700 mb-6 w-full">
        <p className='mb-1 text-sm font-semibold'>Your Progress:</p>
        <Steps  current={currentQuestionIndex} total={questions.length} answers={answers} />
      </div>
      <QuestionCard_ENG
        selectedLanguage={selectedLanguage}
        question={questions[currentQuestionIndex]}
        onAnswerChange={handleAnswerChange}
      />
      <div className="mt-6 flex items-center justify-between w-full">
        <button
          disabled={currentQuestionIndex === 0}
          onClick={handlePrevClick}
          className={`bg-orange-400 text-gray-200 px-4 py-1 rounded-lg ${
            currentQuestionIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Prev
        </button>
        {currentQuestionIndex === questions.length - 1 && answers[questions[currentQuestionIndex].id] && (
          <button
            onClick={() => setIsComplete(true)}
            className="bg-green-500 text-white px-4 py-1 rounded-lg"
          >
            Done! See the answers below
          </button>
        )}
        {currentQuestionIndex !== questions.length - 1 && (
          <button
            disabled={!answers[questions[currentQuestionIndex].id]}
            onClick={handleClickNext}
            className={`bg-blue-800 text-white px-4 py-1 rounded-lg ${
              !answers[questions[currentQuestionIndex].id] ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}