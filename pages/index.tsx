"use client";
import Screen from "@/components/layout/Screen";
import Questions from "@/components/test/Questions";
import { AnalyticsScreen } from "@/components/test/AnalyticsScreen";
import { ResultadosDropdown_ENG } from "@/components/test/ResultadosDropdown_ENG";
import { useEffect, useState } from "react";
import questionsJson_ENG from "@/lib/questionsJson_ENG.json";
import questionsJson_ESP from "@/lib/questionsJson.json";
import { Answer } from "@/lib/types";
import { Points } from "@/lib/types";
import Layout from "@/components/layout/Layout";
import Questions_ENG from "@/components/test/Questions_ENG";  

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState(2); // ENG or ESP
  const [dbQuestions, setDbQuestions] = useState(questionsJson_ESP);
  const [answers, setAnswers] = useState<Answer>({});
  const [pointsModal, setPointsModal] = useState("");

  const [lapapaAE, setLapapaAE] = useState(0);
  const [lapapaD, setLapapaD] = useState(0);
  const [lapapaRP, setLapapaRP] = useState(0);

  const [classifications, setClassifications] = useState({
    AE: "",
    D: "",
    RP: "",
  });

  useEffect(() => {
    if (selectedLanguage === 1) {
      setDbQuestions(questionsJson_ENG);
    } else if (selectedLanguage === 2) {
      setDbQuestions(questionsJson_ESP);
    } 
  }, [selectedLanguage]);

  const handleLanguageChange = () => {
    setSelectedLanguage(selectedLanguage === 1 ? 2 : 1);
  };

  const handleAnswerChange = (questionId: number, value: string) => {
    setAnswers({ ...answers, [questionId]: value });

    if (Object.keys(answers).length + 1 === dbQuestions.length) {
      // Calculate points
      const points = calculatePoints();
      const message = `Your stress levels scores are:
        AE: ${points.AE}
        D: ${points.D}
        RP: ${points.RP}
      `;
      setPointsModal(message);
    }
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
    const calculatedClassifications = calculateClassifications(
      points.AE,
      points.D,
      points.RP
    );
    setLapapaAE(points.AE);
    setLapapaD(points.D);
    setLapapaRP(points.RP);
    setClassifications(calculatedClassifications);
    console.log("Lapapa:", lapapaAE, lapapaD, lapapaRP);
    console.log("Classifications:", classifications);
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
    damelapapa();
  };

  return (
    <Layout>
      {/* */}
      <div className="w-full min-h-[80vh] pb-10">
        <button
          className="scale-200 mx-auto w-full"
          onClick={handleLanguageChange}
        >
          {selectedLanguage === 1 ? "Español 🇦🇷" : "English 🇬🇧"}
        </button>
        <div className="flex flex-col justify-center relative">
          <div>
            <Screen
              title={selectedLanguage === 1 ? "Welcome!" : "¡Bienvenido!"}
              body={
                <div style={{ whiteSpace: "pre-line" }}>
                  {selectedLanguage === 1 ? (
                    <>
                      This is an app that will help you to know your stress
                      levels in the workplace. The results of this questionnaire
                      are anonymous and in no case accessible to other people.
                      The duration of this test is between 10 to 15 minutes.
                      Upcoming: 1) Tracking your stress levels over time. 2)
                      Recommendations to reduce your stress levels. 3) Analytics
                      for companies and organizations to increase workspace
                      productivity.
                    </>
                  ) : (
                    <>
                      Esta es una aplicación que te ayudará a conocer tus
                      niveles de estrés en el trabajo. Los resultados de este
                      cuestionario son anónimos y en ningún caso accesibles para
                      otras personas. La duración de esta prueba es de 10 a 15
                      minutos. A continuación: 1) Seguimiento de tus niveles de
                      estrés a lo largo del tiempo. 2) Recomendaciones para
                      reducir tus niveles de estrés. 3) Análisis para empresas y
                      organizaciones para aumentar la productividad en el lugar
                      de trabajo.
                    </>
                  )}
                </div>
              }
            />
          </div>

          <div className="flex flex-col justify-between items-start mt-10 relative">
            {/* <Panel />  */}
            <Screen
              title={
                selectedLanguage === 1 ? "Instructions:" : "Instrucciones:"
              }
              body={
                <>
                  <div className="text-gray-900 text-justify mb-4">
                    <p className="my-4">
                      {selectedLanguage === 1
                        ? "Below you will find a series of statements about your relationship with work and your feelings towards it. Your objective is to evaluate the presence of work-related stress syndrome."
                        : "A continuación encontrarás una serie de afirmaciones sobre tu relación con el trabajo y tus sentimientos hacia él. Tu objetivo es evaluar la presencia del síndrome de estrés laboral."}
                    </p>
                    <p className="my-4">
                      {selectedLanguage === 1
                        ? "The results of this questionnaire are strictly confidential and in no case accessible to other people."
                        : "Los resultados de este cuestionario son estrictamente confidenciales y en ningún caso accesibles para otras personas."}
                    </p>
                    <p className="my-4">
                      {selectedLanguage === 1
                        ? "You must respond to each of the sentences by expressing the frequency with which you have that feeling in the following way:"
                        : "Debes responder a cada una de las frases expresando la frecuencia con la que tienes ese sentimiento de la siguiente manera:"}
                    </p>
                    <li>{selectedLanguage === 1 ? "Never" : "Nunca"}</li>
                    <li>
                      {selectedLanguage === 1
                        ? "Occasionally throughout the year"
                        : "Ocasionalmente a lo largo del año"}
                    </li>
                    <li>
                      {selectedLanguage === 1
                        ? "Occasionally throughout the month"
                        : "Ocasionalmente a lo largo del mes"}
                    </li>
                    <li>
                      {selectedLanguage === 1
                        ? "Occasionally throughout the week"
                        : "Ocasionalmente a lo largo de la semana"}
                    </li>
                    <li>{selectedLanguage === 1 ? "Daily" : "Diario"}</li>
                    <p className="my-4">
                      {selectedLanguage === 1
                        ? "Select the option that you consider the most appropriate."
                        : "Selecciona la opción que consideres más apropiada."}
                    </p>
                  </div>
                  <div className="flex justify-between mt-10 -l-20"></div>
                </>
              }
            />

            <Questions_ENG
              questions={dbQuestions}
              onAnswerChange={handleAnswerChange}
              onCalculatePoints={handleCalculatePoints}
              answers={answers}
              onRandomizeAnswers={randomizeAnswers}
              selectedLanguage={selectedLanguage}
            />
          </div>

          {allQuestionsAnswered && (
            <div className="w-full flex flex-col justify-center mt-6">
              <AnalyticsScreen
                lapapaAE={lapapaAE}
                lapapaD={lapapaD}
                lapapaRP={lapapaRP}
                classifications={classifications}
                selectedLanguage={selectedLanguage}
              />
              <ResultadosDropdown_ENG points={calculatePoints()} selectedLanguage={selectedLanguage}/>
            </div>
          )}

          <div className="mt-6">
            <Screen
              title={selectedLanguage === 1 ? "Disclaimer:" : "Aviso Legal:"}
              body={
                <>
                  <p className="my-4">
                    {selectedLanguage === 1
                      ? "The results of this questionnaire are anonymous and in no case accessible to other people."
                      : "Los resultados de este cuestionario son anónimos y en ningún caso accesibles para otras personas."}
                  </p>
                  <p className="my-4">
                    {selectedLanguage === 1
                      ? "The information provided by the user is not used for any purpose other than the calculation of the results of the questionnaire."
                      : "La información proporcionada por el usuario no se utiliza para ningún propósito que no sea el cálculo de los resultados del cuestionario."}
                  </p>
                  <p className="my-4">
                    {selectedLanguage === 1
                      ? "The results of this questionnaire are not a substitute for medical advice or treatment."
                      : "Los resultados de este cuestionario no son un sustituto de asesoramiento médico o tratamiento."}
                  </p>
                </>
              }
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
