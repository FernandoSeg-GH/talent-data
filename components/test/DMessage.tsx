import React from "react";
import Screen from "../layout/Screen";

type Props = {
  points: number;
};

const DMessage = ({ points }: Props) => {
  if (points >= 0 && points <= 18) {
    return (
      <Screen
        title="Distanciamento Inter-Personal: BAJO"
        body={
          <div className="text-justify">
        <p className="my-4">Esta sub-escala representa el grado en que cada uno reconoce actitudes de frialdad y distanciamiento en el trabajo. Describe posibles respuestas impersonales y la falta de sentimientos hacia los sujetos-objetos de atención en el ámbito laboral.</p>
        {/* <p>Su resultado es BAJO. Esto implica que no hay presencia de indicadores compatibles con la Distanciamento Inter-Personal. Se sugiere concientizar sobre cómo son sus relaciones en el ámbito laboral, de modo que potencien su capacidad de trabajo en equipo.</p> */}
        <p>Su resultado es BAJO. Esto implica que no hay presencia de indicadores compatibles con la Distanciamento Inter-Personal.</p>
      </div>
        }
      />
    );
  } else if (points >= 19 && points <= 26) {
    return (
      <Screen 
        title="Distanciamento Inter-Personal: MEDIO"
        body={
          <div className="text-justify">
        <p className="my-4">Esta sub-escala representa el grado en que cada uno reconoce actitudes de frialdad y distanciamiento en el trabajo. Describe posibles respuestas impersonales y la falta de sentimientos hacia los sujetos-objetos de atención en el ámbito laboral.</p>
<p>Su resultado es MEDIO. Esto implica que no se han observado indicadores significativos para la sub-escala Distanciamento Inter-Personal. Se sugiere estimular las relaciones con personas de su confianza en el ámbito laboral para aumentar la red de apoyo en pos de un trabajo colaborativo.</p>div

      </div>

        } 
      />
    );
  } else {
    return (
      <Screen 
        title="Distanciamento Inter-Personal: ALTO"
        body={
          <div className="text-justify">
        <p className="my-4">Esta sub-escala representa el grado en que cada uno reconoce actitudes de frialdad y distanciamiento en el trabajo. Describe posibles respuestas impersonales y la falta de sentimientos hacia los sujetos-objetos de atención en el ámbito laboral.</p>
        <p>Su resultado es ALTO. Esto refleja que podría estar padeciendo la necesidad de defenderse frente a situaciones en el ámbito laboral que le ocasionen tensión y frustración. Sería necesario que tome medidas de protección como fortalecer su trabajo en equipo para poder desenvolverse con mayor tranquilidad y confianza profesional.</p>
      </div>
        }
      />
    );
  }
};

export default DMessage;
