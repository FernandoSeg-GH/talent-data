import React, { useEffect, useState } from 'react';

type Question = {
  category: string;
  id: number;
  text: string;
};

function QuestionCard({ question, onAnswerChange, selectedLanguage }: { question: Question, onAnswerChange: (value: string) => void, selectedLanguage: number; }) {
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    setAnswer(''); // Reset the answer state when the question changes
  }, [question]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setAnswer(value);
    onAnswerChange(value);
  };

  const getTranslatedText = (value: string) => {
    if (selectedLanguage === 1) {
      switch (value) {
        case "1":
          return "Never";
        case "2":
          return "Sometimes a Year";
        case "3":
          return "Sometimes a Month";
        case "4":
          return "Sometimes a Week";
        case "5":
          return "Daily";
        default:
          return "";
      }
    } else if (selectedLanguage === 2) {
      switch (value) {
        case "1":
          return "Nunca";
        case "2":
          return "Ocasionalmente al Año";
        case "3":
          return "Ocasionalmente al Mes";
        case "4":
          return "Ocasionalmente a la Semana";
        case "5":
          return "Diario";
        default:
          return "";
      }
    } else {
      return "";
    }
  };

  return (
    <div className="bg-dark p-0 rounded-lg min-h-[250px] w-full flex flex-col justify-between">
      <h3 className="text-xl font-semibold mb-4 text-gray-900 text-left md:text-justify h-20 sm:h-32">
        {`${question.id}. ${question.text}`}
      </h3>

      <div className="flex flex-col items-center justify-between">
        {["1", "2", "3", "4", "5"].map((value) => (
          <button
            key={value}
            className={`bg-blue-100 w-full my-1 text-gray-800 font-semibold py-2 px-4 border border-blue-200 rounded shadow hover:shadow-md transition duration-150 ease-out hover:ease-in hover:-translate-y-0.5 ${
              answer === value ? "bg-blue-300 text-white" : ""
            }`}
            onClick={() =>
              handleChange({
                target: { value },
              } as React.ChangeEvent<HTMLInputElement>)
            }
          >
            {getTranslatedText(value)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
