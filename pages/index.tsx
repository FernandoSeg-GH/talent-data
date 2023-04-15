import Screen from '@/components/layout/Screen'
import Questions from '@/components/test/Questions'
import { AnalyticsScreen } from '@/components/test/AnalyticsScreen'
import { ResultadosDropdown } from '@/components/test/ResultadosDropdown'
import { useState } from 'react'
import questionsJson from '@/lib/questionsJson.json'
import { Answer } from '@/lib/types'
import { Points } from '@/lib/types'
import Layout from '@/components/layout/Layout'


export default function Home() {
  const [dbQuestions, setDbQuestions] = useState(questionsJson);
  const [answers, setAnswers] = useState<Answer>({});
  const [pointsModal, setPointsModal] = useState("");

  const [lapapaAE, setLapapaAE] = useState(0);
  const [lapapaD, setLapapaD] = useState(0);
  const [lapapaRP, setLapapaRP] = useState(0);


  const handleAnswerChange = (questionId: number, value: string) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  // ############ CALCULATE PONTS ############
  const calculatePoints = () => {
    const points: Points = { AE: 0, D: 0, RP: 0 };
    for (const questionId in answers) {
      const question = dbQuestions.find((q) => q.id === parseInt(questionId));
      if (question) {
        points[question.category] += parseInt(answers[questionId]);
      }
    }
    console.log(points, "points:");
    return points;
  };

  // ############ HANDLE CALCULATE ############
  const handleCalculatePoints = () => {
    const points = calculatePoints();

    const message = `Your stress levels scores are:
    AE: ${points.AE}
    D: ${points.D}
    RP: ${points.RP}
    `;
    setPointsModal(message);
    // alert(message);
  };

  // ############ CALCULATE CLASSIFICATIONS ############
  const calculateClassifications = (AE: number, D: number, RP: number) => {
    const classifications = {
      AE: "",
      D: "",
      RP: "",
    };

    // Calculate the classification for AE
    if (AE >= 0 && AE <= 18) classifications.AE = "LOW";
    else if (AE >= 19 && AE <= 26) classifications.AE = "MEDIUM";
    else classifications.AE = "HIGH";

    // Calculate the classification for D
    if (D >= 0 && D <= 5) classifications.D = "LOW";
    else if (D >= 6 && D <= 9) classifications.D = "MEDIUM";
    else classifications.D = "HIGH";

    // Calculate the classification for RP
    if (RP >= 0 && RP <= 33) classifications.RP = "LOW";
    else if (RP >= 34 && RP <= 39) classifications.RP = "MEDIUM";
    else classifications.RP = "HIGH";

    return classifications;
  };

  // ############ LA PAPA ############
  const damelapapa = () => {
    const points = calculatePoints();
    const classifications = calculateClassifications(
      points.AE,
      points.D,
      points.RP
    );
    setLapapaAE(points.AE);
    setLapapaD(points.D);
    setLapapaRP(points.RP);
  };

  // ############ HANDLE CALCULATE SAFE ############
  const handleCalculatePointsSAFE = () => {
    if (Object.keys(answers).length !== dbQuestions.length) {
      alert("Debes responder todas las preguntas para calcular tu percentil.");
      return;
    }

    const points = calculatePoints();

    const message = `Your stress levels scores are:
    AE: ${points.AE}
    D: ${points.D}
    RP: ${points.RP}
    `;
    setPointsModal(message);
  };

  // ############ RANDOMIZE ANSWERS ############
  const randomizeAnswers = () => {
    setAnswers({});
    const randomizedAnswers: Answer = {};
    dbQuestions.forEach((question) => {
      const randomValue = Math.floor(Math.random() * 5) + 1;
      randomizedAnswers[question.id] = randomValue.toString();
    });
    console.log("Randomize answers:", randomizedAnswers);
    setAnswers(randomizedAnswers);
    damelapapa();
  };

  // ############ CHECK IF ALL QUESTIONS ANSWERED ############
  const answersArray = Object.keys(answers);
  const allQuestionsAnswered = answersArray.length === dbQuestions.length;
  
  return (
    <Layout>
      {/* */}
      <div className="w-full min-h-[80vh] pb-10">

          <div className="flex flex-col justify-center relative">
           
              <div>
                <Screen
                  title="Bienvenido"
                  body={`Hola! Bienvenido a la página de inicio`}
                />
              </div>

            <div className="flex flex-col justify-between items-start mt-10 relative">
              {/* <Panel />  */}
              <Screen
                title="Consigna:"
                body={
                  <>
                    <div className="text-gray-900 text-justify mb-4">
                      <p className="my-4">
                        A continuación encontrará una serie de enunciados acerca
                        de su <strong>relación</strong> con el <strong>trabajo</strong> y de sus <strong>sentimientos</strong> hacia este. Su objetivo es evaluar la presencia del síndrome del
                        estrés en el ámbito laboral.
                      </p>
                      <p className="my-4">
                        Los resultados de este cuestionario son estrictamente
                        confidenciales y en ningún caso accesibles a otras
                        personas.
                      </p>
                      <p className="my-4">
                        A cada una de las frases debe responder expresando la {""}
                        <strong>frecuencia</strong> con que tiene ese <strong>sentimiento</strong> de la siguiente
                        forma:
                      </p>
                      <li>Nunca</li>
                      <li>Algunas Veces al Año</li>
                      <li>Algunas Veces al Mes</li>
                      <li>Algunas Veces a la Semana</li>
                      <li>Diariamente</li>
                      <p className="my-4">Seleccione la opción que considere <span className="underline">más adecuada</span>.</p>
                    </div>
                    <div className="flex justify-between mt-10 -l-20">
                      <button
                        className="btn btn-ghost"
                        onClick={() => randomizeAnswers()}
                      >
                        Aleatorio
                      </button>
                      {Object.keys(answers).length > 0 && (
                        <>
                          <button
                            className="btn btn-primary"
                            onClick={handleCalculatePointsSAFE}
                          >
                            Ver resultados
                          </button>
                          <input
                            type="checkbox"
                            id="my-modal-4"
                            className="modal-toggle"
                          />
                          <label
                            htmlFor="my-modal-4"
                            className="modal cursor-pointer"
                          >
                            <div className="modal-box relative">
                              <h3 className="text-lg font-bold">
                                Estos son tus resultados
                              </h3>
                              <div className="py-4">
                                {pointsModal && <p>{pointsModal}</p>}
                              </div>
                            </div>
                          </label>
                        </>
                      )}
                    </div>
                  </>
                }
              />

              <Questions
                questions={dbQuestions}
                onAnswerChange={handleAnswerChange}
                onCalculatePoints={handleCalculatePoints}
                answers={answers}
                onRandomizeAnswers={randomizeAnswers}
              />
            </div>

            {allQuestionsAnswered && (
              <div className="w-full flex flex-col justify-center">
                <button
                  onClick={damelapapa}
                  className="btn btn-outline btn-primary w-[200px] my-10 mx-auto"
                >
                  Dame la papa
                </button>
                
                <AnalyticsScreen
                  lapapaAE={lapapaAE}
                  lapapaD={lapapaD}
                  lapapaRP={lapapaRP}
                />

                <ResultadosDropdown points={calculatePoints()} />
                
              </div>
            )}
          </div>
      </div>
    </Layout>
  )
}
