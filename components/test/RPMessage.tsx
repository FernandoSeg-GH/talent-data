import React from "react";
import Screen from "../layout/Screen";

type Props = {
  points: number;
};

const RPMessage = ({ points }: Props) => {
  if (points >= 0 && points <= 18) {
    return (
      <Screen 
        title="Productividad Laboral: BAJO"
        body={

          <div className="text-justify">
        <p className="my-4">La sub-escala Productividad Laboral evalúa los sentimientos de autoeficacia y Productividad Laboral en el trabajo. Describe los sentimientos de competencia y percepción de factores de éxito laboral.</p>
        <p>Su resultado es BAJO.  Esto abarca la posibilidad de que usted no esté percibiendo que se auto realiza en el ámbito laboral. En situaciones graves, hasta podría sentir que está fracasando profesionalmente. Identificar y reconocer dichos sentimientos, podría permitirnos tomar la iniciativa de buscar herramientas que nos potencien para el desarrollo de nuestra habilidades. Algunas podrían ser: solicitar orientación laboral, analizar  la congruencia entre nuestra vocación y el trabajo actual, planificar objetivos y conversar con referentes del área.</p>
      </div>
        }
      />
    );
  } else if (points >= 19 && points <= 26) {
    return (
      <Screen 
        title="Productividad Laboral: MEDIO"
        body={
          <div className="text-justify">
        <p className="my-4">La sub-escala Productividad Laboral evalúa los sentimientos de autoeficacia y Productividad Laboral en el trabajo. Describe los sentimientos de competencia y percepción de factores de éxito laboral.</p>
        <p>Su resultado es MEDIO. Esto indica que no se observan indicadores significativos para dicha sub-escala. Aún así, dado que el resultado es medio, es necesario que analice cómo se percibe respecto de su autorrealización laboral. Una clara proyección futura a nivel profesional con objetivos claros estará relacionada en cómo siente que se autorrealiza y potencia sus factores de éxito.</p>
      </div>
        }

      />
    );
  } else {
    return (
      <Screen 
        title="Productividad Laboral: ALTO"
        body={
          <div className="text-justify">
        <p className="my-4">La sub-escala Productividad Laboral evalúa los sentimientos de autoeficacia y Productividad Laboral en el trabajo. Describe los sentimientos de competencia y percepción de factores de éxito laboral.</p>
        <p>Su resultado es ALTO. Felicidades! Esto indica que no hay presencia de indicadores negativos en esta área. Reflexione sobre cómo se percibe a nivel profesional, en el tiempo actual y nivel futuro para tener clara una valoración sobre cómo evoluciona su autorrealización profesional.</p>
      </div>
        }
      />
    );
  }
};

export default RPMessage;
