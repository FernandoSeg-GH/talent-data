// import React from "react";
// import { Question } from "@/lib/types";
// import { ResultadosDropdown } from "@/components/test/ResultadosDropdown";
// import { ProfileForm } from "@/components/forms/ProfileForm";

// type Props = {
//   dbQuestions: Question[];
//   onAnswerChange: (questionId: number, value: string) => void;
//   onCalculatePoints: () => void;
//   answers: { [questionId: string]: string };
//   onRandomizeAnswers: () => void;
// };

// export const Consigna: React.FC<Props> = ({
//   dbQuestions,
//   onAnswerChange,
//   onCalculatePoints,
//   answers,
//   onRandomizeAnswers,
// }) => {
//   return (
//     <>
//       <p className="text-gray-900 mb-4">
//         Responda las siguientes preguntas con respecto a su estado anémico en el espacio laboral, siendo:
//       </p>
//       <ul className="list-disc list-inside mb-4">
//         <li><strong>Nunca</strong> = Nunca</li>
//         <li><strong>1 Vez al Año</strong> = Raramente</li>
//         <li><strong>1 Vez al Mes</strong> = Cada Tanto</li>
//         <li><strong>1 Vez por Semana</strong> = Seguido</li>
//         <li><strong>A Diario</strong> = Siempre</li>
//       </ul>
//       <p className="text-gray-900 mb-4">
//         Recuerde responder de la forma más sincera para que el sistema pueda brindarle un resultado más preciso.
//       </p>
//       <div className="flex justify-between mt-10">
//         <button className="btn btn-ghost" onClick={onRandomizeAnswers}>
//           Aleatorio
//         </button>
//         {Object.keys(answers).length > 0 && (
//           <>
//             <button className="btn btn-primary" onClick={onCalculatePoints}>
//               Ver resultados
//             </button>
//             <ResultadosDropdown points={{ AE: 0, D: 0, RP: 0 }} />
//           </>
//         )}
//       </div>
//       <div className="mt-10">
//         {dbQuestions.map((question) => (
//           <div key={question.id} className="mb-6">
//             <div className="mb-2">
//               <strong>{question.id}.</strong> {question.title}
//             </div>
//             <div className="grid grid-cols-5 gap-2">
//               {question.options.map((option) => (
//                 <label key={option.id} className="flex items-center">
//                   <input
//                     type="radio"
//                     name={`question-${question.id}`}
//                     value={option.value}
//                     checked={answers[question.id.toString()] === option.value}
//                     onChange={() =>
//                       onAnswerChange(question.id, option.value)
//                     }
//                   />
//                   <span className="ml-2">{option.text}</span>
//                 </label>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="w-full flex flex-col justify-center">
//         <button className="btn btn-outline btn-primary w-[200px] my-10 mx-auto">
//           Login to View Full Report
//         </button>
//         <ProfileForm />
//       </div>
//     </>
//   );
// };

import React from 'react'

type Props = {}

function Consigna({}: Props) {
  return (
    <div>Consigna</div>
  )
}

export default Consigna