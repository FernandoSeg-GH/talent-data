import Screen from '@/components/layout/Screen'
import Questions from '@/components/test/Questions'
import { AnalyticsScreen } from '@/components/test/AnalyticsScreen'
import { ResultadosDropdown_ENG } from '@/components/test/ResultadosDropdown_ENG'
import { useState } from 'react'
import questionsJson_ENG from '@/lib/questionsJson_ENG.json'
import { Answer } from '@/lib/types'
import { Points } from '@/lib/types'
import Layout from '@/components/layout/Layout'
import Questions_ENG from '@/components/test/Questions_ENG'


export default function Home() {
  const [dbQuestions, setDbQuestions] = useState(questionsJson_ENG);
  const [answers, setAnswers] = useState<Answer>({});
  const [pointsModal, setPointsModal] = useState("");

  const [lapapaAE, setLapapaAE] = useState(0);
  const [lapapaD, setLapapaD] = useState(0);
  const [lapapaRP, setLapapaRP] = useState(0);

  const [classifications, setClassifications] = useState({ AE: "", D: "", RP: "" });
  
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
    const calculatedClassifications = calculateClassifications(points.AE, points.D, points.RP);
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
        <div className="flex flex-col justify-center relative">
          <div>
            <Screen
              title="Welcome!"
              body={`This is an app that will help you to know your stress levels in the workplace. The results of this questionnaire are, anonymous and in no case accessible to other people. The duration of this test is between 10 to 15 minutes.`}
            />
          </div>

          <div className="flex flex-col justify-between items-start mt-10 relative">
            {/* <Panel />  */}
            <Screen
              title="Instructions:"
              body={
                <>
                  <div className="text-gray-900 text-justify mb-4">
                    <p className="my-4">
                      Below you will find a series of statements about your{" "}
                      <strong>relationship</strong> with <strong>work</strong>{" "}
                      and your <strong>feelings</strong> towards it. Your
                      objective is to evaluate the presence of work-related
                      stress syndrome.
                    </p>
                    <p className="my-4">
                      The results of this questionnaire are strictly
                      confidential and in no case accessible to other people.
                    </p>
                    <p className="my-4">
                      You must respond to each of the sentences by expressing
                      the <strong>frequency</strong> with which you have that{" "}
                      <strong>feeling</strong> in the following way:
                    </p>
                    <li>Never</li>
                    <li>Occasionally throughout the year</li>
                    <li>Occasionally throughout the month</li>
                    <li>Occasionally throughout the week</li>
                    <li>Daily</li>
                    <p className="my-4">
                      Select the option that you consider the{" "}
                      <span className="underline">most appropriate</span>.
                    </p>
                  </div>
                  <div className="flex justify-between mt-10 -l-20">
                  </div>
                </>
              }
            />
            <Questions_ENG
              questions={dbQuestions}
              onAnswerChange={handleAnswerChange}
              onCalculatePoints={handleCalculatePoints}
              answers={answers}
              onRandomizeAnswers={randomizeAnswers}
            />
          </div>

          {allQuestionsAnswered && (
            <div className="w-full flex flex-col justify-center mt-6">
              <AnalyticsScreen
                lapapaAE={lapapaAE}
                lapapaD={lapapaD}
                lapapaRP={lapapaRP}
                classifications={classifications}
              />
              <ResultadosDropdown_ENG points={calculatePoints()} />
            </div>
          )}

          <div className='mt-6'>
            <Screen
              title="Disclaimer:"
              body={
                <>
                  <p className="my-4">
                    The results of this questionnaire are anonymous
                    and in no case accessible to other people.
                  </p>
                  <p className="my-4">
                    The information provided by the user is not used for any
                    purpose other than the calculation of the results of the
                    questionnaire.
                  </p>
                  <p className="my-4">
                    The results of this questionnaire are not a substitute for
                    medical advice or treatment.
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
