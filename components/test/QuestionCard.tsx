import React, { useEffect, useState } from 'react';


type Question = {
    category: string;
    id: number;
    text: string;
};

function QuestionCard({ question, onAnswerChange }: { question: Question, onAnswerChange: (value: string) => void }) {
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    setAnswer(''); // Reset the answer state when the question changes
  }, [question]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setAnswer(value);
    onAnswerChange(value);
  };

  // return (
  //   <div className="bg-dark p-0 rounded-lg min-h-[250px] w-full flex flex-col justify-between">
  //     <h3 className="text-xl font-semibold mb-4 text-gray-900 text-left md:text-justify h-28">
  //       {`${question.id}. ${question.text}`}
  //     </h3>
  //     <img
  //       alt=""
  //       src={randomImage()}
  //       className="w-full h-[200px] object-cover rounded-lg mb-6"
  //     />

  //     <div className="grid grid-cols-5 gap-4">
  //       <p className="text-center text-xs">{"Nunca"}</p>
  //       <p className="text-center text-xs">{"Raramente"}</p>
  //       <p className="text-center text-xs">{"Cada Tanto"}</p>
  //       <p className="text-center text-xs">{"Seguido"}</p>
  //       <p className="text-center text-xs">{"Siempre"}</p>

  //       {["1", "2", "3", "4", "5"].map((value) => (
  //         <label
  //           key={value}
  //           className="inline-flex items-center justify-center"
  //         >
  //           <input
  //             type="radio"
  //             name={`question-${question.id}`}
  //             value={value}
  //             checked={answer === value}
  //             onChange={handleChange}
  //             className="hidden"
  //           />
  //           <span className="radio radio-info w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center mr-2">
  //             {answer === value && (
  //               <span className="w-3 h-3 bg-blue-500 rounded-full" />
  //             )}
  //           </span>
  //         </label>
  //       ))}
  //     </div>
  //   </div>
  // );
  return (
  <div className="bg-dark p-0 rounded-lg min-h-[250px] w-full flex flex-col justify-between">
    <h3 className="text-xl font-semibold mb-4 text-gray-900 text-left md:text-justify h-28">
      {`${question.id}. ${question.text}`}
    </h3>
    <img
      alt=""
      src={randomImage()}
      className="w-full h-[200px] object-cover rounded-lg mb-6"
    />

    <div className="flex flex-col items-center justify-between">
      {["1", "2", "3", "4", "5"].map((value) => (
        <button
          key={value}
          className={`bg-blue-100 w-full my-1 text-gray-800 font-semibold py-2 px-4 border border-blue-200 rounded shadow hover:shadow-md transition duration-150 ease-out hover:ease-in hover:-translate-y-0.5	 ${answer === value ? 'bg-blue-300 text-white' : ''}`}
          onClick={() => handleChange({ target: { value } } as React.ChangeEvent<HTMLInputElement>)}
        >
          {value === "1" ? 'Nunca' : value === "2" ? 'Algunas Veces al Año' : value === "3" ? 'Algunas Veces al Mes' : value === "4" ? 'Algunas Veces a la Semana' : 'Diariamente'}
        </button>
      ))}
    </div>
  </div>
);

}


export default QuestionCard

const cardImages = [
    // "https://image.lexica.art/full_jpg/95af1556-b22e-4747-ab98-b53f86889b38",
    // "https://image.lexica.art/full_jpg/81647080-17b2-46e7-8916-ea2e1c7fa07d",
    // "https://image.lexica.art/full_jpg/40481be6-89fb-4854-ab9b-c8b434874d2a",
    // "https://image.lexica.art/full_jpg/954cb1a6-fef0-44de-989f-abf029f83c8f",
    "https://image.lexica.art/full_jpg/a76c4b20-d30a-47ed-bc12-afb13fc972e9",
    ]
    
    // for the Question component, i want to add an image to the question, but i don't know how to do it. lets use the cardImages array to randomly select an image for each question.
    function randomImage() {
      return cardImages[Math.floor(Math.random() * cardImages.length)]
    }
    